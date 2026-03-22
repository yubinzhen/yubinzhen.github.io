"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";
import UCRLogo from "@/public/ucrLogo.webp";
import ACMLogo from "@/public/acmLogo.webp";
import CitrusHackLogo from "@/public/citrusHackLogo.webp";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const experiences = [
  {
    logo: UCRLogo,
    logoAlt: "UCR Logo",
    org: "UCR Geospacial Assessibility Lab",
    positions: [
      {
        title: "Undergraduate Research Assistant",
        date: "Jan 2026 — Present",
        bullets: [
          "Performing data validation for a large-scale Geospatial AI dataset, manually verifying and correcting 8,000+ LLM-generated questions and answers to improve model accuracy.",
          "Collaborating to refine training data for Vision-Language Models, focusing on AI interpretation of map-based navigation and spatial reasoning.",
          "Ensuring high-quality ground truth data for the MapBench project, a benchmark used to evaluate AI's ability to follow human-readable directions.",
        ],
      },
    ],
  },
  {
    logo: ACMLogo,
    logoAlt: "ACM Logo",
    org: "UCR Association of Computing Machinery",
    positions: [
      {
        title: "Project Lead Developer",
        date: "Jan 2026 — Present",
        bullets: [
          "Led teams of 10+ developers as Scrum Master, facilitating AGILE ceremonies and code reviews to streamline the development lifecycle and ensure 100% on-time delivery of platform features.",
          "Conduct technical code reviews and provide mentorship on Next.js and TailwindCSS best practices.",
          "Directed the end-to-end design and development lifecycle, collaborating with on-campus organizations to define UI/UX requirements in Figma and oversee implementation.",
        ],
      },
      {
        title: "Web Developer",
        date: "Jan 2025 — Dec 2025",
        bullets: [
          "Developed high-performance frontend components using Next.js and TailwindCSS for campus organizations.",
          "Projects: AI/ML CSE Resources, Pre-Therapy Student Org, Thai Student Union, Mock Trial.",
        ],
      },
    ],
  },
  {
    logo: CitrusHackLogo,
    logoAlt: "Citrus Hack Logo",
    org: "Citrus/Cutie Hack",
    positions: [
      {
        title: "Software Engineering Lead",
        date: "Jan 2026 — Present",
        bullets: [
          "Directing the technical development of the hackathon portal, leading a team of 10+ software engineers.",
          "Assigning development tasks and conducting comprehensive code reviews to ensure platform stability.",
        ],
      },
      {
        title: "Software Engineer",
        date: "Oct 2025 — Dec 2025",
        bullets: [
          "Architected web portals and dashboards, focusing on seamless user registration and event management.",
          "Translated Figma wireframes into functional interfaces, ensuring 100% alignment with branding.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="px-6 py-20 sm:px-12 lg:px-36">
      <motion.div
        className="font-portfolio-instrument-serif text-portfolio-black mb-12 text-4xl font-extrabold sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
      >
        Experience
      </motion.div>

      {experiences.map((exp, i) => (
        <motion.div
          key={exp.org}
          className="flex flex-col gap-6 border-b border-black/10 py-10 sm:flex-row sm:gap-12"
          custom={i}
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="font-portfolio-sans-serif flex w-full flex-row items-center gap-4 sm:w-48 sm:shrink-0 sm:flex-col sm:items-start sm:gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={exp.logo}
                alt={exp.logoAlt}
                className="h-16 w-16 object-contain sm:h-32 sm:w-32"
              />
            </motion.div>
            <p className="text-portfolio-black text-base font-bold sm:text-lg">
              {exp.org}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {exp.positions.map((pos, j) => (
              <motion.div
                key={pos.title}
                className="font-portfolio-sans-serif flex flex-col gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15 + j * 0.1,
                  duration: 0.4,
                  ease: "easeOut" as const,
                }}
              >
                <p className="text-portfolio-black text-lg italic sm:text-xl">
                  {pos.title}
                </p>
                <p className="text-portfolio-gray text-sm">{pos.date}</p>
                <div className="mt-1 flex flex-col gap-2">
                  {pos.bullets.map((bullet, k) => (
                    <p key={k} className="text-portfolio-darkgray text-sm">
                      • {bullet}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
