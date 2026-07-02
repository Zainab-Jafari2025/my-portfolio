import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TypingText from "./TypingText";

function Header() {
  const { theme, user } = useContext(GlobalContext);

  return (
    <header className="text-center py-12 md:py-24 px-4 flex flex-col items-center">
      <h1
        className={`font-bold text-3xl sm:text-4xl md:text-6xl leading-tight max-w-3xl ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        Hi, I'm{" "}
        <span className="text-violet-500 block sm:inline">{user.name} 👋</span>
      </h1>

      <div className="mt-3 md:mt-6">
        <TypingText />
      </div>

      <p
        className={`mt-4 md:mt-6 text-base sm:text-lg md:text-2xl max-w-2xl ${
          theme === "dark" ? "text-gray-300" : "text-slate-900"
        }`}
      >
        WELCOME TO MY PORTFOLIO
      </p>

      <p className="text-violet-400 italic mt-4 md:mt-6 text-sm sm:text-base md:text-xl">
        Never give up!
      </p>
    </header>
  );
}

export default Header;
