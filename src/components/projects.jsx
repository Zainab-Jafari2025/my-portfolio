import { useState } from "react";
import calculator from "../assets/calculator.png";
import shopping from "../assets/shopping.png";
import teather from "../assets/teather.png";
import ProjectCard from "./projectCard";

function Projects({ theme }) {
  const projects = [
    {
      id: 1,
      name: "Calculator App",
      image: calculator,
      description: "A simple app for calculating numbers.",
      techStack: ["JavaScript", "CSS"],
      featured: true,
      link: "https://calculator-sable-delta-25.vercel.app/",
    },
    {
      id: 2,
      name: "Dashboard",
      image: shopping,
      description: "A dashboard for online shopping.",
      techStack: ["JavaScript", "CSS"],
      featured: true,
      link: "https://dashboard-ruddy-nine-84.vercel.app/",
    },
    {
      id: 3,
      name: "Movie Theater",
      image: teather,
      description: "A movie theater page.",
      techStack: ["HTML", "CSS"],
      featured: false,
      link: "https://movie-theater-page.vercel.app/",
    },
  ];

  // FILTER STATE
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          project.techStack.includes(filter)
        );

  // All unique tech buttons (optional upgrade)
  const allTechs = ["All", "JavaScript", "CSS", "HTML"];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-center text-5xl font-bold mb-12">
        My Projects
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-5 py-2 rounded-lg transition-all duration-300 ${
              filter === tech
                ? "bg-violet-700 text-white"
                : "bg-violet-500 text-white hover:bg-violet-600"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            theme={theme}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;