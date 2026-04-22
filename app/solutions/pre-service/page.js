"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import OtherSolutions from "../../../components/OtherSolutions";

export default function PreServicePage() {
  const steps = [
    {
      q: "Accuracy of Data",
      a: "We implement strict Data Integrity by collecting the patients full legal name and cross check this with their insurance ID, current address, and date of birth. We also scan the drivers licence & insurance card details into the Electronic Health Record system, as against manual tying. We can also enable a separate patient portal where patients can enter data on their own, pre-visit.",
      step: "01"
    },
    {
      q: "Eligibility Verification",
      a: "We use automated tools to query the payer's database immediately upon scheduling and again 24 hours before the appointment. We check for important details such as coverage validity, plan exclusions, deductible status as well as copay amounts.",
      step: "02"
    },
    {
      q: "Obtain Prior Authorisations",
      a: "Specific procedures and specialists require permission from the insurer in advance. Failure can often lead to claim denial with no recourse for appeal. We obtain the Prior Authorisation number by invoking specific CPT codes against the patient’s insurance policy.",
      step: "03"
    },
    {
      q: "Financial Transparency",
      a: "Chasing patients for money post procedures is not just difficult it is costly. We calculate the estimated patient responsibility (copay, Co-Insurance + remaining deductible) so that the patient can take an informed decision.",
      step: "04"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        {/* Banner - Matching project style */}
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/images/solutions_centum_banner.jpg')" }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent md:bg-blue-900/40"></div>

          {/* Dots Effect - Left Side */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" style={{ 
            backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', 
            backgroundSize: '24px 24px',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 30%)',
            maskImage: 'linear-gradient(to right, black 0%, transparent 30%)'
          }}></div>

          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight md:tracking-wide drop-shadow-md">
              <span className="text-[#B98C29]">Pre-Service:</span> Patient Registration & Insurance Verification
            </h1>
          </div>
        </div>

        {/* Detail Content Section */}
        <section className="py-20 lg:py-28 bg-[#fcfcfc] overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <div className="flex flex-col md:flex-row items-start mb-20 gap-8 lg:gap-12 text-left">
              <div className="md:w-[40%] space-y-6">
                <div className="w-12 h-1 bg-[#1e293b] rounded-full"></div>
                <h2 className="text-4xl lg:text-5xl font-normal text-[#1e293b] tracking-tight">
                  Front End: Pre-Service
                </h2>
              </div>
              <div className="md:w-[60%] space-y-4 text-left">
                <p className="text-lg lg:text-xl text-zinc-600 font-normal leading-relaxed">
                  We genuinely believe that the most integral part of Revenue Cycle Management takes place before the patient physically steps into the Hospital.
                </p>
                <p className="text-lg lg:text-xl text-zinc-600 font-normal leading-relaxed">
                  Latest industry data reinforce the fact that majority of claim denials stem from errors made at the very beginning of the process. Our team helps you avoid such preventable failures.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-0 border-t border-slate-200 mt-16 text-left">
              {steps.map((item, i) => (
                <div key={i} className="group flex flex-col md:flex-row items-start py-8 lg:py-16 border-b border-slate-200 hover:bg-slate-50/50 transition-colors duration-500 px-6 lg:px-12 -mx-6 lg:-mx-12 gap-2 md:gap-8 lg:gap-12">
                  <div className="md:w-24 lg:w-32 shrink-0">
                    <span className="text-5xl lg:text-7xl font-light text-slate-200 group-hover:text-[#B98C29] transition-colors duration-500">{item.step}</span>
                  </div>
                  <div className="w-full md:w-1/3 shrink-0 md:pt-4">
                    <h3 className="text-3xl lg:text-4xl font-normal text-[#1e293b] group-hover:text-[#0a192f] transition-colors">{item.q}</h3>
                  </div>
                  <div className="w-full md:flex-1 md:pt-4">
                    <p className="text-lg lg:text-xl text-zinc-500 leading-relaxed font-normal">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OtherSolutions activePath="/solutions/pre-service" />
      </main>

      <Footer />
    </div>
  );
}
