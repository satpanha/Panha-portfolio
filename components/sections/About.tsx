import React from 'react';
import { aboutContent } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-heading text-center mb-12 animate-fade-in-up">
          {aboutContent.heading}
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl font-body leading-relaxed animate-fade-in-up delay-200">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
