"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function Showcase() {
  const projects = [
    {
      title: "QHelp - Qualimed Ticketing System",
      company: "Qualimed Hospital",
      year: "2023",
      link: "https://github.com/mjcornelio/qhelp",
      description:
        "The IT Helpdesk Ticketing System provide an efficient and user-friendly solution for managing IT support requests and resolving technical issues.",
      tech: ["ReactJS", "NodeJs", "ExpressJS", "MySQL", "Tailwind"],
    },
    {
      title: "R&A",
      company: "Property Rental Management System",
      year: "2023",
      link: "https://github.com/mjcornelio/surewin-marketplace",
      description:
        "A web-based property rental management system for R&A Surewin Marketplace, that handles the business’ transactions and records, like the daily rental collection, parking fees, production of business reports, and many more.",
      tech: [
        "React",
        "NodeJs",
        "ExpressJS",
        "MaterialUI",
        "MySQL",
        "Sequelize",
      ],
    },
    {
      title: "DRS",
      company: "Document Request System",
      year: "2023",
      link: "https://github.com/mjcornelio/document-request-system",
      description:
        "A web-based property rental management system for R&A Surewin Marketplace, that handles the business’ transactions and records, like the daily rental collection, parking fees, production of business reports, and many more.",
      tech: ["HTML", "CSS", "JavaScript", "MYSQL", "PHP"],
    },
    {
      title: "Netflix Clone",
      company: "Website Clone - Bayan Academy",
      link: "https://github.com/mjcornelio/netflix-clone",
      year: "2023",
      description:
        "A website clone built using React.js as project for Bayan Academy - Advance Frontend Development. This involves creating a Frontend that replicates the experience of a popular movie database, utilizing The Movie Database (TMDB) API to fetch movies.",
      tech: ["ReactJS", "Tailwind", "Firebase"],
    },
  ];

  return (
    <section className="text-gray-200" id="showcase">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl text-primary dark:text-gray-200 font-semibold mb-6 mt-12"
      >
        Showcase Projects
      </motion.h2>

      <div className="space-y-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative flex flex-col sm:flex-row sm:items-start sm:gap-8 group p-5 rounded-xl border border-transparent hover:-translate-y-1 transition-all duration-500 ease-out dark:hover:bg-white/5 hover:bg-black/5"
          >
            <div className="sm:w-3/4">
              <h4 className="text-lg font-semibold text-primary dark:text-gray-100 flex gap-2 items-center">
                {project.title}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition cursor-pointer"
                >
                  <ExternalLink size={14} />
                </a>
              </h4>
              <p className="text-sm text-primary pb-2 italic">
                {project.company}
              </p>

              <p className="mt-3 text-primary text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((s, k) => (
                  <Badge
                    key={k}
                    variant="secondary"
                    className="rounded-sm border border-white/20 bg-black dark:bg-white/10 backdrop-blur-md text-gray-300 dark:hover:bg-white/20 hover:bg-black/70 hover:text-gray-200 hover:border-white/30 transition-all duration-300 cursor-pointer font-normal"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="sm:w-1/4 text-sm font-medium text-primary sm:text-right mb-3 sm:mb-0 whitespace-nowrap">
              {project.year}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
