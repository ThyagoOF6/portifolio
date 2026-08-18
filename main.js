const emailButton = document.querySelector(".email-button");
const toast = document.querySelector(".toast");
const experienceCounter = document.querySelector(".experience-counter");
const languageButtons = document.querySelectorAll("[data-language]");

const translations = {
  pt: {
    pageTitle: "Thiago F. — Portfólio",
    metaDescription:
      "Portfólio de Thiago F. — projetos, experiência e formas de contato.",
    languageLabel: "Escolher idioma",
    navLabel: "Navegação principal",
    navProjects: "Projetos",
    navExperience: "Experiência",
    navEducation: "Formação",
    navAbout: "Sobre",
    navContact: "Contato",
    availability: "disponível para oportunidades",
    heroEyebrow: "PORTFÓLIO / 2026",
    heroTitle: "Ideias que ganham <em>forma.</em>",
    heroIntro:
      "Sou Thiago, desenvolvedor apaixonado por transformar problemas reais em experiências digitais claras, úteis e bem construídas.",
    heroButton: "ver trajetória",
    heroContact: "vamos conversar",
    profileLabel: "01 — perfil",
    visualCaption:
      "código com intenção<br /><span>e curiosidade pelo caminho</span>",
    areasLabel: "Áreas de atuação",
    tickerWeb: "DESENVOLVIMENTO WEB",
    tickerProduct: "PRODUTO DIGITAL",
    tickerLearning: "APRENDIZADO CONTÍNUO",
    projectsEyebrow: "02 — selecionados",
    projectsTitle: "Projetos que<br /><em>contam algo.</em>",
    projectOneTitle: "Projeto em destaque",
    projectOneType: "Produto digital / desenvolvimento",
    projectTwoTitle: "Experimento web",
    projectTwoType: "Interface / protótipo",
    projectThreeTitle: "Solução sob medida",
    projectThreeType: "Automação / experiência",
    aboutEyebrow: "03 — sobre mim",
    aboutTitle: "Menos ruído.<br /><em>Mais sentido.</em>",
    aboutLead:
      "A tecnologia fica melhor quando torna as coisas mais simples para alguém.",
    aboutBody:
      "Estou construindo minha trajetória em desenvolvimento web, unindo atenção aos detalhes, pensamento de produto e vontade de aprender fazendo. Este espaço reúne o que já criei e o que ainda estou descobrindo.",
    experienceEyebrow: "04 — experiência",
    experienceTitle: "O que venho<br /><em>construindo.</em>",
    kyrosTitle: "Estagiário de Engenharia de Software",
    counterLabel: "tempo na Kyros:",
    kyrosDescription:
      "Atuação em projetos de alta complexidade, com desenvolvimento full-stack e otimização de sistemas usando Java, JavaScript e React. Desenvolvimento de queries e procedures em SQL e PL/SQL, suporte ao sistema de faturamento Kenan e automação de processos internos com Python, com aprendizado contínuo em práticas de engenharia de software e Microsoft Azure.",
    previousExperienceTitle: "Experiência anterior",
    previousCompany: "Nome da empresa · Cidade, BR",
    previousExperienceDescription:
      "Conte brevemente o que você fez, quais problemas resolveu e como colaborou com o time ou com os resultados do negócio.",
    previousTagOne: "projeto",
    previousTagTwo: "colaboração",
    educationEyebrow: "05 — formação",
    educationTitle: "Aprender é<br /><em>parte do trabalho.</em>",
    academicLabel: "formação acadêmica",
    courseName: "Nome do curso",
    courseInstitution: "Instituição de ensino · Graduação / técnico",
    certificatesLabel: "cursos & certificados",
    certificateOne: "Nome do curso ou certificado",
    certificateTwo: "Outro curso relevante",
    platformInstitution: "Plataforma / instituição",
    viewCertificate: "ver certificado ↗",
    contactEyebrow: "06 — contato",
    contactTitle: "Tem uma ideia?<br /><em>Vamos tirar do papel.</em>",
    copyLabel: "copiar",
    findMe: "ou me encontre no",
    footerMade: "feito com curiosidade e café",
    backToTop: "voltar ao topo ↑",
    emailCopied: "E-mail copiado.",
  },
  en: {
    pageTitle: "Thiago F. — Portfolio",
    metaDescription:
      "Thiago F.'s portfolio — projects, experience, and contact details.",
    languageLabel: "Choose language",
    navLabel: "Main navigation",
    navProjects: "Projects",
    navExperience: "Experience",
    navEducation: "Education",
    navAbout: "About",
    navContact: "Contact",
    availability: "available for opportunities",
    heroEyebrow: "PORTFOLIO / 2026",
    heroTitle: "Ideas that take <em>shape.</em>",
    heroIntro:
      "I'm Thiago, a developer passionate about turning real problems into clear, useful, and well-crafted digital experiences.",
    heroButton: "view my journey",
    heroContact: "let's talk",
    profileLabel: "01 — profile",
    visualCaption:
      "code with intention<br /><span>and curiosity along the way</span>",
    areasLabel: "Areas of focus",
    tickerWeb: "WEB DEVELOPMENT",
    tickerProduct: "DIGITAL PRODUCT",
    tickerLearning: "CONTINUOUS LEARNING",
    projectsEyebrow: "02 — selected work",
    projectsTitle: "Projects that<br /><em>tell a story.</em>",
    projectOneTitle: "Featured project",
    projectOneType: "Digital product / development",
    projectTwoTitle: "Web experiment",
    projectTwoType: "Interface / prototype",
    projectThreeTitle: "Tailored solution",
    projectThreeType: "Automation / experience",
    aboutEyebrow: "03 — about me",
    aboutTitle: "Less noise.<br /><em>More meaning.</em>",
    aboutLead:
      "Technology gets better when it makes things simpler for someone.",
    aboutBody:
      "I'm building my path in web development by combining attention to detail, product thinking, and a willingness to learn by doing. This space brings together what I've created and what I'm still discovering.",
    experienceEyebrow: "04 — experience",
    experienceTitle: "What I keep<br /><em>building.</em>",
    kyrosTitle: "Software Engineering Intern",
    counterLabel: "time at Kyros:",
    kyrosDescription:
      "Working on high-complexity projects through full-stack development and system optimization with Java, JavaScript, and React. Developing SQL and PL/SQL queries and procedures, supporting the Kenan Billing System, and automating internal processes with Python while continuously applying software engineering practices and building knowledge in Microsoft Azure.",
    previousExperienceTitle: "Previous experience",
    previousCompany: "Company name · City, BR",
    previousExperienceDescription:
      "Briefly describe what you did, which problems you solved, and how you contributed to the team or business results.",
    previousTagOne: "project",
    previousTagTwo: "collaboration",
    educationEyebrow: "05 — education",
    educationTitle: "Learning is<br /><em>part of the work.</em>",
    academicLabel: "academic background",
    courseName: "Course name",
    courseInstitution: "Educational institution · Degree / technical course",
    certificatesLabel: "courses & certificates",
    certificateOne: "Course or certificate name",
    certificateTwo: "Another relevant course",
    platformInstitution: "Platform / institution",
    viewCertificate: "view certificate ↗",
    contactEyebrow: "06 — contact",
    contactTitle: "Have an idea?<br /><em>Let's bring it to life.</em>",
    copyLabel: "copy",
    findMe: "or find me on",
    footerMade: "made with curiosity and coffee",
    backToTop: "back to top ↑",
    emailCopied: "Email copied.",
  },
};

