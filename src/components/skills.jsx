import { useState } from "react";

function Skills() {
  const [skills] = useState([
    {
      id: 1,
      name: "HTML",
      percentage: 95,
      fact: "I started learning HTML first 🌐",
    },
    {
      id: 2,
      name: "CSS",
      percentage: 90,
      fact: "Tailwind CSS is my favorite 🎨",
    },
    {
      id: 3,
      name: "JavaScript",
      percentage: 85,
      fact: "JavaScript makes websites interactive ⚡",
    },
    {
      id: 4,
      name: "React",
      percentage: 80,
      fact: "React is my favorite framework ⚛️",
    },
  ]);

  const [activeFact, setActiveFact] = useState(null);

  return (
    <section className="px-20 py-20">
      <h2 className="text-4xl font-bold mb-10">
        Skills
      </h2>

      <div className="space-y-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            onMouseEnter={() => setActiveFact(skill.id)}
            onMouseLeave={() => setActiveFact(null)}
          >
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">
                {skill.name}
              </h3>

              <span>{skill.percentage}%</span>
            </div>

            <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
              <div
                className="bg-violet-500 h-full duration-700"
                style={{
                  width: `${skill.percentage}%`,
                }}
              ></div>
            </div>

            {activeFact === skill.id && (
              <p className="mt-2 text-gray-500">
                {skill.fact}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;