"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import OtherSolutions from "../../../components/OtherSolutions";

export default function MidCyclePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        {/* Banner - Consistent with Pre-Service */}
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2000&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D')",
          }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#243B71]/80 via-[#243B71]/40 to-[#243B71]/80 z-10"></div>

          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight md:tracking-wide drop-shadow-md">
              <span className="text-[#B98C29]">Mid Cycle:</span> Medical Coding
              & Charge Capture
            </h1>
          </div>
        </div>

        {/* Detail Content Section - EXACT style from About page */}
        <section className="py-20 lg:py-28 bg-[#f8fafc] border-y border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Header Block on Top */}
            <div className="flex flex-col md:flex-row justify-start items-start mb-14 gap-8 lg:gap-16 text-left">
              <div className="md:w-1/2 max-w-2xl space-y-6">
                <div className="w-12 h-1 bg-[#1e293b] rounded-full mt-2"></div>
                <h2 className="text-4xl lg:text-5xl font-normal text-[#1e293b] tracking-tight">
                  Mid Cycle: Medical Coding & Charge Capture
                </h2>
              </div>
              <div className="md:w-1/2 max-w-xl space-y-4 pt-2">
                <p className="text-lg lg:text-xl text-zinc-600 font-normal leading-relaxed text-left">
                  Here, Centum RCM helps you translate clinical activity into
                  billable revenue with high precision. This stage is most
                  important as errors lead to claim denials and/or revenue
                  leakage. We convert clinical documentation into standardised
                  codes that are used by insurance companies to determine
                  reimbursements.
                </p>
              </div>
            </div>

            {/* Bento Box Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
              {/* Card 1: 01 (Span 2, Dark with Background Image) */}
              <div className="lg:col-span-2 relative text-white p-10 lg:p-14 rounded-[2.5rem] flex flex-col justify-center group overflow-hidden transition-transform duration-500 hover:-translate-y-1">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('/images/precision_medical_coding_centum.jpg')",
                  }}
                ></div>

                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-[#0a192f]/70 transition-opacity duration-500 group-hover:bg-[#0a192f]/60"></div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-6xl lg:text-7xl font-normal text-white/30 mb-8">
                    01
                  </p>
                  <h3 className="text-4xl lg:text-5xl font-normal tracking-tight mb-6 drop-shadow-lg">
                    Precision Medical Coding
                  </h3>
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed lg:max-w-4xl font-normal drop-shadow-md">
                    In addition to translating physician documentation into
                    ICD-10 CM, CPT & HCPCS Level – 2, we also apply necessary
                    modifiers to prevent automatic rejections by payers. We
                    strive to achieve 95% or higher coding accuracy to achieve
                    consistent cash flow.
                  </p>
                </div>
              </div>

              {/* Card 2: 02 (Span 1, Light) */}
              <div className="bg-[#f0f0f0] p-10 lg:p-12 rounded-[2.5rem] flex flex-col group transition-transform duration-500 hover:-translate-y-1">
                <h3 className="text-6xl lg:text-7xl font-normal text-[#1a1a1a] mb-8">
                  02
                </h3>
                <h4 className="text-2xl font-normal text-[#1a1a1a] mb-4">
                  Thorough Charge Capture
                </h4>
                <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed mt-auto font-normal">
                  We help prevent revenue leakage by capturing every procedure,
                  treatment & consultation. Reconciling daily provider schedule
                  against charges captured also helps us fixing missing entries.
                </p>
              </div>

              {/* Card 3: 03 (Span 1, Light) */}
              <div className="bg-[#f0f0f0] p-10 lg:p-12 rounded-[2.5rem] flex flex-col group transition-transform duration-500 hover:-translate-y-1">
                <h3 className="text-6xl lg:text-7xl font-normal text-[#1a1a1a] mb-8">
                  03
                </h3>
                <h4 className="text-2xl font-normal text-[#1a1a1a] mb-4">
                  Documentation Integrity
                </h4>
                <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed mt-auto font-normal">
                  We can also help healthcare providers set up and implement
                  speciality-specific EHR Templates. This helps improve workflow
                  efficiency, reduces documentation errors, makes coding
                  dependable thereby reducing claim denials.
                </p>
              </div>

              {/* Card 4: 04 (Span 2, Dark with Background Image) */}
              <div className="lg:col-span-2 relative text-white p-10 lg:p-14 rounded-[2.5rem] flex flex-col justify-center group overflow-hidden transition-transform duration-500 hover:-translate-y-1">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('/images/compliance_and_auditing_centum.jpg')",
                  }}
                ></div>

                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-[#0a192f]/70 transition-opacity duration-500 group-hover:bg-[#0a192f]/60"></div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-6xl lg:text-7xl font-normal text-white/30 mb-8">
                    04
                  </p>
                  <h3 className="text-4xl lg:text-5xl font-normal tracking-tight mb-6 drop-shadow-lg text-white">
                    Compliance and Auditing
                  </h3>
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed lg:max-w-4xl font-normal drop-shadow-md">
                    We also review a statistically valid sample (typically 6-8%)
                    of coded cases to identify patterns of under coding (lost
                    revenue) or over coding (compliance risk). On one hand, we
                    help you identify services provided that are not fully
                    billed, whereas we also help you identify payer audits that
                    can be triggered by overcoding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <OtherSolutions activePath="/solutions/mid-cycle" />
      </main>

      <Footer />
    </div>
  );
}
