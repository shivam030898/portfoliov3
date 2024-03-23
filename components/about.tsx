"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Upon earning my degree in{" "}
        <span className="font-medium">Engineering</span>, I embarked on an
        exciting journey to follow my true passion for programming. My decision
        led me to enroll in a coding bootcamp, where I immersed myself in the
        world of <span className="font-medium">full-stack web development</span>
        .{" "}
        <span className="italic">
          What truly captivates me in this field is
        </span>{" "}
        ithe art of problem-solving. I <span className="underline">love</span>{" "}
        there's an unparalleled sense of accomplishment when I crack a
        challenging puzzle. In my tech toolkit I wield{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>{" "}
        as my core stack. I am also familiar with TypeScript and Python. I am
        always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching anime, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
