const emailButton = document.querySelector(".email-button");
const toast = document.querySelector(".toast");

emailButton?.addEventListener("click", async () => {
  const email = emailButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    toast.classList.add("visible");
    window.setTimeout(() => toast.classList.remove("visible"), 2200);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealItems.forEach((item) => {
  item.style.animationPlayState = "paused";
  observer.observe(item);
});
