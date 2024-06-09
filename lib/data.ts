import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Polytechnic University of Timisoara",
    location: "Timisoara, Timis",
    description:
      "I studied for 4 years at the Polytechnic University of Timisoara with a bachelor degree in Systems Engineering. During that time I increased my knowledge of programming working with both low level and high level languages. I found a passion for full-stack web development, which led me to pursue various projects and internships where I could apply my skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Computer Operator Electronic and Networking",
    location: "Timisoara, Timis",
    description: `• Spearheaded development and integration of automated data processing and display project.
    • Proficient in diverse programming languages including HTML, CSS, JavaScript, NodeRed and MySQL.
    • Experienced in utilising software applications like Grafana for data display and Prometheus for data monitoring.`,
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "IT Service Support and Development",
    location: "Timisoara, Timis",
    description: `• Proficient in C# and PowerShell for cutting-edge application development. • Utilizes Grafana and Prometheus for peak IT service monitoring efficiency. • Streamlines new software deployment for flawless integration.
    • Delivers expert SharePoint and MS Project 2016 Enterprise support.
    • Orchestrates strategic plans for sophisticated service monitoring systems.
    • Harnesses Prometheus for comprehensive monitoring across multiple data sources.
    • Implements Terraform for streamlined cloud infrastructure oversight.
    • Masters Grafana for superior data visualization and analysis.
    • Crafts detailed documentation for monitoring software to enhance user experience.
    • Innovates with Figma for intuitive and engaging web design prototypes.
    • Developed versatile cross-platform applications using Vue.js, TypeScript, and Quasar.`,
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "NEURONAL NETWORK",
    description:
      "I build a neuronal network in Java which is used to detect text from images and it is trained on a MNIST dataset.",
    tags: ["Java", "JUnit", "MNIST", "Linear Algebra"],
    imageUrl: corpcommentImg,
  },
  {
    title: "LEARN NEW FACTS DAILY",
    description: `The project was built using HTML, CSS, JavaScript, and React. We used Supabase as the database, which offers an API for the backend and allows for easy data manipulation. Netlify was used to host the page. Users can interact with the database by giving reactions, filtering, and adding new curiosities with valid sources starting with HTTP or HTTPS.`,
    tags: ["React", "HTML", "CSS", "Supabase"],
    imageUrl: rmtdevImg,
  },
  {
    title: "SMARTBRAIN",
    description: `SmartBrain is a fullstack application which uses React for the frontend, Node.js for the backend and PostgreSQL as a database. The project has integrated a machine learning API, which is used to detect faces. Users can upload a photo and then press a button to detect how many photos were in that image, all of the data is then stored in a database.`,
    tags: ["React", "Node.js", "PostgreSQL", "CSS"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "LIBRARY MANAGEMENT SYSTEM",
    description: `The Library Management System is a full-stack application that uses React for the frontend, Java Spring Boot for the backend, and MySQL as a database. The project integrates Stripe for payment processing and Okta for user authentication. Users can manage book catalogs, track loans, and handle fines efficiently. Administrators can add or update books, while users can search for and borrow books. The system calculates and processes late fees through Stripe. All user and book data, including transactions, are securely stored in the MySQL database.`,
    tags: [
      "React",
      "Java",
      "Java Spring Boot",
      "React Bootstrap",
      "MySQL",
      "Stripe",
      "OKTA",
      "Typescript",
    ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "FILMPIRE",
    description: `Flipire is a front-end application that uses React and Redux for managing state. The project integrates with the TMDb API to fetch movie data. Users can browse a wide range of movies, search for specific titles, and create personalized watchlists. The responsive design ensures a seamless experience across various devices. All movie data is fetched dynamically from the TMDb API, allowing users to access the latest information. Users can save their favorite movies to easily find them later. Flipire leverages modern web technologies to provide an engaging and efficient way to explore and manage movie collections.`,
    tags: ["React", "REDUX", "TMDB"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "PARTICLE EXPLOSION",
    description: `This project focuses on simulating visually appealing particle explosions with periodic color-changing effects using C++ programming language along with the SDL (Simple DirectMedia Layer) extension.`,
    tags: ["C++", "SDL"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MySQL",
  "Redux",
  "PostreSQL",
  "Astro",
  "Express",
  "Java",
  "Java Spring Boot",
  "Bootstrap",
  "Firebase",
  "Supabase",
  "Vue",
  "Node-Red",
  "C++",
] as const;
