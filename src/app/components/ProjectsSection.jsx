"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Vital Drops(Using Next.js)",
    description: "Click me",
    email: "Admin: hasanmdtanvir001@gmail.com",
    pass: "Pass:hasanmdtanvir001",
    link: "https://vital-drops.vercel.app",
    image: "/images/projects/1.png",

    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Study Sphere(Using React)",
    description: "Click me",
    email: "Admin: hasanmdtanvir001@gmail.com",
    pass: "Pass: hasanmdtanvir001",
    link: "https://studysphere-cf030.web.app",
    image: "/images/projects/2.png",

    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Shop Finity(Using Next.js)",
    description: "Click me",
    email: "Admin: hasanmdtanvir001@gmail.com",
    pass: "Pass:hasanmdtanvir001",
    link: "https://shopfinity-sigma.vercel.app",
    image: "/images/projects/3.png",

    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 underline">
        My Some Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              email={project.email}
              description={project.description}
              link={project.link}
              pass={project.pass}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
