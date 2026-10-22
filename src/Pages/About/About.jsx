import Nav from "../../Components/Navbar/Nav";
import Footer from "../../Components/Footer/Footer";

import AboutHero from "./Components/AboutHero/AboutHero";
import OurStory from "./Components/OurStory/OurStory";
import OurValues from "./Components/OurValues/OurValues";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import AboutCTA from "./Components/AboutCTA/AboutCTA";

const About = () => {
  return (
    <>
      <Nav />

      <main>
        <AboutHero />
        <OurStory />
        <OurValues />
        <WhyChooseUs />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
};

export default About;