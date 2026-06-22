import { useState } from "react";

function ProjectCard({ project, theme }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg border transition-all duration-300 hover:scale-105 ${
        theme === "dark"
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* TITLE + FEATURED */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">
            {project.name}
          </h3>

          {project.featured && (
            <span className="bg-yellow-300 text-black px-3 py-1 text-sm rounded-full">
              ⭐ Featured
            </span>
          )}
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mb-3">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-violet-100 text-violet-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3">
          {/* VIEW DETAILS */}
          <button
            onClick={() =>
              setShowDetails(!showDetails)
            }
            className="bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
          >
            {showDetails
              ? "Hide Details"
              : "View Details"}
          </button>

          {/* LIVE LINK */}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition"
          >
            Live Demo
          </a>
        </div>

        {/* CONDITIONAL DETAILS */}
        {showDetails && (
          <div className="mt-4 p-3 bg-gray-100 rounded-lg text-sm text-gray-700 animate-fadeIn">
            <p>
              🔹 This project was built using modern
              frontend technologies.
            </p>

            <p className="mt-2">
              🔹 Tech Stack:{" "}
              {project.techStack.join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;