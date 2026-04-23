"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import OtherSolutions from "../../../components/OtherSolutions";

export default function CredentialingPage() {
  const services = [
    "Provider Enrolment",
    "Group & Facility Enrolment",
    "CAQH Registration & Management",
    "Medicare & Medicaid Enrolment",
    "Commercial Payer Onboarding",
    "License & Certification Verification",
    "Re-Credentialing Management",
    "Application Tracking & Reporting",
    "Issue Resolution & Appeals"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        {/* Banner - Matching project style */}
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=2560&auto=format&fit=crop&q=100&ixlib=rb-4.1.0')" }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#243B71]/80 via-[#243B71]/40 to-[#243B71]/80 z-10"></div>

          {/* Dots Effect - Left Side */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" style={{ 
            backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', 
            backgroundSize: '24px 24px',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 30%)',
            maskImage: 'linear-gradient(to right, black 0%, transparent 30%)'
          }}></div>

          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight md:tracking-wide drop-shadow-md">
              <span className="text-[#B98C29]">Credentialing Services:</span> Provider Enrolment & CAQH Management
            </h1>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-20 lg:py-28 bg-[#fcfcfc] overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <div className="flex flex-col md:flex-row items-start mb-20 gap-8 lg:gap-12 text-left">
              <div className="md:w-[40%] space-y-6">
                <div className="w-12 h-1 bg-[#1e293b] rounded-full"></div>
                <h2 className="text-4xl lg:text-5xl font-normal text-[#1e293b] tracking-tight">
                  Provider Credentialing
                </h2>
              </div>
              <div className="md:flex-1 space-y-4 text-left md:pt-4">
                <p className="text-lg lg:text-xl text-zinc-500 font-normal leading-relaxed">
                  Credentialing is the foundation for a practice’s ability to collect revenue. Centum removes the administrative burden of enrolment and re-credentialing so your providers are payer-ready, claims are payable, and revenue is not delayed.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-16">
              {services.map((service, i) => (
                <div key={i} className="group relative flex flex-col justify-between bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
                  {/* Subtle Gradient Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top: Indicator */}
                  <div className="relative z-10 flex items-center justify-between mb-8">
                    <span className="text-4xl font-light text-slate-200 group-hover:text-[#B98C29] transition-colors duration-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Bottom: Text */}
                  <div className="relative z-10">
                    <h3 className="text-lg lg:text-xl font-normal tracking-tight text-[#1e293b] group-hover:text-[#0a192f] transition-colors duration-300">
                      {service}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <OtherSolutions activePath="/solutions/credentialing-services" />
      </main>

      <Footer />
    </div>
  );
}
