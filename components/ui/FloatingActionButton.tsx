import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react'; // Assuming lucide-react for icons

export default function FloatingActionButton() {
  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 ease-in-out transform hover:scale-110"
      onClick={() => window.location.href = `mailto:alex.johnson@example.com`}
    >
      <Mail className="w-8 h-8" />
      <span className="sr-only">Contact Me</span>
    </Button>
  );
}
