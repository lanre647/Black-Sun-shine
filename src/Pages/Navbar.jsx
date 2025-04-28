import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-blue-400 transition-colors">
          BLACKSUNSHINE
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link to="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <span className="text-3xl font-bold">×</span>
            ) : (
              <span className="text-3xl font-bold">≡</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col space-y-5 text-lg bg-black/95 text-white">
          <Link to="/portfolio" onClick={toggleMenu} className="hover:text-blue-400 transition-colors">Portfolio</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-blue-400 transition-colors">About</Link>
          <Link to="/services" onClick={toggleMenu} className="hover:text-blue-400 transition-colors">Services</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>
      )}
    </nav>
  );
}
