import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Industries from '@/components/Industries';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    document.title = 'Elcomech Systems | Engineering Precision. Testing Excellence.';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Delivering high-quality electrical testing systems, RF shielding solutions, wiring harnesses, cable testing fixtures and industrial automation products.');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Process />
        <Industries />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
