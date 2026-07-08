import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Products & Services', href: '#products', id: 'products' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col select-none group">
          <span className={`text-2xl font-mono font-bold tracking-tight ${isScrolled ? 'text-black' : 'text-black md:text-black'}`}>
            ELCOMECH
          </span>
          <div className="flex items-center">
            <span className={`text-[10px] font-mono tracking-widest ${isScrolled ? 'text-black' : 'text-black md:text-black'}`}>SYSTEMS</span>
            <div className="ml-2 w-8 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-12"></div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-red-600 ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-6 py-2 border-2 border-red-600 text-red-600 font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-red-600 hover:text-white`}
          >
            Get Quote
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-4 bg-red-600 text-white font-bold py-3 uppercase tracking-wide"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
