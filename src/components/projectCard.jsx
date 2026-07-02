import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const { theme, favorites, toggleFavorite } =
    useContext(GlobalContext);

  return (
    <div
      className={`rounded-xl shadow-lg transition-all duration-300 flex flex-col
      hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-1
      active:scale-100
      ${
        theme === "dark"
          ? "bg-slate-800 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-3">
        
        {/* Title + Favorite */}
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-lg sm:text-xl font-bold leading-tight">
            {project.title}
          </h2>

          <button
            onClick={() => toggleFavorite(project.id)}
            className="text-xl sm:text-2xl shrink-0 transition-transform duration-300 hover:scale-125 active:scale-95"
          >
            {favorites.includes(project.id) ? "⭐" : "☆"}
          </button>
        </div>

        {/* Status */}
        <span className="inline-block w-fit px-2 sm:px-3 py-1 rounded-full bg-violet-600 text-white text-xs sm:text-sm">
          {project.status}
        </span>

        {/* Description */}
        <p className="text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-violet-400 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-transform duration-200 hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* More Info */}
        <button
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
          className="text-violet-500 hover:underline text-sm sm:text-base mt-1 w-fit transition-all duration-200 hover:translate-x-1"
        >
          {expanded ? "Hide Info" : "More Info"}
        </button>

        {/* Smooth expand animation */}
        <div
          className={`text-sm sm:text-base text-gray-500 dark:text-gray-300 transition-all duration-300 overflow-hidden ${
            expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          Extra details about this project...
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded border border-violet-600 bg-violet-500 text-white
            transition-all duration-300 hover:bg-violet-600 hover:scale-[1.02] active:scale-95"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;