import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && statsRef.current) {
      const targets = statsRef.current.querySelectorAll('.hero-counter');
      
      targets.forEach((target) => {
        const endValue = parseFloat(target.getAttribute('data-value') || '0');
        
        gsap.to(target, {
          innerHTML: endValue,
          duration: 2,
          snap: { innerHTML: 1 },
          ease: "power2.out",
          onUpdate: function() {
            if (target.innerHTML) {
               // @ts-ignore
               target.innerHTML = Math.ceil(this.targets()[0].innerHTML);
            }
          }
        });
      });
    }
  }, [isInView]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center bg-white overflow-hidden pt-20">
      {/* Subtle Engineering Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0"></div>

      {/* Abstract Geometric Shapes */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] border border-red-600/10 rounded-full z-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] border border-black/5 z-0 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex-grow flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-mono text-red-600 uppercase tracking-[0.2em] font-bold text-sm md:text-base mb-6">
              Precision Engineering
            </p>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-[80px] lg:text-[100px] font-bold leading-[0.9] text-black tracking-tighter mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <span className="block">Engineering Precision.</span>
            <span className="block text-gray-800">Testing Excellence.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Delivering high-quality electrical testing systems, RF shielding solutions, wiring harnesses, cable testing fixtures and industrial automation products engineered for reliability.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <button 
              onClick={scrollToProducts}
              className="bg-red-600 text-white font-bold py-4 px-8 uppercase tracking-wider text-sm hover:bg-red-700 transition-colors"
            >
              Explore Products
            </button>
            <button 
              onClick={scrollToContact}
              className="bg-transparent border-2 border-black text-black font-bold py-4 px-8 uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        ref={statsRef}
        className="border-t border-gray-200 bg-white/80 backdrop-blur-sm relative z-10 mt-16 lg:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-1"><span className="hero-counter" data-value="1">0</span>+</div>
              <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-1"><span className="hero-counter" data-value="50">0</span>+</div>
              <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-1"><span className="hero-counter" data-value="8">0</span></div>
              <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-1 text-red-600"><span className="hero-counter" data-value="100">0</span>%</div>
              <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Quality Tested</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 z-10 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400 rotate-90 mb-6">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-red-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
