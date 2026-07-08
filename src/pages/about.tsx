import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Settings, ShieldCheck, Wrench, Lightbulb, Users, Target, Eye } from 'lucide-react';
import Layout from '@/components/Layout';

const values = [
  { icon: <Settings size={24} />, title: 'Engineering Expertise', desc: 'Deep domain knowledge in electrical testing, harness design, and complex industrial systems built over years of hands-on projects.' },
  { icon: <ShieldCheck size={24} />, title: 'Quality Assurance', desc: 'Every product undergoes rigorous internal testing against international IS/IEC standards before leaving our facility.' },
  { icon: <CheckCircle2 size={24} />, title: 'Reliable Products', desc: 'Built with premium-grade materials and precision manufacturing to withstand harsh industrial environments and continuous use.' },
  { icon: <Lightbulb size={24} />, title: 'Customized Solutions', desc: 'We engineer to your exact specifications, from custom PCB fixtures to bespoke wiring harnesses and RF enclosures.' },
  { icon: <Wrench size={24} />, title: 'In-House Testing', desc: 'Our comprehensive testing infrastructure enables rapid prototyping, validation, and iteration, all under one roof.' },
  { icon: <Users size={24} />, title: 'Client Partnership', desc: 'We work as your engineering partner from initial consultation through design, manufacturing, delivery, and ongoing support.' },
];

const milestones = [
  { year: '2024', title: 'Elcomech Systems Founded', desc: 'Established in Bengaluru with a mission to deliver precision industrial testing and shielding solutions for the Indian market.' },
  { year: '2024', title: 'First Product Range Launched', desc: 'Introduced Resistive Load Banks and RF Shielded Enclosures, quickly gaining traction in the electronics and automotive sectors.' },
  { year: '2025', title: 'PCB Test Fixture Division', desc: 'Expanded into ICT/FCT PCB test fixtures, addressing growing demand from electronics manufacturers for custom testing tooling.' },
  { year: '2025', title: 'Cable Harness Solutions', desc: 'Launched full wiring harness and cable breakout product lines, serving automotive and industrial automation clients.' },
  { year: '2025', title: '50+ Projects Delivered', desc: 'Crossed 50 successful project deliveries across 8 industries, establishing Elcomech as a trusted engineering partner.' },
];

