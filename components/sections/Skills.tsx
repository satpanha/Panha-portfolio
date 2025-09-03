import React from 'react';
import { skillsContent } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-heading text-center mb-12 animate-fade-in-up">
          {skillsContent.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsContent.categories.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg animate-fade-in-up delay-200">
              <h3 className="text-2xl font-semibold font-heading mb-4 text-primary">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-body text-muted-foreground shadow-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
