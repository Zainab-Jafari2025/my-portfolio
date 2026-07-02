import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio built with React",
    status: "Completed",
    tech: ["React", "CSS"],
  },
  {
    id: 2,
    title: "Todo App",
    description: "Task management app",
    status: "In Progress",
    tech: ["React", "LocalStorage"],
  },
];

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>

      <p>{project.description}</p>

      <span>Status: {project.status}</span>

      <div>
        {project.tech.map((t, index) => (
          <span key={index} className="tech-badge">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;