import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import About from "./pages/Aboutt";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 left-5 px-4 py-2 rounded-full bg-violet-600 text-white z-50"
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>

      <Navbar full_name="Zainab Jafari" theme={theme} />

      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/about" element={<About theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
