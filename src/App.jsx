import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import LoadingIndicator from './components/LoadingIndicator.jsx';

export default function App() {
  const navLinks = ['Home', 'About Me', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <div className="min-h-screen bg-secondary-mint">
      <LoadingIndicator />
      <Toaster />
      <Navbar logoText="Sat Panha" navLinks={navLinks} ctaText="Hire Me" />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
