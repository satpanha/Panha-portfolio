import React from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { siteConfig } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body scroll-smooth">
      <ScrollProgressIndicator />
      <ThemeToggle />

      {/* Navigation (simple for now, can be expanded) */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold font-heading text-primary">
            {siteConfig.name.split(' ')[0]}<span className="text-accent">.</span>
          </a>
          <div className="space-x-6 hidden md:flex">
            <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          {/* Mobile menu toggle can be added here */}
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <FloatingActionButton />

      {/* Footer */}
      <footer className="py-8 bg-card text-muted-foreground text-center text-sm">
        <div className="container mx-auto px-4">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
