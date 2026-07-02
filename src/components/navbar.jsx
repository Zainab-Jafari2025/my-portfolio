import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Navbar() {
  const { theme, toggleTheme, user } = useContext(GlobalContext);

  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `transition duration-300 hover:text-violet-500 ${
      isActive
        ? "text-violet-500 border-b-2 border-violet-500 pb-1"
        : ""
    }`;

  return (
    <nav
      className={`px-8 py-5 border-b ${
        theme === "dark"
          ? "bg-slate-900 border-slate-800 text-white"
          : "bg-white border-gray-300 text-slate-900"
      }`}
    >
      {/* Top bar */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-violet-500">
          {user.name}
        </h2>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} end={link.path === "/"} className={linkClass}>
                {link.name}
              </NavLink>
            </li>
          ))}

          <li>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={linkClass}
                onClick={() => setOpen(false)} // close menu on click
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          <li>
            <button
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="px-4 py-2 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition w-full"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;