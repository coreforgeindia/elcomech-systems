import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && statsRef.current) {
      const targets = statsRef.current.querySelectorAll('.counter-target');
      
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

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">About Elcomech Systems</h2>
              <div className="w-16 h-1 bg-red-600"></div>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Based in Bengaluru, Elcomech Systems is a premier engineering firm specializing in the design, development, and manufacturing of critical electrical testing systems, RF shielding enclosures, and custom wiring harnesses. We serve as the rigorous validation backbone for the automotive, aerospace, and electronics industries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-100 bg-gray-50 hover:border-red-600/30 transition-colors">
                <h3 className="font-bold text-black mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span> Mission
                </h3>
                <p className="text-sm text-gray-600">To deliver precision-engineered testing and shielding solutions that guarantee absolute reliability in critical industrial applications.</p>
              </div>
              <div className="p-6 border border-gray-100 bg-gray-50 hover:border-red-600/30 transition-colors">
                <h3 className="font-bold text-black mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full"></span> Vision
                </h3>
                <p className="text-sm text-gray-600">To be the undisputed leader in industrial testing infrastructure, recognized globally for uncompromising quality.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 gap-4 md:gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square bg-black p-8 flex flex-col justify-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                <span className="counter-target" data-value="2024">0</span>
              </div>
              <div className="font-mono text-xs text-gray-400 uppercase tracking-widest">Founded</div>
            </div>
            <div className="aspect-square bg-gray-50 p-8 flex flex-col justify-center border border-gray-100">
              <div className="text-4xl md:text-6xl font-bold text-red-600 mb-2">
                <span className="counter-target" data-value="100">0</span>%
              </div>
              <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">In-House Quality</div>
            </div>
            <div className="aspect-square bg-gray-50 p-8 flex flex-col justify-center border border-gray-100">
              <div className="text-4xl md:text-6xl font-bold text-black mb-2">
                <span className="counter-target" data-value="50">0</span>+
              </div>
              <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Custom Fixtures</div>
            </div>
            <div className="aspect-square bg-red-600 p-8 flex flex-col justify-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                <span className="counter-target" data-value="8">0</span>
              </div>
              <div className="font-mono text-xs text-white/80 uppercase tracking-widest">Core Industries</div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Strip */}
        <motion.div 
          className="mt-24 border-y border-gray-200 py-8 flex flex-wrap justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {['Engineering Expertise', 'Quality Assurance', 'Reliable Products', 'Customized Solutions'].map((value, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-red-600 font-mono text-sm">0{i + 1}</span>
              <span className="font-bold text-black uppercase tracking-wide text-sm md:text-base">{value}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
