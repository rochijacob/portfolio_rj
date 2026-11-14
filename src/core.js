/* ============================================================
   CONTENT — edit copy here. Everything on the page comes from this object.
   `en` and `es` mirror each other. Books and writing are shared arrays.
   ============================================================ */
const content = {
  links: {
    email: "rochijacob@gmail.com",
    linkedin: "https://www.linkedin.com/in/rocio-jacob-7b72a4159/",
    github: "https://github.com/rochijacob",
    games: "https://github.com/rochijacob/python_games"
  },

  // REPLACE: paste real books (Goodreads). conviction: "high" | "medium" | "low" (used by the Ledger site)
  books: [
    { title: "[BOOK TITLE 1]", author: "[AUTHOR]", note: { en: "[one line on why it stayed with me]", es: "[una línea sobre por qué me quedó]" }, url: "", conviction: "high" },   // REPLACE
    { title: "[BOOK TITLE 2]", author: "[AUTHOR]", note: { en: "[one line]", es: "[una línea]" }, url: "", conviction: "high" },   // REPLACE
    { title: "[BOOK TITLE 3]", author: "[AUTHOR]", note: { en: "[one line]", es: "[una línea]" }, url: "", conviction: "medium" }, // REPLACE
    { title: "[BOOK TITLE 4]", author: "[AUTHOR]", note: { en: "[one line]", es: "[una línea]" }, url: "", conviction: "medium" }, // REPLACE
    { title: "[BOOK TITLE 5]", author: "[AUTHOR]", note: { en: "[one line]", es: "[una línea]" }, url: "", conviction: "high" },   // REPLACE
    { title: "[BOOK TITLE 6]", author: "[AUTHOR]", note: { en: "[one line]", es: "[una línea]" }, url: "", conviction: "low" }     // REPLACE
  ],

  // REPLACE: paste real articles. date is "YYYY-MM".
  writing: [
    { title: { en: "[ARTICLE TITLE 1]", es: "[TÍTULO DEL ARTÍCULO 1]" }, date: "2026-10", url: "" }, // REPLACE
    { title: { en: "[ARTICLE TITLE 2]", es: "[TÍTULO DEL ARTÍCULO 2]" }, date: "2026-07", url: "" }, // REPLACE
    { title: { en: "[ARTICLE TITLE 3]", es: "[TÍTULO DEL ARTÍCULO 3]" }, date: "2026-03", url: "" }  // REPLACE
  ],

  en: {
    meta: { title: "Rocio Jacob · Product Engineer", desc: "I build products, automation and analytics so organizations decide better and do less manual work. Buenos Aires, remote worldwide." },
    name: "Rocio Jacob", role: "Product Engineer",
    oneLiner: "I'm Rocio. I build products, automation and analytics so organizations decide better and do less manual work.",
    pitch: "I build products, automation and analytics so organizations decide better and do less manual work.",
    sub: "Project Manager & Business Partner in BI, Automation and AI. Ex-Accenture (corporate finance). Available for freelance projects.",
    location: "Buenos Aires, Argentina", remote: "Buenos Aires · Remote worldwide",
    status: "Open to freelance · Buenos Aires",
    cta: "Work with me", ctaAlt: "Let's talk", mailSubject: "Project for Rocio",
    skip: "Skip to content", langLabel: "Language", themeLabel: "Toggle light / dark", portraitAlt: "Portrait of Rocio Jacob",
    nav: { home: "Home", about: "About", work: "Work", experience: "Experience", skills: "Stack", books: "Books", writing: "Writing", contact: "Contact", play: "Playground", services: "Services" },
    h: { services: "What I offer", about: "About", work: "Selected work", experience: "Experience", skills: "Skills & stack", books: "Books", writing: "Writing", contact: "Work with me", finance: "The finance side", lab: "Lab", numbers: "In numbers" },
    about: [
      "I started coding in 2021, teaching myself HTML and JavaScript from books and the open web, then React and React Native with Expo. I have shipped five or more mobile apps, led a six-person team as a Project Manager, and moved into automation, AI agents and system design.",
      "I studied Business & Digital Business at Universidad de San Andrés (top 10%, exchange at IE University) and worked in FP&A consulting at Accenture, so I speak both product and finance. Today I am doing a Master in Finance at UdeSA (class of 2028) and teaching Corporate Finance.",
      "I care about products that are beautiful, fast and that make someone's day easier. Everything I ship has to be aesthetic."
    ],
    stats: [
      { n: "500K+", l: "downloads of the app for Argentina's largest gym chain" },
      { n: "40K", l: "daily active users on that app" },
      { n: "15K+", l: "users on an event-ticketing SaaS, 5+ clients on three continents" },
      { n: "300+", l: "daily payments through a custom checkout" },
      { n: "6", l: "people led as Project Leader" },
      { n: "5+", l: "apps built with React Native + Expo" },
      { n: "10+", l: "clients served with Webflow builds" },
      { n: "~2,000", l: "students expected on the thesis-tracking API" }
    ],
    cases: [
      { code: "WK.01", name: "Gym chain app", org: "Muvinai", role: "Mobile development", when: "2021 – 2025", impact: "500K+ downloads · 40K DAU",
        body: "Built and maintained the mobile app for Argentina's largest gym chain. The work was speed, UX and polish at scale: an app that tens of thousands of people open every day has no room for rough edges.", tags: ["React Native", "Expo"] },
      { code: "WK.02", name: "Event SaaS platform", org: "Muvinai", role: "Project Leader", when: "Nov 2023 – Apr 2025", impact: "15K+ users · 5+ clients",
        body: "Led end-to-end development of a platform for ticketing, access control and client relationships, used by music festivals and crypto event organisers across America, Europe and Asia. I managed a six-person cross-functional team, handled 5+ client accounts directly, prioritised features from client needs and presented the roadmap to internal and external stakeholders.", tags: ["Project leadership", "Jira", "Roadmap", "React"] },
      { code: "WK.03", name: "High-volume checkout", org: "Muvinai", role: "Senior Developer", when: "2021 – 2023", impact: "300+ payments / day",
        body: "Designed and launched a checkout with custom billing that processes 300+ payments a day. It was one of the first React integrations of Mercado Pago.", tags: ["React", "Mercado Pago", "Billing"] },
      { code: "WK.04", name: "Thesis-tracking API", org: "Universidad de San Andrés", role: "Project Manager & Business Partner", when: "Apr 2026 – present", impact: "~2,000 students expected",
        body: "I own the backend of an API that tracks student final projects, expected to serve around 2,000 students. Alongside it I drive automation, BI and AI projects for university operations.",
        steps: [
          { k: "Context", v: "A university coordinated final-project submissions and defence panels by hand. [CONFIRM how it worked before]" },
          { k: "Problem", v: "A lot of time spent on coordination, risk of errors and little visibility on the status of each project." },
          { k: "Decision", v: "Centralise the record and automate assignment and notifications. [COMPLETE: why this solution and not another]" },
          { k: "Result", v: "[COMPLETE: anonymised result, in orders of magnitude]" },
          { k: "Learning", v: "[COMPLETE: one line on what I would do differently]" }
        ], tags: ["API design", "Backend", "Automation", "BI", "AI"] },
      { code: "WK.05", name: "FP&A transformation", org: "Accenture", role: "Management Consultant Senior Analyst", when: "May 2025 – Mar 2026", impact: "Anaplan Model Builder certified",
        body: "Anaplan implementation for a North American airline, run in Scrum with Jira. I also led a CFO & Enterprise Value process-optimisation initiative using Excel and Power Automate.", tags: ["Anaplan", "FP&A", "Scrum", "Power Automate"] },
      { code: "WK.06", name: "Python game library", org: "Self-study", role: "Learning by building", when: "2021 – 2022", impact: "5 small games",
        body: "Pong, Flappy Bird, Frogger, a platformer and Space Invaders, built with pygame and turtle while I was learning Python. Games taught me loops, state and collision faster than any tutorial.", tags: ["Python", "pygame", "turtle"], url: "https://github.com/rochijacob/python_games" }
    ],
    timeline: [
      { when: "Apr 2026 – present", org: "Universidad de San Andrés", role: "Project Manager & Business Partner · BI, Automation, AI", note: "Backend owner of the thesis-tracking API; automation, BI and AI projects for university operations.", tags: ["API", "BI", "AI agents"] },
      { when: "Jun 2026 – present", org: "Universidad de San Andrés", role: "Tutorial instructor, Corporate Finance", note: "Part-time teaching assistant for Corporate Finance.", tags: ["Teaching", "Finance"] },
      { when: "[START] – 2028", org: "Universidad de San Andrés", role: "Master in Finance (MFin), in progress", note: "Class of 2028.", tags: ["MFin"] },
      { when: "May 2025 – Mar 2026", org: "Accenture", role: "Management Consultant Senior Analyst, FP&A", note: "Anaplan for a North American airline; CFO & Enterprise Value process optimisation.", tags: ["Anaplan", "Scrum", "Power Automate"] },
      { when: "Nov 2023 – Apr 2025", org: "Muvinai", role: "Project Leader", note: "Event SaaS for 5+ clients on three continents; team of six.", tags: ["Jira", "Roadmap", "Clients"] },
      { when: "Mar 2021 – Oct 2023", org: "Muvinai", role: "Senior Developer", note: "Mobile apps and a checkout processing 300+ daily payments.", tags: ["React Native", "Expo", "React"] },
      { when: "Jan – May 2023", org: "IE University, Madrid", role: "Exchange semester, BBA", note: "", tags: [] },
      { when: "Mar 2020 – Dec 2024", org: "Universidad de San Andrés", role: "Lic. in Business Administration & Digital Business", note: "GPA 8.6/10, top 10%, merit scholarship. TA in Data Architecture, Finance Club.", tags: [] }
    ],
    skills: [
      { code: "SK.01", name: "Build", items: ["React", "React Native", "Expo", "JavaScript / TypeScript", "HTML / CSS", "Node / Express", "Python", "SQL", "MongoDB", "Webflow"] },
      { code: "SK.02", name: "Cloud & systems", items: ["AWS", "API design", "System design", "Database design", "AI agents"] },
      { code: "SK.03", name: "Product & PM", items: ["Jira", "Scrum", "Roadmapping", "Stakeholder management", "Figma", "Notion"] },
      { code: "SK.04", name: "Finance & automation", items: ["FP&A", "Anaplan (certified)", "Excel modelling", "Power Automate", "BI"] },
      { code: "SK.05", name: "Languages", items: ["Spanish (native)", "English (fluent, TOEFL iBT 110)"] }
    ],
    stackSentence: "I build with {React}, {React Native} and {Expo} in {TypeScript}, back it with {Node}, {Python}, {SQL} and {MongoDB} on {AWS}, and ship marketing sites in {Webflow}.",
    finance: [
      { k: "MFin", v: "Master in Finance at Universidad de San Andrés, in progress, class of 2028." },
      { k: "Teaching", v: "Tutorial instructor for Corporate Finance at UdeSA since June 2026." },
      { k: "FP&A", v: "Management consulting at Accenture until March 2026. Anaplan Model Builder certified." },
      { k: "Research", v: "I keep a structured equity-research process for long-term investing: business, financials, valuation, scorecard." },
      { k: "Roots", v: "Business & Digital Business at UdeSA, top 10%. Finance Club member." }
    ],
    services: [
      { code: "SV.01", name: "Automation & BI", sub: "Processes", body: "I take a manual process (scattered Excel files, emails, spreadsheets) and turn it into an automatic flow with dashboards people actually use.", deliv: "Process map, working automation and documentation.", ideal: "Finance and operations teams, institutions." },
      { code: "SV.02", name: "AI agents", sub: "Internal processes", body: "Classification, data intake, replies and follow-up, with humans supervising.", deliv: "A prototype in real use plus evaluation criteria.", ideal: "" },
      { code: "SV.03", name: "Web & product", sub: "With monthly support", body: "Site or app, infrastructure, CMS and forms, with ongoing maintenance on a monthly plan.", deliv: "", ideal: "" }
    ],
    delivLabel: "Deliverable", idealLabel: "Ideal for",
    freelance: "I take freelance work in three shapes: automation and BI, AI agents for internal processes, and web and product with monthly support. I run each one as its project manager too. I work remotely from Buenos Aires and hold EU work authorization (Argentina, Germany and Italy citizenship).",
    lab: [
      { name: "Dog-in-the-pool detector", why: "Computer vision applied to a household problem." },
      { name: "Fitness agent on Telegram", why: "Agents working with personal data." },
      { name: "Crypto payment terminals", why: "How money moves on-chain." },
      { name: "Mental-health bot for an NGO", why: "AI with judgement and human supervision." },
      { name: "Python games", why: "How I learned Python: loops, state and collisions.", url: "https://github.com/rochijacob/python_games" }
    ],
    labIntro: "Experiments I build out of curiosity. Each one has a reason.",
    booksIntro: "I learn by reading books and then building something with what I read.",
    booksNote: "Placeholders for now. Real shelf coming soon.",
    writingIntro: "Notes on product, finance and what I am learning.",
    soon: "soon",
    contactTitle: "Have a product, a project or a process that needs an owner?",
    contactBody: "Tell me what you are building. I answer every email.",
    footer: { email: "Email", linkedin: "LinkedIn", github: "GitHub", rights: "© 2026 Rocio Jacob" },
    view: "View", close: "Close", open: "Open", repo: "Repository",
    /* A · Notebook */
    a: {
      hero: "Hi, I'm Rocio. I'm a <a class=\"chip\" href=\"#work\">product engineer</a> in Buenos Aires. I build products, automation and analytics so organizations decide better and do less manual work. I taught myself to code in 2021 from <a class=\"chip\" href=\"#books\">books</a> and the open web. Since then I have built an app that 40K people open every day, led a team of six, and worked in <a class=\"chip\" href=\"#finance\">finance</a>. Now I am doing a Master in Finance, teaching Corporate Finance, and <a class=\"chip\" href=\"#writing\">writing</a> down what I learn.",
      kicker: "A notebook, kept in public", cardNow: "Now", cardNowBody: "MFin at UdeSA (2028). Building a thesis-tracking API. Teaching Corporate Finance.", cardReading: "Reading", cardReadingLink: "Books I've read"
    },
    /* B · Dock */
    b: {
      
      playTitle: "Playground", playBody: "I learned Python by building small games. This is a tiny browser remake of that habit: a hop-through-the-gaps loop in plain canvas. The originals (pygame / turtle) are on my GitHub.",
      playHint: "Space, click or tap to hop", playScore: "Score", playBest: "Best", playStart: "Press to start", playOver: "Game over · press to retry", originals: "See the originals"
    },
    /* C · Poster */
    c: {
      hero: "Hi, I'm Rocio, a Product Engineer. Please welcome to my web page.",
      tagline: "Ships software · Runs the project · Reads the numbers",
      servicesTitle: "Three ways to work with me", stickersHint: "Drag the stickers. They are the tools I use."
    },
    /* D · Ledger */
    d: {
      manifesto: "Software that feels obvious, numbers that hold up.",
      scroll: "scroll", ticker: "ROCI", exchange: "Buenos Aires · career index", since: "since 2021", chartTitle: "Career, charted",
      illustrative: "Index values and weights are illustrative: explicit creative choices, not measurements.",
      ranges: { y1: "1Y", y3: "3Y", max: "MAX" },
      milestones: [
        { t: 2021.2, v: 10, l: "2021 · Self-taught start, first shipped app" },
        { t: 2022.5, v: 30, l: "Gym app reaches 40K daily users" },
        { t: 2023.85, v: 48, l: "Nov 2023 · Project Leader, team of six" },
        { t: 2025.35, v: 62, l: "May 2025 · Accenture FP&A, Anaplan certified" },
        { t: 2026.28, v: 72, l: "Apr 2026 · UdeSA, PM & Business Partner" },
        { t: 2026.45, v: 82, l: "Jun 2026 · Teaching Corporate Finance" },
        { t: 2026.87, v: 86, l: "Today · MFin in progress (2028)" }
      ],
      storyTitle: "The story so far",
      story: [
        { h: "I started with books.", p: "In 2021 I taught myself HTML and JavaScript, then React and React Native with Expo.", href: "#books" },
        { h: "Then I shipped.", p: "An app for Argentina's largest gym chain with 500K+ downloads and 40K daily users, and a checkout that handles 300+ payments a day.", href: "#positions" },
        { h: "Then I led.", p: "Project Leader for a team of six on an event SaaS used by 15K+ people across three continents.", href: "#experience" },
        { h: "Then I learned the numbers.", p: "FP&A at Accenture, a Master in Finance in progress, and a Corporate Finance classroom.", href: "#holdings" }
      ],
      pairs: ["PRODUCT + FINANCE", "CODE + DESIGN", "BUILD + LEAD", "BOOKS + SHIPPING"],
      thesisTitle: "Thesis", thesisSub: "Why hire or back me",
      thesis: [
        { h: "A builder who can underwrite.", p: "I write the code and I read the P&L. Few product people have done FP&A; few finance people have shipped to 40K daily users." },
        { h: "Operating evidence, not adjectives.", p: "500K+ downloads, 300+ daily payments, 5+ clients on three continents, a team of six." },
        { h: "Curiosity that compounds.", p: "I learn from books, build with what I read, and now teach it: Corporate Finance at UdeSA, MFin class of 2028." }
      ],
      holdingsTitle: "Holdings", holdingsSub: "Where my time is allocated",
      holdings: [
        { tk: "PRDE", name: "Product Engineering", w: 30, p: "React and React Native in production. The core position." },
        { tk: "PPMG", name: "Project & Product Mgmt", w: 25, p: "Six-person team, 5+ client accounts, roadmap to stakeholders." },
        { tk: "AUTO", name: "Automation & AI", w: 18, p: "Agents, BI and workflows. The growth position." },
        { tk: "FPNA", name: "Finance & FP&A", w: 17, p: "Anaplan, Accenture, MFin 2028. Adding steadily." },
        { tk: "DSGN", name: "Design / UX", w: 10, p: "Small weight, applied to everything else." }
      ],
      cols: { ticker: "Ticker", holding: "Holding", weight: "Weight", thesis: "Thesis", position: "Position", entry: "Entry", impact: "Impact", conviction: "Conviction", title: "Title" },
      positionsTitle: "Track record", positionsSub: "Positions, entry and impact",
      booksTitle: "Reading portfolio", conviction: { high: "High", medium: "Medium", low: "Low" },
      talk: "Should we talk? We should talk."
    }
  },

  es: {
    meta: { title: "Rocio Jacob · Product Engineer", desc: "Construyo producto, automatización y analítica para que las organizaciones decidan mejor y trabajen menos a mano. Buenos Aires, remoto a todo el mundo." },
    name: "Rocio Jacob", role: "Product Engineer",
    oneLiner: "Soy Rocio. Construyo producto, automatización y analítica para que las organizaciones decidan mejor y trabajen menos a mano.",
    pitch: "Construyo producto, automatización y analítica para que las organizaciones decidan mejor y trabajen menos a mano.",
    sub: "Project Manager & Business Partner en BI, Automatización e IA. Ex-Accenture (finanzas corporativas). Disponible para proyectos freelance.",
    location: "Buenos Aires, Argentina", remote: "Buenos Aires · Remoto a todo el mundo",
    status: "Disponible para freelance · Buenos Aires",
    cta: "Trabajemos juntos", ctaAlt: "Hablemos", mailSubject: "Proyecto para Rocio",
    skip: "Ir al contenido", langLabel: "Idioma", themeLabel: "Cambiar modo claro / oscuro", portraitAlt: "Retrato de Rocio Jacob",
    nav: { home: "Inicio", about: "Sobre mí", work: "Trabajo", experience: "Experiencia", skills: "Stack", books: "Libros", writing: "Escritos", contact: "Contacto", play: "Playground", services: "Servicios" },
    h: { services: "Qué ofrezco", about: "Sobre mí", work: "Trabajo seleccionado", experience: "Experiencia", skills: "Habilidades y stack", books: "Libros", writing: "Escritos", contact: "Trabajemos juntos", finance: "El lado financiero", lab: "Lab", numbers: "En números" },
    about: [
      "Empecé a programar en 2021, de forma autodidacta, con HTML y JavaScript a partir de libros y de la web, y después pasé a React y React Native con Expo. Construí más de cinco apps móviles, lideré un equipo de seis personas como Project Manager y me metí en automatización, agentes de IA y diseño de sistemas.",
      "Estudié Administración de Empresas y Negocios Digitales en la Universidad de San Andrés (top 10%, intercambio en IE University) y trabajé en consultoría de FP&A en Accenture, así que hablo producto y finanzas. Hoy curso la Maestría en Finanzas de UdeSA (promoción 2028) y doy clases de Finanzas Corporativas.",
      "Me importan los productos lindos, rápidos y que le hagan el día más fácil a alguien. Todo lo que publico tiene que ser estético."
    ],
    stats: [
      { n: "500K+", l: "descargas de la app de la cadena de gimnasios más grande de Argentina" },
      { n: "40K", l: "usuarios activos por día en esa app" },
      { n: "15K+", l: "usuarios en un SaaS de ticketing, con más de 5 clientes en tres continentes" },
      { n: "300+", l: "pagos diarios en un checkout a medida" },
      { n: "6", l: "personas a cargo como Project Leader" },
      { n: "5+", l: "apps construidas con React Native + Expo" },
      { n: "10+", l: "clientes con sitios en Webflow" },
      { n: "~2.000", l: "estudiantes esperados en la API de seguimiento de tesis" }
    ],
    cases: [
      { code: "WK.01", name: "App de cadena de gimnasios", org: "Muvinai", role: "Desarrollo mobile", when: "2021 – 2025", impact: "500K+ descargas · 40K DAU",
        body: "Construí y mantuve la app móvil de la cadena de gimnasios más grande de Argentina. El trabajo fue velocidad, UX y prolijidad a escala: una app que decenas de miles de personas abren todos los días no admite bordes ásperos.", tags: ["React Native", "Expo"] },
      { code: "WK.02", name: "Plataforma SaaS de eventos", org: "Muvinai", role: "Project Leader", when: "Nov 2023 – Abr 2025", impact: "15K+ usuarios · 5+ clientes",
        body: "Lideré de punta a punta el desarrollo de una plataforma de ticketing, control de accesos y relación con clientes, usada por festivales de música y organizadores de eventos cripto en América, Europa y Asia. Coordiné un equipo multidisciplinario de seis personas, llevé de forma directa más de 5 cuentas, prioricé funcionalidades a partir de las necesidades de los clientes y presenté el roadmap a stakeholders internos y externos.", tags: ["Liderazgo de proyecto", "Jira", "Roadmap", "React"] },
      { code: "WK.03", name: "Checkout de alto volumen", org: "Muvinai", role: "Senior Developer", when: "2021 – 2023", impact: "300+ pagos / día",
        body: "Diseñé y lancé un checkout con facturación a medida que procesa más de 300 pagos por día. Fue una de las primeras integraciones de Mercado Pago en React.", tags: ["React", "Mercado Pago", "Facturación"] },
      { code: "WK.04", name: "API de seguimiento de tesis", org: "Universidad de San Andrés", role: "Project Manager & Business Partner", when: "Abr 2026 – presente", impact: "~2.000 estudiantes esperados",
        body: "Soy responsable del backend de una API que hace el seguimiento de los trabajos finales de los estudiantes, pensada para unos 2.000 alumnos. En paralelo impulso proyectos de automatización, BI e IA para la operación de la universidad.",
        steps: [
          { k: "Contexto", v: "Una universidad coordinaba a mano las presentaciones y las mesas de defensa de trabajos finales. [CONFIRMAR cómo era antes]" },
          { k: "Problema", v: "Mucho tiempo en coordinación, riesgo de errores y poca visibilidad del estado de cada trabajo." },
          { k: "Decisión", v: "Centralizar el registro y automatizar la asignación y los avisos. [COMPLETAR: por qué esta solución y no otra]" },
          { k: "Resultado", v: "[COMPLETAR: resultado anonimizado, en órdenes de magnitud]" },
          { k: "Aprendizaje", v: "[COMPLETAR: una línea sobre qué haría distinto]" }
        ], tags: ["Diseño de APIs", "Backend", "Automatización", "BI", "IA"] },
      { code: "WK.05", name: "Transformación de FP&A", org: "Accenture", role: "Management Consultant Senior Analyst", when: "May 2025 – Mar 2026", impact: "Certificación Anaplan Model Builder",
        body: "Implementación de Anaplan para una aerolínea norteamericana, con Scrum y Jira. También lideré una iniciativa de optimización de procesos de CFO & Enterprise Value con Excel y Power Automate.", tags: ["Anaplan", "FP&A", "Scrum", "Power Automate"] },
      { code: "WK.06", name: "Biblioteca de juegos en Python", org: "Autodidacta", role: "Aprender construyendo", when: "2021 – 2022", impact: "5 juegos chicos",
        body: "Pong, Flappy Bird, Frogger, un plataformas y Space Invaders, hechos con pygame y turtle mientras aprendía Python. Los juegos me enseñaron loops, estado y colisiones más rápido que cualquier tutorial.", tags: ["Python", "pygame", "turtle"], url: "https://github.com/rochijacob/python_games" }
    ],
    timeline: [
      { when: "Abr 2026 – presente", org: "Universidad de San Andrés", role: "Project Manager & Business Partner · BI, Automatización, IA", note: "Responsable del backend de la API de seguimiento de tesis; proyectos de automatización, BI e IA para la operación de la universidad.", tags: ["API", "BI", "Agentes de IA"] },
      { when: "Jun 2026 – presente", org: "Universidad de San Andrés", role: "Docente de tutoriales, Finanzas Corporativas", note: "Ayudante de cátedra part-time en Finanzas Corporativas.", tags: ["Docencia", "Finanzas"] },
      { when: "[INICIO] – 2028", org: "Universidad de San Andrés", role: "Maestría en Finanzas (MFin), en curso", note: "Promoción 2028.", tags: ["MFin"] },
      { when: "May 2025 – Mar 2026", org: "Accenture", role: "Management Consultant Senior Analyst, FP&A", note: "Anaplan para una aerolínea norteamericana; optimización de procesos de CFO & Enterprise Value.", tags: ["Anaplan", "Scrum", "Power Automate"] },
      { when: "Nov 2023 – Abr 2025", org: "Muvinai", role: "Project Leader", note: "SaaS de eventos para más de 5 clientes en tres continentes; equipo de seis.", tags: ["Jira", "Roadmap", "Clientes"] },
      { when: "Mar 2021 – Oct 2023", org: "Muvinai", role: "Senior Developer", note: "Apps móviles y un checkout que procesa más de 300 pagos diarios.", tags: ["React Native", "Expo", "React"] },
      { when: "Ene – May 2023", org: "IE University, Madrid", role: "Semestre de intercambio, BBA", note: "", tags: [] },
      { when: "Mar 2020 – Dic 2024", org: "Universidad de San Andrés", role: "Lic. en Administración de Empresas y Negocios Digitales", note: "Promedio 8,6/10, top 10%, beca al mérito. Ayudante en Arquitectura de Datos, Finance Club.", tags: [] }
    ],
    skills: [
      { code: "SK.01", name: "Construcción", items: ["React", "React Native", "Expo", "JavaScript / TypeScript", "HTML / CSS", "Node / Express", "Python", "SQL", "MongoDB", "Webflow"] },
      { code: "SK.02", name: "Cloud y sistemas", items: ["AWS", "Diseño de APIs", "Diseño de sistemas", "Diseño de bases de datos", "Agentes de IA"] },
      { code: "SK.03", name: "Producto y PM", items: ["Jira", "Scrum", "Roadmapping", "Gestión de stakeholders", "Figma", "Notion"] },
      { code: "SK.04", name: "Finanzas y automatización", items: ["FP&A", "Anaplan (certificada)", "Modelado en Excel", "Power Automate", "BI"] },
      { code: "SK.05", name: "Idiomas", items: ["Español (nativo)", "Inglés (fluido, TOEFL iBT 110)"] }
    ],
    stackSentence: "Construyo con {React}, {React Native} y {Expo} en {TypeScript}, lo respaldo con {Node}, {Python}, {SQL} y {MongoDB} sobre {AWS}, y publico sitios de marketing en {Webflow}.",
    finance: [
      { k: "MFin", v: "Maestría en Finanzas en la Universidad de San Andrés, en curso, promoción 2028." },
      { k: "Docencia", v: "Docente de tutoriales de Finanzas Corporativas en UdeSA desde junio de 2026." },
      { k: "FP&A", v: "Consultoría de gestión en Accenture hasta marzo de 2026. Certificación Anaplan Model Builder." },
      { k: "Research", v: "Sostengo un proceso estructurado de equity research para invertir a largo plazo: negocio, estados financieros, valuación, scorecard." },
      { k: "Base", v: "Administración y Negocios Digitales en UdeSA, top 10%. Miembro del Finance Club." }
    ],
    services: [
      { code: "SV.01", name: "Automatización y BI", sub: "Procesos", body: "Tomo un proceso manual (Excel dispersos, mails, planillas) y lo convierto en un flujo automático con tableros que se usan.", deliv: "Mapa del proceso, automatización funcionando y documentación.", ideal: "Áreas de finanzas, operaciones o instituciones." },
      { code: "SV.02", name: "Agentes de IA", sub: "Procesos internos", body: "Clasificación, ingesta de datos, respuestas y seguimiento, con humanos que supervisan.", deliv: "Prototipo en uso real más criterios de evaluación.", ideal: "" },
      { code: "SV.03", name: "Web y producto", sub: "Con soporte mensual", body: "Sitio o app, infraestructura, CMS y formularios, con mantenimiento continuo en un abono mensual.", deliv: "", ideal: "" }
    ],
    delivLabel: "Entregable", idealLabel: "Ideal para",
    freelance: "Tomo trabajo freelance en tres formatos: automatización y BI, agentes de IA para procesos internos, y web y producto con soporte mensual. En todos me ocupo también de la gestión del proyecto. Trabajo de forma remota desde Buenos Aires y tengo autorización para trabajar en la UE (ciudadanía argentina, alemana e italiana).",
    lab: [
      { name: "Detector de caída de perro a la pileta", why: "Visión por computadora aplicada a un problema doméstico." },
      { name: "Agente de fitness por Telegram", why: "Agentes con datos personales." },
      { name: "Terminales de pago cripto", why: "Cómo se mueve el dinero on-chain." },
      { name: "Bot de salud mental para una ONG", why: "IA con criterio y supervisión humana." },
      { name: "Juegos en Python", why: "Cómo aprendí Python: loops, estado y colisiones.", url: "https://github.com/rochijacob/python_games" }
    ],
    labIntro: "Experimentos que hago por curiosidad. Cada uno tiene un porqué.",
    booksIntro: "Aprendo leyendo libros y después construyendo algo con lo que leí.",
    booksNote: "Por ahora son marcadores. La biblioteca real llega pronto.",
    writingIntro: "Notas sobre producto, finanzas y lo que voy aprendiendo.",
    soon: "pronto",
    contactTitle: "¿Tenés un producto, un proyecto o un proceso que necesita dueña?",
    contactBody: "Contame qué estás construyendo. Respondo todos los mails.",
    footer: { email: "Email", linkedin: "LinkedIn", github: "GitHub", rights: "© 2026 Rocio Jacob" },
    view: "Ver", close: "Cerrar", open: "Abrir", repo: "Repositorio",
    a: {
      hero: "Hola, soy Rocio. Soy <a class=\"chip\" href=\"#work\">product engineer</a> en Buenos Aires. Construyo producto, automatización y analítica para que las organizaciones decidan mejor y trabajen menos a mano. Aprendí a programar sola en 2021, con <a class=\"chip\" href=\"#books\">libros</a> y la web. Desde entonces construí una app que 40 mil personas abren todos los días, lideré un equipo de seis y trabajé en <a class=\"chip\" href=\"#finance\">finanzas</a>. Hoy curso una Maestría en Finanzas, doy clases de Finanzas Corporativas y dejo por <a class=\"chip\" href=\"#writing\">escrito</a> lo que aprendo.",
      kicker: "Un cuaderno, llevado en público", cardNow: "Ahora", cardNowBody: "MFin en UdeSA (2028). Construyendo una API de seguimiento de tesis. Dando Finanzas Corporativas.", cardReading: "Leyendo", cardReadingLink: "Libros que leí"
    },
    b: {
      
      playTitle: "Playground", playBody: "Aprendí Python haciendo juegos chicos. Esta es una versión mínima de esa costumbre, hecha para el navegador: un loop de saltar entre huecos en canvas puro. Los originales (pygame / turtle) están en mi GitHub.",
      playHint: "Espacio, clic o toque para saltar", playScore: "Puntos", playBest: "Récord", playStart: "Tocá para empezar", playOver: "Fin del juego · tocá para reintentar", originals: "Ver los originales"
    },
    c: {
      hero: "Hola, soy Rocio, Product Engineer. Te doy la bienvenida a mi página web.",
      tagline: "Construye software · Lidera el proyecto · Lee los números",
      servicesTitle: "Tres formas de trabajar conmigo", stickersHint: "Arrastrá los stickers. Son las herramientas que uso."
    },
    d: {
      manifesto: "Software que se siente obvio, números que se sostienen.",
      scroll: "seguí bajando", ticker: "ROCI", exchange: "Buenos Aires · índice de carrera", since: "desde 2021", chartTitle: "La carrera, en un gráfico",
      illustrative: "Los valores del índice y las ponderaciones son ilustrativos: decisiones creativas explícitas, no mediciones.",
      ranges: { y1: "1A", y3: "3A", max: "MÁX" },
      milestones: [
        { t: 2021.2, v: 10, l: "2021 · Inicio autodidacta, primera app publicada" },
        { t: 2022.5, v: 30, l: "La app de gimnasios llega a 40K usuarios diarios" },
        { t: 2023.85, v: 48, l: "Nov 2023 · Project Leader, equipo de seis" },
        { t: 2025.35, v: 62, l: "May 2025 · FP&A en Accenture, certificación Anaplan" },
        { t: 2026.28, v: 72, l: "Abr 2026 · UdeSA, PM & Business Partner" },
        { t: 2026.45, v: 82, l: "Jun 2026 · Docente de Finanzas Corporativas" },
        { t: 2026.87, v: 86, l: "Hoy · MFin en curso (2028)" }
      ],
      storyTitle: "La historia hasta acá",
      story: [
        { h: "Empecé con libros.", p: "En 2021 aprendí sola HTML y JavaScript, y después React y React Native con Expo.", href: "#books" },
        { h: "Después publiqué.", p: "Una app para la cadena de gimnasios más grande de Argentina, con más de 500K descargas y 40K usuarios diarios, y un checkout que procesa más de 300 pagos por día.", href: "#positions" },
        { h: "Después lideré.", p: "Project Leader de un equipo de seis en un SaaS de eventos que usan más de 15K personas en tres continentes.", href: "#experience" },
        { h: "Después aprendí los números.", p: "FP&A en Accenture, una Maestría en Finanzas en curso y un aula de Finanzas Corporativas.", href: "#holdings" }
      ],
      pairs: ["PRODUCTO + FINANZAS", "CÓDIGO + DISEÑO", "CONSTRUIR + LIDERAR", "LIBROS + PRODUCCIÓN"],
      thesisTitle: "Tesis", thesisSub: "Por qué contratarme o apostar por mí",
      thesis: [
        { h: "Una constructora que sabe evaluar.", p: "Escribo el código y leo el estado de resultados. Poca gente de producto hizo FP&A; poca gente de finanzas publicó para 40K usuarios diarios." },
        { h: "Evidencia operativa, no adjetivos.", p: "Más de 500K descargas, más de 300 pagos diarios, más de 5 clientes en tres continentes, un equipo de seis." },
        { h: "Curiosidad que capitaliza.", p: "Aprendo de los libros, construyo con lo que leo y ahora lo enseño: Finanzas Corporativas en UdeSA, MFin promoción 2028." }
      ],
      holdingsTitle: "Tenencias", holdingsSub: "Dónde está asignado mi tiempo",
      holdings: [
        { tk: "PRDE", name: "Ingeniería de producto", w: 30, p: "React y React Native en producción. La posición central." },
        { tk: "PPMG", name: "Gestión de proyecto y producto", w: 25, p: "Equipo de seis, más de 5 cuentas, roadmap ante stakeholders." },
        { tk: "AUTO", name: "Automatización e IA", w: 18, p: "Agentes, BI y flujos. La posición de crecimiento." },
        { tk: "FPNA", name: "Finanzas y FP&A", w: 17, p: "Anaplan, Accenture, MFin 2028. Sumando de a poco." },
        { tk: "DSGN", name: "Diseño / UX", w: 10, p: "Poco peso, aplicado a todo lo demás." }
      ],
      cols: { ticker: "Ticker", holding: "Tenencia", weight: "Peso", thesis: "Tesis", position: "Posición", entry: "Entrada", impact: "Impacto", conviction: "Convicción", title: "Título" },
      positionsTitle: "Track record", positionsSub: "Posiciones, entrada e impacto",
      booksTitle: "Cartera de lectura", conviction: { high: "Alta", medium: "Media", low: "Baja" },
      talk: "¿Hablamos? Hablemos."
    }
  }
};

