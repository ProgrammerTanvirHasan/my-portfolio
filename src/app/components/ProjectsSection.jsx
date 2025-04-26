"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js // Social Website",
    description: "Click me",
    email: "Admin: tanvirHASANtopu981@gmail.com",
    pass: "pass: tanvirHASANtopu981",
    link: "https://vital-drops-a56h.vercel.app",
    image: "/images/projects/1.png",

    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React // School",
    description: "Click me",
    email: "Admin: hasanmdtanvir001@gmail.com",
    pass: "pass: hasanmdtanvir001",
    link: "https://studysphere-cf030.web.app",
    image: "/images/projects/2.png",

    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Click me",
    email: "",
    pass: "",
    link: "https://looking-for-talented-devoloper.web.app",
    image: "/images/projects/3.png",

    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "E-commerce Application",
    description: "Click me",
    email: "",
    pass: "",
    link: "https://authentic-drawing-art.web.app",
    image: "/images/projects/4.png",

    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Plane Javascript",
    description: "Click me",
    email: "",
    pass: "",
    link: "https://65e6fd8b2cb5b7884363a1da--charming-melomakarona-df3382.netlify.app",
    image: "/images/projects/5.png",

    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "E - Ticket",
    description: "Click me",
    email: "",
    pass: "",
    link: "https://cosmic-starlight-f3c196.netlify.app",
    image: "/images/projects/6.png",

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

      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
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
