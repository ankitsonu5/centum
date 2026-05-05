"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import OtherSolutions from "../../../components/OtherSolutions";

export default function BackEndPage() {
  const steps = [
    {
      q: "Using Technology to submit clean claims",
      a: "We use Claim Scrubber Software to identify and correct errors in medical claims before submission. This helps in submission of clean claims, faster arrival of payments and thereby enhancing overall cash flow.",
      step: "01",
      image: "/images/clean_claim.jpg",
    },
    {
      q: "Prompt Management of Denials and Appeals",
      a: "We work with extra focus on identifying the root causes of denials so that necessary corrective action can be taken. We then either resubmit or appeal denials within the strict payer timelines. We also track patterns on denials. This helps us identify and fix errors that may be occurring at the systemic level and reduce denial rates to less than 5 %.",
      step: "02",
      image: "/images/denials_and_appeals.jpg",
    },
    {
      q: "Posting Payments",
      a: "We promptly & accurately record the insurance and patient payments received into the system. This helps us identify underpayments & denials immediately. Accurate accounts receivable keeps patients' balances updated as well.",
      step: "03",
      image: "/images/posting_payments.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        {/* Banner - Matching Solutions Style */}
        <div className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center overflow-hidden">
          <Image
            src="/images/claim_submission_denial_management.jpeg"
            alt="Claim Submission and Denial Management"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#243B71]/80 via-[#243B71]/40 to-[#243B71]/80 z-10"></div>

          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight md:tracking-wide drop-shadow-md">
              <span className="text-[#B98C29]">Back-End:</span> Claim Submission
              & Denial Management
            </h1>
          </div>
        </div>

        {/* Pillar 3: White Theme - Restructured for readability and consistency */}
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden border-y border-slate-100">
          <div className="relative z-10 container mx-auto px-6 max-w-7xl">
            {/* Header Block on Top - Matching Mid-Cycle Style */}
            <div className="flex flex-col md:flex-row justify-start items-start mb-20 gap-12 md:gap-20 text-left">
              <div className="max-w-xl space-y-6">
                <div className="w-12 h-1 bg-[#1e293b] rounded-full"></div>
                <h2 className="text-4xl lg:text-5xl font-normal text-[#1e293b] tracking-tight leading-tight">
                  Claims and Denial
                  <br />
                  Management
                </h2>
              </div>
              <div className="flex-1 max-w-4xl space-y-4">
                <p className="text-lg lg:text-xl text-zinc-600 font-normal leading-relaxed">
                  Efficient management of claims & denials helps minimise
                  revenue leakage and improves cash flow. We identify root
                  causes and prevent repeat occurrences. All these lead to the
                  strengthening of your financial performance.
                </p>
              </div>
            </div>
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {steps.map((item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[2.5rem] flex flex-col justify-start group transition-transform duration-500 hover:-translate-y-1 min-h-[380px]"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  ></div>
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-[#0a192f]/80 group-hover:bg-[#0a192f]/70 transition-colors duration-500"></div>
                  {/* Content */}
                  <div className="relative z-10 p-8 lg:p-10">
                    <p className="text-5xl lg:text-6xl font-normal text-white/25 mb-4">
                      {item.step}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4 leading-tight">
                      {item.q}
                    </h3>
                    <p className="text-lg text-white/90 leading-relaxed font-normal">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <OtherSolutions activePath="/solutions/back-end" />
      </main>

      <Footer />
    </div>
  );
}
