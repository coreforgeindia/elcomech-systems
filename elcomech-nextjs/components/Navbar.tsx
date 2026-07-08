import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products & Services', href: '/products' },
  { name: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsMobileOpen(false); }, [router.pathname]);

  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col select-none group">
          <span className="text-2xl font-mono font-bold tracking-tight text-black">ELCOMECH</span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-black">SYSTEMS</span>
            <div className="w-8 h-[2px] bg-[#D40000] transition-all duration-300 group-hover:w-12" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#D40000] relative ${
                isActive(link.href) ? 'text-[#D40000]' : 'text-gray-800'
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D40000]"
                />
              )}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="px-6 py-2 border-2 border-[#D40000] text-[#D40000] font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-[#D40000] hover:text-white"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-left text-lg font-semibold py-3 border-b border-gray-100 transition-colors ${
                    isActive(link.href) ? 'text-[#D40000]' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-4 bg-[#D40000] text-white font-bold py-3 uppercase tracking-wide text-center"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
