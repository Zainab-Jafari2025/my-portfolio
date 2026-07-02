import Header from "../components/header";
import About from "../components/about";
import Profile from "../components/profile";
// import Projects from "../components/projects";
import Contact from "../components/contact";
import FeedbackWall from "../components/feedbackWall";
import profilePic from "../assets/profile.jpg";
import PageTransition from "../components/PageTransition";

function Home() {
  return (
    <>
      <PageTransition>
        <Header />
        <Profile image={profilePic} name="Zainab" />
        <About />
        {/* <Projects /> */}
        <FeedbackWall />
        <Contact />
      </PageTransition>
    </>
  );
}

export default Home;
