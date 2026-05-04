"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden min-h-[50vh] flex items-center justify-center">
        {/* Content to be added */}
      </main>

      <Footer />
    </div>
  );
}