const setLanguage = (language) => {
  const selectedTranslations = translations[language];
  if (!selectedTranslations) return;

  document.documentElement.lang = language === "en" ? "en" : "pt-BR";
  document.title = selectedTranslations.pageTitle;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", selectedTranslations.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = selectedTranslations[element.dataset.i18n];
    if (translation) element.innerHTML = translation;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const translation = selectedTranslations[element.dataset.i18nAria];
    if (translation) element.setAttribute("aria-label", translation);
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.language === language);
    button.setAttribute("aria-pressed", button.dataset.language === language);
  });

  window.localStorage.setItem("portfolio-language", language);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const savedLanguage = window.localStorage.getItem("portfolio-language");
setLanguage(savedLanguage === "pt" ? "pt" : "en");

const updateExperienceCounter = () => {
  if (!experienceCounter) return;

  const startDate = new Date(experienceCounter.dataset.start);
  const elapsedMilliseconds = Math.max(0, Date.now() - startDate.getTime());
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  const days = Math.floor(elapsedSeconds / 86400);
  const hours = Math.floor((elapsedSeconds % 86400) / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;
  const formatUnit = (unit) => String(unit).padStart(2, "0");

  experienceCounter.querySelector("strong").textContent =
    `${days} dias, ${formatUnit(hours)}h ${formatUnit(minutes)}min ${formatUnit(seconds)}s`;
};

updateExperienceCounter();
window.setInterval(updateExperienceCounter, 1000);

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
