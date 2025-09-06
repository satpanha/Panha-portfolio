import React from 'react';
import { contactContent } from '@/lib/data';
import { Input } from '@/components/ui/input'; // Assuming shadcn/ui input
import { Textarea } from '@/components/ui/textarea'; // Assuming shadcn/ui textarea
import { Button } from '@/components/ui/button'; // Assuming shadcn/ui button

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-heading text-center mb-12 animate-fade-in-up">
          {contactContent.heading}
        </h2>
        <p className="text-center text-lg md:text-xl font-body text-muted-foreground mb-12 animate-fade-in-up delay-200">
          {contactContent.description}
        </p>
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg animate-fade-in-up delay-400">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-body">Name</label>
              <Input type="text" id="name" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-body">Email</label>
              <Input type="email" id="email" placeholder="your@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-body">Message</label>
              <Textarea id="message" placeholder="Your message..." rows={5} />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Send Message
            </Button>
          </form>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold font-heading mb-4">Find me on:</h3>
            <div className="flex justify-center space-x-6">
              {contactContent.socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
