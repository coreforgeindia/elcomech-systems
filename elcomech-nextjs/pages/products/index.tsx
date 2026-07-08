import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import Layout from '@/components/Layout';
import { products } from '@/data/products';

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

  const filtered = products.filter((p) => {
    const matchCat = filter === 'All' || p.category === filter;
    const matchSearch = search === '' || p.name.toLowerCase().includes(search.toLowerCase()) || p.shortDesc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Head>
        <title>Products & Services | Elcomech Systems</title>
        <meta name="description" content="Explore Elcomech Systems' complete range of industrial engineering products — resistive load banks, RF shielded enclosures, PCB test fixtures, wiring harnesses, and more." />
      </Head>
      <Layout>
        {/* Page Header */}
        <section className="pt-36 pb-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
            <motion.p
              className="font-mono text-[#D40000] uppercase tracking-widest text-sm mb-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              Complete Product Range
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-black tracking-tighter leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              Products &<br />Services
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our comprehensive range of industrial engineering solutions — precision-built for rigorous validation environments.
            </motion.p>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-all border-2 ${
                    filter === cat
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products…"
                className="w-full pl-9 pr-4 py-2 border-2 border-gray-200 text-sm focus:outline-none focus:border-[#D40000] transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-gray-50 min-h-[60vh]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-center py-24"
                >
                  <p className="text-2xl font-bold text-gray-300 mb-3">No products found</p>
                  <p className="text-gray-500">Try a different filter or search term.</p>
                </motion.div>
              ) : (
                <motion.div
                  key={filter + search}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filtered.map((product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      {/* Image */}
                      <div className="aspect-[4/3] bg-gray-50 p-8 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute top-4 left-4 z-10 bg-white/90 border border-gray-200 px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-black">
                          {product.category}
                        </div>
                        {product.hasFixtureWizard && (
                          <div className="absolute top-4 right-4 z-10 bg-[#D40000] px-2 py-1 text-[10px] font-mono font-bold tracking-widest text-white">
                            ICT/FCT
                          </div>
                        )}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h2 className="text-lg font-bold text-black mb-2">{product.name}</h2>
                        <p className="text-gray-600 text-sm mb-5 flex-grow leading-relaxed">{product.shortDesc}</p>

                        {/* Spec Pills */}
                        {Object.entries(product.specifications).slice(0, 2).map(([k, v]) => (
                          <div key={k} className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                            <span className="font-mono font-bold text-gray-700">{k}:</span>
                            <span>{v}</span>
                          </div>
                        ))}

                        <Link
                          href={`/products/${product.id}`}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#D40000] uppercase tracking-widest group/link"
                        >
                          View Details
                          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      {/* Bottom accent */}
                      <div className="h-1 bg-transparent group-hover:bg-[#D40000] transition-colors duration-300" />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.p
              className="text-center text-xs font-mono text-gray-400 uppercase tracking-widest mt-12"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            >
              Showing {filtered.length} of {products.length} products
            </motion.p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-6"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              Need a Custom Solution?
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-20px' }}
            >
              Every product can be customized to your exact specifications. Contact our engineering team to discuss your requirements.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-20px' }} transition={{ delay: 0.1 }}>
              <Link href="/#contact" className="inline-block bg-[#D40000] text-white font-bold py-4 px-10 uppercase tracking-widest text-sm hover:bg-[#B30000] transition-colors">
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
