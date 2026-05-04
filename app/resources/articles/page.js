"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function ArticlesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="overflow-x-hidden">
        {/* Banner Section */}
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=2560&auto=format&fit=crop&q=100')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#243B71]/80 via-[#243B71]/40 to-[#243B71]/80 z-10"></div>

          {/* Banner Content */}
          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <span className="text-[#B98C29] text-sm md:text-base tracking-[0.2em] block font-bold mb-4 uppercase">
              Resources
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-wide drop-shadow-md">
              Articles
            </h1>
          </div>
        </div>

        {/* Spacer */}
        <div className="py-24 bg-[#fcfcfc]"></div>
      </main>

      <Footer />
    </div>
  );
}
