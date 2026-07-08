import React from 'react';
import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Wrench, CheckCircle, Lightbulb, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Settings size={32} />,
      title: "Engineering Expertise",
      desc: "Deep domain knowledge in electrical testing, harness design, and complex industrial systems."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Quality Assurance",
      desc: "Every product is rigorously tested to meet or exceed stringent international standards."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Reliable Products",
      desc: "Built with premium materials to withstand demanding industrial environments and continuous use."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Customized Solutions",
      desc: "Tailored designs matching exact client specifications, schematics, and unique operational needs."
    },
    {
      icon: <Wrench size={32} />,
      title: "Testing Facilities",
      desc: "Comprehensive in-house testing infrastructure enabling rapid prototyping and validation."
    },
    {
      icon: <Users size={32} />,
      title: "Customer Support",
      desc: "Dedicated technical support from initial consultation through delivery and commissioning."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-red-600 uppercase tracking-widest text-sm mb-4">The Elcomech Advantage</p>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Why Choose Us</h2>
          <p className="text-gray-600 text-lg">We don't just build products; we engineer confidence. Our commitment to precision ensures your operations never fail.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-gray-200 bg-white relative hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-red-600 transition-colors duration-300"></div>
              
              <div className="text-gray-400 group-hover:text-red-600 transition-colors duration-300 mb-6">
                {reason.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
