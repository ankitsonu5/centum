"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import OtherSolutions from "../../../components/OtherSolutions";
import Image from "next/image";

export default function StandalonePage() {
  const steps = [
    {
      q: "A/R Recovery",
      a: "Our team of experts can help you recover old accounts receivable that have been sitting on your books for too long. We use proven strategies to get you paid.",
      step: "01"
    },
    {
      q: "Denial Management",
      a: "We analyze your denials to find the root cause and implement changes to prevent them from happening again. We also appeal denied claims to get you every dollar you deserve.",
      step: "02"
    },
    {
      q: "Coding Audits",
      a: "Ensure your coding is accurate and compliant with our regular coding audits. We identify areas for improvement and provide training for your staff.",
      step: "03"
    },
    {
      q: "Medical Records",
      a: "Efficient management of medical records is crucial for a smooth revenue cycle. We help you stay organized and compliant with all regulations.",
      step: "04"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=2560&auto=format&fit=crop&q=100')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent md:bg-blue-900/40"></div>
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" style={{ 
            backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', 
            backgroundSize: '24px 24px',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 30%)',
            maskImage: 'linear-gradient(to right, black 0%, transparent 30%)'
          }}></div>

          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight md:tracking-wide drop-shadow-md">
              <span className="text-[#B98C29]">Standalone:</span> Targeted Solutions for Specific Needs
            </h1>
          </div>
        </div>

        <section className="py-20 lg:py-28 bg-[#fcfcfc] overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl text-left">
            
            {/* Intro paragraph */}
            <p className="text-lg lg:text-xl text-zinc-600 font-normal leading-relaxed mb-12 max-w-5xl">
              At Centum RCM, we extend beyond revenue cycle management by providing dependable healthcare technology support. Our services ensure smooth integration between EHR/EMR systems, practice management software, and billing workflows—helping providers maintain uninterrupted operations and improved financial performance.
            </p>

            {/* Service List */}
            <div className="flex flex-col gap-0 border-t border-slate-200 text-left">
              {[
                { title: "EHR / EMR Support", desc: "System setup, configuration, troubleshooting, and workflow optimization." },
                { title: "Practice Management Support", desc: "Scheduling, patient registration, and system performance support." },
                { title: "RCM Software Support", desc: "Billing system troubleshooting, claim submission support, and clearinghouse integration." },
                { title: "Eligibility & Clearinghouse Support", desc: "Resolution of eligibility (270/271) issues and payer connectivity support." },
                { title: "IT Helpdesk Support", desc: "Daily technical support including login issues, access management, and system errors." },
                { title: "Integration & Data Support", desc: "EHR-billing integration, API setup, and secure data synchronization." },
                { title: "Website Building & Digital Marketing", desc: "Building Professional website, Developing Android / iOS Apps, Digital marketing strategies to enhance visibility & attract more patients.", dash: true }
              ].map((item, i) => (
                <div key={i} className="group flex flex-col md:flex-row items-start py-8 lg:py-10 border-b border-slate-200 hover:bg-slate-50/50 transition-colors duration-300 px-6 lg:px-12 -mx-6 lg:-mx-12 gap-2 md:gap-8 lg:gap-12">
                  <div className="w-full md:w-1/3 shrink-0">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#1e293b] group-hover:text-[#243B71] transition-colors underline underline-offset-4">
                      {item.title}{item.dash ? " –" : ""}
                    </h3>
                  </div>
                  <div className="w-full md:flex-1">
                    <p className="text-lg lg:text-xl text-zinc-500 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OtherSolutions activePath="/solutions/standalone" />
      </main>

      <Footer />
    </div>
  );
}
