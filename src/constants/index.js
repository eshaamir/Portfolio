import {
  frontend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  komikult,
  leaderboard,
  math,
  movie,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Forbmax",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Oct 2024 - Present",
  },
  {
    title: "Junior Front-End Developer intern",
    company_name: "HA Technologies",
    icon: microverse,
    iconBg: "#333333",
    date: "Aug 2023 - Nov 2023",
  },
  {
    title: "Junior Software Engineer",
    company_name: "Bytewise Limited",
    icon: kelhel,
    iconBg: "#333333",
    date: "May 2024 - Oct 2024",
  },
  {
    title: "Web Developer",
    company_name: "Accenture",
    icon: dcc,
    iconBg: "#333333",
    date: "JAN 2024 - MAY 2024",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Postman clone",
    description:
      "A Postman-inspired web app for testing APIs with customizable HTTP requests and real-time response display.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/eshaamir/Postman",
    demo: "https://postman-omega.vercel.app/",
  },
  {
    id: "project-2",
    name: "Gemini Chatbot",
    description:
      "A chatbot web app built with React.js that simulates AI-based conversations using dynamic user input handling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/eshaamir/Gemini-chatbot",
    demo: "https://gemini-chatbot-seven-beryl.vercel.app/",
  },
  {
    id: "project-3",
    name: "Flappy Bird Game",
    description:
      "This is a recreation of the classic game using modern technologies.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/eshaamir/Flappy-bird-Game",
    demo: "https://flappy-bird-game-classic.vercel.app/",
  },
  {
    id: "project-4",
    name: "Tic Tac Toe",
    description: `A simple tic-tac-toe game built using React.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/eshaamir/Tic-Tac-Toe",
    demo: "https://tic-tac-toe-classic.vercel.app/play",
  },
];

export { services, technologies, experiences, projects };
