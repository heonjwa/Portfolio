"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        From a young age, my curosity about{" "}
        <span className="font-medium">computers,</span>
        <span className="font-medium"> technology,</span> and
        <span className="font-medium"> math</span> naturally led me to discover
        my passion for <span className="italic">Computer Science</span> and{" "}
        <span className="italic">Programming.</span> I've worked on diverse
        projects through<span className="font-medium"> internships, school</span>,
        participating in <span className="font-medium">hackathons</span>, and
        working with peers within a <span className="font-medium">coding club</span>. I also love to{" "}
        <span className="font-medium"> teach!</span> As an Introductory
        Programming <span className="font-medium">Teaching Assistant</span> at
        my school, I find joy imparting knowledge to others, all while
        solidfying my own knowledge.
        {/* I am currently looking for{" "}
  <span className="italic font-medium">summer internships</span> as a{" "}
  <span className="font-medium">software engineer.</span> */}
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing{" "}
        <span className="font-medium">video games</span>, playing the <span className="font-medium">piano</span>, 
        and <span className="font-medium">skiing</span>. I also like{" "}
        <span className="font-medium">learning new things</span>. I recently started
        learning <span className="font-medium">calisthenics</span> and <span className="font-medium">Japanese</span> as my third language.
        
      </p>
    </motion.section>
  );
}
