import About from "../components/About";
import CardOneSection from "../components/CardOneSection";
import CardSectionTwo from "../components/CardSectionTwo";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Teams from "../components/Teams";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Partners />
      <CardOneSection />
      <CardSectionTwo />
      <Teams />
      <Footer />
    </div>
  );
};

export default Home;
