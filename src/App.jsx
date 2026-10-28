import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ManpowerDashboard from './components/ManpowerDashboard';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useTheme from './hooks/useTheme';
import ScrollConstructionBackground from './components/ScrollConstructionBackground';
import MajorClients from './components/MajorClients';
import WhatsAppButton from './components/WhatsAppButton';
import BuildingGame from './components/BuildingGame';

export default function App() {
   const { theme, toggleTheme } = useTheme();
  return (
    <>
      <ScrollConstructionBackground />

     <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="website-content">
        <Hero />
        <About />
        <Services />
        <ManpowerDashboard />
        <Projects />
        <MajorClients/>
        <WhyUs />
        <Team />
        {/* <Gallery /> */}
        <Coverage />
        <Contact />
        <BuildingGame />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
