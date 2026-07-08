import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Requirements Analysis",
      desc: "Deep-dive consultation to understand exact specifications, operational environments, and testing parameters."
    },
    {
      number: "02",
      title: "Engineering Design",
      desc: "Drafting precision blueprints, CAD models, and test protocols tailored to the custom requirements."
    },
    {
      number: "03",
      title: "Manufacturing",
      desc: "Fabrication utilizing premium materials, conductive alloys, and precise machining techniques."
    },
    {
      number: "04",
      title: "Quality Inspection",
      desc: "Rigorous internal functional and stress testing against defined global engineering standards."
    },
    {
      number: "05",
      title: "Delivery & Support",
      desc: "Secure shipment, comprehensive documentation, and ongoing technical support for integration."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Our Engineering Process</h2>
          <div className="w-16 h-1 bg-red-600"></div>
        </motion.div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mt-24 pb-12">
          {/* Connector Line */}
          <div className="absolute top-[30px] left-0 w-full h-[2px] bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pt-16"
              >
                {/* Node */}
                <div className="absolute top-0 left-0 w-[60px] h-[60px] rounded-full bg-white border-4 border-gray-100 shadow-sm flex items-center justify-center font-mono font-bold text-red-600 text-xl transition-all duration-300 hover:border-red-600">
                  {step.number}
                </div>
                
                <h3 className="text-lg font-bold text-black mb-3 pr-4">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed pr-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative border-l-2 border-gray-200 ml-6 mt-12 space-y-12 pb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10"
            >
              {/* Node */}
              <div className="absolute -left-[25px] top-0 w-[48px] h-[48px] rounded-full bg-white border-4 border-gray-100 flex items-center justify-center font-mono font-bold text-red-600 text-lg">
                {step.number}
              </div>
              
              <div className="pt-2">
                <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
