import { contactContent } from '../../lib/data';

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
              <input type="text" id="name" placeholder="Your Name" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-body">Email</label>
              <input type="email" id="email" placeholder="your@example.com" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-body">Message</label>
              <textarea id="message" placeholder="Your message..." rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
            </div>
            <button type="submit" className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
              Send Message
            </button>
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
