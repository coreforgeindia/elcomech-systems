import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Download, ShieldCheck, Wrench, Factory } from 'lucide-react';
import { products, Product } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Embla carousel
import useEmblaCarousel from 'embla-carousel-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = products.find(p => p.id === slug);
    if (foundProduct) {
      setProduct(foundProduct);
      document.title = `${foundProduct.name} | Elcomech Systems`;
    }
  }, [slug]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollToThumb = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link href="/" className="text-red-600 hover:underline">Return to Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-wider mb-8">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/#products" className="hover:text-red-600 transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-black font-bold">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            
            {/* Left: Gallery */}
            <div>
              <div className="border border-gray-200 bg-gray-50 p-4 mb-4 relative aspect-[4/3] flex items-center justify-center overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-xs font-mono font-bold tracking-widest text-black border border-gray-200">
                  {product.category}
                </div>
                
                <div className="overflow-hidden w-full h-full" ref={emblaRef}>
                  <div className="flex h-full">
                    {product.gallery.map((img, idx) => (
                      <div className="flex-[0_0_100%] min-w-0 flex items-center justify-center relative h-full p-8" key={idx}>
                        <img 
                          src={img} 
                          alt={`${product.name} - View ${idx + 1}`} 
                          className="max-h-full max-w-full object-contain mix-blend-multiply"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              {product.gallery.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToThumb(idx)}
                      className={`w-24 h-24 flex-shrink-0 border p-2 bg-gray-50 transition-all ${
                        selectedIndex === idx ? 'border-red-600' : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-contain mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">{product.name}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{product.shortDesc}</p>

              <div className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-gray-200">
                <div className="flex gap-3">
                  <ShieldCheck className="text-red-600 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-sm text-black uppercase tracking-wider mb-1">Quality Assured</h4>
                    <p className="text-xs text-gray-500">Rigorous testing applied</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Wrench className="text-red-600 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-sm text-black uppercase tracking-wider mb-1">Customizable</h4>
                    <p className="text-xs text-gray-500">Built to specifications</p>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-bold text-black mb-4 uppercase tracking-widest border-l-4 border-red-600 pl-3">Key Features</h3>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => {
                    const [title, desc] = feature.split(':');
                    return (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></div>
                        <p className="text-gray-600">
                          <strong className="text-black">{title}:</strong>{desc ? desc : ''}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-auto space-y-4 pt-8">
                <Link href="/#contact">
                  <button className="w-full bg-red-600 text-white font-bold py-4 uppercase tracking-widest hover:bg-red-700 transition-colors">
                    Request Quote for this Product
                  </button>
                </Link>
                <button className="w-full border-2 border-black text-black font-bold py-4 uppercase tracking-widest hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                  <Download size={18} /> Download Technical Brochure
                </button>
              </div>
            </div>
          </div>

          {/* Lower Section - Specs & Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            
            {/* Technical Specifications */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-bold text-black mb-6">Technical Specifications</h3>
              <div className="border border-gray-200 border-b-0">
                {Object.entries(product.specifications).map(([key, value], idx) => (
                  <div key={key} className={`flex border-b border-gray-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="w-1/3 p-4 font-bold text-sm text-black border-r border-gray-200 bg-gray-100">{key}</div>
                    <div className="w-2/3 p-4 text-sm text-gray-700 font-mono">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications & Industries */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Primary Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, idx) => (
                    <span key={idx} className="bg-gray-100 border border-gray-200 px-4 py-2 text-sm text-gray-700 rounded-full">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Industries Served</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.industries.map((ind, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-bold text-black bg-white border border-gray-200 p-3 shadow-sm">
                      <Factory size={16} className="text-red-600" />
                      {ind}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="border-t border-gray-200 pt-16">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">Similar Testing Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((p, index) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group border border-gray-200 flex flex-col bg-white"
                  >
                    <div className="aspect-[4/3] bg-gray-50 p-6 flex items-center justify-center border-b border-gray-200">
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="font-bold text-lg mb-2">{p.name}</h4>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{p.shortDesc}</p>
                      <Link href={`/products/${p.id}`} className="mt-auto text-red-600 font-bold text-xs uppercase tracking-widest group-hover:underline">
                        View Specs
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
        </div>
      </main>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 lg:hidden z-40 flex shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link href="/#contact" className="w-full">
          <button className="w-full bg-red-600 text-white font-bold py-3 uppercase tracking-widest">
            Request Quote
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
