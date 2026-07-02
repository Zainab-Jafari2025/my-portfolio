import { useState } from "react";
import calculator from "../assets/calculator.png";
import shopping from "../assets/shopping.png";
import teather from "../assets/teather.png";
import ProjectCard from "./projectCard";

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Calculator App",
      image: calculator,
      description: "A simple app for calculating numbers.",
      tech: ["JavaScript", "CSS"],
      status: "Completed",
      github: "https://calculator-sable-delta-25.vercel.app/",
    },
    {
      id: 2,
      title: "Dashboard",
      image: shopping,
      description: "A dashboard for online shopping.",
      tech: ["JavaScript", "CSS"],
      status: "Completed",
      github: "https://dashboard-ruddy-nine-84.vercel.app/",
    },
    {
      id: 3,
      title: "Movie Theater",
      image: teather,
      description: "A movie theater page.",
      tech: ["HTML", "CSS"],
      status: "In Progress",
      github: "https://movie-theater-page.vercel.app/",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const allTechs = ["All", "JavaScript", "CSS", "HTML"];

  const filteredProjects = projects.filter((project) => {
    const matchTech =
      filter === "All" || project.tech.includes(filter);

    const matchSearch =
      project.title.toLowerCase().includes(search.toLowerCase());

    return matchTech && matchSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20">

      {/* TITLE */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-10">
        My Projects
      </h2>

      {/* SEARCH INPUT */}
      <div className="flex justify-center mb-6 md:mb-8">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 sm:p-3 rounded-lg w-full max-w-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-10">
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-3 sm:px-4 md:px-5 py-2 rounded-lg text-xs sm:text-sm md:text-base transition-all duration-300 ${
              filter === tech
                ? "bg-violet-700 text-white"
                : "bg-violet-500 text-white hover:bg-violet-600"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 text-base sm:text-lg">
          No projects found 😢
        </p>
      )}

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}

export default ProjectsSection;