import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
export const CONTENT = {
  pt: {
    hero: `Formado em Análise e Desenvolvimento de Sistemas, sou Desenvolvedor Full-Stack com foco atual em Inteligência Artificial, LLMs, automação e Python. Uno minha base sólida em React, Next.js, NestJS e bancos de dados ao desenvolvimento de produtos inteligentes, escaláveis e com excelente experiência de usuário.`,

    techs:
      "Estas são as tecnologias que utilizo atualmente, unindo desenvolvimento full-stack, automação e Inteligência Artificial aplicada a produtos reais:",

    experiences: [
      {
        year: "2025 - Atualmente",
        role: "Auxiliar de Arquivo",
        company: "Iron Mountain",
        description: `Atuo na gestão documental de clientes, garantindo organização, rastreabilidade e acesso eficiente às informações. Também lidero atividades operacionais do time, mantenho processos padronizados e desenvolvo planilhas automatizadas e relatórios para análise de dados e apoio à tomada de decisão.`,
        technologies: ["Excel", "Automação", "Análise de Dados"],
      },
      {
        year: "2021 - 2025",
        role: "Estoquista",
        company: "Grupo Tesoura de Ouro",
        description: `Fui responsável pelo gerenciamento de estoque e melhoria de processos, assegurando precisão no fluxo de materiais e eficiência operacional.`,
        technologies: ["Processos", "Indicadores", "Controle"],
      },
    ],

    projects: [
      {
        title: "Galaxy",
        placeholder: true,
        description:
          "Plataforma pessoal de organização e marketing pessoal: mapeia conexões entre pessoas, sistemas e projetos num grafo visual (inspirado no grafo do Obsidian), com análises de rede geradas pela minha própria API de IA. Também vai reunir um quadro de tarefas estilo Kanban, com priorização e análises automatizadas. Ainda em fase de planejamento.",
        technologies: ["React", "IA", "Grafos", "Kanban"],
        source: "",
        deploy: "",
      },
      {
        title: "VoiceAgent", // troque pelo nome final quando decidir
        placeholder: true,
        description:
          "Agente de IA controlado por voz e chat para automação do PC via atalho — sua Alexa pessoal open source.",
        technologies: ["Python", "OpenClaw", "LLM", "Voz"],
        source: "",
        deploy: "",
      },
      {
        title: "Landing Page Sushi Shop",
        image: project1,
        description:
          "Landing page desenvolvida para fortalecer fundamentos de front-end, UI responsiva e boas práticas de código com HTML, CSS e JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        source: "https://github.com/yuriharian/sushi-shop",
        deploy: "https://yuriharian.github.io/sushi-shop/",
      },
      {
        title: "Snake Game",
        image: project2,
        description:
          "Implementação do clássico jogo da cobrinha para aprofundar lógica de programação, manipulação do DOM e gerenciamento de estado em JavaScript puro.",
        technologies: ["HTML", "CSS", "JavaScript"],
        source: "https://github.com/yuriharian/snake-game",
        deploy: "https://yuriharian.github.io/snake-game/",
      },
      {
        title: "Portfolio Website",
        image: project3,
        description:
          "Portfólio moderno focado em performance, animações fluidas e apresentação estratégica de projetos de full-stack e IA.",
        technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
        source: "https://github.com/yuriharian/portfolio-yuri",
        deploy: "",
      },
      {
        title: "EZ QR Code",
        image: project4,
        description:
          "Aplicação desktop em Python para geração, leitura, visualização e exportação de QR Codes com interface intuitiva.",
        technologies: ["Python", "Tkinter", "Pyzbar"],
        source: "https://github.com/yuriharian/ez_qrcode",
        deploy: "",
      },
      {
        title: "MoovieMood",
        image: project5,
        description:
          "Sistema web full-stack para cadastro, avaliação e filtragem de filmes com autenticação, favoritos, busca avançada e arquitetura moderna usando Next.js + NestJS.",
        technologies: ["Next.js", "NestJS", "MongoDB"],
        source: "https://github.com/yuriharian/moviemood",
        deploy: "",
      },
      {
        title: "Dungeon GO",
        image: project6,
        description:
          "Aplicação em desenvolvimento para gerenciamento de fichas de RPG, focada em modelagem de dados, persistência e escalabilidade.",
        technologies: ["Dart", "MySQL"],
        source: "",
        deploy: "",
      },
    ],

    internalProjects: [
      {
        title: "Controle de Operações, Faturamento e Forecast",
        description:
          "Plataforma que centraliza o lançamento diário de produção de uma operação de terceirização de processos, calcula a receita automaticamente e compara o resultado com a meta do período, sinalizando desvios em tempo real. A hierarquia de gestão (líder, coordenador, supervisor, gerente e diretoria) enxerga automaticamente sua própria fatia de dados, sem cadastro manual de permissões. Hoje atende dezenas de contas em setores diferentes e está em expansão para atender a operação em nível nacional.",
        tags: ["Operações", "Faturamento", "Forecast", "Dashboards", "Google Apps Script"],
        status: "Em produção · em expansão nacional",
      },
      {
        title: "Dashboards de Performance Operacional e Migração de Dados Físicos",
        description:
          "Conjunto de painéis para uma operação de grande porte, cobrindo dois fronts: acompanhamento de receita e indicadores por regional comparados à meta, e controle do processo de migração física de documentos e mídias em múltiplos estados, com prazos, status de cada item e comparação automática entre a base própria e os arquivos enviados pelo cliente. Um dos ganhos mais relevantes foi identificar e recuperar receita que antes se perdia por não conseguir ser atribuída corretamente nos relatórios manuais.",
        tags: ["Business Intelligence", "Dashboards", "Controle de Qualidade", "Google Sheets"],
        status: "Em produção",
      },
      {
        title: "Painel de Acompanhamento de Produção em Tempo Real",
        description:
          "Ferramenta que acompanha em tempo real o ritmo de uma operação de digitalização de documentos, comparando o volume já processado com a meta esperada para aquele momento do turno, não só no fechamento do dia. Cheguei a testar uma integração com IA generativa para gerar as análises e, na prática, optei por um sistema de regras claro e auditável no lugar dela — mais previsível para o contexto operacional.",
        tags: ["Automação", "Análise de Dados", "Google Apps Script"],
        status: "Em produção",
      },
      {
        title: "Registro de Atividades e Clima de Equipe",
        description:
          "Ferramenta corporativa multilíngue (PT/EN/ES) usada por equipes da própria Iron Mountain em diferentes países para registrar atividades em tempo real e acompanhar o clima da equipe. Detecta automaticamente o nível de acesso de cada pessoa a partir da própria estrutura organizacional, sem cadastro manual de permissões, e já operou sobre estruturas de milhares de pessoas.",
        tags: ["Multilíngue", "Automação", "Clima Organizacional"],
        status: "Em produção · uso multinacional",
      },
      {
        title: "Protótipo de Torre de Controle Executiva",
        description:
          "Protótipo visual de um painel único pensado para reunir os principais indicadores da empresa — pessoas, operação, financeiro, qualidade e segurança — sem duplicar os sistemas que já existem para cada área. Pensado para apoiar decisões de diretoria e liderança regional, com navegação por mapa geográfico e um modo de apresentação para reuniões. Ainda em fase de planejamento, com dados fictícios.",
        tags: ["Planejamento", "Visualização de Dados", "UX"],
        status: "Em planejamento · protótipo",
      },
      {
        title: "Automação de Catalogação Inteligente",
        description:
          "Solução interna alternativa a uma ferramenta de catalogação de terceiros, criada para reduzir custos operacionais associados a essa tecnologia sem abrir mão da rastreabilidade dos itens.",
        tags: ["Automação", "Redução de Custos", "Python", "IA"],
        status: "Em produção",
      },
    ],

    formation: [
      {
        year: "2023 - 2026",
        course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        company: "UniProjeção",
        tier: "Superior",
      },
      // Destaques
      {
        year: "2024",
        course: "Python 3 Completo",
        company: "Udemy",
        tier: "Curso",
        description:
          "Python avançado, orientação a objetos, automações e aplicações práticas.",
        tags: ["Python"],
        link: "",
      },
      {
        year: "2026",
        course: "Engenheiro de IA",
        company: "Udemy",
        tier: "Curso",
        description:
          "Conceitos e práticas para engenharia de modelos de IA e LLMs.",
        tags: ["IA", "Modelos", "LLM"],
        link: "",
      },
      {
        year: "2026",
        course: "Governança de TI",
        company: "Udemy",
        tier: "Curso",
        description: "Práticas de governança, compliance e gestão de TI.",
        tags: ["Governança", "TI"],
        link: "",
      },
      // Mais cursos
      {
        year: "2026",
        course: "GitLab CI/CD + DevOps",
        company: "Udemy",
        tier: "Curso",
        description:
          "Pipelines, integração contínua, deploy automatizado e fundamentos DevOps.",
        tags: ["CI/CD", "DevOps", "GitLab"],
        link: "",
      },
      {
        year: "2026",
        course: "Automação com n8n e IA",
        company: "Udemy",
        tier: "Curso",
        description: "Fluxos automatizados, APIs e IA aplicada a processos.",
        tags: ["Automação", "n8n", "IA"],
        link: "",
      },
      {
        year: "2026",
        course: "Desenvolvimento Web",
        company: "Udemy",
        tier: "Curso",
        description:
          "Fundamentos sólidos de front-end moderno com HTML, CSS e JavaScript.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "",
      },
      {
        year: "2026",
        course: "C# Completo + Programação Orientada a Objetos",
        company: "Udemy",
        tier: "Curso",
        description:
          "Fundamentos sólidos de C#, POO, coleções, LINQ, APIs e boas práticas para desenvolvimento backend.",
        tags: ["C#", ".NET", "POO", "APIs"],
        link: "",
      },
      {
        year: "2026",
        course: "Docker",
        company: "Udemy",
        tier: "Curso",
        description: "Containers, criação de imagens e ambientes isolados.",
        tags: ["Docker", "Containers"],
        link: "",
      },
      {
        year: "2026",
        course: "LangChain + LangGraph",
        company: "Udemy",
        tier: "Curso",
        description: "Ferramentas e patterns para aplicações baseadas em LLMs.",
        tags: ["LangChain", "LLM"],
        link: "",
      },
      {
        year: "2026",
        course: "Liderança e Gestão de Pessoas",
        company: "Udemy",
        tier: "Curso",
        description: "Habilidades de liderança, comunicação e gestão de times.",
        tags: ["Liderança", "Gestão"],
        link: "",
      },
      {
        year: "2026",
        course: "Comunicação Assertiva",
        company: "Udemy",
        tier: "Curso",
        description:
          "Técnicas de comunicação clara e efetiva no ambiente profissional.",
        tags: ["Comunicação"],
        link: "",
      },
    ],

    contact: {
      linkedIn: "linkedin.com/in/yuri-harian",
      phoneNo: "+55 (61) 98222-2582",
      email: "yuri_harian@outlook.com",
      address: "Recanto das Emas, Brasília - DF",
    },
  },

  en: {
    hero: `Graduated in Systems Analysis and Development, I am a Full-Stack Developer currently focused on Artificial Intelligence, LLMs, automation, and Python. I combine a solid foundation in React, Next.js, NestJS and databases to build intelligent, scalable products with great user experience.`,

    techs:
      "These are the technologies I currently use, combining full-stack development, automation, and AI applied to real products:",

    experiences: [
      {
        year: "2025 - Present",
        role: "Archive Assistant",
        company: "Iron Mountain",
        description:
          "I work with client document management, ensuring organization, traceability and efficient access to information. I also lead operational activities for the team, maintain standardized processes and build automated spreadsheets and reports to support data analysis and decision making.",
        technologies: ["Excel", "Automation", "Data Analysis"],
      },
      {
        year: "2021 - 2025",
        role: "Stock Clerk",
        company: "Grupo Tesoura de Ouro",
        description:
          "I was responsible for inventory management and process improvements, ensuring accuracy in material flow and operational efficiency.",
        technologies: ["Processes", "KPIs", "Control"],
      },
    ],

    projects: [
      {
        title: "Galaxy",
        placeholder: true,
        description:
          "Personal organization and personal-branding platform: it maps connections between people, systems and projects on a visual graph (inspired by Obsidian's graph view), with network analysis generated by my own AI API. It will also bring together a Kanban-style task board with automated prioritization and analytics. Still in the planning stage.",
        technologies: ["React", "AI", "Graphs", "Kanban"],
        source: "",
        deploy: "",
      },
      {
        title: "VoiceAgent",
        placeholder: true,
        description:
          "AI agent controlled by voice and chat to automate your PC with a shortcut — your personal open source Alexa.",
        technologies: ["Python", "OpenClaw", "LLM", "Voice"],
        source: "",
        deploy: "",
      },
      {
        title: "Sushi Shop Landing Page",
        image: project1,
        description:
          "Landing page built to strengthen frontend fundamentals, responsive UI and best practices using HTML, CSS and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        source: "https://github.com/yuriharian/sushi-shop",
        deploy: "https://yuriharian.github.io/sushi-shop/",
      },
      {
        title: "Snake Game",
        image: project2,
        description:
          "Implementation of the classic snake game to deepen programming logic, DOM manipulation and state management in vanilla JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        source: "https://github.com/yuriharian/snake-game",
        deploy: "https://yuriharian.github.io/snake-game/",
      },
      {
        title: "Portfolio Website",
        image: project3,
        description:
          "Modern portfolio focused on performance, fluid animations and strategic presentation of full-stack and AI projects.",
        technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
        source: "https://github.com/yuriharian/portfolio-yuri",
        deploy: "",
      },
      {
        title: "EZ QR Code",
        image: project4,
        description:
          "Desktop application in Python for generating, reading, previewing and exporting QR Codes with an intuitive UI.",
        technologies: ["Python", "Tkinter", "Pyzbar"],
        source: "https://github.com/yuriharian/ez_qrcode",
        deploy: "",
      },
      {
        title: "MoovieMood",
        image: project5,
        description:
          "Full-stack web system for movie cataloging, rating and filtering with authentication, favorites and advanced search.",
        technologies: ["Next.js", "NestJS", "MongoDB"],
        source: "https://github.com/yuriharian/moviemood",
        deploy: "",
      },
      {
        title: "Dungeon GO",
        image: project6,
        description:
          "Application in development for managing RPG character sheets, focused on data modeling, persistence and scalability.",
        technologies: ["Dart", "MySQL"],
        source: "",
        deploy: "",
      },
    ],

    internalProjects: [
      {
        title: "Operations, Billing & Forecast Control",
        description:
          "Platform that centralizes daily production entries for a process-outsourcing operation, automatically calculates revenue, and compares the result against the period's target, flagging deviations in real time. The management hierarchy (team lead, coordinator, supervisor, manager, and directors) automatically sees its own slice of the data, with no manual permission setup. It currently supports dozens of accounts across different industries and is expanding to support a nationwide operation.",
        tags: ["Operations", "Billing", "Forecasting", "Dashboards", "Google Apps Script"],
        status: "In production · expanding nationwide",
      },
      {
        title: "Operational Performance & Physical Data Migration Dashboards",
        description:
          "A set of dashboards for a large-scale operation, covering two fronts: revenue and KPI tracking by region compared against targets, and control of the physical migration of documents and media across multiple states, with deadlines, item-level status, and automatic reconciliation between the internal database and client-submitted files. One of the most relevant wins was identifying and recovering revenue that used to get lost because it couldn't be properly attributed in manual reports.",
        tags: ["Business Intelligence", "Dashboards", "Quality Control", "Google Sheets"],
        status: "In production",
      },
      {
        title: "Real-Time Production Tracking Dashboard",
        description:
          "A tool that tracks the pace of a document-digitization operation in real time, comparing the volume already processed against the target expected at that point in the shift, not just at day's end. I tested a generative AI integration for generating the analysis and ultimately chose a clear, auditable rules-based system instead — more predictable for the operational context.",
        tags: ["Automation", "Data Analysis", "Google Apps Script"],
        status: "In production",
      },
      {
        title: "Activity Logging & Team Climate Tool",
        description:
          "A multilingual (PT/EN/ES) corporate tool used by Iron Mountain's own teams across different countries to log activities in real time and track team climate. It automatically detects each person's access level from the organizational structure itself, with no manual permission setup, and has already run on structures of thousands of people.",
        tags: ["Multilingual", "Automation", "Team Climate"],
        status: "In production · multinational use",
      },
      {
        title: "Executive Control Tower Prototype",
        description:
          "A visual prototype of a single panel meant to bring together a company's core indicators — people, operations, finance, quality and security — without duplicating the systems that already exist for each area. Designed to support leadership and regional director decisions, with map-based navigation and a presentation mode for meetings. Still in the planning stage, using placeholder data.",
        tags: ["Planning", "Data Visualization", "UX"],
        status: "In planning · prototype",
      },
      {
        title: "Smart Cataloging Automation",
        description:
          "An in-house alternative to a third-party cataloging tool, built to cut the operational costs tied to that technology without giving up item traceability.",
        tags: ["Automation", "Cost Reduction", "Python", "AI"],
        status: "In production",
      },
    ],

    formation: [
      {
        year: "2023 - 2026",
        course: "Technologist in Systems Analysis and Development",
        company: "UniProjeção",
        tier: "Degree",
      },
      // Highlights
      {
        year: "2024",
        course: "Complete Python 3",
        company: "Udemy",
        tier: "Course",
        description:
          "Advanced Python, object-oriented programming, automations and practical applications.",
        tags: ["Python"],
        link: "",
      },
      {
        year: "2026",
        course: "AI Engineer",
        company: "Udemy",
        tier: "Course",
        description:
          "Concepts and practices for engineering AI models and LLMs.",
        tags: ["AI", "Models", "LLM"],
        link: "",
      },
      {
        year: "2026",
        course: "IT Governance",
        company: "Udemy",
        tier: "Course",
        description: "Governance, compliance and IT management practices.",
        tags: ["Governance", "IT"],
        link: "",
      },
      // More courses
      {
        year: "2026",
        course: "GitLab CI/CD + DevOps",
        company: "Udemy",
        tier: "Course",
        description:
          "Pipelines, continuous integration, automated deploy and DevOps fundamentals.",
        tags: ["CI/CD", "DevOps", "GitLab"],
        link: "",
      },
      {
        year: "2026",
        course: "Automation with n8n and AI",
        company: "Udemy",
        tier: "Course",
        description: "Automated flows, APIs and AI applied to processes.",
        tags: ["Automation", "n8n", "AI"],
        link: "",
      },
      {
        year: "2026",
        course: "Web Development",
        company: "Udemy",
        tier: "Course",
        description:
          "Solid fundamentals of modern front-end with HTML, CSS and JavaScript.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "",
      },
      {
        year: "2026",
        course: "Complete C# + Object Oriented Programming",
        company: "Udemy",
        tier: "Course",
        description:
          "Solid fundamentals of C#, OOP, collections, LINQ, APIs and backend best practices.",
        tags: ["C#", ".NET", "OOP", "APIs"],
        link: "",
      },
      {
        year: "2026",
        course: "Docker",
        company: "Udemy",
        tier: "Course",
        description: "Containers, image creation and isolated environments.",
        tags: ["Docker", "Containers"],
        link: "",
      },
      {
        year: "2026",
        course: "LangChain + LangGraph",
        company: "Udemy",
        tier: "Course",
        description: "Tools and patterns for LLM-based applications.",
        tags: ["LangChain", "LLM"],
        link: "",
      },
      {
        year: "2026",
        course: "Leadership and People Management",
        company: "Udemy",
        tier: "Course",
        description: "Leadership skills, communication and team management.",
        tags: ["Leadership", "Management"],
        link: "",
      },
      {
        year: "2026",
        course: "Assertive Communication",
        company: "Udemy",
        tier: "Course",
        description:
          "Techniques for clear and effective communication in professional settings.",
        tags: ["Communication"],
        link: "",
      },
    ],

    contact: {
      linkedIn: "linkedin.com/in/yuri-harian",
      phoneNo: "+55 (61) 98222-2582",
      email: "yuri_harian@outlook.com",
      address: "Brasília, Federal District - Brazil",
    },
  },

  es: {
    hero: `Graduado en Análisis y Desarrollo de Sistemas, soy Desarrollador Full-Stack con enfoque en Inteligencia Artificial, LLMs, automatización y Python. Combino una base sólida en React, Next.js, NestJS y bases de datos para desarrollar productos inteligentes y escalables con excelente experiencia de usuario.`,

    techs:
      "Estas son las tecnologías que utilizo actualmente, combinando desarrollo full-stack, automatización e IA aplicada a productos reales:",

    experiences: [
      {
        year: "2025 - Actualmente",
        role: "Asistente de Archivo",
        company: "Iron Mountain",
        description:
          "Trabajo con la gestión documental de clientes, asegurando organización, trazabilidad y acceso eficiente a la información. También lidero actividades operativas del equipo y creo hojas de cálculo automatizadas y reportes para el análisis de datos.",
        technologies: ["Excel", "Automatización", "Análisis de Datos"],
      },
      {
        year: "2021 - 2025",
        role: "Encargado de Stock",
        company: "Grupo Tesoura de Ouro",
        description:
          "Fui responsable de la gestión de inventario y mejora de procesos, asegurando precisión en el flujo de materiales y eficiencia operativa.",
        technologies: ["Procesos", "Indicadores", "Control"],
      },
    ],

    projects: [
      {
        title: "Galaxy",
        placeholder: true,
        description:
          "Plataforma personal de organización y marca personal: mapea conexiones entre personas, sistemas y proyectos en un grafo visual (inspirado en el grafo de Obsidian), con análisis de red generados por mi propia API de IA. También reunirá un tablero de tareas estilo Kanban, con priorización y análisis automatizados. Todavía en fase de planificación.",
        technologies: ["React", "IA", "Grafos", "Kanban"],
        source: "",
        deploy: "",
      },
      {
        title: "VoiceAgent",
        placeholder: true,
        description:
          "Agente de IA controlado por voz y chat para automatizar el PC mediante un atajo — tu Alexa personal open source.",
        technologies: ["Python", "OpenClaw", "LLM", "Voz"],
        source: "",
        deploy: "",
      },
      {
        title: "Landing Page Sushi Shop",
        image: project1,
        description:
          "Landing page desarrollada para reforzar fundamentos de frontend, UI responsiva y buenas prácticas con HTML, CSS y JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        source: "https://github.com/yuriharian/sushi-shop",
        deploy: "https://yuriharian.github.io/sushi-shop/",
      },
      {
        title: "Snake Game",
        image: project2,
        description:
          "Implementación del clásico juego de la serpiente para profundizar lógica de programación, manipulación del DOM y gestión de estado en JavaScript puro.",
        technologies: ["HTML", "CSS", "JavaScript"],
        source: "https://github.com/yuriharian/snake-game",
        deploy: "https://yuriharian.github.io/snake-game/",
      },
      {
        title: "Portfolio Website",
        image: project3,
        description:
          "Portafolio moderno centrado en rendimiento, animaciones fluidas y presentación estratégica de proyectos full-stack e IA.",
        technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
        source: "https://github.com/yuriharian/portfolio-yuri",
        deploy: "",
      },
      {
        title: "EZ QR Code",
        image: project4,
        description:
          "Aplicación de escritorio en Python para generar, leer, visualizar y exportar códigos QR con una interfaz intuitiva.",
        technologies: ["Python", "Tkinter", "Pyzbar"],
        source: "https://github.com/yuriharian/ez_qrcode",
        deploy: "",
      },
      {
        title: "MoovieMood",
        image: project5,
        description:
          "Sistema web full-stack para registro, valoración y filtrado de películas con autenticación, favoritos y búsqueda avanzada.",
        technologies: ["Next.js", "NestJS", "MongoDB"],
        source: "https://github.com/yuriharian/moviemood",
        deploy: "",
      },
      {
        title: "Dungeon GO",
        image: project6,
        description:
          "Aplicación en desarrollo para la gestión de hojas de personaje de RPG, enfocada en modelado de datos, persistencia y escalabilidad.",
        technologies: ["Dart", "MySQL"],
        source: "",
        deploy: "",
      },
    ],

    internalProjects: [
      {
        title: "Control de Operaciones, Facturación y Forecast",
        description:
          "Plataforma que centraliza el registro diario de producción de una operación de tercerización de procesos, calcula la facturación automáticamente y compara el resultado con la meta del período, señalando desviaciones en tiempo real. La jerarquía de gestión (líder, coordinador, supervisor, gerente y dirección) ve automáticamente su propia porción de datos, sin configuración manual de permisos. Hoy da soporte a decenas de cuentas en distintos sectores y está en expansión para atender la operación a nivel nacional.",
        tags: ["Operaciones", "Facturación", "Forecast", "Dashboards", "Google Apps Script"],
        status: "En producción · en expansión nacional",
      },
      {
        title: "Dashboards de Desempeño Operativo y Migración de Datos Físicos",
        description:
          "Conjunto de paneles para una operación de gran escala, que cubre dos frentes: seguimiento de ingresos e indicadores por regional comparados con la meta, y control del proceso de migración física de documentos y medios en varios estados, con plazos, estado de cada ítem y comparación automática entre la base propia y los archivos enviados por el cliente. Uno de los logros más relevantes fue identificar y recuperar ingresos que antes se perdían por no poder atribuirse correctamente en los informes manuales.",
        tags: ["Business Intelligence", "Dashboards", "Control de Calidad", "Google Sheets"],
        status: "En producción",
      },
      {
        title: "Panel de Seguimiento de Producción en Tiempo Real",
        description:
          "Herramienta que sigue en tiempo real el ritmo de una operación de digitalización de documentos, comparando el volumen ya procesado con la meta esperada para ese momento del turno, no solo al cierre del día. Llegué a probar una integración con IA generativa para generar los análisis y, finalmente, opté por un sistema de reglas claro y auditable en su lugar, más predecible para el contexto operativo.",
        tags: ["Automatización", "Análisis de Datos", "Google Apps Script"],
        status: "En producción",
      },
      {
        title: "Registro de Actividades y Clima de Equipo",
        description:
          "Herramienta corporativa multilingüe (PT/EN/ES) usada por equipos de la propia Iron Mountain en distintos países para registrar actividades en tiempo real y monitorear el clima del equipo. Detecta automáticamente el nivel de acceso de cada persona a partir de la propia estructura organizacional, sin configuración manual de permisos, y ya operó sobre estructuras de miles de personas.",
        tags: ["Multilingüe", "Automatización", "Clima Organizacional"],
        status: "En producción · uso multinacional",
      },
      {
        title: "Prototipo de Torre de Control Ejecutiva",
        description:
          "Prototipo visual de un panel único pensado para reunir los principales indicadores de la empresa —personas, operación, finanzas, calidad y seguridad— sin duplicar los sistemas que ya existen para cada área. Pensado para apoyar decisiones de dirección y liderazgo regional, con navegación por mapa geográfico y un modo de presentación para reuniones. Todavía en fase de planificación, con datos ficticios.",
        tags: ["Planificación", "Visualización de Datos", "UX"],
        status: "En planificación · prototipo",
      },
      {
        title: "Automatización de Catalogación Inteligente",
        description:
          "Solución interna alternativa a una herramienta de catalogación de terceros, creada para reducir los costos operativos asociados a esa tecnología sin renunciar a la trazabilidad de los ítems.",
        tags: ["Automatización", "Reducción de Costos", "Python", "IA"],
        status: "En producción",
      },
    ],

    formation: [
      {
        year: "2023 - 2026",
        course: "Tecnólogo en Análisis y Desarrollo de Sistemas",
        company: "UniProjeção",
        tier: "Superior",
      },
      // Destacados
      {
        year: "2024",
        course: "Python 3 Completo",
        company: "Udemy",
        tier: "Curso",
        description:
          "Python avanzado, programación orientada a objetos, automatizaciones y aplicaciones prácticas.",
        tags: ["Python"],
        link: "",
      },
      {
        year: "2026",
        course: "Ingeniero de IA",
        company: "Udemy",
        tier: "Curso",
        description:
          "Conceptos y prácticas para la ingeniería de modelos de IA y LLMs.",
        tags: ["IA", "Modelos", "LLM"],
        link: "",
      },
      {
        year: "2026",
        course: "Gobernanza de TI",
        company: "Udemy",
        tier: "Curso",
        description: "Prácticas de gobernanza, cumplimiento y gestión de TI.",
        tags: ["Gobernanza", "TI"],
        link: "",
      },
      // Más cursos
      {
        year: "2026",
        course: "GitLab CI/CD + DevOps",
        company: "Udemy",
        tier: "Curso",
        description:
          "Pipelines, integración continua, despliegue automatizado y fundamentos de DevOps.",
        tags: ["CI/CD", "DevOps", "GitLab"],
        link: "",
      },
      {
        year: "2026",
        course: "Automatización con n8n e IA",
        company: "Udemy",
        tier: "Curso",
        description: "Flujos automatizados, APIs e IA aplicada a procesos.",
        tags: ["Automatización", "n8n", "IA"],
        link: "",
      },
      {
        year: "2026",
        course: "Desarrollo Web",
        company: "Udemy",
        tier: "Curso",
        description:
          "Fundamentos sólidos de front-end moderno con HTML, CSS y JavaScript.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "",
      },
      {
        year: "2026",
        course: "C# Completo + Programación Orientada a Objetos",
        company: "Udemy",
        tier: "Curso",
        description:
          "Fundamentos sólidos de C#, POO, colecciones, LINQ, APIs y buenas prácticas para desarrollo backend.",
        tags: ["C#", ".NET", "POO", "APIs"],
        link: "",
      },
      {
        year: "2026",
        course: "Docker",
        company: "Udemy",
        tier: "Curso",
        description: "Contenedores, creación de imágenes y entornos aislados.",
        tags: ["Docker", "Contenedores"],
        link: "",
      },
      {
        year: "2026",
        course: "LangChain + LangGraph",
        company: "Udemy",
        tier: "Curso",
        description:
          "Herramientas y patrones para aplicaciones basadas en LLM.",
        tags: ["LangChain", "LLM"],
        link: "",
      },
      {
        year: "2026",
        course: "Liderazgo y Gestión de Personas",
        company: "Udemy",
        tier: "Curso",
        description:
          "Habilidades de liderazgo, comunicación y gestión de equipos.",
        tags: ["Liderazgo", "Gestión"],
        link: "",
      },
      {
        year: "2026",
        course: "Comunicación Asertiva",
        company: "Udemy",
        tier: "Curso",
        description:
          "Técnicas de comunicación clara y efectiva en el entorno profesional.",
        tags: ["Comunicación"],
        link: "",
      },
    ],

    contact: {
      linkedIn: "linkedin.com/in/yuri-harian",
      phoneNo: "+55 (61) 98222-2582",
      email: "yuri_harian@outlook.com",
      address: "Recanto das Emas, Brasília - DF",
    },
  },
};
