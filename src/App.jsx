import Navbar from "./components/navbar";
import Header from "./components/header";
import Profile from "./components/profile";
import profilePic from "./assets/profile.jpg";
import About from "./components/about";
// import ProjectCard from "./components/projectCard";
import Projects from "./components/projects";
import Footer from "./components/footer";
function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar full_name="Zainab Jafari" />
      <Header />
      <Profile image={profilePic} name="my profile photo" />
      <About />
      <Projects/>
      <Footer/>
    </div>
  );
}
export default App;
