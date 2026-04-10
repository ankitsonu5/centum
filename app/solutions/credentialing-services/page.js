"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";

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
          style={{ backgroundImage: "url('/images/hero_bg.png')" }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent md:bg-blue-900/40"></div>

          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight md:tracking-wide drop-shadow-md">
              Credentialing Services: Provider Enrolment & CAQH Management
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
              <div className="md:w-[60%] space-y-4 text-left">
                <p className="text-lg text-zinc-500 font-normal leading-relaxed">
                  Credentialing is the foundation for a practice’s ability to collect revenue. Centum removes the administrative burden of enrolment and re-credentialing so your providers are payer-ready, claims are payable, and revenue is not delayed.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-16">
              {services.map((service, i) => (
                <div key={i} className="group flex items-center gap-4 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-100">
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.4)] group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-base lg:text-lg font-semibold tracking-tight text-[#1e293b] group-hover:text-blue-600 transition-colors duration-300">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
