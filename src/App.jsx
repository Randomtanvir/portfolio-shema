import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";

const App = () => {
  return (
    <div className="">
      <Banner /> {/*for banner in top */}
      <HeroSection />
      <About />
      <SkillSection />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
