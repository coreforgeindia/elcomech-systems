import React from 'react';
import { Link } from 'wouter';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 border-t border-red-600/20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Row 1: Logo & Tagline */}
        <div className="mb-16">
          <div className="flex flex-col group inline-block">
            <span className="text-3xl font-mono font-bold tracking-tight text-white">
              ELCOMECH
            </span>
            <div className="flex items-center">
              <span className="text-xs font-mono tracking-widest text-gray-400">SYSTEMS</span>
              <div className="ml-2 w-8 h-[2px] bg-red-600"></div>
            </div>
          </div>
          <p className="text-xl font-bold mt-6 tracking-tight text-gray-300">Engineering Precision. Testing Excellence.</p>
        </div>

        {/* Row 2: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 text-gray-400">Company Info</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premier engineering firm specializing in critical electrical testing systems, RF shielding, and custom wiring solutions for industrial applications.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="text-red-600 shrink-0 mt-0.5" />
                Bengaluru - 560091, Karnataka, India
              </p>
              <p className="flex items-center gap-3">
                <ClockIcon size={18} className="text-red-600 shrink-0" />
                Mon–Sat, 9:00 AM – 6:00 PM IST
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 text-gray-400">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/#home" className="hover:text-red-600 transition-colors">Home</a></li>
              <li><a href="/#about" className="hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="/#products" className="hover:text-red-600 transition-colors">Products & Services</a></li>
              <li><a href="/#process" className="hover:text-red-600 transition-colors">Engineering Process</a></li>
              <li><a href="/#faq" className="hover:text-red-600 transition-colors">Technical FAQ</a></li>
              <li><a href="/#contact" className="hover:text-red-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 text-gray-400">Core Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/products/resistive-load-bank" className="hover:text-red-600 transition-colors">Resistive Load Banks</Link></li>
              <li><Link href="/products/rf-shielded-enclosure" className="hover:text-red-600 transition-colors">RF Shielded Enclosures</Link></li>
              <li><Link href="/products/pcb-test-system" className="hover:text-red-600 transition-colors">PCB Test Fixtures</Link></li>
              <li><Link href="/products/wiring-harness" className="hover:text-red-600 transition-colors">Wiring Harnesses</Link></li>
              <li><Link href="/products/testing-service" className="hover:text-red-600 transition-colors">Testing Services</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 text-gray-400">Technical Updates</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for updates on engineering standards and new product releases.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-[#1A1A1A] border border-[#333] text-white px-4 py-2 w-full text-sm focus:outline-none focus:border-red-600 rounded-none"
                required
              />
              <button 
                type="submit" 
                className="bg-red-600 px-4 flex items-center justify-center hover:bg-red-700 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Row 3: Bottom Bar */}
        <div className="pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Elcomech Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Simple clock icon component
function ClockIcon({ size, className }: { size: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}
