import "dotenv/config";
import express from "express";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT || 3000);
const publicDirectory =
  process.env.NODE_ENV === "production"
    ? path.join(__dirname, "dist")
    : __dirname;
const dataDirectory = path.join(__dirname, ".data");
const tokenFile = path.join(dataDirectory, "linkedin-token.json");
const certificationsFile = path.join(__dirname, "certifications.json");
const pendingStates = new Set();

app.use(express.json({ limit: "100kb" }));
app.use(express.static(publicDirectory));

const getConfig = () => {
  const required = [
    "LINKEDIN_CLIENT_ID",
    "LINKEDIN_CLIENT_SECRET",
    "LINKEDIN_REDIRECT_URI",
  ];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(", ")}`);
  }
  return {
    clientId: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    redirectUri: process.env.LINKEDIN_REDIRECT_URI,
    certificationsUrl: process.env.LINKEDIN_CERTIFICATIONS_URL,
  };
};

const readJson = async (filePath, fallback) => {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch {
    return fallback;
  }
};

const saveJson = async (filePath, value) => {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
};

app.get("/auth/linkedin", (request, response) => {
  try {
    const config = getConfig();
    const state = crypto.randomBytes(32).toString("hex");
    pendingStates.add(state);
    const authorizationUrl = new URL(
      "https://www.linkedin.com/oauth/v2/authorization",
    );
    authorizationUrl.search = new URLSearchParams({
      response_type: "code",
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      state,
      scope: process.env.LINKEDIN_SCOPE || "openid profile email",
    });
    response.redirect(authorizationUrl.toString());
  } catch (error) {
    response.status(500).send(error.message);
  }
});

app.get("/auth/linkedin/callback", async (request, response) => {
  const { code, state, error } = request.query;
  if (error)
    return response.status(400).send(`LinkedIn authorization failed: ${error}`);
  if (!code || !state || !pendingStates.delete(state)) {
    return response.status(401).send("Invalid LinkedIn authorization state.");
  }

  try {
    const config = getConfig();
    const tokenResponse = await fetch(
      "https://www.linkedin.com/oauth/v2/accessToken",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          client_id: config.clientId,
          client_secret: config.clientSecret,
          redirect_uri: config.redirectUri,
        }),
      },
    );
    if (!tokenResponse.ok)
      throw new Error(
        `LinkedIn token exchange failed (${tokenResponse.status}).`,
      );

    const token = await tokenResponse.json();
    await saveJson(tokenFile, {
      access_token: token.access_token,
      refresh_token: token.refresh_token,
      expires_at: Date.now() + token.expires_in * 1000,
    });
    response.redirect("/?linkedin=connected");
  } catch (requestError) {
    console.error(requestError);
    response.status(502).send("Could not connect to LinkedIn.");
  }
});

app.get("/api/certifications", async (request, response) => {
  const certifications = await readJson(certificationsFile, []);
  response.json(certifications);
});

app.post("/api/certifications/sync", async (request, response) => {
  if (
    !process.env.SYNC_SECRET ||
    request.get("x-sync-secret") !== process.env.SYNC_SECRET
  ) {
    return response.status(401).json({ error: "Unauthorized." });
  }

  try {
    const config = getConfig();
    const token = await readJson(tokenFile, null);
    if (!token?.access_token)
      return response.status(409).json({ error: "Connect LinkedIn first." });
    if (!config.certificationsUrl) {
      return response.status(501).json({
        error:
          "LinkedIn does not expose a public personal certifications endpoint for this app.",
      });
    }

    const certificationsResponse = await fetch(config.certificationsUrl, {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        Accept: "application/json",
      },
    });
    if (!certificationsResponse.ok) {
      return response.status(502).json({
        error: `Certification provider failed (${certificationsResponse.status}).`,
      });
    }

    const certifications = await certificationsResponse.json();
    await saveJson(certificationsFile, certifications);
    response.json({ synced: true, count: certifications.length });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Certification sync failed." });
  }
});

app.listen(port, () => {
  console.log(`Portfolio server running at http://localhost:${port}`);
});
