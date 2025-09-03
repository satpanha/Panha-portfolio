import React from 'react';
import { experienceContent } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-heading text-center mb-12 animate-fade-in-up">
          {experienceContent.heading}
        </h2>
        <div className="max-w-3xl mx-auto">
          {experienceContent.jobs.map((job, index) => (
            <div key={job.id} className="mb-8 last:mb-0 animate-fade-in-up delay-200">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl font-semibold font-heading text-primary">
                  {job.title}
                </h3>
                <span className="text-muted-foreground font-body text-sm">
                  {job.years}
                </span>
              </div>
              <p className="text-lg font-body text-muted-foreground mb-2">
                {job.company}
              </p>
              <p className="font-body leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
