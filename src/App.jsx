import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalContext } from "./context/GlobalContext";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

function App() {
  const { theme } = useContext(GlobalContext);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