const process = [
  { num: '01', title: 'Requirements Analysis', desc: 'Deep-dive consultation to understand exact specifications, operational environments, and testing parameters.' },
  { num: '02', title: 'Engineering Design', desc: 'Drafting precision blueprints, CAD models, and test protocols tailored to the custom requirements.' },
  { num: '03', title: 'Manufacturing', desc: 'Fabrication utilizing premium materials, conductive alloys, and precise machining techniques.' },
  { num: '04', title: 'Quality Inspection', desc: 'Rigorous internal functional and stress testing against defined global engineering standards.' },
  { num: '05', title: 'Delivery & Support', desc: 'Secure shipment, comprehensive documentation, and ongoing technical support for integration.' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (!isInView || !ref.current) return;
    import('gsap').then(({ default: gsap }) => {
      gsap.to(ref.current, {
        innerHTML: value, duration: 2, snap: { innerHTML: 1 }, ease: 'power2.out',
        onUpdate() { if (ref.current) ref.current.innerHTML = String(Math.ceil(parseFloat(ref.current.innerHTML))); },
      });
    });
  }, [isInView, value]);
  return <><span ref={ref}>0</span>{suffix}</>;
}

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Elcomech Systems | Engineering Precision Since 2024</title>
        <meta name="description" content="Learn about Elcomech Systems, a Bengaluru-based precision engineering firm specializing in electrical testing, RF shielding, and wiring harness solutions." />
      </Head>
      <Layout>
        {/* Page Hero */}
        <section className="pt-36 pb-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
            <motion.p
              className="font-mono text-[#D40000] uppercase tracking-widest text-sm mb-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-black tracking-tighter leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              About<br />Elcomech Systems
            </motion.h1>
            <motion.div className="w-24 h-1 bg-[#D40000] mb-8" initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} />
            <motion.p
              className="text-xl text-gray-600 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              Based in Bengaluru, Elcomech Systems is a premier engineering firm specializing in the design, development, and manufacturing of critical electrical testing systems, RF shielding enclosures, custom wiring harnesses, and industrial automation products.
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { v: 1, s: '+', label: 'Years Experience' },
                { v: 50, s: '+', label: 'Projects Delivered' },
                { v: 8, s: '', label: 'Industries Served' },
                { v: 100, s: '%', label: 'Quality Tested' },
              ].map(({ v, s, label }) => (
                <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="text-4xl md:text-5xl font-extrabold text-[#D40000] mb-1">
                    <AnimatedCounter value={v} suffix={s} />
                  </div>
                  <div className="font-mono text-xs text-gray-400 uppercase tracking-widest">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p className="font-mono text-[#D40000] uppercase tracking-widest text-sm mb-4">Who We Are</p>
                <h2 className="text-4xl font-extrabold text-black mb-6">Precision-Built for Industrial Reliability</h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  We serve as the rigorous validation backbone for the automotive, aerospace, defence, and electronics industries, the company that ensures your electronics survive field conditions, your cables never fail a test, and your RF environment stays clean.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  From a 10 kW resistive load bank to a 200-point bed-of-nails PCB fixture, every product leaves our facility with the same uncompromising standard: it must work, every single time.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="p-8 border-2 border-[#D40000] bg-red-50"
                >
                  <Target size={32} className="text-[#D40000] mb-4" />
                  <h3 className="text-xl font-bold text-black mb-3">Our Mission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">To deliver precision-engineered testing and shielding solutions that guarantee absolute reliability in critical industrial applications.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: 0.15 }}
                  className="p-8 border-2 border-black bg-black text-white"
                >
                  <Eye size={32} className="text-[#D40000] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">To be the undisputed leader in industrial testing infrastructure, recognized globally for uncompromising quality and engineering excellence.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-extrabold text-black mb-3">Our Journey</h2>
              <div className="w-16 h-1 bg-[#D40000]" />
            </motion.div>
            <div className="relative border-l-2 border-gray-200 ml-6 space-y-12 pb-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute -left-[25px] top-0 w-[48px] h-[48px] rounded-full bg-white border-4 border-[#D40000] flex items-center justify-center font-mono font-bold text-[#D40000] text-xs">
                    {m.year}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{m.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Process */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-extrabold text-black mb-3">Our Engineering Process</h2>
              <div className="w-16 h-1 bg-[#D40000]" />
            </motion.div>
            {/* Desktop timeline */}
            <div className="hidden lg:block relative mt-20 pb-12">
              <div className="absolute top-[30px] left-0 w-full h-[2px] bg-gray-200 z-0" />
              <div className="grid grid-cols-5 gap-8 relative z-10">
                {process.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="relative pt-16"
                  >
                    <div className="absolute top-0 left-0 w-[60px] h-[60px] rounded-full bg-white border-4 border-gray-100 shadow flex items-center justify-center font-mono font-bold text-[#D40000] text-xl hover:border-[#D40000] transition-colors">
                      {step.num}
                    </div>
                    <h3 className="text-base font-bold text-black mb-2 pr-2">{step.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed pr-2">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Mobile */}
            <div className="lg:hidden relative border-l-2 border-gray-200 ml-6 space-y-12 pb-8 mt-8">
              {process.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-10">
                  <div className="absolute -left-[25px] top-0 w-[48px] h-[48px] rounded-full bg-white border-4 border-gray-100 flex items-center justify-center font-mono font-bold text-[#D40000] text-lg">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-extrabold text-black mb-3">Our Core Values</h2>
              <p className="text-gray-600 text-lg">The principles that guide every decision and every product we build.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group p-8 border border-gray-200 bg-white hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#D40000] transition-colors" />
                  <div className="text-gray-400 group-hover:text-[#D40000] transition-colors mb-5">{v.icon}</div>
                  <h3 className="text-lg font-bold text-black mb-3">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
