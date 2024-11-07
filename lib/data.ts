import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";
import { LuGraduationCap } from "react-icons/lu";
import hcp from "@/public/hcp.png"
import gst from "@/public/GST.png"
import spotLite from "@/public/spotlite.png"

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
    title: "University of Washington",
    location: "Seattle, WA",
    description:
      "I am an undergraduate student at the University of Washington studying Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2026",
  },
  {
    title: "Amazon Web Services: Software Engineer Intern",
    location: "Bellevue, Washington",
    description:
      "Within the Amazon Q team, I worked on a centralized debugging application, fetching data in different parts of ingestion.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Teaching Assistant",
    location: "Seattle, WA",
    description:
      "I am a teaching assistant for the data structures and algorithms course at my school. I conduct sections that consists of 20 students, grade assignments, and hold office hours.",
    icon: React.createElement(GiTeacher),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Spotlite",
    description:
      "A web application where you can list and buy parking spots.",
    tags: ["Next.js", "Google Maps API", "React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
    imageUrl: spotLite,
    repoUrl: "https://github.com/JoeS51/Dubhacks24",
  },
  {
    title: "Global Sign-Language Translator",
    description:
      "A mobile application that is able to recognize sign language and translate it to English.",
    tags: ["TensorFlow", "Flask", "React-Native", "Python"],
    imageUrl: gst,
    repoUrl: "https://github.com/Sheepca/Hand-Sign-Detection",
  },
  {
    title: "HCP Club Website",
    description:
      "A full stack web application for my school's coding club Husky Coding Project.",
    tags: ["Next.js", "React", "TypeScript", "Firebase", "Python"],
    imageUrl: hcp,
    repoUrl: "https://hcp-uw.vercel.app/about",
  },
  
] as const;

export const skillsData = [
  "Java",
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
] as const;