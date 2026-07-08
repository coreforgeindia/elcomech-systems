import React from "react";
import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto">
          <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-black mb-4">404 Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <button className="bg-red-600 text-white font-bold py-3 px-8 uppercase tracking-widest hover:bg-red-700 transition-colors">
              Return Home
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
