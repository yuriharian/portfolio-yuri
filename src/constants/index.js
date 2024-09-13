import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.gif";

export const HERO_CONTENT = `Sou analista de projetos e cuido da gestão de estoque no Grupo Tesoura de Ouro. Atualmente, estou dedicado aos estudos no curso de Análise e Desenvolvimento de Sistemas, focando especialmente em alcançar a maestria em JavaScript e React.js. Tenho aplicado meus conhecimentos em projetos práticos que envolvem HTML, CSS, Tailwind CSS, JavaScript e React.js.`;

export const TECHS =
  "Essas são as tecnologias nas quais estou especializado atualmente e que constituem minhas principais habilidades de desenvolvimento:";

export const EXPERIENCES = [
  {
    year: "2021 - Atualmente",
    role: "Estoquista",
    company: "Grupo Tesoura de Ouro",
    description: `Atuo no gerenciamento de estoque e projetos, assegurando precisão e eficiência no fluxo de materiais. Sou responsável pela organização, layout e padronização do estoque, otimizando o uso do espaço e facilitando a localização dos itens. Também desenvolvo planilhas de controle que monitoram estoques e indicadores de qualidade, implementando melhorias contínuas nos processos para garantir um funcionamento mais eficaz.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Landing Page Sushi Shop",
    image: project1,
    description:
      "Landing Page de uma loja de sushi criada para treinar minhas habilidades no Front-end, desenvolver boas práticas e aprender mais sobre lógica de programação. Construído com HTML, CSS e JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    source: "https://github.com/yuriharian/sushi-shop",
    deploy: "https://yuriharian.github.io/sushi-shop/",
  },
  {
    title: "Snake Game",
    image: project2,
    description:
      "O clássico jogo da cobrinha onde o objetivo é comer o máximo de maçãs possível sem colidir com as paredes ou com a própria cobrinha. Construído com HTML, CSS e JavaScript para estudar lógica de programação.",
    technologies: ["HTML", "CSS", "JavaScript"],
    source: "https://github.com/yuriharian/snake-game",
    deploy: "https://yuriharian.github.io/snake-game/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Um site de portfólio pessoal que mostra projetos, habilidades e informações de contato. Criado com React.js e Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    source: "https://github.com/yuriharian/portfolio-yuri",
    deploy: "",
  },
  {
    title: "Dashboard",
    image: project4,
    description:
      "Projeto realizado utilizando React.js, TypeScript e GraphQL. Se trata de uma Dashboard para administração de uma empresa com diversos recursos.",
    technologies: ["React", "TypeScript", "GraphQL"],
    source: "",
    deploy: "",
  },
];

export const FORMARTION = [
  {
    year: "Julho 2023 - Janeiro 2026",
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    company: "UniProjeção",
    tier: "Superior",
  },
  {
    year: "2024",
    course: "Python 3 do básico ao avançado",
    company: "Luiz Otávio Miranda / Tales Calogi Malaquias",
    tier: "Curso",
  },
  {
    year: "2024",
    course: "C# Completo Programação Orientada a Objetos",
    company: "Nelio Alves",
    tier: "Curso",
  },
  {
    year: "2024",
    course: "Desenvolvimento Web Completo",
    company: "Jorge Santa Ana / Jamilton Damasceno",
    tier: "Curso",
  },
  {
    year: "2024",
    course: "Excel do Básico ao Avançado, Macro e VBA + Power BI",
    company: "Clevison Santos",
    tier: "Curso",
  },
  {
    year: "2022",
    course: "Desenvolvedor Full Stack Master",
    company: "danki.code",
    tier: "Curso",
  },
];

export const CONTACT = {
  linkedIn: "linkedin.com/in/yuri-harian",
  phoneNo: "+55 (61) 98222-2582",
  email: "yuri_harian@outlook.com",
  address: "Recanto das Emas, Brasília - DF",
};
