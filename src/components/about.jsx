import { useState } from "react";

function About({ theme }) {
  const [mood, setMood] = useState("😊");
  const [showMore, setShowMore] = useState(false);

  const moods = ["😊", "😎", "🔥", "🤓", "🚀"];

  return (
    <section
      className={`mx-auto px-20 py-20 grid md:grid-cols-2 gap-20 items-center ${
        theme === "dark" ? "text-white" : "text-slate-900"
      }`}
    >
      {/* LEFT SIDE */}
      <div>
        <h2 className="text-4xl font-bold mb-6">
          <span className="border-b-2 border-violet-600">
            Abo
          </span>
          ut Me
        </h2>

        {/* Avatar Reaction (NEW PART) */}
        <div className="text-7xl mb-4 transition-all duration-300">
          {mood}
        </div>

        {/* Mood Buttons */}
        <div className="flex gap-3 flex-wrap mb-5">
          {moods.map((item, index) => (
            <button
              key={index}
              onClick={() => setMood(item)}
              className="text-2xl p-2 bg-gray-200 rounded-lg hover:bg-violet-200 transition"
            >
              {item}
            </button>
          ))}
        </div>

        <p className="leading-7">
          My name is Zainab and I am a Frontend developer.
          I'm working with React and Next.js. My goal is to
          become a professional Frontend Developer and build
          useful applications.
        </p>

        {/* SHOW MORE BUTTON */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="font-bold text-white mt-6 px-5 py-3 bg-violet-500 rounded-lg hover:bg-violet-700 transition"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>

        {/* CONDITIONAL EXTRA TEXT */}
        {showMore && (
          <p className="mt-4 text-gray-500">
            I love learning new technologies, improving my
            skills every day, and building real-world projects
            that solve problems.
          </p>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div>
        <h3 className="text-3xl font-semibold mb-4 text-violet-500">
          Hobbies
        </h3>

        <ul className="list-disc pl-6 space-y-4 marker:text-violet-500">
          <li>Coding</li>
          <li>Reading</li>
          <li>Photography</li>
          <li>Traveling</li>
        </ul>

        {/* BONUS: Mood hint */}
        <div className="mt-8 text-5xl">
          {mood}
        </div>
      </div>
    </section>
  );
}

export default About;