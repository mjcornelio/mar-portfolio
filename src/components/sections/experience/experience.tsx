"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      company: "Simplified Business Consultancy",
      location: "Quezon City, Philippines",
      roles: [
        {
          year: "06/2025 - PRESENT",
          title: "Assistant Lead Developer",
          description: [
            "Assist the Lead Developer in planning, code review, and quality assurance.",
            "Mentor junior developers to improve coding standards and productivity.",
            "Designed and developed a Lead Management System using React, TypeScript, and .NET.",
            "Built a Franchising Clinic System supporting multi-branch operations.",
          ],
          skills: [
            "JavaScript",
            "TypeScript",
            "React",
            "Zustand",
            ".Net Core",
            "Tailwind",
            "FaceAPI",
            "Geofencing",
            "SignalR",
            "EFCore",
            "LINQ",
          ],
        },
        {
          year: "03/2025 - 06/2025",
          title: "System Developer",
          description: [
            "Developed a Human Resource Information System (HRIS) using Blazor and .NET.",
            "Integrated Checkout API for secure international payment processing.",
            "Contributed to a Dubai-based All-in-One System implementing FaceAPI and geofencing.",
          ],
          skills: [
            "JavaScript",
            "TypeScript",
            "React",
            "Zustand",
            "Blazor",
            "Tailwind",
            ".Net Core",
            "MudBlazor",
            "Checkout",
            "SignalR",
            "EFCore",
            "LINQ",
          ],
        },
        {
          year: "09/2024 - 03/2025",
          title: "L2 Junior Software Developer",
          description: [
            "Delivered an All-in-One System for SMEs using .NET and Blazor.",
            "Led client presentations and onboarding to ensure smooth system adoption.",
            "Developed a franchising system with POS, payroll, and reporting modules.",
          ],
          skills: [
            "JavaScript",
            "Blazor",
            ".Net Core",
            "MudBlazor",
            "Bootstrap",
            "FaceAPI",
            "Xendit",
            "Checkout",
            "SignalR",
            "EFCore",
            "LINQ",
          ],
        },
        {
          year: "03/2024 - 09/2024",
          title: "Junior Software Developer",
          description: [
            "Built an online store management system using .NET and Blazor with POS and SignalR.",
            "Created an online consultancy platform with OpenAI automation and scheduling.",
          ],
          skills: [
            "JavaScript",
            "Blazor",
            ".Net Core",
            "MudBlazor",
            "Bootstrap",
            "SignalR",
            "EFCore",
            "LINQ",
          ],
        },
      ],
    },
    {
      company: "PAPH Travel and Tours",
      location: "Quezon City, Philippines",
      roles: [
        {
          year: "07/2023 - 03/2024",
          title: "Junior Web Developer",
          description: [
            "Contributed to a web-based internal booking system using React.js, Material UI, and Redux.",
            "Improved UX with optimized state management and responsive design.",
            "Integrated APIs built with Node.js, Express.js, and .NET for seamless travel booking.",
          ],
          skills: [
            "JavaScript",
            ".Net Core",
            "Node.js",
            "Express.js",
            "ReactJs",
            "Redux",
            "Material UI",
          ],
        },
      ],
    },
  ];

  return (
    <section className="text-gray-200" id="experiences">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl text-primary dark:text-gray-200 font-semibold mb-6"
      >
        Experiences
      </motion.h2>

      <div className="space-y-10">
        {experiences.map((companyExp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-semibold text-primary dark:text-gray-100 mb-0">
              {companyExp.company}
            </h3>
            <p className="text-sm text-primary border-b dark:border-white/10 border-black/10 pb-2 italic">
              {companyExp.location}
            </p>

            <div className="space-y-3">
              {companyExp.roles.map((role, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative flex flex-col sm:flex-row sm:items-start sm:gap-8 group p-5 rounded-xl border border-transparent hover:-translate-y-1 transition-all duration-500 ease-out dark:hover:bg-white/5 hover:bg-black/5"
                >
                  <div className="sm:w-3/4">
                    <h4 className="text-lg font-semibold text-primary dark:text-gray-100">
                      {role.title}
                    </h4>

                    <ul className="mt-3 text-primary text-sm list-disc list-outside ml-5">
                      {role.description.map((d, k) => (
                        <li key={k}>{d}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {role.skills.map((s, k) => (
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
                    {role.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
