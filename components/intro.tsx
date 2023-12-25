"use client";

import Image from "next/image";
import portrait from "@/public/Portrait.png";
import husky from "@/public/Washington-Huskies-logo.png";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const {
    setActiveSection,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={portrait}
              alt="Heons Portrait"
              height="150"
              width="150"
              className="h-50 w-50 rounded-l border-[0.35rem] border-white object-cover
                 shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <Image src={husky} alt="Husky" className="h-9 w-12 object-cover" />
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Heon!</span> I'm an{" "}
        <span className="font-bold">Undergraduate Student</span> at the{" "}
        <span className="font-bold">University of Washington</span> studying
        Computer Science. My focus is in{" "}
        <span className="font-bold">Software Engineering</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 
        text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7
          py-3 flex items-center rounded-full outline-none
          hover:scale-[1.08] hover:bg-gray-950 active:scale-105 transition cursor-pointer"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now);
          }}
        >
          Contact me here
          <BsArrowRight className="group-hover:translate-x-1 ml-2 transition opacity-70" />
        </Link>

        <a
          className="group bg-white px-7
          py-3 flex items-center rounded-full outline-none hover:scale-[1.09]
          active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Resume.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="group-hover:translate-y-1 ml-2 transition opacity-60" />
        </a>

        <a
          className="bg-white p-4 text-gray-700
          flex items-center rounded-full outline-none hover:scale-[1.15]
          hover:text-gray-950
          active:scale-110 transition cursor-pointer
          borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/heonjwa"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700
          flex items-center text-[1.35rem] rounded-full
          outline-none hover:scale-[1.08]
          hover:text-gray-950
          active:scale-110 transition cursor-pointer
          borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/heonjwa"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
