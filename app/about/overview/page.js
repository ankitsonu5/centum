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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent md:bg-blue-900/40"></div>

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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight md:tracking-wide leading-tight text-slate-900 max-w-4xl">
                Centum RCM. <br className="md:hidden" />
                <span className="italic text-[#B98C29]">Pure Efficiency.</span>
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
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
