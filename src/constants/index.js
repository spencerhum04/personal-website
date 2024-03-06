import { javascriptlogo, clogo, javalogo, pythonlogo, reactlogo, htmllogo, csslogo, nodejslogo, tailwindlogo, linuxlogo, bashlogo, gitlogo, websitevisual, geneticvisual, minimaxvisual } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    scroll: {x:0, y:825},
  },
  {
    id: "education",
    title: "Education",
    scroll: {x:0, y:1370},
  },
  {
    id: "projects",
    title: "Projects",
    scroll: {x:0, y:2205},
  },
  {
    id: "contact",
    title: "Contact",
    scroll: {x:0, y:5000},
  },
];

export const languages = [
  {
    id: "language-1",
    icon: pythonlogo,
    title: "Python",
  },
  {
    id: "language-2",
    icon: javalogo,
    title: "Java",
  },
  {
    id: "language-3",
    icon: clogo,
    title: "C",
  },
  {
    id: "language-4",
    icon: javascriptlogo,
    title: "JavaScript",
  },
  {
    id: "language-5",
    icon: htmllogo,
    title: "HTML",
  },
  {
    id: "language-6",
    icon: csslogo,
    title: "CSS",
  },
  {
    id: "language-7",
    icon: bashlogo,
    title: "Bash",
  },
];

export const tools = [
  {
    id: "tool-1",
    icon: reactlogo,
    title: "React",
  },
  {
    id: "tool-2",
    icon: nodejslogo,
    title: "NodeJS",
  },
  {
    id: "tool-3",
    icon: tailwindlogo,
    title: "Tailwind",
  },
  {
    id: "tool-4",
    icon: linuxlogo,
    title: "Linux",
  },
  {
    id: "tool-5",
    icon: gitlogo,
    title: "Git",
  },
];

export const projects = [
  {
    id: "project-1",
    icon: pythonlogo,
    title: "My Portfolio Website",
    link: "https://github.com/spencerhum04/personal-website",
    content:
      "A high-performance, responsive website using JavaScript, CSS, and HTML, showcasing various features while ensuring compatibility across various devices and screen sizes to provide a seamless experience for all users.",
    modaltitle: "My Portfolio Website",
    modaldesc: "Developed a personalized website that uses JavaScript, CSS, and HTML to highlight various features. UI/UX designs and patterns were seamlessly integrated using Tailwind CSS to create an aesthetically pleasing and user-friendly experience. Ensured the website's responsiveness and compatibility with various devices and screen sizes, resulting in a consistent experience for all users. Used HTML, CSS, and JavaScript to create a dynamic and engaging platform that effectively highlighted personal projects and accomplishments.",
    modalimg: websitevisual,
  },
  {
    id: "project-2",
    icon: nodejslogo,
    title: "Genetic Rockets",
    link: "https://github.com/spencerhum04/Genetic-Rockets",
    content:
      "Rocket targeting program utilizing JavaScript, featuring a learning capability to enhance accuracy progressively while recording data regarding encountered obstacles, contributing to a more thorough comprehension of the environment.",
    modaltitle: "Genetic Rockets",
    modaldesc: "Created a rocket targeting program in JavaScript with a learning capability to gradually improve accuracy. Integrated functions for creating and using variable operands, allowing for dynamic adjustments to increase flexibility. Implemented a genetic pattern that allows rockets to learn and improve performance based on previous successes. In addition, functionalities for recording data on encountered obstacles were added, resulting in a more thorough understanding of the environment.",
    modalimg: geneticvisual,
  },
  {
    id: "project-3",
    icon: tailwindlogo,
    title: "Minimax Algorithm AI",
    link: "https://github.com/spencerhum04/Minimax-Algorithm-AI",
    content:
      "Minimax algorithm for AI decision-making, ensuring optimal moves in a responsive and visually engaging Tic Tac Toe game showcasing real-time updates of the user interface to reflect moves and game state changes.",
    modaltitle: "Minimax Algorithm AI",
    modaldesc: "A minimax algorithm for AI decision-making was integrated into a responsive and visually appealing Tic Tac Toe game. Ensured optimal movements, resulting in a challenging experience. Introduced flexible game modes that support both player versus player (PvP) and AI interactions. The user interface can now be updated in real time, ensuring that moves and game state changes are reflected seamlessly for an immersive gaming experience.",
    modalimg: minimaxvisual,
  },
];