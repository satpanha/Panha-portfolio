import React from 'react';
import { heroContent } from '@/lib/data';
import { Button } from '@/components/ui/button'; // Assuming shadcn/ui button

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4 animate-fade-in-up">
          {heroContent.name}
        </h1>
        <p className="text-2xl md:text-4xl font-body text-muted-foreground mb-6 animate-fade-in-up delay-200">
          {heroContent.title}
        </p>
        <p className="text-lg md:text-xl font-body mb-8 animate-fade-in-up delay-400">
          {heroContent.tagline}
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up delay-600">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Learn More
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Contact Me
          </Button>
        </div>
      </div>
      {/* Add subtle background animations or patterns here */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Example: A simple radial gradient or SVG pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
      </div>
    </section>
  );
}
