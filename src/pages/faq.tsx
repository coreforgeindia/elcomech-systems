import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';

const faqCategories = [
  {
    category: 'ICT / FCT Test Fixtures',
    icon: '⚙️',
    faqs: [
      {
        q: 'What information do you need to start an ICT/FCT fixture project?',
        a: 'To begin an ICT/FCT fixture project, we need: (1) Customer and project details, (2) One assembled PCB and one empty PCB, (3) Gerber data, (4) CAD data in ODB++ or equivalent format, (5) Test points list with X,Y coordinates and test point numbers, (6) Fixture type preference (vacuum, pneumatic, manual, or RF), (7) Cable type requirements (AWG 26, AWG 30, or both), and (8) Any connector or interface block specifications. Our guided wizard on the PCB Test System page walks you through each step.',
      },
      {
        q: 'What fixture types do you offer for PCB testing?',
        a: 'We offer four main fixture types: Vacuum (uses vacuum pressure to hold the PCB and engage probes), Pneumatic (uses compressed air for probe actuation), Manual (low-cost or standard hand-press fixtures), and RF (for radio frequency test applications). Manual fixtures are further available in Low-Cost or Standard configurations, with optional Interface Panels and various interface block types including 170 Pin Signal, High Current, RF, Optical, Vacuum, Pneumatic, and connector-specific options.',
      },
      {
        q: 'What is the turnaround time for a custom PCB test fixture?',
        a: 'Typical turnaround for a bed-of-nails or functional test fixture is 3–6 weeks from receipt of all required data (Gerber files, PCB samples, test point list, and confirmed fixture specification). Complex fixtures with custom interface blocks or multi-panel configurations may take longer. We provide a detailed project timeline after reviewing your requirements.',
      },
      {
        q: 'What probe sizes do you support in your bed-of-nails fixtures?',
        a: 'We support 100 mil, 75 mil, and 50 mil probe diameters on both the top and bottom sides of the PCB. You can specify the number of probes required for each size and each side during the fixture request process. Mixed probe configurations on the same fixture are supported.',
      },
      {
        q: 'Can you test both ICT and FCT requirements in a single fixture?',
        a: 'Yes, we design combined ICT/FCT fixtures that handle both in-circuit component testing and full functional testing in a single test cycle. This reduces test time and fixture cost for production environments. The fixture is configured with the appropriate interface for your specific test equipment.',
      },
      {
        q: 'Do you support in-line handler integration for fixtures?',
        a: 'Yes, for in-line handler integration we require photos showing how the fixture will be placed on the handler, as well as the handler type and PCB orientation. This ensures the fixture mechanical design is compatible with your production line configuration.',
      },
    ],
  },
  {
    category: 'Load Banks & Testing Equipment',
    icon: '⚡',
    faqs: [
      {
        q: 'What types of load banks do you offer?',
        a: 'We offer resistive load banks in various capacities starting from 10 kW, suitable for generator testing, UPS system verification, and power supply testing. Both DC and AC configurations are available in mild steel construction. Custom capacities and phase configurations can be engineered to your specific requirements.',
      },
      {
        q: 'What is the minimum order quantity for load banks?',
        a: 'The minimum order quantity for our standard Resistive Load Banks is 1 piece, with pricing from ₹25,000/piece depending on specifications. For high-volume orders or custom configurations, please contact us for a tailored quote.',
      },
      {
        q: 'Can load banks be used for battery discharge testing?',
        a: 'Yes, our resistive load banks are well-suited for battery discharge testing, providing a controlled, consistent resistive load that simulates real discharge conditions. This enables accurate capacity measurement and cell balancing validation for lithium-ion, lead-acid, and other battery chemistries.',
      },
    ],
  },
  {
    category: 'RF Shielding',
    icon: '📡',
    faqs: [
      {
        q: 'What certifications do your RF shielded enclosures comply with?',
        a: 'Our RF Shielded Enclosures are designed to meet EMC directive requirements and achieve IP55 ingress protection per IS/IEC standards. The electroplated mild steel construction ensures consistent shielding effectiveness. For specific attenuation requirements or compliance documentation, please share your test standard and we will confirm compatibility.',
      },
      {
        q: 'Can you manufacture custom-sized RF shielded enclosures?',
        a: 'Yes, all our RF shielded enclosures are custom-engineered to fit your specific device or assembly. We require your device dimensions, mounting requirements, connector pass-through specifications, and target frequency range to design a custom enclosure.',
      },
    ],
  },
  {
    category: 'Wiring Harnesses & Cable Products',
    icon: '🔌',
    faqs: [
      {
        q: 'Can you build custom cable harnesses for specific vehicle models?',
        a: 'Yes, we specialize in custom-engineered wiring harnesses tailored to specific vehicle models and industrial equipment. We work from client schematics, OEM drawings, or can reverse-engineer existing harnesses. All harnesses are built with copper conductors and automotive-grade connectors to meet applicable standards.',
      },
      {
        q: 'What is the minimum order quantity for wiring harnesses?',
        a: 'The minimum order quantity for cable harness assemblies is 10 pieces at ₹1,200/piece for our standard automotive configuration. Custom designs may have different MOQ, please contact us with your specifications for an accurate quote.',
      },
      {
        q: 'Do your cable markers comply with industry standards?',
        a: 'Yes, our color-coded cable markers and heat shrink wire markers are manufactured to comply with relevant IS/IEC standards for cable identification. Heat shrink markers maintain marking integrity from -55°C to +125°C and are resistant to oils, fuels, and solvents.',
      },
    ],
  },
  {
    category: 'General & Services',
    icon: '🔧',
    faqs: [
      {
        q: 'Do you provide on-site installation and commissioning?',
        a: 'Yes, our engineering team provides on-site installation, commissioning, and operator training for all major systems including load banks, test fixtures, and RF shielding installations. On-site support is available across Karnataka and can be arranged for other locations with advance notice.',
      },
      {
        q: 'What is your typical project delivery timeline?',
        a: 'Standard products like cable markers and wiring harnesses are typically delivered within 2–4 weeks. Custom products such as PCB test fixtures, RF enclosures, and load banks require 4–8 weeks depending on complexity and material procurement. We provide a confirmed delivery schedule with every purchase order.',
      },
      {
        q: 'Can I visit your facility for a technical discussion?',
        a: 'Absolutely, we welcome client visits to our Bengaluru facility for technical consultations, product demonstrations, and project discussions. Please contact us to schedule an appointment. Our engineering team is available Monday through Saturday, 9:00 AM to 6:00 PM IST.',
      },
    ],
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-gray-200 transition-colors ${isOpen ? 'bg-gray-50' : ''}`}>
      <button
        className="w-full flex items-start justify-between gap-4 py-6 px-1 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`text-base font-bold transition-colors leading-snug ${isOpen ? 'text-[#0055D4]' : 'text-black group-hover:text-[#0055D4]'}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 border-2 flex items-center justify-center transition-all ${isOpen ? 'border-[#0055D4] bg-[#0055D4] text-white' : 'border-gray-300 text-gray-500 group-hover:border-[#0055D4]'}`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 px-1 text-gray-600 leading-relaxed text-sm md:text-base pr-12">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggle = (key: string) => setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const displayCategories = activeCategory
    ? faqCategories.filter((c) => c.category === activeCategory)
    : faqCategories;

  return (
    <>
      <Head>
        <title>FAQ | Elcomech Systems</title>
        <meta name="description" content="Frequently asked questions about Elcomech Systems' ICT/FCT test fixtures, load banks, RF shielding, wiring harnesses, and engineering services." />
      </Head>
      <Layout>
        {/* Header */}
        <section className="pt-36 pb-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
            <motion.p
              className="font-mono text-[#0055D4] uppercase tracking-widest text-sm mb-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              Technical Support
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-black tracking-tighter leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              Frequently<br />Asked Questions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              Common questions about our products, services, ICT/FCT fixtures, and engineering processes.
            </motion.p>
          </div>
        </section>

        {/* Category Filter Dropdown */}
        <div className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <label htmlFor="faq-category" className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 whitespace-nowrap">
                Filter by Topic:
              </label>
              <div className="relative flex-grow">
                <select
                  id="faq-category"
                  value={activeCategory || ''}
                  onChange={(e) => setActiveCategory(e.target.value || null)}
                  className="w-full border-2 border-gray-200 bg-white px-4 py-3.5 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-[#0055D4] appearance-none rounded-none cursor-pointer pr-10 text-black font-sans"
                >
                  <option value="">All Topics</option>
                  {faqCategories.map((cat) => (
                    <option key={cat.category} value={cat.category}>
                      {cat.category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory || 'all'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-16"
              >
                {displayCategories.map((section) => (
                  <div key={section.category}>
                    <motion.div
                      className="flex items-center gap-4 mb-8"
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    >
                      <div className="w-1 h-10 bg-[#0055D4]" />
                      <h2 className="text-2xl font-extrabold text-black">{section.category}</h2>
                      <span className="font-mono text-xs text-gray-400 bg-gray-100 px-2 py-1">
                        {section.faqs.length} questions
                      </span>
                    </motion.div>
                    <div className="border-t border-gray-200">
                      {section.faqs.map((faq, i) => {
                        const key = `${section.category}-${i}`;
                        return (
                          <FAQItem
                            key={key}
                            q={faq.q}
                            a={faq.a}
                            isOpen={!!openItems[key]}
                            onToggle={() => toggle(key)}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <MessageCircle size={40} className="text-[#0055D4] mx-auto mb-6" />
              <h2 className="text-3xl font-extrabold text-black mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                Our engineering team is ready to answer any technical questions about our products and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-quote" className="inline-flex items-center gap-2 bg-[#0055D4] text-white font-bold py-4 px-8 uppercase tracking-widest text-sm hover:bg-[#0044B3] transition-colors">
                  Contact Engineering Team <ArrowRight size={16} />
                </Link>
                <Link href="/products/pcb-test-system" className="inline-flex items-center gap-2 border-2 border-black text-black font-bold py-4 px-8 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors">
                  ICT/FCT Fixture Wizard
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
