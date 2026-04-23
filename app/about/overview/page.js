"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";

export default function OverviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        {/* Banner - Original height restored */}
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/images/case_study_banner.png')" }}
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

          {/* Banner Content matched to About page text */}
          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <span className="text-[#B98C29] text-sm md:text-base tracking-[0.2em] block font-bold mb-4 uppercase">Overview</span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-wide drop-shadow-md">
              About Us
            </h1>
          </div>
        </div>

        {/* Overview Content - "Pure Efficiency" - EXACT styles from About page */}
        <section className="py-16 md:py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-[1366px]">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              <h2 className="text-[1.6rem] sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight md:tracking-wide leading-tight text-slate-900 max-w-none whitespace-nowrap">
                Optimizing Revenues. <span className="text-[#B98C29]">Empowering Care.</span>
              </h2>
              <div className="w-20 h-1 bg-[#B98C29] rounded-full mx-auto my-2"></div>
              <div className="space-y-6">
                <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-normal text-slate-600">
                  Centum RCM is your end-to-end partner in administering the Revenue Cycle Management process effectively.
                </p>
                <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-normal text-slate-600">
                  We strive to help healthcare providers surmount the complexities of medical billing.
                  Doing so will help us amplify the focus healthcare providers have on patient care.
                </p>

                {/* Vision & Mission Sections */}
                <div className="max-w-3xl mx-auto text-left mt-12 space-y-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#B98C29]/10 flex items-center justify-center text-[#B98C29]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider">Vision</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                      Centum RCM aims to empower US healthcare providers with secure, compliant, and technology driven revenue cycle solutions. Our aim is to help you focus on exceptional patient care while we accelerate collections, reduce denials & shorten the accounts receivable days.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#B98C29]/10 flex items-center justify-center text-[#B98C29]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider">Mission</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                      To deliver predictable financial performance for U.S. healthcare providers by reducing revenue leakage & accelerating cash flow. We would constantly optimize the revenue cycle through precision, technology, and compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
