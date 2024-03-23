import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import Chat from "@/public/Chat.png";
import Nike from "@/public/Nike.png";
import Todo from "@/public/TODOAPP.png";

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
    title: "Completed UpGrad Bootcamp",
    location: "Remote",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Frontend Engineer",
    location: "Noida, NCR-Delhi",
    description:
      "A Front End Engineer with 3 months of experience in a startup dedicated to anime collection T-shirts. Responsible for crafting visually appealing and responsive user interfaces .",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "System Engineer",
    location: "Gurgaon, NCR-Delhi",
    description:
      "I excelled as a System Engineer specializing in SAP ABAP, designing solutions, optimizing processes, and resolving issues, driving efficiency and enhancing system reliability within the organization.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce Store",
    description:
      "I worked as a full-stack developer on this project for 1 month. Its an ecommerce project for shoes.",
    tags: ["React", "Next.js", "Stripe", "Tailwind", "Prisma", "Strapi"],
    imageUrl: Nike,
    link: "https://nike-frontend-one.vercel.app/",
  },
  {
    title: "Chat.AI",
    description:
      "Built a AI Companion app for chat using lang chain and open ai API with Stripe payment gateway setup",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "OpenAI",
      "Pinecone",
      "Stripe",
    ],
    imageUrl: Chat,
    link: "https://chat-ai-gold-two.vercel.app/",
  },
  {
    title: "Todo-App",
    description:
      "A todo app with login authentication and database connection to store your daily task.",
    tags: ["React", "Next.js", "Firebase"],
    imageUrl: Todo,
    link: "https://todoapp-nu-mocha.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Sanity.io",
  "Linux",
  "Python",
  "GO",
  "Framer Motion",
  "SAP-ABAP",
  "S4/HANA",
] as const;
