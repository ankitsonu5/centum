"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";

export default function BackEndPage() {
  const steps = [
    { 
      q: "Using Technology to submit clean claims", 
      a: "We use Claim Scrubber Software to identify and correct errors in medical claims before submission. This helps in submission of clean claims, faster arrival of payments and thereby enhancing overall cash flow.",
      step: "01"
    },
    { 
      q: "Prompt Management of Denials and Appeals", 
      a: "We work with extra focus on identifying the root causes of denials so that necessary corrective action can be taken. We then either resubmit or appeal denials within the strict payer timelines. We also track patterns on denials. This helps us identify and fix errors that may be occurring at the systemic level and reduce denial rates to less than 5 %.",
      step: "02"
    },
    { 
      q: "Posting Payments", 
      a: "We promptly & accurately record the insurance and patient payments received into the system. This helps us identify underpayments & denials immediately. Accurate accounts receivable keeps patients’ balances updated as well.",
      step: "03"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        {/* Banner - Matching Solutions Style */}
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/images/solutions_centum_banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent md:bg-blue-900/40"></div>
          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight md:tracking-wide drop-shadow-md">
              <span className="text-[#B98C29]">Back-End:</span> Claim Submission & Denial Management
            </h1>
          </div>
        </div>

        {/* Pillar 3: White Theme - Restructured for readability and consistency */}
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden border-y border-slate-100">
          <div className="relative z-10 container mx-auto px-6 max-w-7xl">
            {/* Header Block on Top - Matching Mid-Cycle Style */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-12 text-left">
              <div className="max-w-2xl space-y-6">
                <div className="w-12 h-1 bg-[#1e293b] rounded-full"></div>
                <h2 className="text-4xl lg:text-5xl font-normal text-[#1e293b] tracking-tight leading-tight">
                  Maximizing Cash Flow through <br className="hidden md:block" />
                  Velocity and Precision
                </h2>
              </div>
              <div className="max-w-md space-y-4">
              </div>
            </div>
              <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-left">
                {steps.map((item, i) => (
                  <div key={i} className="space-y-8 group bg-slate-50 p-10 rounded-[3rem] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:-translate-y-2">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-bold text-slate-400 text-xl border border-slate-200 group-hover:bg-[#243B71] group-hover:text-white group-hover:border-[#243B71] transition-all duration-500 shadow-sm">
                      {item.step}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-normal text-slate-900 group-hover:text-[#243B71] transition-colors duration-500">{item.q}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed font-normal">{item.a}</p>
                    </div>
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
