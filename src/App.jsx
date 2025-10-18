import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Timeline from "./components/Education";
import Education from "./components/Education";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";

const App = () => {
  return (
    <div className="">
      <Banner />
      <HeroSection />
      <About />
      <SkillSection />
      <Education />
      <Contact />
      <Footer />
      {/* <Timeline /> */}
    </div>
  );
};

export default App;
