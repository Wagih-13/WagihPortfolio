import AboutMeSection from "./(public)/sections/AboutMeSection";
import ContactSection from "./(public)/sections/ContactSection";
import HeroSection from "./(public)/sections/HeroSection";
import NavBarSection from "./(public)/sections/NavBarSection";
import ProjectsSection from "./(public)/sections/ProjectsSection";
import SammarySction from "./(public)/sections/SammarySction";
import ServicesSection from "./(public)/sections/ServicesSection";
import SkillesSection from "./(public)/sections/SkillesSection";

const Home = () => {
  return (
    <>
      <NavBarSection />
      <HeroSection />
      <SkillesSection />
      <ProjectsSection />
      <SammarySction />
      <ServicesSection />
      <AboutMeSection />
      <ContactSection />
    </>
  );
};

export default Home;
