import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  const { theme, user } = useContext(GlobalContext);

  return (
    <footer
      className={`py-10 md:py-14 mt-16 md:mt-20 px-4 ${
        theme === "dark"
          ? "bg-slate-900 text-white"
          : "bg-gray-100 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* TITLE */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Connect with me
        </h2>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 sm:gap-6 text-2xl sm:text-3xl mb-5 md:mb-6">
          <a
            href="https://github.com/Zainab-Jafari2025"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/zainab-jafari-1419ab31b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/zainabjafari75?igsh=MWcyYXpwOW0yYnBwMQ=="
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p
          className={`text-xs sm:text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          © {new Date().getFullYear()} {user.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
