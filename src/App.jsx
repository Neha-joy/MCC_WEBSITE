import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ManpowerDashboard from './components/ManpowerDashboard';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ScrollConstructionBackground from './components/ScrollConstructionBackground';
import MajorClients from './components/MajorClients';
import WhatsAppButton from './components/WhatsAppButton';
import BuildingGame from './components/BuildingGame';


import useTheme from './hooks/useTheme';
import AboutPage from "./components/AboutPage";
import ScrollToHash from "./components/ScrollToHash";
import ScrollManager from "./components/ScrollManager";


function Home() {
  return (
    <main className="website-content">

      <Hero />

      <About />

      <Services />

      <ManpowerDashboard />

      <Projects />

      <MajorClients />

      <WhyUs />

      <Team />

      <Coverage />

      <Contact />

    </main>
  );
}


export default function App() {

  const {
    theme,
    toggleTheme
  } = useTheme();

  return (
    <BrowserRouter>
      <ScrollManager />
      <ScrollToHash />

      <ScrollConstructionBackground />


      {/* NAVBAR - SHOW ON ALL PAGES */}

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />


      {/* PAGE CONTENT */}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/about"
          element={<AboutPage />}
        />

      </Routes>


      {/* GAME - SHOW ON ALL PAGES */}

      <BuildingGame />


      {/* WHATSAPP - SHOW ON ALL PAGES */}

      <WhatsAppButton />


      {/* FOOTER - SHOW ON ALL PAGES */}

      <Footer />

    </BrowserRouter>
  );
}