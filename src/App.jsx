import Navbar from "./components/navbar";
import Header from "./components/header";
import Profile from "./components/profile";
import profilePic from "./assets/profile.jpg";
import About from "./components/about";
// import ProjectCard from "./components/projectCard";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { useState } from "react";
import Contact from "./components/contact";
import FeedbackWall from "./components/feedbackWall";
import ProjectUpdates from "./components/ProjectUpdates";
import Skills from "./components/skills";
import ScrollProgress from "./components/ScrollProgress";
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="bg-slate-950 text-white min-h-screen ">
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
        }`}
      >
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="
    fixed top-4 left-5
    px-4 py-2
    rounded-full
    bg-violet-600
    text-white
    shadow-lg
    hover:bg-violet-700
    transition-all duration-300
    hover:scale-105 z-50
  "
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
        <ScrollProgress/>
        <Navbar full_name="Zainab Jafari" theme={theme} />
        <Header theme={theme}/>
        <Profile image={profilePic} name="my profile photo" />
        <About theme={theme} />
        <Projects theme = {theme} />
        <Contact/>
        <FeedbackWall/>
        <ProjectUpdates/>
        <Skills/>
        <Footer theme={theme} />
      </div>
    </div>
  );
}
export default App;
