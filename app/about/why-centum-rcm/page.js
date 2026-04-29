"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";

export default function WhyCentumRcmPage() {
  const ehrList = [
    "Athena", "eClinicalWorks", "Epic", "Karep / Tebra", "NextGen",
    "Allscripts", "MEDITECH", "AdvancedMD", "Greenway", "Cerner"
  ];

  const ediList = [
    "Waystar", "Availity", "Trizetto", "Change Healthcare", "OffieAlly"
  ];

  const valueProps = [
    "No learning curve – we work on your existing EHR",
    "Faster onboarding within 1–2 weeks",
    "AI-enabled claim validation within EHR workflows",
    "Dedicated team trained on your specific platform",
    "Zero disruption to your front-desk and clinical operations"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        {/* Banner - Original height restored */}
        <div className="relative w-full h-[58vh] min-h-[360px] md:min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/why-centum-banner.jpeg"
            alt="Why Centum RCM Banner"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
            sizes="100vw"
          />

          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#243B71]/80 via-[#243B71]/40 to-[#243B71]/80 z-10"></div>

          {/* Banner Content */}
          <div className="relative z-30 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <span className="text-white text-3xl md:text-4xl lg:text-5xl tracking-[0.12em] md:tracking-[0.16em] block font-bold mb-4 uppercase">Why Centum RCM</span>
          </div>
        </div>

        {/* Why Centum RCM Content - EXACT styles from original About page */}
        <section className="py-14 md:py-20 bg-[#fcfcfc] border-b border-slate-100">
          <div className="container mx-auto px-5 sm:px-6 max-w-[1366px]">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight md:tracking-wide leading-tight text-slate-900 max-w-5xl mx-auto">
                AI-first accuracy with <span className="text-[#B98C29]">Human insights.</span>
              </h2>
              <div className="w-20 h-1 bg-[#B98C29] rounded-full mx-auto my-2"></div>
            </div>

            <div className="w-full text-left">
              <h3 className="text-2xl md:text-4xl font-normal text-slate-900 mb-8 md:mb-10 tracking-tight leading-tight">
                What makes Centum RCM different?
              </h3>

              <div className="space-y-6 md:space-y-8 text-base md:text-xl text-slate-600 leading-relaxed font-normal">
                <p>
                  CENTUM specializes in working with a wide range of Electronic Health Record (EHR) and Practice Management (PM) systems used across the United States. Our expertise ensures faster onboarding, minimal disruption, and optimized revenue cycle performance.
                </p>
                <p>
                  We do not require you to switch systems as our team integrates seamlessly with your existing EHR. This ensures continuity while we keep improving your financial outcomes.
                </p>
              </div>

              {/* Value Proposition List - Original simplified style */}
              <div className="mt-12 md:mt-16 space-y-6">
                {valueProps.map((prop, idx) => (
                  <div key={idx} className="flex items-start gap-4 md:gap-6 group">
                    <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base md:text-lg border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {idx + 1}
                    </span>
                    <p className="text-base md:text-xl text-slate-700 pt-1.5 font-medium leading-snug md:leading-tight">
                      {prop}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <hr className="mt-12 mb-16 border-slate-100" />

            {/* EHR List Section - Original Style */}
            <div className="space-y-16 text-left">
              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-[0.14em] md:tracking-[0.2em] uppercase text-slate-400 mb-8 md:mb-12">
                  List of EHR
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                  {ehrList.map((ehr, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 p-5 md:p-8 rounded-2xl flex items-center justify-center text-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                      <span className="text-base md:text-lg font-bold text-slate-500 group-hover:text-blue-600 transition-colors">
                        {ehr}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* EDI List Section - Original Style */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-[0.14em] md:tracking-[0.2em] uppercase text-slate-400 mb-8 md:mb-12 mt-12">
                  List of EDI System / Clearing House
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                  {ediList.map((edi, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 p-5 md:p-8 rounded-2xl flex items-center justify-center text-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                      <span className="text-base md:text-lg font-bold text-slate-500 group-hover:text-blue-600 transition-colors">
                        {edi}
                      </span>
                    </div>
                  ))}
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