/* ============================================================
   CORE — language, helpers. Each site defines render(t, lang).
   ============================================================ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const L = content.links;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};
let lang = (() => {
  const s = store.get("rj-lang");
  if (s === "en" || s === "es") return s;
  return (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
})();
const T = () => content[lang];
const mailto = () => `mailto:${L.email}?subject=${encodeURIComponent(T().mailSubject)}`;
const ext = 'target="_blank" rel="noopener"';
const fmtDate = d => {
  const [y, m] = d.split("-").map(Number);
  const s = new Date(y, m - 1, 1).toLocaleDateString(lang === "es" ? "es-AR" : "en-US", { month: "short", year: "numeric" });
  return s.replace(".", "");
};
const hash = s => { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
let io;
function reveal() {
  if (io) io.disconnect();
  const els = $$(".rv");
  if (reduced || !("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
  els.forEach(e => io.observe(e));
}
function langToggle(cls = "") {
  return `<span class="lang ${cls}" role="group" aria-label="${esc(T().langLabel)}">` +
    ["en", "es"].map(l => `<button type="button" data-lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join('<span aria-hidden="true">|</span>') + `</span>`;
}
function footerLinks() {
  const f = T().footer;
  return `<a href="mailto:${L.email}">${f.email}</a><a href="${L.linkedin}" ${ext}>${f.linkedin}</a><a href="${L.github}" ${ext}>${f.github}</a>`;
}
function portrait() {
  return `<span class="portrait"><span aria-hidden="true">RJ</span><img src="profile.jpg" alt="${esc(T().portraitAlt)}" width="96" height="96" onerror="this.remove()"></span>`;
}
const caseBody = c => c.body + (c.steps ? "<br><br>" + c.steps.map(x => `<b>${x.k}.</b> ${x.v}`).join("<br>") : "");
const svcBody = s => s.body + (s.deliv ? `<br><b>${T().delivLabel}:</b> ${s.deliv}` : "") + (s.ideal ? `<br><b>${T().idealLabel}:</b> ${s.ideal}` : "");
const labName = l => l.url ? `<a href="${l.url}" ${ext}>${l.name}</a>` : l.name;
function apply() {
  document.documentElement.lang = lang;
  document.title = T().meta.title;
  const m = $('meta[name="description"]'); if (m) m.content = T().meta.desc;
  render(T(), lang);
  reveal();
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-lang]");
  if (!b || b.dataset.lang === lang) return;
  lang = b.dataset.lang; store.set("rj-lang", lang);
  const y = scrollY; apply(); scrollTo(0, y);
  const again = $(`[data-lang="${lang}"]`); if (again) again.focus();
});
