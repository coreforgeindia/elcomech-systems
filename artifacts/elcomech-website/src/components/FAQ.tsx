import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "What types of load banks do you offer?",
      a: "We offer resistive load banks in various capacities starting from 10 kW, suitable for generator testing, UPS system verification, and power supply testing. Both single-phase and three-phase configurations are available."
    },
    {
      q: "Can you build custom cable harnesses for specific vehicle models?",
      a: "Yes, we specialize in custom-engineered wiring harnesses tailored to specific vehicle models and industrial equipment. We work from client schematics or reverse-engineer existing harnesses."
    },
    {
      q: "What is the turnaround time for PCB test fixtures?",
      a: "Turnaround depends on complexity, but typical bed-of-nails fixtures are delivered within 3–6 weeks from receipt of PCB Gerber files and test requirements."
    },
    {
      q: "Do you provide on-site installation and commissioning?",
      a: "Yes, our engineering team provides on-site installation, commissioning, and operator training for all major systems including load banks and test fixtures."
    },
    {
      q: "What certifications do your products comply with?",
      a: "Our products are designed to comply with relevant IS/IEC standards. RF shielded enclosures meet EMC directive requirements and achieve IP55 ingress protection."
    },
    {
      q: "What is the minimum order quantity for wiring harnesses?",
      a: "Minimum order quantity for cable harness assemblies is 10 pieces. For custom designs, please contact us for a detailed quote."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Technical FAQ</h2>
          <p className="text-gray-600 text-lg">Common questions regarding our engineering specifications and services.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-red-600 py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
