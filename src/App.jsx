import About from "./components/About";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portofolio from "./components/Portofolio";
import SocialLinks from "./components/SocialLinks";
import SocialBottom from "./components/SocialBottom";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Portofolio />
      <Skill />
      <SocialBottom/>
      <Contact />
      <SocialLinks />

    </div>
  );
}

export default App;