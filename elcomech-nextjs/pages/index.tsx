import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowDown, ArrowRight, MapPin, Clock, ShieldCheck, CheckCircle2,
  Settings, Wrench, Lightbulb, Users,
  Car, Shield, Cpu, Signal, Stethoscope, Factory, Plane, Zap,
} from 'lucide-react';
import Layout from '@/components/Layout';
import { products } from '@/data/products';

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!isInView || !statsRef.current) return;
    import('gsap').then(({ default: gsap }) => {
      statsRef.current!.querySelectorAll<HTMLElement>('.counter').forEach((el) => {
        const end = parseFloat(el.dataset.value || '0');
        gsap.to(el, {
          innerHTML: end, duration: 2, snap: { innerHTML: 1 }, ease: 'power2.out',
          onUpdate() { el.innerHTML = String(Math.ceil(parseFloat(el.innerHTML))); },
        });
      });
    });
  }, [isInView]);

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center bg-white overflow-hidden pt-20">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] border border-[#D40000]/10 rounded-full pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[28vw] h-[28vw] max-w-[400px] max-h-[400px] border border-black/5 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex-grow flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.p
            className="font-mono text-[#D40000] uppercase tracking-[0.2em] font-bold text-sm md:text-base mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          >
            Precision Engineering
          </motion.p>
          <motion.h1
            className="text-6xl md:text-[80px] lg:text-[96px] font-extrabold leading-[0.9] text-black tracking-tighter mb-8"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block">Engineering</span>
            <span className="block">Precision.</span>
            <span className="block text-gray-700">Testing Excellence.</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          >
            Delivering high-quality electrical testing systems, RF shielding solutions, wiring harnesses, cable testing fixtures and industrial automation products engineered for absolute reliability.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link href="/products" className="inline-block bg-[#D40000] text-white font-bold py-4 px-8 uppercase tracking-wider text-sm hover:bg-[#B30000] transition-colors text-center">
              Explore Products
            </Link>
            <a href="#contact" className="inline-block bg-transparent border-2 border-black text-black font-bold py-4 px-8 uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-colors text-center">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        ref={statsRef}
        className="border-t border-gray-200 bg-white/80 backdrop-blur-sm relative z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            {[
              { v: '1', suffix: '+', label: 'Years Experience' },
              { v: '50', suffix: '+', label: 'Projects Delivered' },
              { v: '8', suffix: '', label: 'Industries Served' },
              { v: '100', suffix: '%', label: 'Quality Tested', red: true },
            ].map(({ v, suffix, label, red }) => (
              <div key={label}>
                <div className={`text-3xl md:text-4xl font-extrabold mb-1 ${red ? 'text-[#D40000]' : 'text-black'}`}>
                  <span className="counter" data-value={v}>0</span>{suffix}
                </div>
                <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400 [writing-mode:vertical-lr]">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} className="text-[#D40000]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Why Choose Us ─────────────────────────────────────────────────────────────
function WhyChooseUs() {
  const reasons = [
    { icon: <Settings size={28} />, title: 'Engineering Expertise', desc: 'Deep domain knowledge in electrical testing, harness design, and industrial systems.' },
    { icon: <ShieldCheck size={28} />, title: 'Quality Assurance', desc: 'Every product rigorously tested to meet or exceed international standards.' },
    { icon: <CheckCircle2 size={28} />, title: 'Reliable Products', desc: 'Built with premium materials to withstand demanding industrial environments.' },
    { icon: <Lightbulb size={28} />, title: 'Customized Solutions', desc: 'Tailored designs matching exact client specifications and unique operational needs.' },
    { icon: <Wrench size={28} />, title: 'Testing Facilities', desc: 'Comprehensive in-house testing infrastructure for rapid prototyping and validation.' },
    { icon: <Users size={28} />, title: 'Customer Support', desc: 'Dedicated technical support from initial consultation through delivery and commissioning.' },
  ];
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-[#D40000] uppercase tracking-widest text-sm mb-3">The Elcomech Advantage</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-lg">We don&apos;t just build products — we engineer confidence.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 border border-gray-200 bg-white relative hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#D40000] transition-colors duration-300" />
              <div className="text-gray-400 group-hover:text-[#D40000] transition-colors mb-5">{r.icon}</div>
              <h3 className="text-lg font-bold text-black mb-3">{r.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Featured Products ─────────────────────────────────────────────────────────
function FeaturedProducts() {
  const featured = products.slice(0, 3);
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3">Products & Services</h2>
            <p className="text-gray-600 text-lg">Industrial engineering solutions designed for rigorous validation.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Link href="/products" className="inline-flex items-center gap-2 font-bold text-[#D40000] uppercase tracking-widest text-sm hover:gap-3 transition-all">
              View All Products <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] bg-gray-50 p-8 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-4 left-4 bg-white/90 border border-gray-200 px-3 py-1 text-[10px] font-mono font-bold tracking-widest">
                  {p.category}
                </span>
                <img src={p.image} alt={p.name} className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-black mb-2">{p.name}</h3>
                <p className="text-gray-600 text-sm mb-5 flex-grow">{p.shortDesc}</p>
                <Link href={`/products/${p.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#D40000] uppercase tracking-widest group/link">
                  View Details <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="h-1 bg-transparent group-hover:bg-[#D40000] transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Industries ────────────────────────────────────────────────────────────────
function Industries() {
  const list = [
    { name: 'Automotive', icon: <Car size={36} /> },
    { name: 'Defence', icon: <Shield size={36} /> },
    { name: 'Electronics', icon: <Cpu size={36} /> },
    { name: 'Telecommunications', icon: <Signal size={36} /> },
    { name: 'Medical', icon: <Stethoscope size={36} /> },
    { name: 'Industrial Automation', icon: <Factory size={36} /> },
    { name: 'Aerospace', icon: <Plane size={36} /> },
    { name: 'Power Electronics', icon: <Zap size={36} /> },
  ];
  return (
    <section className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Industries We Serve</h2>
          <p className="text-gray-400 text-lg">Delivering critical validation infrastructure across sectors where failure is not an option.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {list.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-[#242424] border border-[#333] p-6 flex flex-col items-center justify-center text-center group hover:border-[#D40000] transition-all duration-300"
            >
              <div className="text-gray-500 group-hover:text-[#D40000] transition-colors mb-3">{item.icon}</div>
              <h3 className="font-bold text-sm tracking-wide">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  company: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, 'At least 10 characters'),
});
type ContactData = z.infer<typeof contactSchema>;

const inputCls = 'w-full border-2 border-gray-200 px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#D40000] transition-colors rounded-none bg-white';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', company: '', interest: '', message: '' },
  });
  const onSubmit = (_: ContactData) => setSubmitted(true);

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3">Contact Us</h2>
            <div className="w-16 h-1 bg-[#D40000] mb-6" />
            <p className="text-gray-600 text-lg mb-10">Request a quote or technical consultation for your engineering requirements.</p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin size={22} className="text-[#D40000] mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-black text-lg">Elcomech Systems</p>
                  <p className="text-gray-600">Bengaluru - 560091, Karnataka, India</p>
                  <p className="font-mono text-sm text-gray-500 mt-1">CEO: R Marathi</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Clock size={22} className="text-[#D40000] shrink-0" />
                <p className="text-gray-600">Mon–Sat, 9:00 AM – 6:00 PM IST</p>
              </div>
              <div className="flex gap-4 items-center">
                <ShieldCheck size={22} className="text-[#D40000] shrink-0" />
                <p className="text-gray-600">GST Verified · TrustSEAL · Payment Protected</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="bg-white border border-gray-200 p-10 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <CheckCircle2 size={56} className="text-[#D40000] mx-auto mb-5" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">Enquiry Sent!</h3>
                <p className="text-gray-600">Our team will respond within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-gray-200 p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">Full Name *</label>
                    <input {...register('name')} className={inputCls} placeholder="Your name" />
                    {errors.name && <p className="text-[#D40000] text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Email *</label>
                    <input {...register('email')} type="email" className={inputCls} placeholder="you@company.com" />
                    {errors.email && <p className="text-[#D40000] text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Phone *</label>
                    <input {...register('phone')} className={inputCls} placeholder="+91 98765 43210" />
                    {errors.phone && <p className="text-[#D40000] text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Company</label>
                    <input {...register('company')} className={inputCls} placeholder="Optional" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Product Interest</label>
                  <select {...register('interest')} className={inputCls}>
                    <option value="">Select product…</option>
                    {products.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Message *</label>
                  <textarea {...register('message')} rows={4} className={inputCls} placeholder="Describe your requirements…" />
                  {errors.message && <p className="text-[#D40000] text-xs mt-1">{errors.message.message}</p>}
                </div>
                <button type="submit" className="w-full bg-[#D40000] text-white font-bold py-4 uppercase tracking-widest text-sm hover:bg-[#B30000] transition-colors">
                  Send Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map */}
        <div className="rounded overflow-hidden border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6806038101713!2d77.48868107409498!3d12.92823818738313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fd7cfc20a0f%3A0xab1a1c6d4718c059!2sELCOMECH%20SYSTEMS!5e0!3m2!1sen!2sin!4v1783507262249!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Elcomech Systems Location"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Elcomech Systems | Engineering Precision. Testing Excellence.</title>
        <meta name="description" content="Delivering high-quality electrical testing systems, RF shielding solutions, wiring harnesses, cable testing fixtures and industrial automation products engineered for reliability." />
      </Head>
      <Layout>
        <Hero />
        <FeaturedProducts />
        <WhyChooseUs />
        <Industries />
        <Contact />
      </Layout>
    </>
  );
}
