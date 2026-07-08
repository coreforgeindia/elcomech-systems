import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ArrowLeft, ArrowRight, CheckCircle2,
  Zap, Settings, X, PlayCircle,
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Layout from '@/components/Layout';
import FixtureWizard from '@/components/FixtureWizard';
import { products, Product } from '@/data/products';

interface Props { product: Product; related: Product[] }

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: products.map((p) => ({ params: { slug: p.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const product = products.find((p) => p.id === params!.slug as string)!;
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  return { props: { product, related } };
};

export default function ProductDetailPage({ product, related }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showWizard, setShowWizard] = useState(false);

  const scrollPrev = () => { emblaApi?.scrollPrev(); setSelectedIndex((i) => Math.max(0, i - 1)); };
  const scrollNext = () => { emblaApi?.scrollNext(); setSelectedIndex((i) => Math.min(product.gallery.length - 1, i + 1)); };

  return (
    <>
      <Head>
        <title>{product.name} | Elcomech Systems</title>
        <meta name="description" content={product.shortDesc} />
      </Head>
      <Layout>
        {/* Wizard Modal */}
        <AnimatePresence>
          {showWizard && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={(e) => { if (e.target === e.currentTarget) setShowWizard(false); }}
            >
              <motion.div
                className="relative w-full max-w-3xl my-8 bg-white shadow-2xl"
                initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              >
                <FixtureWizard onClose={() => setShowWizard(false)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pt-28 pb-20 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest mb-10">
              <Link href="/" className="hover:text-[#D40000] transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/products" className="hover:text-[#D40000] transition-colors">Products</Link>
              <ChevronRight size={12} />
              <span className="text-black font-bold">{product.name}</span>
            </nav>

            {/* Top Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
              {/* Gallery */}
              <div>
                <div className="border border-gray-200 bg-gray-50 relative overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <span className="absolute top-4 left-4 z-10 bg-white border border-gray-200 px-3 py-1 text-[10px] font-mono font-bold tracking-widest">
                    {product.category}
                  </span>
                  {product.gallery.length > 1 && (
                    <>
                      <button onClick={scrollPrev} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 border border-gray-200 flex items-center justify-center hover:border-[#D40000] transition-colors shadow-sm">
                        <ArrowLeft size={16} />
                      </button>
                      <button onClick={scrollNext} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 border border-gray-200 flex items-center justify-center hover:border-[#D40000] transition-colors shadow-sm">
                        <ArrowRight size={16} />
                      </button>
                    </>
                  )}
                  <div className="overflow-hidden w-full h-full" ref={emblaRef}>
                    <div className="flex h-full">
                      {product.gallery.map((img, idx) => (
                        <div key={idx} className="flex-[0_0_100%] min-w-0 flex items-center justify-center p-10">
                          <img src={img} alt={`${product.name}, view ${idx + 1}`} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Thumbnails */}
                {product.gallery.length > 1 && (
                  <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                    {product.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => { emblaApi?.scrollTo(idx); setSelectedIndex(idx); }}
                        className={`flex-shrink-0 w-16 h-16 border-2 overflow-hidden bg-gray-50 flex items-center justify-center p-2 transition-colors ${selectedIndex === idx ? 'border-[#D40000]' : 'border-gray-200 hover:border-gray-400'}`}
                      >
                        <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <span className="inline-block font-mono text-[#D40000] uppercase tracking-widest text-xs mb-4 bg-red-50 px-3 py-1">
                    {product.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight">{product.name}</h1>
                  <div className="w-12 h-1 bg-[#D40000] mb-6" />
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">{product.longDesc}</p>

                  {/* Specs */}
                  <div className="border border-gray-200 divide-y divide-gray-100 mb-8">
                    {Object.entries(product.specifications).map(([k, v]) => (
                      <div key={k} className="grid grid-cols-2 px-4 py-3 text-sm">
                        <span className="text-gray-500 font-medium">{k}</span>
                        <span className="text-black font-bold">{v}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/get-quote" className="flex-1 bg-[#D40000] text-white font-bold py-4 px-6 uppercase tracking-widest text-sm hover:bg-[#B30000] transition-colors text-center">
                      Get Quote
                    </Link>
                    {product.hasFixtureWizard && (
                      <button
                        onClick={() => setShowWizard(true)}
                        className="flex-1 border-2 border-black text-black font-bold py-4 px-6 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
                      >
                        <PlayCircle size={16} /> Start ICT/FCT Project
                      </button>
                    )}
                  </div>
                  {product.hasFixtureWizard && (
                    <p className="text-xs text-gray-500 mt-3 font-mono">
                      Use the wizard to submit your ICT/FCT fixture requirements step by step.
                    </p>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Key Features */}
            <motion.section className="mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-extrabold text-black mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#D40000] inline-block" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {product.features.map((feat, i) => {
                  const [title, ...rest] = feat.split(':');
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-4 p-6 border border-gray-200 bg-white hover:border-[#D40000]/30 transition-colors group"
                    >
                      <CheckCircle2 size={20} className="text-[#D40000] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <span className="font-bold text-black">{title}</span>
                        {rest.length > 0 && <span className="text-gray-600">: {rest.join(':')}</span>}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Applications & Industries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
                  <span className="w-6 h-1 bg-[#D40000] inline-block" />
                  Applications
                </h2>
                <ul className="space-y-3">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <Zap size={14} className="text-[#D40000] shrink-0" />
                      <span className="font-medium">{app}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-20px' }}>
                <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
                  <span className="w-6 h-1 bg-[#D40000] inline-block" />
                  Industries Served
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.industries.map((ind, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-100 border border-gray-200 text-sm font-semibold text-gray-700 hover:border-[#D40000] hover:text-[#D40000] transition-colors">
                      {ind}
                    </span>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* ICT/FCT Banner */}
            {product.hasFixtureWizard && (
              <motion.div
                className="mb-20 bg-black text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              >
                <div>
                  <p className="font-mono text-[#D40000] uppercase tracking-widest text-sm mb-3">Fixture Project Process</p>
                  <h3 className="text-3xl font-extrabold mb-3">Start Your ICT/FCT Fixture Project</h3>
                  <p className="text-gray-400 max-w-xl">
                    Our guided 7-step wizard collects all the technical information needed to design and manufacture your custom PCB test fixture, from Gerber files to fixture type selection and probe configuration.
                  </p>
                </div>
                <button
                  onClick={() => setShowWizard(true)}
                  className="flex-shrink-0 bg-[#D40000] text-white font-bold py-4 px-8 uppercase tracking-widest text-sm hover:bg-[#B30000] transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <PlayCircle size={18} /> Launch Wizard
                </button>
              </motion.div>
            )}

            {/* Related Products */}
            {related.length > 0 && (
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-extrabold text-black mb-8 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#D40000] inline-block" />
                  Related Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {related.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.id}`}
                      className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                    >
                      <div className="aspect-[4/3] bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
                        <img src={p.image} alt={p.name} className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-2">{p.category}</span>
                        <h3 className="text-base font-bold text-black mb-2">{p.name}</h3>
                        <p className="text-gray-600 text-xs mb-4 flex-grow leading-relaxed">{p.shortDesc}</p>
                        <span className="inline-flex items-center gap-2 text-xs font-bold text-[#D40000] uppercase tracking-widest group/link">
                          View Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                      <div className="h-0.5 bg-transparent group-hover:bg-[#D40000] transition-colors" />
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Back */}
            <div className="mt-16">
              <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#D40000] transition-colors uppercase tracking-widest">
                <ArrowLeft size={16} /> Back to All Products
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
