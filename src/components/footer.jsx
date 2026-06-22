import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Connect with me</h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-3xl mb-6">
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

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
