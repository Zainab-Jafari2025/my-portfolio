import { useEffect, useState } from "react";

function ProjectUpdates() {
  const [updates, setUpdates] = useState([
    {
      id: 1,
      message: "Portfolio website deployed successfully 🚀",
    },
  ]);

  useEffect(() => {
    const messages = [
      "New project added 📁",
      "Updated React skills section ⚛️",
      "Improved contact form ✨",
      "Added feedback wall 🌟",
      "Bug fixes completed 🔧",
      "Portfolio performance improved ⚡",
    ];

    const interval = setInterval(() => {
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

      const newUpdate = {
        id: Date.now(),
        message: randomMessage,
      };

      setUpdates((prevUpdates) => [
        newUpdate,
        ...prevUpdates,
      ]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-20 py-20">
      <h2 className="text-4xl font-bold mb-10">
        Project Updates
      </h2>

      <div className="space-y-5">
        {updates.map((update) => (
          <div
            key={update.id}
            className="p-5 rounded-2xl shadow border hover:scale-[1.02] duration-300"
          >
            <p className="text-lg">
              🚀 {update.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectUpdates;