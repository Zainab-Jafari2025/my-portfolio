import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
function AboutSection() {
  const { theme } = useContext(GlobalContext);

  const [mood, setMood] = useState("😊");
  const [showMore, setShowMore] = useState(false);

  const moods = ["😊", "😎", "🔥", "🤓", "🚀"];

  return (
    <section
      className={`mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center ${
        theme === "dark" ? "text-white" : "text-slate-900"
      }`}
    >
      {/* LEFT SIDE */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          <span className="border-b-2 border-violet-600">
            About
          </span>{" "}
          Me
        </h2>

        {/* Avatar Reaction */}
        <div className="text-5xl sm:text-6xl md:text-7xl mb-4 transition-all duration-300">
          {mood}
        </div>

        {/* Mood Buttons */}
        <div className="flex gap-2 sm:gap-3 flex-wrap mb-5">
          {moods.map((item, index) => (
            <button
              key={index}
              onClick={() => setMood(item)}
              className={`text-xl sm:text-2xl p-2 rounded-lg transition ${
                theme === "dark"
                  ? "bg-slate-700 hover:bg-violet-500"
                  : "bg-gray-200 hover:bg-violet-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="text-sm sm:text-base leading-6 sm:leading-7">
          My name is Zainab and I am a Frontend Developer.
          I'm working with React and Next.js. My goal is to
          become a professional Frontend Developer and build
          useful applications.
        </p>

        {/* Show More Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base font-bold text-white bg-violet-500 rounded-lg hover:bg-violet-700 transition"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>

        {/* Extra Text */}
        {showMore && (
          <p
            className={`mt-4 text-sm sm:text-base ${
              theme === "dark"
                ? "text-gray-300"
                : "text-gray-500"
            }`}
          >
            I love learning new technologies, improving my
            skills every day, and building real-world projects
            that solve problems.
          </p>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="mt-6 md:mt-0">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-violet-500">
          Hobbies
        </h3>

        <ul className="list-disc pl-6 space-y-2 sm:space-y-4 marker:text-violet-500 text-sm sm:text-base">
          <li>Coding</li>
          <li>Reading</li>
          <li>Photography</li>
          <li>Traveling</li>
        </ul>

        {/* Mood Preview */}
        <div className="mt-6 md:mt-8 text-4xl sm:text-5xl">
          {mood}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;