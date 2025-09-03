import React from 'react';
import { projectsContent } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-heading text-center mb-12 animate-fade-in-up">
          {projectsContent.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsContent.projects.map((project) => (
            <div key={project.id} className="bg-card p-6 rounded-lg shadow-lg animate-fade-in-up delay-200">
              <h3 className="text-2xl font-semibold font-heading mb-2 text-primary">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-body mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm font-body text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button asChild size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
