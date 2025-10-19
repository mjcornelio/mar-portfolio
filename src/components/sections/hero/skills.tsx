"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTypescript,
  SiDotnet,
  SiBlazor,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiXendit,
} from "react-icons/si";

import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, title: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, title: "CSS" },
    { icon: <FaJsSquare className="text-yellow-400" />, title: "JavaScript" },
    { icon: <SiTypescript className="text-blue-600" />, title: "TypeScript" },
    { icon: <FaReact className="text-cyan-400" />, title: "React.js" },
    { icon: <SiBlazor className="text-indigo-400" />, title: "Blazor" },
    { icon: <SiTailwindcss className="text-sky-400" />, title: "Tailwind" },
    { icon: <FaBootstrap className="text-purple-600" />, title: "Bootstrap" },
    { icon: <SiMui className="text-blue-500" />, title: "Material UI" },
    { icon: <SiRedux className="text-purple-500" />, title: "Redux" },
    {
      icon: <SiNextdotjs className="text-gray-100 dark:text-white" />,
      title: "Next.js",
    },
    { icon: <SiDotnet className="text-blue-700" />, title: ".NET Core" },
    { icon: <FaNodeJs className="text-green-500" />, title: "Node.js" },
    {
      icon: <SiExpress className="text-gray-300 dark:text-white" />,
      title: "Express.js",
    },
    {
      title: "EFCORE",
    },
    { title: "LINQ" },
  ];

  const skills2 = [
    { icon: <SiMysql className="text-blue-500" />, title: "MySQL" },
    { icon: <SiMongodb className="text-green-500" />, title: "MongoDB" },
    {
      icon: <SiOpenai className="text-gray-100 dark:text-white" />,
      title: "OpenAI",
    },
    { icon: <SiXendit className="text-indigo-300" />, title: "Xendit" },
    { title: "FaceAPI" },
    { title: "OOP" },
    { title: "MVC" },
    { icon: <FaGitAlt className="text-orange-500" />, title: "Git" },
    {
      icon: <FaGithub className="text-gray-100 dark:text-white" />,
      title: "GitHub",
    },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="flex size-full items-center justify-center mt-10"
      >
        <Marquee>
          <MarqueeContent>
            {skills.map((skill, index) => (
              <MarqueeItem className="h-32 w-32" key={index}>
                <div
                  key={`${index}`}
                  className="flex-shrink-0 mx-3 md:mx-8 group cursor-pointer"
                >
                  <div className="relative w-32 h-20 bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700 transition-all duration-500 ease-out hover:scale-105 shadow-xs hover:shadow-lg">
                    {skill.icon ? (
                      <div className="relative flex items-center justify-center h-full text-4xl">
                        {skill.icon}
                      </div>
                    ) : (
                      <div className="relative flex items-center justify-center h-full text-md">
                        {skill.title}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-rdr-primary text-white text-xs font-semibold rounded-full shadow hover:bg-opacity-90 transition"
                      >
                        {skill.title}
                      </a>
                    </div>
                  </div>
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="flex size-full items-center justify-center mt-0"
      >
        <Marquee>
          <MarqueeContent direction="right">
            {skills2.map((skill, index) => (
              <MarqueeItem className="h-32 w-32" key={index}>
                <div
                  key={`${index}`}
                  className="flex-shrink-0 mx-3 md:mx-8 group cursor-pointer"
                >
                  <div className="relative w-32 h-20 bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700 transition-all duration-500 ease-out hover:scale-105 shadow-xs hover:shadow-lg">
                    {skill.icon ? (
                      <div className="relative flex items-center justify-center h-full text-4xl">
                        {skill.icon}
                      </div>
                    ) : (
                      <div className="relative flex items-center justify-center h-full text-md">
                        {skill.title}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-rdr-primary text-white text-xs font-semibold rounded-full shadow hover:bg-opacity-90 transition"
                      >
                        {skill.title}
                      </a>
                    </div>
                  </div>
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </motion.div>
    </div>
  );
}
