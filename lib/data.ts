import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";
import { LuGraduationCap } from "react-icons/lu";
import yumeats from "@/public/Yumeats.png"
import gst from "@/public/GST.png"

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
    title: "Started attending University of Washington",
    location: "Seattle, WA",
    description:
      "I am an undergraduate student at the University of Washington studying Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
  {
    title: "Puloon Technology: Software Engineer Intern",
    location: "Seoul, Korea",
    description:
      "I worked as a software enginner intern at Puloon Technology and worked on diverse mechatronics projects using C and C#.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Teaching Assistant",
    location: "Seattle, WA",
    description:
      "I am currently a part-time teaching assistant for the intro programming class at my school . I conduct sections that consists of 20 students, grade assignments, and hold office hours.",
    icon: React.createElement(GiTeacher),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Global Sign-Language Translator",
    description:
      "Project I developed with a team of three for the DubHacks hackathon. We won the accessibility hack award out of 100+ teams",
    tags: ["TensorFlow", "Flask", "React-Native", "Python"],
    imageUrl: gst,
  },
  {
    title: "Yum-Eat",
    description:
      "Worked in a team of eight to develop a full stack web application ",
    tags: ["React", "JavaScript", "PostgreSQL", "Flask", "Python"],
    imageUrl: yumeats,
  },
  {
    title: "NotesApp",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
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