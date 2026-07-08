import React from 'react';
import { motion } from 'framer-motion';
import { Car, Shield, Cpu, Signal, Stethoscope, Factory, Plane, Zap } from 'lucide-react';

export default function Industries() {
  const industries = [
    { name: "Automotive", icon: <Car size={40} /> },
    { name: "Defence", icon: <Shield size={40} /> },
    { name: "Electronics", icon: <Cpu size={40} /> },
    { name: "Telecommunications", icon: <Signal size={40} /> },
    { name: "Medical", icon: <Stethoscope size={40} /> },
    { name: "Industrial Automation", icon: <Factory size={40} /> },
    { name: "Aerospace", icon: <Plane size={40} /> },
    { name: "Power Electronics", icon: <Zap size={40} /> }
  ];

  return (
    <section className="py-24 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-gray-400 text-lg max-w-2xl">Delivering critical validation infrastructure across sectors where failure is not an option.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#242424] border border-[#333333] p-8 flex flex-col items-center justify-center text-center group hover:bg-[#2A2A2A] hover:border-red-600 transition-all duration-300"
            >
              <div className="text-gray-500 group-hover:text-red-600 transition-colors duration-300 mb-4">
                {industry.icon}
              </div>
              <h3 className="font-bold tracking-wide">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
