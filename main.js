const emailButton = document.querySelector(".email-button");
const toast = document.querySelector(".toast");
const experienceCounter = document.querySelector(".experience-counter");
const languageButtons = document.querySelectorAll("[data-language]");
const projectList = document.querySelector("[data-github-user]");
let activeLanguage = "en";
let loadedRepositories = [];

const translations = {
  pt: {
    pageTitle: "Thyago Oliveira Ferreira — Portfólio",
    metaDescription:
      "Portfólio de Thyago Oliveira Ferreira — projetos, experiência e formas de contato.",
    languageLabel: "Escolher idioma",
    navLabel: "Navegação principal",
    navProjects: "Projetos",
    navExperience: "Experiência",
    navEducation: "Formação",
    navAbout: "Sobre",
    navContact: "Contato",
    availability:
      "disponível para início imediato · presencial, híbrido ou remoto",
    heroEyebrow: "PORTFÓLIO / 2026",
    heroTitle: "Software que gera <em>impacto.</em>",
    heroIntro:
      "Desenvolvedor Java e Python, com foco em sistemas robustos, automação e construção de soluções preparadas para a nuvem Azure.",
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
    projectsLoading: "Carregando projetos...",
    projectsError: "Não foi possível carregar os projetos agora.",
    projectsEmpty: "Nenhum projeto público encontrado.",
    projectsViewAll: "ver todos no GitHub",
    projectsFork: "fork",
    projectsStars: "estrelas",
    projectOneTitle: "API REST — Sistema Financeiro",
    projectOneType: "Java · Spring Boot · JPA · PostgreSQL",
    projectOneDescription:
      "API com autenticação JWT, contas, lançamentos, relatórios e cobertura de testes acima de 80%.",
    projectTwoTitle: "Dashboard de Gestão",
    projectTwoType: "React · TypeScript · Chart.js · REST API",
    projectTwoDescription:
      "Dashboard responsivo com gráficos interativos, filtros dinâmicos, integração REST e deploy via GitHub Actions.",
    projectThreeTitle: "Automação de processos",
    projectThreeType: "Python · scripts internos · eficiência operacional",
    projectThreeDescription:
      "Scripts Python para reduzir tarefas manuais e liberar cerca de 6 horas semanais da equipe.",
    aboutEyebrow: "03 — sobre mim",
    aboutTitle: "Menos ruído.<br /><em>Mais sentido.</em>",
    aboutLead: "Engenharia de software com visão de negócio.",
    aboutBody:
      "Sou estudante de dupla graduação em Engenharia de Software e Ciências Contábeis na UFU, combinando desenvolvimento de software com uma visão prática de conformidade financeira, retorno sobre investimento e eficiência operacional. Como estagiário de Engenharia de Software, atuo no ciclo completo de desenvolvimento, mantendo e otimizando sistemas críticos de negócio com foco em backends robustos, interfaces dinâmicas, código limpo e confiabilidade. <br /><br /><strong>Stack:</strong> Java com Spring Boot, Python, SQL, PL/SQL, JavaScript, TypeScript e React. Também tenho experiência com o Kenan Billing System, fluxos de dados complexos e regras de faturamento. <br /><br /><strong>Objetivo:</strong> aplicar minhas habilidades em Java e arquitetura de nuvem para construir soluções seguras e eficientes. Sou certificado AZ-900 e estou avançando rumo às certificações AZ-104 e AZ-305.",
    skillJava: "Java",
    skillPython: "Python",
    skillAzure: "Arquitetura Azure",
    skillBackend: "Backend e APIs",
    skillDatabases: "SQL / PL/SQL",
    skillGit: "Git e GitHub",
    skillBusiness: "Sistemas de negócio",
    skillFrameworks: "Spring Security · JPA",
    skillCloud: "REST APIs · Microsserviços",
    skillDatabasesExtra: "Oracle · PostgreSQL · MySQL",
    certificationsPath: "AZ-900 (certificado) · AZ-104 · AZ-305",
    experienceEyebrow: "04 — experiência",
    experienceTitle: "O que venho<br /><em>construindo.</em>",
    kyrosTitle: "Estagiário de Engenharia de Software",
    counterLabel: "tempo na Kyros:",
    kyrosDescription:
      "Atuação em projetos de alta complexidade com Java, Spring Boot, JavaScript e React, participando do ciclo completo de desenvolvimento em ambiente ágil. Otimização de queries e procedures PL/SQL no Oracle, reduzindo em aproximadamente 60% o tempo de consultas críticas. Suporte e evolução do Kenan Billing System e criação de scripts Python que economizam aproximadamente 6 horas semanais de trabalho repetitivo, aplicando SOLID, Clean Code e práticas de engenharia de software enquanto avanço meus conhecimentos em Microsoft Azure.",
    previousExperienceTitle: "Experiência anterior",
    previousCompany: "Nome da empresa · Cidade, BR",
    previousExperienceDescription:
      "Conte brevemente o que você fez, quais problemas resolveu e como colaborou com o time ou com os resultados do negócio.",
    previousTagOne: "projeto",
    previousTagTwo: "colaboração",
    educationEyebrow: "05 — formação",
    educationTitle: "Aprender é<br /><em>parte do trabalho.</em>",
    academicLabel: "formação acadêmica",
    ufuDate: "dez 2024 — jul 2028",
    ufuUniversity: "Universidade Federal de Uberlândia",
    ufuDegree: "Bacharelado · Contabilidade",
    unicesumarDate: "jan 2025 — dez 2029",
    unicesumarUniversity: "UniCesumar",
    unicesumarDegree: "Bacharelado em Engenharia · Engenharia de Software",
    certificatesLabel: "cursos & certificados",
    az900Date: "mar 2026",
    az900Title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    microsoftIssuer: "Microsoft · certificação",
    promptingDate: "abr 2026",
    promptingTitle: "Responsible Prompting: AI in Business",
    promptingIssuer: "Santander Open Academy / Microsoft",
    reactDate: "jan 2026",
    reactTitle: "ReactJS Professional",
    springDate: "jul 2025",
    springTitle: "Java Spring Expert",
    javaDate: "abr 2024",
    javaTitle: "Java e POO Expert",
    sqlDate: "jan 2024",
    sqlTitle: "Banco de Dados e SQL Expert",
    gitDate: "jul 2024",
    gitTitle: "Git e GitHub Expert",
    algorithmsDate: "jan 2025",
    algorithmsTitle: "Estruturas de Dados e Algoritmos Expert",
    devSuperiorIssuer: "DevSuperior",
    languagesLabel: "idiomas",
    portugueseLevel: "nativo",
    portugueseTitle: "Português",
    portugueseDescription: "Idioma materno",
    englishTitle: "Inglês",
    englishDescription: "Intermediário-avançado · EF English Live",
    phoneLabel: "telefone",
    contactEyebrow: "06 — contato",
    contactTitle: "Tem uma ideia?<br /><em>Vamos tirar do papel.</em>",
    copyLabel: "copiar",
    findMe: "ou me encontre no",
    footerMade: "feito com curiosidade e café",
    backToTop: "voltar ao topo ↑",
    emailCopied: "E-mail copiado.",
  },
  en: {
    pageTitle: "Thyago Oliveira Ferreira — Portfolio",
    metaDescription:
      "Thyago Oliveira Ferreira's portfolio — projects, experience, and contact details.",
    languageLabel: "Choose language",
    navLabel: "Main navigation",
    navProjects: "Projects",
    navExperience: "Experience",
    navEducation: "Education",
    navAbout: "About",
    navContact: "Contact",
    availability: "available immediately · on-site, hybrid, or remote",
    heroEyebrow: "PORTFOLIO / 2026",
    heroTitle: "Software that makes an <em>impact.</em>",
    heroIntro:
      "Java and Python developer focused on robust systems, automation, and cloud-ready solutions built on Microsoft Azure.",
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
    projectsLoading: "Loading projects...",
    projectsError: "Projects could not be loaded right now.",
    projectsEmpty: "No public projects found.",
    projectsViewAll: "view all on GitHub",
    projectsFork: "fork",
    projectsStars: "stars",
    projectOneTitle: "REST API — Finance System",
    projectOneType: "Java · Spring Boot · JPA · PostgreSQL",
    projectOneDescription:
      "API with JWT authentication, accounts, transactions, reports, and over 80% test coverage.",
    projectTwoTitle: "Management Dashboard",
    projectTwoType: "React · TypeScript · Chart.js · REST API",
    projectTwoDescription:
      "Responsive dashboard with interactive charts, dynamic filters, REST integration, and GitHub Actions deployment.",
    projectThreeTitle: "Process Automation",
    projectThreeType: "Python · internal scripts · operational efficiency",
    projectThreeDescription:
      "Python scripts that reduce manual tasks and save the team approximately 6 hours per week.",
    aboutEyebrow: "03 — about me",
    aboutTitle: "Less noise.<br /><em>More meaning.</em>",
    aboutLead: "Software engineering with business insight.",
    aboutBody:
      "I am pursuing dual degrees in Software Engineering and Accounting at UFU, combining software development with a practical understanding of financial compliance, return on investment, and operational efficiency. As a Software Engineering Intern, I work across the full development lifecycle, maintaining and optimizing mission-critical business systems with a focus on robust backends, dynamic interfaces, clean code, and reliability. <br /><br /><strong>Tech stack:</strong> Java with Spring Boot, Python, SQL, PL/SQL, JavaScript, TypeScript, and React. I also have hands-on experience with the Kenan Billing System, complex data flows, and billing logic. <br /><br /><strong>Goal:</strong> leverage my Java and cloud architecture skills to build secure and efficient solutions. I am Microsoft Azure Fundamentals certified (AZ-900) and progressing toward AZ-104 and AZ-305.",
    skillJava: "Java",
    skillPython: "Python",
    skillAzure: "Azure Architecture",
    skillBackend: "Backend & APIs",
    skillDatabases: "SQL / PL/SQL",
    skillGit: "Git & GitHub",
    skillBusiness: "Business Systems",
    skillFrameworks: "Spring Security · JPA",
    skillCloud: "REST APIs · Microservices",
    skillDatabasesExtra: "Oracle · PostgreSQL · MySQL",
    certificationsPath: "AZ-900 (certified) · AZ-104 · AZ-305",
    experienceEyebrow: "04 — experience",
    experienceTitle: "What I keep<br /><em>building.</em>",
    kyrosTitle: "Software Engineering Intern",
    counterLabel: "time at Kyros:",
    kyrosDescription:
      "Working on high-complexity projects with Java, Spring Boot, JavaScript, and React across the full development lifecycle in an agile environment. Optimizing PL/SQL queries and procedures in Oracle, reducing critical query execution time by approximately 60%. Supporting and evolving the Kenan Billing System and creating Python scripts that save approximately 6 hours of repetitive work per week, applying SOLID, Clean Code, and software engineering practices while building knowledge in Microsoft Azure.",
    previousExperienceTitle: "Previous experience",
    previousCompany: "Company name · City, BR",
    previousExperienceDescription:
      "Briefly describe what you did, which problems you solved, and how you contributed to the team or business results.",
    previousTagOne: "project",
    previousTagTwo: "collaboration",
    educationEyebrow: "05 — education",
    educationTitle: "Learning is<br /><em>part of the work.</em>",
    academicLabel: "academic background",
    ufuDate: "Dec 2024 — Jul 2028",
    ufuUniversity: "Federal University of Uberlandia",
    ufuDegree: "Bachelor's degree · Accounting",
    unicesumarDate: "Jan 2025 — Dec 2029",
    unicesumarUniversity: "UniCesumar",
    unicesumarDegree: "Bachelor's degree · Computer Software Engineering",
    certificatesLabel: "courses & certificates",
    az900Date: "Mar 2026",
    az900Title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    microsoftIssuer: "Microsoft · certification",
    promptingDate: "Apr 2026",
    promptingTitle: "Responsible Prompting: AI in Business",
    promptingIssuer: "Santander Open Academy / Microsoft",
    reactDate: "Jan 2026",
    reactTitle: "ReactJS Professional",
    springDate: "Jul 2025",
    springTitle: "Java Spring Expert",
    javaDate: "Apr 2024",
    javaTitle: "Java and OOP Expert",
    sqlDate: "Jan 2024",
    sqlTitle: "Database and SQL Expert",
    gitDate: "Jul 2024",
    gitTitle: "Git and GitHub Expert",
    algorithmsDate: "Jan 2025",
    algorithmsTitle: "Data Structures and Algorithms Expert",
    devSuperiorIssuer: "DevSuperior",
    languagesLabel: "languages",
    portugueseLevel: "native",
    portugueseTitle: "Portuguese",
    portugueseDescription: "Native language",
    englishTitle: "English",
    englishDescription: "Upper-intermediate · EF English Live",
    phoneLabel: "phone",
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

  activeLanguage = language;
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

const renderProjectsMessage = (messageKey) => {
  if (!projectList) return;
  projectList.replaceChildren();
  const message = document.createElement("p");
  message.className = "projects-status";
  message.textContent = translations[activeLanguage][messageKey];
  projectList.append(message);
};

const renderProjects = (repositories) => {
  projectList.replaceChildren();

  repositories.forEach((repository, index) => {
    const project = document.createElement("a");
    project.className = `project${index === 0 ? " project-featured" : ""} reveal`;
    project.href = repository.html_url;
    project.target = "_blank";
    project.rel = "noreferrer";

    const image = document.createElement("div");
    image.className = "project-image";
    image.style.backgroundImage = `url("https://opengraph.githubassets.com/1/${repository.full_name}")`;
    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");
    image.append(number);

    const info = document.createElement("div");
    info.className = "project-info";
    const details = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = repository.name;
    const type = document.createElement("p");
    type.textContent =
      [repository.language, repository.topics?.join(" · ")]
        .filter(Boolean)
        .join(" · ") || "GitHub repository";
    const description = document.createElement("p");
    description.className = "project-description";
    description.textContent = repository.description || "";
    details.append(title, type, description);

    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.textContent = "↗";
    info.append(details, arrow);
    project.append(image, info);
    projectList.append(project);
    observeRevealItem(project);
  });

  const profileLink = document.createElement("a");
  profileLink.className = "projects-profile-link";
  profileLink.href = `https://github.com/${projectList.dataset.githubUser}?tab=repositories`;
  profileLink.target = "_blank";
  profileLink.rel = "noreferrer";
  profileLink.textContent = translations[activeLanguage].projectsViewAll + " ↗";
  projectList.append(profileLink);
};

const loadProjects = async () => {
  if (!projectList) return;

  try {
    const response = await fetch(
      `https://api.github.com/users/${projectList.dataset.githubUser}/repos?sort=updated&direction=desc&per_page=100`,
      { headers: { Accept: "application/vnd.github+json" } },
    );
    if (!response.ok)
      throw new Error(`GitHub responded with ${response.status}`);

    const repositories = (await response.json()).filter(
      (repository) => !repository.fork,
    );
    loadedRepositories = repositories;
    if (repositories.length === 0) {
      renderProjectsMessage("projectsEmpty");
      return;
    }
    renderProjects(repositories);
  } catch (error) {
    console.error("Could not load GitHub projects", error);
    renderProjectsMessage("projectsError");
  }
};

loadProjects();

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

  const durationLabel = activeLanguage === "en" ? "days" : "dias";
  experienceCounter.querySelector("strong").textContent =
    `${days} ${durationLabel}, ${formatUnit(hours)}h ${formatUnit(minutes)}min ${formatUnit(seconds)}s`;
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

const observeRevealItem = (item) => {
  item.style.animationPlayState = "paused";
  observer.observe(item);
};

revealItems.forEach((item) => {
  observeRevealItem(item);
});
