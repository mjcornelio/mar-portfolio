"use client";

import Image from "next/image";
import Link from "next/link";
import { LayoutGroup, motion } from "motion/react";
import { Mail, MoveUpRight } from "lucide-react";

import TextRotate from "@/components/fancy/text/text-rotate";
import { FaCodepen, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-between gap-5"
      >
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-lg md:text-3xl font-bold">Mar John Cornelio</h1>
          <p className="text-md -mt-1 text-gray-600 dark:text-gray-400">
            Software Developer
          </p>
          <div className="flex gap-3 mt-2">
            <Link
              href="https://github.com/mjcornelio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            >
              <FaGithub size={17} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/marjohn-cornelio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            >
              <FaLinkedin size={17} />
            </Link>
            <Link
              href="https://www.facebook.com/marjohn.cornelio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            >
              <FaFacebook size={17} />
            </Link>
            <Link
              href="https://codepen.io/marjcornelio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            >
              <FaCodepen size={17} />
            </Link>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mc.marjohncornelio@gmail.com&su=Let's%20Work%20Together!&body=Hi%20Mar%20John,%0D%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            >
              <Mail size={17} />
            </Link>
          </div>
        </div>

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative p-1 rounded-full border-2 border-gray-700 dark:border-gray-300"
        >
          <span className="absolute w-4 h-4 bg-lime-500 rounded-full bottom-0 right-2" />
          <Image
            src="/landing/mar-image.webp"
            alt="Mar John"
            width={70}
            height={70}
            className="object-contain rounded-full"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        }}
        className=" sm:text-xl md:text-3xl flex flex-row items-center justify-center dark:text-gray-100 text-foreground font-light p-8 !pb-10 sm:p-13 md:p-24"
      >
        <LayoutGroup>
          <motion.p
            className="flex whitespace-pre flex-col md:flex-row items-center"
            layout
          >
            <motion.span
              className="pt-0.5 sm:pt-1 md:pt-2"
              layout
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              Developer who loves building with{" "}
            </motion.span>
            <TextRotate
              texts={[
                "ReactJS",
                ".NET",
                "NodeJS",
                "ExpressJS",
                "NextJS",
                "TypeScript",
              ]}
              mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#250303] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg w-fit mt-3 md:mt-0"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.p>
        </LayoutGroup>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="flex justify-center mb-8"
      >
        <a
          href="/file/MarJohn Cornelio - CV.pdf"
          download
          className="cursor-pointer"
        >
          <Button
            variant="outline"
            className="relative px-5 py-2 text-sm font-medium rounded-sm border border-white/20 
             bg-black dark:bg-white/10 backdrop-blur-md text-white dark:hover:bg-white/20 hover:bg-black/70 hover:text-gray-200
             hover:border-white/30 transition-all duration-300 cursor-pointer "
          >
            View Resume
            <MoveUpRight className="ml-1 !w-3 !h-3" />
          </Button>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-primary text-justify leading-relaxed">
            Hi, I’m <span className="highlight">Mar John</span> — an innovative{" "}
            <span className="highlight">Full-Stack Developer</span> skilled in{" "}
            <span className="highlight">
              ReactJS, NextJS, .NET, NodeJS, ExpressJS, Blazor,
            </span>{" "}
            and <span className="highlight">TypeScript</span>. I specialize in
            building{" "}
            <span className="highlight">scalable, high-performance,</span> and{" "}
            <span className="highlight">user-friendly web applications</span>.
            With experience across both frontend and backend development, I
            focus on clean code, efficient API integration, and seamless user
            experiences. Passionate about performance optimization and team
            collaboration.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
