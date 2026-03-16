import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `Formado em Análise e Desenvolvimento de Sistemas, sou Desenvolvedor Full-Stack com foco atual em Inteligência Artificial, LLMs, automação e Python. Uno minha base sólida em React, Next.js, NestJS e bancos de dados ao desenvolvimento de produtos inteligentes, escaláveis e com excelente experiência de usuário.`;

export const TECHS =
  "Estas são as tecnologias que utilizo atualmente, unindo desenvolvimento full-stack, automação e Inteligência Artificial aplicada a produtos reais:";

export const EXPERIENCES = [
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
    description: `Fui responsável pelo gerenciamento de estoque e melhoria de processos, assegurando precisão no fluxo de materiais e eficiência operacional. Atuei na organização de layout, padronização do espaço físico e criação de planilhas para controle de estoque e indicadores de qualidade.`,
    technologies: ["Processos", "Indicadores", "Controle"],
  },
];

export const PROJECTS = [
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
];

export const FORMARTION = [
  {
    year: "2023 - 2026",
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    company: "UniProjeção",
    tier: "Superior",
  },
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
    course: "Docker",
    company: "Udemy",
    tier: "Curso",
    description: "Containers, criação de imagens e ambientes isolados.",
    tags: ["Docker", "Containers"],
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
    year: "2024",
    course: "Python 3 Completo",
    company: "Udemy",
    tier: "Curso",
    description:
      "Python avançado, orientação a objetos, automações e aplicações práticas.",
    tags: ["Python"],
    link: "",
  },
];

export const CONTACT = {
  linkedIn: "linkedin.com/in/yuri-harian",
  phoneNo: "+55 (61) 98222-2582",
  email: "yuri_harian@outlook.com",
  address: "Recanto das Emas, Brasília - DF",
};
