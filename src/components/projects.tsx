"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "motion/react";

import pokemonProject from "@/public/pokemonProject.webp";
import quizMakerProject from "@/public/quizMakerProject.webp";
import aimlProject from "@/public/aimlProject.webp";
import ptsoProject from "@/public/ptsoProject.webp";
import tsuProject from "@/public/tsuProject.webp";
import cookCraftProject from "@/public/cookCraftProject.webp";
import cutieHackProject from "@/public/cutieHackProject.webp";
import citrusHackProject from "@/public/citrusHackProject.webp";
import archeryProject from "@/public/archeryProject.webp";
import mockTrailProject from "@/public/mockTrialProject.webp";
import royalHeartHouseProject from "@/public/royalHeartHouseProject.webp";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const projects = [
  {
    title: "Royal Heart House",
    description:
      "Architected a full-stack website for the Royal Heart House, a small business in the SGV.",
    image: royalHeartHouseProject,
    link: "https://royalhearthouse.vercel.app",
    tags: ["Figma", "TypeScript", "Stripe", "Next.js"],
  },
  {
    title: "CookCraft",
    description:
      "Architected a full-stack AI recipe generator with 3 other developers.",
    image: cookCraftProject,
    link: "https://cookcraft-ruddy.vercel.app",
    tags: ["Figma", "TypeScript", "Supabase", "Jest"],
  },
  {
    title: "Citrus Hack 2026",
    description: "Developed hackathon portal and led 10+ developers.",
    image: citrusHackProject,
    link: "https://www.citrushack.com",
    tags: ["Next.js", "Figma", "TypeScript", "Docker"],
  },
  {
    title: "UCR Archery Club",
    description:
      "Project Lead and SCRUM Master, overseeing 10+ developers to design and deploy the site.",
    image: archeryProject,
    link: "https://github.com/acm-ucr/archery-website",
    tags: ["Next.js", "Figma", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Pre-Therapy Student Organization",
    description:
      "Built and deployed the PTSO site with a 10+ team, translating wireframes into responsive components.",
    image: ptsoProject,
    link: "https://ptso.ucrhighlanders.org",
    tags: ["Next.js", "TailwindCSS", "Figma"],
  },
  {
    title: "Cutie Hack 2025",
    description:
      "Worked closely with dev team to develop hackathon portal, 200+ participants.",
    image: cutieHackProject,
    link: "https://cutiehack.com",
    tags: ["Next.js", "Figma", "TypeScript", "Docker"],
  },
  {
    title: "AI/ML CSE Resources",
    description:
      "Developed the AI/ML resource hub for UCR's CS department alongside 10+ developers.",
    image: aimlProject,
    link: "https://learnai.cs.ucr.edu",
    tags: ["Next.js", "TailwindCSS", "Figma"],
  },
  {
    title: "Thai Student Union",
    description:
      "Led a 10-person team to design and ship UCR's TSU website, from Figma to deployment.",
    image: tsuProject,
    link: "https://tsu.ucrhighlanders.org",
    tags: ["Next.js", "TailwindCSS", "Figma", "AGILE"],
  },
  {
    title: "Mock Trial",
    description:
      "Developed the Mock Trial Club website alongside 10+ developers.",
    image: mockTrailProject,
    link: "https://mocktrial.ucrhighlanders.org",
    tags: ["Next.js", "TailwindCSS", "Figma"],
  },
  {
    title: "Text-Based Pokémon Roleplay Game",
    description:
      "Battle, catch, and buy items in a text-based Gen 1 Pokémon game built with SCRUM and unit testing.",
    image: pokemonProject,
    link: "https://github.com/yubinzhen/CS100-WAYL-Project",
    tags: ["C++", "SCRUM", "Unit Tests"],
  },
  {
    title: "Cutie Hackathon: Quiz Maker",
    description:
      "A flashcard program built in 12 hours — save/load custom decks and quiz yourself for exams.",
    image: quizMakerProject,
    link: "https://github.com/wesleylwu/cutieHack24",
    tags: ["Hackathon", "C++"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="mb-10 p-5">
      <motion.div
        className="font-portfolio-instrument-serif text-portfolio-black mb-12 flex justify-center text-4xl font-extrabold sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Projects
      </motion.div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{
              y: -4,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            className="h-[340px]"
          >
            <Link
              href={project.link}
              target="_blank"
              className="group bg-portfolio-lightgray flex h-full flex-col overflow-hidden rounded-xl border border-black/10 transition-all duration-300 hover:border-black/25 hover:shadow-sm"
            >
              <div className="relative h-50 w-full shrink-0 overflow-hidden border-b border-black/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-conver transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex min-h-0 flex-1 flex-col gap-1.5 p-4">
                <p className="font-portfolio-sans-serif text-portfolio-black line-clamp-1 text-base italic group-hover:underline">
                  {project.title}
                </p>
                <p className="text-portfolio-darkgray line-clamp-2 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-portfolio-gray rounded-full border border-black/15 px-2.5 py-0.5 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
