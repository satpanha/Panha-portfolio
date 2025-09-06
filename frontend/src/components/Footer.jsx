import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-lg font-serif font-bold">Sat Panha</p>
            <p className="text-sm font-sans">Creative Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-accent transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-white">
          <p>&copy; {new Date().getFullYear()} Sat Panha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
