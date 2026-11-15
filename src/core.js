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

  // Books Rocío chose to highlight. She does not want a note per book, so `note` stays empty.
  // `spine` evokes the look of a common edition's cover: colours, type and width (px). Approximations, not scans.
  // conviction ("high" | "medium" | "low") is only used by the Ledger site; leave "" until she sets it.
  books: [
    { title: "Shoe Dog", author: "Phil Knight", spine: { bg: "#111111", fg: "#ffffff", ac: "#f26522", font: "'Permanent Marker',cursive", w: 44, h: 228, up: 1 }, note: { en: "", es: "" }, url: "", conviction: "" },
    { title: "Sapiens", author: "Yuval Noah Harari", spine: { bg: "#f4f1ea", fg: "#1a1a1a", ac: "#c8102e", font: "'Playfair Display',Georgia,serif", w: 48, h: 236 }, note: { en: "", es: "" }, url: "", conviction: "" },
    { title: "Factfulness", author: "Hans Rosling", spine: { bg: "#f58220", fg: "#ffffff", ac: "#ffffff", font: "Anton,Impact,sans-serif", w: 40, h: 222, up: 1 }, note: { en: "", es: "" }, url: "", conviction: "" },
    { title: "Life 3.0", author: "Max Tegmark", spine: { bg: "#0b1b3a", fg: "#ffffff", ac: "#6fb1e0", font: "Oswald,'Arial Narrow',sans-serif", w: 42, h: 232, up: 1, wt: 300, ls: ".18em" }, note: { en: "", es: "" }, url: "", conviction: "" },
    { title: "Creativity, Inc.", author: "Ed Catmull", spine: { bg: "#c8102e", fg: "#ffffff", ac: "#111111", font: "Oswald,'Arial Narrow',sans-serif", w: 46, h: 236, up: 1, wt: 600 }, note: { en: "", es: "" }, url: "", conviction: "" },
    { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", spine: { bg: "#1c1c1c", fg: "#ffffff", ac: "#2f80ed", font: "Anton,Impact,sans-serif", w: 50, h: 240, up: 1, fs: ".78rem" }, note: { en: "", es: "" }, url: "", conviction: "" },
    { title: "Brave New World", author: "Aldous Huxley", spine: { bg: "#e9dcc0", fg: "#1d3557", ac: "#d1495b", font: "'Playfair Display',Georgia,serif", w: 38, h: 214 }, note: { en: "", es: "" }, url: "", conviction: "" },
    { title: "Range", author: "David Epstein", spine: { bg: "#fafafa", fg: "#111111", ac: "#e63946", font: "Anton,Impact,sans-serif", w: 42, h: 226, up: 1 }, note: { en: "", es: "" }, url: "", conviction: "" },
    { title: "Outliers", author: "Malcolm Gladwell", spine: { bg: "#ffffff", fg: "#111111", ac: "#9aa3a8", font: "'Playfair Display',Georgia,serif", w: 40, h: 220 }, note: { en: "", es: "" }, url: "", conviction: "" },
    { title: "Fahrenheit 451", author: "Ray Bradbury", spine: { bg: "#d62818", fg: "#111111", ac: "#ffd23f", font: "Anton,Impact,sans-serif", w: 36, h: 208, up: 1 }, note: { en: "", es: "" }, url: "", conviction: "" }
  ],

  // REPLACE: paste real articles. date is "YYYY-MM".
  writing: [
    { title: { en: "[ARTICLE TITLE 1]", es: "[TÍTULO DEL ARTÍCULO 1]" }, date: "2026-10", url: "" }, // REPLACE
    { title: { en: "[ARTICLE TITLE 2]", es: "[TÍTULO DEL ARTÍCULO 2]" }, date: "2026-07", url: "" }, // REPLACE
    { title: { en: "[ARTICLE TITLE 3]", es: "[TÍTULO DEL ARTÍCULO 3]" }, date: "2026-03", url: "" }  // REPLACE
  ],

  en: {
    meta: { title: "Rocío Jacob · Product Engineer", desc: "I build products, automation and analytics so organizations decide better and do less manual work. Buenos Aires, remote worldwide." },
    name: "Rocío Jacob", role: "Product Engineer",
    oneLiner: "I'm Rocío. I build products, automation and analytics so organizations decide better and do less manual work.",
    pitch: "I build products, automation and analytics so organizations decide better and do less manual work.",
    sub: "Project Manager & Business Partner in BI, Automation and AI. Ex-global consulting firm (corporate finance). Available for freelance projects.",
    location: "Buenos Aires, Argentina", remote: "Buenos Aires · Remote worldwide",
    status: "Open to freelance · Buenos Aires",
    cta: "Work with me", ctaAlt: "Let's talk", mailSubject: "Project for Rocío",
    skip: "Skip to content", langLabel: "Language", themeLabel: "Toggle light / dark", portraitAlt: "Pixel-art avatar of Rocío Jacob",
    nav: { home: "Home", about: "About", work: "Work", experience: "Experience", skills: "Stack", books: "Books", writing: "Writing", contact: "Contact", play: "Playground", services: "Services" },
    h: { services: "What I offer", about: "About", work: "Selected work", experience: "Experience", skills: "Skills & stack", books: "Books", writing: "Writing", contact: "Work with me", finance: "The finance side", lab: "Lab", numbers: "In numbers" },
    about: [
      "I started coding in 2021, teaching myself HTML and JavaScript from books and the open web, then React and React Native with Expo. I have shipped five or more mobile apps, led a six-person team as a Project Manager, and moved into automation, AI agents and system design.",
      "I studied Business & Digital Business at Universidad de San Andrés (top 10%, exchange at IE University) and worked at a global consulting firm automating finance processes, so I speak both product and finance. Today I teach Corporate Finance, and in April 2027 I start a Master in Finance at UdeSA (class of 2028).",
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
      { n: "100+", l: "final projects per submission cycle on the tracking system I built" }
    ],
    cases: [
      { code: "WK.01", line: "500K+ downloads and 40K people a day.", name: "Gym chain app", org: "Software studio", role: "Mobile development", when: "2021 – 2025", impact: "500K+ downloads · 40K DAU",
        body: "Built and maintained the mobile app for Argentina's largest gym chain. The work was speed, UX and polish at scale: an app that tens of thousands of people open every day has no room for rough edges.", tags: ["React Native", "Expo"] },
      { code: "WK.02", line: "Ticketing for 15K+ users on three continents.", name: "Event SaaS platform", org: "Software studio", role: "Project Leader", when: "Nov 2023 – Apr 2025", impact: "15K+ users · 5+ clients",
        body: "Led development of a platform for ticketing, access control and client relationships, used by music festivals and crypto events across America, Europe and Asia. I managed a team of six, handled 5+ client accounts directly, and set priorities and roadmap with clients and stakeholders.", tags: ["Project leadership", "Jira", "Roadmap", "React"] },
      { code: "WK.03", name: "High-volume checkout", org: "Software studio", role: "Senior Developer", when: "2021 – 2023", impact: "300+ payments / day",
        body: "Designed and launched a checkout with custom billing that processes 300+ payments a day. It was one of the first React integrations of Mercado Pago.", tags: ["React", "Mercado Pago", "Billing"] },
      { code: "WK.04", line: "From manual coordination to an automated flow.", name: "Final-project tracking", org: "A university", role: "Product & automation lead", when: "Apr 2026 – present", impact: "100+ projects per cycle",
        body: "I own the backend of the system that tracks student capstone projects and coordinates their defense committees: the data layer, the sync and the workflows. Alongside it, I drive automation, BI and AI projects for university operations.",
        steps: [
          { k: "Context", v: "Each submission cycle involves 100+ projects, with defense committees to coordinate within a window of a few days. Approvals arrived as system emails that someone logged by hand in a spreadsheet, and notices to students, mentors and committee members went out manually." },
          { k: "Problem", v: "That manual work was repetitive and error-prone, especially at peak times." },
          { k: "Decision", v: "· One source of truth: a central data hub. I started by parsing notification emails and realized the process needed the underlying data, not just the messages. I also chose the hub over querying the operational system directly.<br>· A separate sync process inside the university's private network, since the hub can't be reached from a spreadsheet script.<br>· n8n workflows for the process itself: confirm project groupings, collect data through a form, email committee members for availability, detect when schedules converge.<br>· Sheets and Gmail stay as the interface, because that is where the team already works." },
          { k: "Result", v: "Complete and implemented." },
          { k: "Learning", v: "Define the source of truth before the tool." }
        ], tags: ["n8n", "Python", "Google Workspace", "AWS", "API design", "Backend"] },
      { code: "WK.05", name: "Finance process automation", org: "Global consulting firm", role: "Management Consultant Senior Analyst", when: "May 2025 – Mar 2026", impact: "Led the automation initiative",
        body: "I led a process-optimisation initiative for the CFO & Enterprise Value practice, automating manual work with Excel and Power Automate. It was the part of consulting I enjoyed most. I also worked on an Anaplan implementation for a North American airline, run in Scrum with Jira.", tags: ["Power Automate", "Excel", "Anaplan", "Scrum"] }
    ],
    timeline: [
      { when: "Apr 2026 – present", org: "A university", role: "Project Manager & Business Partner · BI, Automation, AI", note: "Backend owner of the final-project tracking system; automation, BI and AI projects for university operations.", tags: ["API", "BI", "AI agents"] },
      { when: "Jun 2026 – present", org: "A university", role: "Tutorial instructor, Corporate Finance", note: "Part-time teaching assistant for Corporate Finance.", tags: ["Teaching", "Finance"] },
      { when: "Apr 2027 – 2028", org: "Universidad de San Andrés", kind: "edu", role: "Master in Finance (MFin), incoming", note: "Class of 2028.", tags: ["MFin"] },
      { when: "May 2025 – Mar 2026", org: "Global consulting firm", role: "Management Consultant Senior Analyst", note: "Led a process-automation initiative for the CFO & Enterprise Value practice; Anaplan for a North American airline.", tags: ["Anaplan", "Scrum", "Power Automate"] },
      { when: "Nov 2023 – Apr 2025", org: "Software studio", role: "Project Leader", note: "Event SaaS for 5+ clients on three continents; team of six.", tags: ["Jira", "Roadmap", "Clients"] },
      { when: "Mar 2021 – Oct 2023", org: "Software studio", role: "Senior Developer", note: "Mobile apps and a checkout processing 300+ daily payments.", tags: ["React Native", "Expo", "React"] },
      { when: "Jan – May 2023", org: "IE University, Madrid", kind: "edu", role: "Exchange semester, BBA", note: "", tags: [] },
      { when: "Mar 2020 – Dec 2024", org: "Universidad de San Andrés", kind: "edu", role: "Lic. in Business Administration & Digital Business", note: "GPA 8.6/10, top 10%, merit scholarship. TA in Data Architecture, Finance Club.", tags: [] }
    ],
    skills: [
      { code: "SK.01", name: "Build", items: ["React", "React Native", "Expo", "JavaScript / TypeScript", "HTML / CSS", "Node / Express", "Python", "SQL", "MongoDB", "Webflow"] },
      { code: "SK.02", name: "Cloud & systems", items: ["AWS", "API design", "System design", "Database design", "AI agents"] },
      { code: "SK.03", name: "Product & PM", items: ["Jira", "Scrum", "Roadmapping", "Stakeholder management", "Figma", "Notion"] },
      { code: "SK.04", name: "Finance & automation", items: ["n8n", "Power Automate", "BI", "Anaplan (certified)", "Excel modelling", "FP&A"] },
      { code: "SK.05", name: "Languages", items: ["Spanish (native)", "English (fluent, TOEFL iBT 110)"] }
    ],
    stackSentence: "I build with {React}, {React Native} and {Expo} in {TypeScript}, back it with {Node}, {Python}, {SQL} and {MongoDB} on {AWS}, and ship marketing sites in {Webflow}.",
    finance: [
      { k: "MFin", v: "Master in Finance at Universidad de San Andrés, starting April 2027, class of 2028." },
      { k: "Teaching", v: "University tutorial instructor for Corporate Finance since June 2026." },
      { k: "Consulting", v: "Finance process automation at a global firm until March 2026. Anaplan Model Builder certified." },
      { k: "Research", v: "I keep a structured equity-research process for long-term investing: business, financials, valuation, scorecard." },
      { k: "Roots", v: "Business & Digital Business at UdeSA, top 10%. Finance Club member." }
    ],
    services: [
      { code: "SV.01", name: "Automation & BI", sub: "Processes", body: "I take a manual process (scattered Excel files, emails, spreadsheets) and turn it into an automatic flow with dashboards people actually use.", deliv: "Process map, working automation and documentation.", ideal: "Finance and operations teams, institutions." },
      { code: "SV.02", name: "AI agents", sub: "Internal processes", body: "Classification, data intake, replies and follow-up, with humans supervising.", deliv: "A prototype in real use plus evaluation criteria.", ideal: "" },
      { code: "SV.03", name: "Web & product", sub: "With monthly support", body: "Site or app, infrastructure, CMS and forms, with ongoing maintenance on a monthly plan.", deliv: "", ideal: "" }
    ],
    delivLabel: "Deliverable", idealLabel: "Ideal for",
    freelance: "I take freelance work in these three shapes, and I run each one as its project manager. Remote from Buenos Aires, with EU work authorization (Argentina, Germany and Italy citizenship).",
    lab: [
      { name: "Python games", status: "Built", why: "How I learned Python: loops, state and collisions.", url: "https://github.com/rochijacob/python_games" },
      { name: "Dog-in-the-pool detector", status: "In progress", why: "Computer vision applied to a household problem." },
      { name: "Mental-health bot for an NGO", status: "Experimental", why: "AI with judgement and human supervision." }
    ],
    labIntro: "Things I build out of curiosity.",
    off: { t: "Off the clock", p: "I DJ and play electronic music. I also love art and photography. The little pink pixel panther is a nod to my favourite cartoon." },
    today: "Today, Project Manager & Business Partner in BI, Automation and AI at a university.",
    expWork: "Work", expEdu: "Education",
    why: "Why work with me", menu: "Menu", workCols: { p: "Project", w: "When", i: "Result" },
    readCase: "Read the full case", seeWork: "See the work", remoteNote: "Buenos Aires, remote work", moreWork: "More work",
    fact: { scale: "Scale", role: "Role", stack: "Stack", when: "When" },
    gotMind: "Got something in mind?", reach: "Or write to me at",
    illo: "Line drawing of the Buenos Aires skyline with the Obelisk",
    booksIntro: "I learn by reading books and then building something with what I read.",
    booksNote: "Hover or tap a spine.",
    writingIntro: "Notes on product, finance and what I am learning.",
    soon: "soon",
    contactTitle: "Have a product, a project or a process that needs an owner?",
    contactBody: "Tell me what you are building. I answer every email.",
    footer: { email: "Email", linkedin: "LinkedIn", github: "GitHub", rights: "© 2026 Rocío Jacob" },
    view: "View", close: "Close", open: "Open", repo: "Repository",
    /* A · Notebook */
    a: {
      hero: "Hi, I'm Rocío. I'm a <a class=\"chip\" href=\"#work\">product engineer</a> in Buenos Aires. I build products, automation and analytics so organizations decide better and do less manual work. I taught myself to code in 2021 from <a class=\"chip\" href=\"#books\">books</a> and the open web. Since then I have built an app that 40K people open every day, led a team of six, and worked in <a class=\"chip\" href=\"#finance\">finance</a>. Now I am teaching Corporate Finance and getting ready for a Master in Finance (April 2027).",
      kicker: "A notebook, kept in public", cardNow: "Now", cardNowBody: "Building automation, BI and AI for a university. Teaching Corporate Finance. MFin starts April 2027.", cardReading: "Reading", cardReadingLink: "Books I've read"
    },
    /* B · Dock */
    b: {
      
      playTitle: "Playground", playBody: "I learned Python by building small games. This is a tiny browser remake of that habit: a hop-through-the-gaps loop in plain canvas. The originals (pygame / turtle) are on my GitHub.",
      playHint: "Space, click or tap to hop", playScore: "Score", playBest: "Best", playStart: "Press to start", playOver: "Game over · press to retry", originals: "See the originals"
    },
    /* D · Ledger */
    d: {
      manifesto: "Software that feels obvious, numbers that hold up.",
      scroll: "scroll", ticker: "ROCI", exchange: "Buenos Aires · career index", since: "since 2021", chartTitle: "Career, charted",
      illustrative: "Index values and weights are illustrative: explicit creative choices, not measurements.",
      ranges: { y1: "1Y", y3: "3Y", max: "MAX" },
      milestones: [
        { t: 2021.2, v: 10, l: "2021 · Self-taught start, first shipped app" },
        { t: 2022.5, v: 30, l: "2022 · Gym app reaches 40K daily users" },
        { t: 2023.85, v: 48, l: "Nov 2023 · Project Leader, team of six" },
        { t: 2025.35, v: 62, l: "May 2025 · Consulting: finance process automation" },
        { t: 2026.28, v: 72, l: "Apr 2026 · PM & Business Partner at a university" },
        { t: 2026.45, v: 82, l: "Jun 2026 · Teaching Corporate Finance" },
        { t: 2026.87, v: 86, l: "Today · MFin starts April 2027" }
      ],
      storyTitle: "The story so far",
      story: [
        { h: "I started with books.", p: "In 2021 I taught myself HTML and JavaScript, then React and React Native with Expo.", href: "#books" },
        { h: "Then I shipped.", p: "An app for Argentina's largest gym chain with 500K+ downloads and 40K daily users, and a checkout that handles 300+ payments a day.", href: "#positions" },
        { h: "Then I led.", p: "Project Leader for a team of six on an event SaaS used by 15K+ people across three continents.", href: "#experience" },
        { h: "Then I automated.", p: "At a global consulting firm, what I enjoyed most was leading a process-automation initiative. Today I build automation, BI and AI for a university, and teach Corporate Finance.", href: "#holdings" }
      ],
      pairs: ["PRODUCT + FINANCE", "CODE + DESIGN", "BUILD + LEAD", "BOOKS + SHIPPING"],
      thesisTitle: "Thesis", thesisSub: "Why work with me",
      thesis: [
        { h: "A builder who can underwrite.", p: "I write the code and I read the P&L. Few product people have worked inside a finance function; few finance people have shipped to 40K daily users." },
        { h: "Operating evidence, not adjectives.", p: "500K+ downloads, 300+ daily payments, 5+ clients on three continents, a team of six." },
        { h: "Curiosity that compounds.", p: "I learn from books, build with what I read, and now teach it: Corporate Finance at university level, MFin class of 2028." }
      ],
      holdingsTitle: "Holdings", holdingsSub: "Where my time is allocated",
      holdings: [
        { tk: "PRDE", name: "Product Engineering", w: 30, p: "React and React Native in production. The core position." },
        { tk: "PPMG", name: "Project & Product Mgmt", w: 25, p: "Six-person team, 5+ client accounts, roadmap to stakeholders." },
        { tk: "AUTO", name: "Automation & AI", w: 18, p: "Agents, BI and workflows. The growth position." },
        { tk: "FNCE", name: "Finance", w: 17, p: "Corporate Finance teaching, MFin 2028, Anaplan. Adding steadily." },
        { tk: "DSGN", name: "Design / UX", w: 10, p: "Small weight, applied to everything else." }
      ],
      cols: { ticker: "Ticker", holding: "Holding", weight: "Weight", thesis: "Thesis", position: "Position", entry: "Entry", impact: "Impact", conviction: "Conviction", title: "Title" },
      positionsTitle: "Track record", positionsSub: "Positions, entry and impact",
      booksTitle: "Reading portfolio", conviction: { high: "High", medium: "Medium", low: "Low" },
      talk: "Should we talk? We should talk."
    }
  },

  es: {
    meta: { title: "Rocío Jacob · Product Engineer", desc: "Construyo producto, automatización y analítica para que las organizaciones decidan mejor y trabajen menos a mano. Buenos Aires, remoto a todo el mundo." },
    name: "Rocío Jacob", role: "Product Engineer",
    oneLiner: "Soy Rocío. Construyo producto, automatización y analítica para que las organizaciones decidan mejor y trabajen menos a mano.",
    pitch: "Construyo producto, automatización y analítica para que las organizaciones decidan mejor y trabajen menos a mano.",
    sub: "Project Manager & Business Partner en BI, Automatización e IA. Ex consultoría global en finanzas. Tomo proyectos freelance.",
    location: "Buenos Aires, Argentina", remote: "Buenos Aires · Remoto a todo el mundo",
    status: "Disponible para freelance · Buenos Aires",
    cta: "Trabajemos juntos", ctaAlt: "Hablemos", mailSubject: "Proyecto para Rocío",
    skip: "Ir al contenido", langLabel: "Idioma", themeLabel: "Cambiar modo claro / oscuro", portraitAlt: "Avatar en pixel art de Rocío Jacob",
    nav: { home: "Inicio", about: "Sobre mí", work: "Trabajo", experience: "Experiencia", skills: "Stack", books: "Libros", writing: "Escritos", contact: "Contacto", play: "Playground", services: "Servicios" },
    h: { services: "Servicios", about: "Sobre mí", work: "Proyectos destacados", experience: "Experiencia", skills: "Herramientas", books: "Libros", writing: "Escritos", contact: "Trabajemos juntos", finance: "El lado financiero", lab: "Lab", numbers: "En números" },
    about: [
      "Aprendí a programar sola en 2021, con libros y la web: primero HTML y JavaScript, después React y React Native. Publiqué más de cinco apps, lideré un equipo de seis y hoy trabajo en automatización, agentes de IA y diseño de sistemas.",
      "Soy Licenciada en Administración y Negocios Digitales por San Andrés (top 10%, intercambio en IE University). En una consultora global automaticé procesos de finanzas, así que hablo producto y finanzas. Doy clases de Finanzas Corporativas y en abril de 2027 empiezo la Maestría en Finanzas de UdeSA.",
      "Me importan los productos lindos, rápidos y que le simplifiquen el día a alguien. Todo lo que hago tiene que verse bien."
    ],
    stats: [
      { n: "500K+", l: "descargas de la app de la mayor cadena de gimnasios de Argentina" },
      { n: "40K", l: "usuarios activos por día" },
      { n: "15K+", l: "usuarios en un SaaS de ticketing, en tres continentes" },
      { n: "300+", l: "pagos por día en un checkout a medida" },
      { n: "6", l: "personas a cargo como Project Leader" },
      { n: "5+", l: "apps construidas con React Native + Expo" },
      { n: "10+", l: "clientes con sitios en Webflow" },
      { n: "100+", l: "trabajos finales por entrega en el sistema que construí" }
    ],
    cases: [
      { code: "WK.01", line: "Más de 500 mil descargas y 40 mil usuarios por día.", name: "App para una cadena de gimnasios", org: "Estudio de software", role: "Desarrollo mobile", when: "2021 – 2025", impact: "500K+ descargas · 40K usuarios diarios",
        body: "Desarrollé y mantuve la app de la mayor cadena de gimnasios de Argentina. La usan decenas de miles de personas por día, así que el foco estuvo en la velocidad, la experiencia de uso y los detalles.", tags: ["React Native", "Expo"] },
      { code: "WK.02", line: "Ticketing para más de 15 mil usuarios en tres continentes.", name: "Plataforma SaaS de eventos", org: "Estudio de software", role: "Project Leader", when: "Nov 2023 – Abr 2025", impact: "15K+ usuarios · 5+ clientes",
        body: "Lideré el desarrollo de una plataforma de ticketing, control de accesos y relación con clientes, usada por festivales de música y eventos cripto en América, Europa y Asia. Coordiné un equipo de seis personas, manejé más de cinco cuentas de clientes y definí las prioridades y el roadmap junto a ellos.", tags: ["Liderazgo de proyecto", "Jira", "Roadmap", "React"] },
      { code: "WK.03", name: "Checkout de alto volumen", org: "Estudio de software", role: "Senior Developer", when: "2021 – 2023", impact: "300+ pagos / día",
        body: "Diseñé y lancé un checkout con facturación a medida que procesa más de 300 pagos por día. Una de las primeras integraciones de Mercado Pago en React.", tags: ["React", "Mercado Pago", "Facturación"] },
      { code: "WK.04", line: "De la coordinación manual a un flujo automatizado.", name: "Seguimiento de trabajos finales", org: "Una universidad", role: "Líder de producto y automatización", when: "Abr 2026 – presente", impact: "Más de 100 trabajos por entrega",
        body: "Estoy a cargo del backend del sistema que hace el seguimiento de los trabajos finales de grado y coordina las mesas de defensa: datos, sincronización y flujos de trabajo. En paralelo llevo adelante proyectos de automatización, BI e IA para la universidad.",
        steps: [
          { k: "Contexto", v: "Cada entrega suma más de 100 trabajos y hay que coordinar las mesas de defensa en pocos días. Las aprobaciones llegaban por mail y alguien las cargaba a mano en una planilla; los avisos a alumnos, mentores y jurados también salían a mano." },
          { k: "Problema", v: "Era un trabajo repetitivo y propenso a errores, sobre todo en las semanas de más entregas." },
          { k: "Decisión", v: "· Una sola fuente de verdad: un data hub central. Empecé procesando los mails de notificación y entendí que el proceso necesitaba los datos en sí, no solo los mensajes. Por eso elegí el hub en lugar de consultar directamente el sistema de gestión.<br>· Un proceso de sincronización separado, dentro de la red privada de la universidad, porque al hub no se puede acceder desde un script de la planilla.<br>· Flujos en n8n para el proceso: confirmar los grupos de trabajos, reunir datos con un formulario, pedirles disponibilidad a los jurados y detectar cuándo coinciden las agendas.<br>· Sheets y Gmail siguen siendo la interfaz, porque es donde el equipo ya trabaja." },
          { k: "Resultado", v: "Completo e implementado." },
          { k: "Aprendizaje", v: "Definir la fuente de verdad antes que la herramienta." }
        ], tags: ["n8n", "Python", "Google Workspace", "AWS", "Diseño de APIs", "Backend"] },
      { code: "WK.05", name: "Automatización de procesos de finanzas", org: "Consultora global", role: "Management Consultant Senior Analyst", when: "May 2025 – Mar 2026", impact: "Lideré la iniciativa de automatización",
        body: "Lideré una iniciativa de optimización de procesos para la práctica de CFO & Enterprise Value: automaticé trabajo manual con Excel y Power Automate. Fue lo que más disfruté de la consultoría. También participé en una implementación de Anaplan para una aerolínea norteamericana.", tags: ["Power Automate", "Excel", "Anaplan", "Scrum"] }
    ],
    timeline: [
      { when: "Abr 2026 – presente", org: "Una universidad", role: "Project Manager & Business Partner · BI, Automatización, IA", note: "Backend del sistema de seguimiento de trabajos finales; automatización, BI e IA para la universidad.", tags: ["API", "BI", "Agentes de IA"] },
      { when: "Jun 2026 – presente", org: "Una universidad", role: "Ayudante de cátedra, Finanzas Corporativas", note: "Clases de tutorial, part-time.", tags: ["Docencia", "Finanzas"] },
      { when: "Abr 2027 – 2028", org: "Universidad de San Andrés", kind: "edu", role: "Maestría en Finanzas (MFin), inicio en 2027", note: "Promoción 2028.", tags: ["MFin"] },
      { when: "May 2025 – Mar 2026", org: "Consultora global", role: "Management Consultant Senior Analyst", note: "Lideré una iniciativa de automatización de procesos; Anaplan para una aerolínea.", tags: ["Anaplan", "Scrum", "Power Automate"] },
      { when: "Nov 2023 – Abr 2025", org: "Estudio de software", role: "Project Leader", note: "SaaS de eventos para más de 5 clientes en tres continentes; equipo de seis.", tags: ["Jira", "Roadmap", "Clientes"] },
      { when: "Mar 2021 – Oct 2023", org: "Estudio de software", role: "Senior Developer", note: "Apps móviles y un checkout que procesa más de 300 pagos diarios.", tags: ["React Native", "Expo", "React"] },
      { when: "Ene – May 2023", org: "IE University, Madrid", kind: "edu", role: "Semestre de intercambio, BBA", note: "", tags: [] },
      { when: "Mar 2020 – Dic 2024", org: "Universidad de San Andrés", kind: "edu", role: "Lic. en Administración de Empresas y Negocios Digitales", note: "Promedio 8,6/10, top 10%, beca al mérito. Ayudante en Arquitectura de Datos, Finance Club.", tags: [] }
    ],
    skills: [
      { code: "SK.01", name: "Desarrollo", items: ["React", "React Native", "Expo", "JavaScript / TypeScript", "HTML / CSS", "Node / Express", "Python", "SQL", "MongoDB", "Webflow"] },
      { code: "SK.02", name: "Cloud y sistemas", items: ["AWS", "Diseño de APIs", "Diseño de sistemas", "Diseño de bases de datos", "Agentes de IA"] },
      { code: "SK.03", name: "Producto y gestión", items: ["Jira", "Scrum", "Roadmaps", "Gestión de stakeholders", "Figma", "Notion"] },
      { code: "SK.04", name: "Finanzas y automatización", items: ["n8n", "Power Automate", "BI", "Anaplan (certificada)", "Modelos en Excel", "FP&A"] },
      { code: "SK.05", name: "Idiomas", items: ["Español (nativo)", "Inglés (fluido, TOEFL iBT 110)"] }
    ],
    stackSentence: "Construyo con {React}, {React Native} y {Expo} en {TypeScript}, lo respaldo con {Node}, {Python}, {SQL} y {MongoDB} sobre {AWS}, y publico sitios de marketing en {Webflow}.",
    finance: [
      { k: "MFin", v: "Maestría en Finanzas en la Universidad de San Andrés, desde abril de 2027, promoción 2028." },
      { k: "Docencia", v: "Ayudante de cátedra de Finanzas Corporativas desde junio de 2026." },
      { k: "Consultoría", v: "Automatización de procesos de finanzas en una firma global hasta marzo de 2026. Certificación Anaplan Model Builder." },
      { k: "Research", v: "Sostengo un proceso estructurado de equity research para invertir a largo plazo: negocio, estados financieros, valuación, scorecard." },
      { k: "Base", v: "Administración y Negocios Digitales en UdeSA, top 10%. Miembro del Finance Club." }
    ],
    services: [
      { code: "SV.01", name: "Automatización y BI", sub: "Procesos", body: "Convierto un proceso manual (planillas sueltas, mails, cargas a mano) en un flujo automático, con tableros que el equipo realmente usa.", deliv: "Mapa del proceso, automatización en funcionamiento y documentación.", ideal: "Finanzas, operaciones, instituciones." },
      { code: "SV.02", name: "Agentes de IA", sub: "Procesos internos", body: "Agentes que clasifican, cargan datos, responden y hacen seguimiento, siempre con supervisión de personas.", deliv: "Un prototipo en uso real y criterios para evaluarlo.", ideal: "" },
      { code: "SV.03", name: "Web y producto", sub: "Con soporte mensual", body: "Sitio o app con su infraestructura, CMS y formularios, y mantenimiento por abono mensual.", deliv: "", ideal: "" }
    ],
    delivLabel: "Entregable", idealLabel: "Ideal para",
    freelance: "Tomo proyectos freelance en estos tres formatos y en todos me ocupo también de la gestión. Trabajo remoto desde Buenos Aires y tengo permiso de trabajo en la Unión Europea (ciudadanía argentina, alemana e italiana).",
    lab: [
      { name: "Juegos en Python", status: "Terminado", why: "Así aprendí Python: loops, estado y colisiones.", url: "https://github.com/rochijacob/python_games" },
      { name: "Detector de perros en la pileta", status: "En progreso", why: "Visión por computadora aplicada a un problema doméstico." },
      { name: "Bot de salud mental para una ONG", status: "Experimental", why: "IA con criterio y supervisión humana." }
    ],
    labIntro: "Cosas que armo por curiosidad.",
    off: { t: "Fuera del trabajo", p: "Soy DJ y toco música electrónica. Me encantan el arte y la fotografía. La panterita rosa en píxeles es un guiño a mi dibujo animado favorito." },
    today: "Hoy soy Project Manager & Business Partner en BI, Automatización e IA en una universidad.",
    expWork: "Experiencia laboral", expEdu: "Formación",
    why: "Por qué trabajar conmigo", menu: "Menú", workCols: { p: "Proyecto", w: "Período", i: "Resultado" },
    readCase: "Leer el caso completo", seeWork: "Ver proyectos", remoteNote: "Buenos Aires · Trabajo remoto", moreWork: "Otros proyectos",
    fact: { scale: "Escala", role: "Rol", stack: "Stack", when: "Cuándo" },
    gotMind: "¿Tenés algo en mente?", reach: "O escribime a",
    illo: "Croquis del perfil de Buenos Aires, con el Obelisco en el centro",
    booksIntro: "Aprendo leyendo y después pongo en práctica lo que leí.",
    booksNote: "Pasá el cursor o tocá un lomo.",
    writingIntro: "Notas sobre producto, finanzas y lo que voy aprendiendo.",
    soon: "pronto",
    contactTitle: "¿Tenés un producto, un proyecto o un proceso que necesita dueña?",
    contactBody: "Contame en qué estás trabajando. Respondo todos los mails.",
    footer: { email: "Email", linkedin: "LinkedIn", github: "GitHub", rights: "© 2026 Rocío Jacob" },
    view: "Ver", close: "Cerrar", open: "Abrir", repo: "Repositorio",
    a: {
      hero: "Hola, soy Rocío, <a class=\"chip\" href=\"#work\">product engineer</a> en Buenos Aires. Construyo producto, automatización y analítica para que las organizaciones decidan mejor y trabajen menos a mano. Aprendí a programar sola en 2021, con <a class=\"chip\" href=\"#books\">libros</a> y la web. Desde entonces hice una app que 40 mil personas abren todos los días, lideré un equipo de seis y trabajé en <a class=\"chip\" href=\"#finance\">finanzas</a>. Hoy doy clases de Finanzas Corporativas y en abril de 2027 empiezo una Maestría en Finanzas.",
      kicker: "Un cuaderno abierto", cardNow: "Ahora", cardNowBody: "Automatización, BI e IA para una universidad. Dando Finanzas Corporativas. El MFin arranca en abril de 2027.", cardReading: "Leyendo", cardReadingLink: "Libros que leí"
    },
    b: {
      
      playTitle: "Playground", playBody: "Aprendí Python haciendo juegos chicos. Esta es una versión mínima de esa costumbre, hecha para el navegador: un loop de saltar entre huecos en canvas puro. Los originales (pygame / turtle) están en mi GitHub.",
      playHint: "Espacio, clic o toque para saltar", playScore: "Puntos", playBest: "Récord", playStart: "Tocá para empezar", playOver: "Fin del juego · tocá para reintentar", originals: "Ver los originales"
    },
    d: {
      manifesto: "Software que se siente obvio, números que se sostienen.",
      scroll: "seguí bajando", ticker: "ROCI", exchange: "Buenos Aires · índice de carrera", since: "desde 2021", chartTitle: "La carrera, en un gráfico",
      illustrative: "Los valores del índice y las ponderaciones son ilustrativos: decisiones creativas explícitas, no mediciones.",
      ranges: { y1: "1A", y3: "3A", max: "MÁX" },
      milestones: [
        { t: 2021.2, v: 10, l: "2021 · Inicio autodidacta, primera app publicada" },
        { t: 2022.5, v: 30, l: "2022 · La app de gimnasios llega a 40K usuarios diarios" },
        { t: 2023.85, v: 48, l: "Nov 2023 · Project Leader, equipo de seis" },
        { t: 2025.35, v: 62, l: "May 2025 · Consultoría: automatización de procesos de finanzas" },
        { t: 2026.28, v: 72, l: "Abr 2026 · PM & Business Partner en una universidad" },
        { t: 2026.45, v: 82, l: "Jun 2026 · Docente de Finanzas Corporativas" },
        { t: 2026.87, v: 86, l: "Hoy · El MFin arranca en abril de 2027" }
      ],
      storyTitle: "La historia hasta acá",
      story: [
        { h: "Empecé con libros.", p: "En 2021 aprendí sola HTML y JavaScript; después, React y React Native.", href: "#books" },
        { h: "Después lancé productos.", p: "Una app para la mayor cadena de gimnasios de Argentina (500K+ descargas, 40K usuarios por día) y un checkout con más de 300 pagos diarios.", href: "#positions" },
        { h: "Después lideré equipos.", p: "Project Leader de un equipo de seis en un SaaS de eventos con más de 15K usuarios en tres continentes.", href: "#experience" },
        { h: "Después automaticé procesos.", p: "En una consultora global lideré una iniciativa de automatización de procesos. Hoy desarrollo automatización, BI e IA para una universidad y doy clases de Finanzas Corporativas.", href: "#holdings" }
      ],
      pairs: ["PRODUCTO + FINANZAS", "CÓDIGO + DISEÑO", "DESARROLLO + LIDERAZGO", "LECTURA + PRÁCTICA"],
      thesisTitle: "Tesis", thesisSub: "Por qué trabajar conmigo",
      thesis: [
        { h: "Desarrollo producto y entiendo los números.", p: "Escribo el código y leo el estado de resultados. Poca gente de producto trabajó dentro de un área de finanzas, y poca gente de finanzas lanzó un producto que usan 40 mil personas por día." },
        { h: "Evidencia, no adjetivos.", p: "Más de 500 mil descargas, más de 300 pagos por día, clientes en tres continentes y un equipo de seis personas." },
        { h: "Aprendo, aplico y enseño.", p: "Leo, pongo en práctica lo que leo y ahora también lo enseño: doy clases de Finanzas Corporativas y en 2027 empiezo la Maestría en Finanzas." }
      ],
      holdingsTitle: "Tenencias", holdingsSub: "Dónde está asignado mi tiempo",
      holdings: [
        { tk: "PRDE", name: "Ingeniería de producto", w: 30, p: "React y React Native en producción. La posición central." },
        { tk: "PPMG", name: "Gestión de proyecto y producto", w: 25, p: "Equipo de seis, más de 5 cuentas, roadmap ante stakeholders." },
        { tk: "AUTO", name: "Automatización e IA", w: 18, p: "Agentes, BI y flujos. La posición de crecimiento." },
        { tk: "FNCE", name: "Finanzas", w: 17, p: "Docencia en Finanzas Corporativas, MFin 2028, Anaplan. Sumando de a poco." },
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
  return `<span class="portrait"><span aria-hidden="true">RJ</span><img src="profile.png" alt="${esc(T().portraitAlt)}" width="96" height="96" style="image-rendering:pixelated" onload="this.previousElementSibling.style.visibility='hidden'" onerror="this.remove()"></span>`;
}
const caseBody = c => c.body + (c.steps ? "<br><br>" + c.steps.map(x => `<b>${x.k}.</b> ${x.v}`).join("<br>") : "");
const svcBody = s => s.body + (s.deliv ? `<br><b>${T().delivLabel}:</b> ${s.deliv}` : "") + (s.ideal ? `<br><b>${T().idealLabel}:</b> ${s.ideal}` : "");
/* Experience split in two groups: work first, then education. */
document.head.insertAdjacentHTML("beforeend", "<style>.exh{display:block!important;font-weight:600;padding:26px 0 10px!important;border:0!important;margin:0}.exh:first-child{padding-top:0!important}</style>");
const expSplit = (t, row, tag = "li", cls = "") => [[t.expWork, t.timeline.filter(e => e.kind !== "edu")], [t.expEdu, t.timeline.filter(e => e.kind === "edu")]]
  .map(([label, list]) => `<${tag} class="exh ${cls}">${label}</${tag}>` + list.map(row).join("")).join("");
const labMeta = l => (l.status ? l.status + " · " : "") + l.why;
const labName = l => l.url ? `<a href="${l.url}" ${ext}>${l.name}</a>` : l.name;
/* Original pixel-art mascot (a generic pink cat) and a small equalizer. Decorative only. */
const PINK = "#e56b9a";
/* Pick the mascot here: "cat" (the original), "walk" (panther walking) or "sit" (panther sitting). */
const MASCOT = "cat";
const MASCOTS = {
  cat: ["..........X..X", "X.........XXXX", "X.........XoXo", "X.........XXXX", ".X..XXXXXXXXX.", "..XXXXXXXXXXX.", "...XXXXXXXXXX.", "...XXXXXXXXX..", "...X..X..X.X..", "...X..X..X.X.."],
  walk: ["................X.X.", "...............XXXXX", "X..............XoXXX", "X....XXXXXXXXXXXXXX.", ".X..XXXXXXXXXXXXXX..", "..XXXXXXXXXXXXXXX...", "....XXXXXXXXXXXXX...", "....XX.XX....XX.XX..", "....X..X.....X..X...", "...XX.XX....XX.XX..."],
  sit: ["..X...X.....", "..XXXXX.....", "..XoXoX.....", "..XXXXX.....", "...XXX......", "..XXXXX.....", "..XXXXXX....", ".XXXXXXX....", ".XXXXXXX...X", ".XXXXXXXX..X", ".XXXXXXXX..X", ".XX.XXXXX.X.", ".XX.XXXXXXX.", "XXX.XXX....."]
};
const CAT = MASCOTS[MASCOT];
const pixelCat = (px = 4, grid = CAT) => `<svg width="${grid[0].length * px}" height="${grid.length * px}" viewBox="0 0 ${grid[0].length} ${grid.length}" shape-rendering="crispEdges" aria-hidden="true">` +
  grid.map((r, j) => [...r].map((c, i) => c === "." ? "" : `<rect x="${i}" y="${j}" width="1" height="1" fill="${c === "o" ? "#003049" : PINK}"/>`).join("")).join("") + `</svg>`;
document.head.insertAdjacentHTML("beforeend", `<style>.eq{display:inline-flex;gap:2px;align-items:flex-end;height:14px;margin-right:8px}.eq i{width:3px;height:14px;background:${PINK};transform-origin:bottom;animation:eq .9s ease-in-out infinite alternate}.eq i:nth-child(2){animation-delay:-.3s}.eq i:nth-child(3){animation-delay:-.6s}.eq i:nth-child(4){animation-delay:-.15s}@keyframes eq{from{transform:scaleY(.2)}to{transform:scaleY(1)}}@media(prefers-reduced-motion:reduce){.eq i{animation:none;transform:scaleY(.6)}}</style>`);
const offClock = () => `<p class="off"><span class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span><b>${T().off.t}.</b> ${T().off.p}</p>`;
/* Books as slim spines, each styled after its cover. Hover or tap to read title and author. */
document.head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@300;600&family=Permanent+Marker&family=Playfair+Display:wght@700&display=swap"><style>
.spines{display:flex;align-items:flex-end;gap:5px;overflow-x:auto;padding:26px 6px 0}
.spines.shelf{border-bottom:8px solid var(--shelf,var(--ink))}
.spn{flex:0 0 auto;padding:12px 0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:10px;border-radius:2px;transform-origin:bottom center;box-shadow:2px 4px 10px rgba(0,0,0,.2),inset 3px 0 0 rgba(255,255,255,.14),inset -3px 0 0 rgba(0,0,0,.16);transition:transform .25s cubic-bezier(.2,.8,.2,1)}
.spn:nth-child(4n+2){transform:rotate(-1.6deg)}.spn:nth-child(5n+4){transform:rotate(1.2deg)}
.spn:hover,.spn:focus-visible,.spn[aria-pressed=true]{transform:translateY(-12px)}
.spn i{flex:0 0 auto;width:60%;height:5px;background:var(--ac)}
.spn span{writing-mode:vertical-rl;display:flex;align-items:center;gap:14px;min-height:0;white-space:nowrap;overflow:hidden}
.spn b{font-weight:inherit;line-height:1}
.spn em{font:400 .62rem/1 system-ui,sans-serif;font-style:normal;letter-spacing:.08em;text-transform:uppercase;opacity:.85}
.spines>.cat{margin-left:auto;align-self:flex-end;line-height:0;padding-left:14px}
.spcap{min-height:1.6em;margin:14px 0 0}
</style>`);
let openBook = -1;
const spineCap = () => openBook < 0 ? T().booksNote : `${esc(content.books[openBook].title)} · ${esc(content.books[openBook].author)}`;
const bookShelf = (shelf = false) => `<div class="spines${shelf ? " shelf" : ""}">${content.books.map((b, i) => { const p = b.spine; return `<button type="button" class="spn" data-spine="${i}" aria-pressed="${i === openBook}" aria-label="${esc(b.title)}, ${esc(b.author)}" style="width:${p.w}px;height:${p.h}px;background:${p.bg};color:${p.fg};--ac:${p.ac};font-family:${p.font};font-weight:${p.wt || 400};font-size:${p.fs || ".95rem"};letter-spacing:${p.ls || ".02em"}${p.up ? ";text-transform:uppercase" : ""}"><i></i><span><b>${esc(b.title)}</b><em>${esc(b.author.split(" ").pop())}</em></span><i></i></button>`; }).join("")}${shelf ? `<span class="cat">${pixelCat(5)}</span>` : ""}</div><p class="spcap" id="spcap" aria-live="polite">${spineCap()}</p>`;
function pickSpine(i) {
  openBook = i; $$("[data-spine]").forEach(x => x.setAttribute("aria-pressed", +x.dataset.spine === i));
  const c = $("#spcap"); if (c) c.textContent = spineCap().replace(/&amp;/g, "&");
}
document.addEventListener("click", e => { const d = e.target.closest("[data-spine]"); if (d) pickSpine(+d.dataset.spine); });
document.addEventListener("mouseover", e => { const d = e.target.closest("[data-spine]"); if (d && +d.dataset.spine !== openBook) pickSpine(+d.dataset.spine); });
document.addEventListener("focusin", e => { const d = e.target.closest("[data-spine]"); if (d && +d.dataset.spine !== openBook) pickSpine(+d.dataset.spine); });
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
  const again = $(`[data-lang="${lang}"]`) || $("[data-lang]"); if (again) again.focus();
});
