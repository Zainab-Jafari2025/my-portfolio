import calculator from "../assets/calculator.png";
import shopping from "../assets/shopping.png";
import teather from "../assets/teather.png";
import ProjectCard from "./projectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Calculator App",
      image: calculator,
      description: "a simple app for calculating the numbers.",
      techStack: ["Java Script", "CSS"],
      featured: true,
    },
    {
      id: 2,
      name: "Dashboard",
      image: shopping,
      description: "A dashboard for online shopping.",
      techStack: ["Java Script", "CSS"],
      featured: true,
    },
    {
      id: 3,
      name: "Movie Teather",
      image: teather,
      description: "A movie teather page.",
      techStack: ["HTML", "CSS"],
      featured: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-center text-5xl font-bold mb-12">My Projects</h2>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
export default Projects;
