import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Products & Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl">Our comprehensive range of industrial engineering solutions designed for rigorous validation.</p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-mono uppercase tracking-wide transition-all ${
                  filter === category 
                    ? 'bg-black text-white' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-black hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 relative flex flex-col"
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative p-8 flex items-center justify-center">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-mono font-bold tracking-widest text-black border border-gray-200">
                  {product.category}
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-black mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{product.shortDesc}</p>
                
                <Link href={`/products/${product.id}`} className="mt-auto">
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-red-600 uppercase tracking-widest group/link">
                    View Details
                    <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </div>
                </Link>
              </div>
              
              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
