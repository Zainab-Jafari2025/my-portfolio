function ProjectCard({project}) {
  return (
    <>
      <div
        className="
    bg-slate-900
    rounded-2xl
    overflow-hidden
    shadow-lg
    hover:scale-105
    duration-300
  "
      >
        <img src={project.image} alt="" className="w-full h-52 object-cover" />

        <div className="p-6">
          {project.featured && (
            <span
              className="
          bg-yellow-400
          text-black
          px-3
          py-1
          rounded-full
          text-sm
          font-semibold
        "
            >
              ⭐ Featured
            </span>
          )}

          <h3 className="text-2xl font-bold mt-4">{project.name}</h3>

          <p className="text-gray-400 mt-3">{project.description}</p>

          <div className="flex gap-2 flex-wrap mt-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="
            bg-violet-700
            px-3
            py-1
            rounded-full
            text-sm
          "
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            className="mt-6 text-violet-400 hover:text-violet-300">
            View Project →
          </button>
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
