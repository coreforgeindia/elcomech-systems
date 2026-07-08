import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

export default function NotFound() {
  return (
    <>
      <Head><title>404 - Page Not Found | Elcomech Systems</title></Head>
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-white pt-20">
          <motion.div
            className="text-center max-w-xl px-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[#0055D4] text-8xl font-bold mb-4">404</p>
            <h1 className="text-4xl font-extrabold text-black mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-10">The page you are looking for does not exist or has been moved.</p>
            <Link href="/" className="inline-block bg-[#0055D4] text-white font-bold py-4 px-8 uppercase tracking-widest text-sm hover:bg-[#0044B3] transition-colors">
              Back to Home
            </Link>
          </motion.div>
        </div>
      </Layout>
    </>
  );
}
