import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  MapPin, Clock, ShieldCheck, CheckCircle2, ArrowRight,
  Phone, Mail, Building2, Send,
} from 'lucide-react';
import Layout from '@/components/Layout';
import { products } from '@/data/products';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  company: z.string().optional(),
  interest: z.string().optional(),
  quantity: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'At least 10 characters required'),
});
type QuoteData = z.infer<typeof quoteSchema>;

const inputCls =
  'w-full border-2 border-gray-200 px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-[#D40000] transition-colors rounded-none bg-white placeholder:text-gray-400';

export default function GetQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      interest: '',
      quantity: '',
      timeline: '',
      message: '',
    },
  });

  const onSubmit = (_: QuoteData) => setSubmitted(true);

  return (
    <>
      <Head>
        <title>Get Quote | Elcomech Systems</title>
        <meta
          name="description"
          content="Request a quote or technical consultation from Elcomech Systems for resistive load banks, RF shielded enclosures, PCB test fixtures, wiring harnesses, and more."
        />
      </Head>
      <Layout>
        {/* ─── Page Hero ────────────────────────────────────────────────── */}
        <section className="pt-36 pb-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
            <motion.p
              className="font-mono text-[#D40000] uppercase tracking-widest text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Request A Quote
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-black tracking-tighter leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get A<br />Custom Quote
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-[#D40000] mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.p
              className="text-xl text-gray-600 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Share your requirements and our engineering team will provide a
              detailed, competitive quote within 1–2 business days. Every
              product can be customized to your exact specifications.
            </motion.p>
          </div>
        </section>

        {/* ─── Form + Info ──────────────────────────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* ── Left: Contact Info ────────────────────────────────── */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-extrabold text-black mb-3">
                  Contact Information
                </h2>
                <div className="w-16 h-1 bg-[#D40000] mb-8" />
                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                  Reach out for technical consultations, product inquiries, or
                  custom engineering requirements. We&apos;re here to help.
                </p>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#D40000]" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">
                        Our Office
                      </p>
                      <p className="text-gray-600">
                        Bengaluru - 560091, Karnataka, India
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-[#D40000]" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">
                        Business Hours
                      </p>
                      <p className="text-gray-600">
                        Mon–Sat, 9:00 AM – 6:00 PM IST
                      </p>
                    </div>
                  </div>

                  {/* CEO */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                      <Building2 size={20} className="text-[#D40000]" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">CEO</p>
                      <p className="text-gray-600">R Marathi</p>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={20} className="text-[#D40000]" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">Verified</p>
                      <p className="text-gray-600">
                        GST Verified · TrustSEAL · Payment Protected
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="mt-12 grid grid-cols-2 gap-4">
                  {[
                    { value: '50+', label: 'Projects Delivered' },
                    { value: '8', label: 'Industries Served' },
                    { value: '100%', label: 'Quality Tested' },
                    { value: '1–2 Days', label: 'Quote Turnaround' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-4 bg-white border border-gray-200"
                    >
                      <div className="text-xl font-extrabold text-[#D40000]">
                        {stat.value}
                      </div>
                      <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── Right: Quote Form ─────────────────────────────────── */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {submitted ? (
                  <div className="bg-white border border-gray-200 p-14 text-center shadow-lg">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <CheckCircle2
                        size={64}
                        className="text-[#D40000] mx-auto mb-6"
                      />
                    </motion.div>
                    <h3 className="text-3xl font-extrabold mb-4">
                      Quote Request Sent!
                    </h3>
                    <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                      Our engineering team will review your requirements and
                      respond within 1–2 business days with a detailed quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-2 bg-[#D40000] text-white font-bold py-4 px-8 uppercase tracking-widest text-sm hover:bg-[#B30000] transition-colors"
                      >
                        Browse Products <ArrowRight size={16} />
                      </Link>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 border-2 border-black text-black font-bold py-4 px-8 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors"
                      >
                        Back to Home
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white border border-gray-200 p-8 md:p-10 space-y-6 shadow-lg"
                  >
                    <div className="mb-2">
                      <h3 className="text-2xl font-extrabold text-black">
                        Fill in Your Details
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        Fields marked with * are required
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold mb-1.5">
                          Full Name *
                        </label>
                        <input
                          {...register('name')}
                          className={inputCls}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-[#D40000] text-xs mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5">
                          Email Address *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          className={inputCls}
                          placeholder="you@company.com"
                        />
                        {errors.email && (
                          <p className="text-[#D40000] text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          {...register('phone')}
                          className={inputCls}
                          placeholder="+91 98765 43210"
                        />
                        {errors.phone && (
                          <p className="text-[#D40000] text-xs mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5">
                          Company Name
                        </label>
                        <input
                          {...register('company')}
                          className={inputCls}
                          placeholder="Optional"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold mb-1.5">
                          Product Interest
                        </label>
                        <select {...register('interest')} className={inputCls}>
                          <option value="">Select a product…</option>
                          {products.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5">
                          Estimated Quantity
                        </label>
                        <input
                          {...register('quantity')}
                          className={inputCls}
                          placeholder="e.g. 10 units"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1.5">
                        Expected Timeline
                      </label>
                      <select {...register('timeline')} className={inputCls}>
                        <option value="">Select timeline…</option>
                        <option value="urgent">
                          Urgent (within 2 weeks)
                        </option>
                        <option value="standard">
                          Standard (2–6 weeks)
                        </option>
                        <option value="flexible">
                          Flexible (6+ weeks)
                        </option>
                        <option value="exploring">
                          Just exploring options
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1.5">
                        Project Details *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        className={inputCls}
                        placeholder="Describe your requirements, specifications, and any custom needs…"
                      />
                      {errors.message && (
                        <p className="text-[#D40000] text-xs mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D40000] text-white font-bold py-4 uppercase tracking-widest text-sm hover:bg-[#B30000] transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={16} /> Submit Quote Request
                    </button>

                    <p className="text-xs text-gray-400 text-center font-mono">
                      We typically respond within 1–2 business days
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Map ──────────────────────────────────────────────────── */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-black mb-3">
                Visit Our Facility
              </h2>
              <div className="w-16 h-1 bg-[#D40000]" />
            </motion.div>
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

        {/* ─── CTA Banner ───────────────────────────────────────────── */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Prefer to Browse First?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Explore our complete product range and find the right solution
                for your engineering requirements.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#D40000] text-white font-bold py-4 px-10 uppercase tracking-widest text-sm hover:bg-[#B30000] transition-colors"
              >
                View All Products <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
