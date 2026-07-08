import Link from 'next/link';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Row 1 */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="bg-white px-2 py-1 h-9 flex items-center justify-center rounded">
              <img
                src="/logo-2.png"
                alt="Elcomech Systems"
                className="h-5 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight text-white">Elcomech</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0055D4]">Systems</span>
            </div>
          </Link>
          <p className="text-xl font-bold mt-6 tracking-tight text-gray-300">
            Engineering Precision. Testing Excellence.
          </p>
        </div>

        {/* Row 2: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 text-gray-400">Company</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premier engineering firm specializing in critical electrical testing systems, RF shielding, and custom wiring solutions for industrial applications.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#0055D4] shrink-0 mt-0.5" />
                <span>Bengaluru - 560091, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-[#0055D4] shrink-0" />
                <span>Mon–Sat, 9:00 AM – 6:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 text-gray-400">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Products & Services', href: '/products' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Get Quote', href: '/get-quote' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-[#0055D4] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 text-gray-400">Core Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { label: 'Resistive Load Banks', slug: 'resistive-load-bank' },
                { label: 'RF Shielded Enclosures', slug: 'rf-shielded-enclosure' },
                { label: 'PCB Test Fixtures', slug: 'pcb-test-system' },
                { label: 'Wiring Harnesses', slug: 'wiring-harness' },
                { label: 'Testing Services', slug: 'testing-service' },
              ].map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="hover:text-[#0055D4] transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 text-gray-400">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for engineering standards updates and new product releases.
            </p>
            {subscribed ? (
              <p className="text-[#0055D4] font-semibold text-sm">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="bg-[#1A1A1A] border border-[#333] text-white px-4 py-2 w-full text-sm focus:outline-none focus:border-[#0055D4] rounded-none"
                />
                <button
                  type="submit"
                  className="bg-[#0055D4] px-4 flex items-center justify-center hover:bg-[#0044B3] transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom */}
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
