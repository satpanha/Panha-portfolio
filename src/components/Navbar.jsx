import { useState } from 'react';

export default function Navbar({ logoText, navLinks, ctaText }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-primary font-serif">{logoText}</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Ensure these links are keyboard navigable and have appropriate ARIA labels */}
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium font-sans transition-colors hover:text-accent ${index === 0 ? 'text-accent' : 'text-text-dark'}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-accent hover:bg-accent font-sans">{ctaText}</a>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Ensure this button has proper ARIA attributes for screen readers */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium font-sans transition-colors hover:text-accent ${index === 0 ? 'text-accent' : 'text-text-dark'}`}
              >
                {link}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <a href="#contact" className="w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-accent hover:bg-accent font-sans text-center">{ctaText}</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
