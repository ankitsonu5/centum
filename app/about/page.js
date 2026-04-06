"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        {/* Banner */}
        <div 
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-end md:justify-center items-center bg-cover bg-center pb-12 md:pb-0 pt-32 md:pt-0"
          style={{ backgroundImage: "url('/images/case_study_banner.png')" }}
        >
          {/* Overlay to ensure text readability matching career style */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-[#0f172a]/70 to-[#0f172a]/20"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto space-y-6 md:space-y-8">
            <span className="text-xs md:text-base tracking-[0.3em] block font-bold mb-1 drop-shadow-sm uppercase text-blue-400">About the Mission</span>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight md:tracking-wide drop-shadow-md leading-tight">
              Centum RCM. <br className="md:hidden" />
              <span className="italic">Pure Efficiency.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-normal text-white/90">
              Centum RCM is your end-to-end partner in administering the Revenue Cycle Management process effectively. 
              We strive to help healthcare providers surmount the complexities of medical billing. 
              Doing so will help us amplify the focus healthcare providers have on patient care.
            </p>
          </div>
        </div>
        {/* The Four Pillars: High-Impact Mosaic */}
        <section className="py-20 lg:py-28 bg-white border-y border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-normal text-[#1e293b] mb-4 tracking-tight">The Four Pillars</h2>
              <p className="text-xl text-zinc-500 font-normal italic leading-relaxed">
                Effective Revenue Cycle Management is built on four critical foundations of integrity, precision, velocity, and optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {[
                { 
                  title: "Revenue Integrity", 
                  step: "01", 
                  category: "Front End", 
                  desc: "Pre-service accuracy is where the cycle begins. We ensure complete data integrity from the first patient interaction to prevent preventable claim denials." 
                },
                { 
                  title: "Precision", 
                  step: "02", 
                  category: "Mid Cycle", 
                  desc: "Medical coding translated with zero margin for error. Our experts ensure high-accuracy capture of every procedure to maintain financial health." 
                },
                { 
                  title: "Velocity", 
                  step: "03", 
                  category: "Back-End", 
                  desc: "Claim submission and collection at industry-leading speed. We accelerate your cash flow by minimizing the time between billing and reimbursement." 
                },
                { 
                  title: "Optimization", 
                  step: "04", 
                  category: "Continuous", 
                  desc: "Ongoing refinement for long-term clinical and financial growth. We continuously analyze cycle performance to implement strategic improvements." 
                }
              ].map((item, i) => (
                <div key={i} className="group relative bg-[#f8fafc] p-12 lg:p-16 rounded-[4rem] border border-slate-100 overflow-hidden transition-all duration-700 hover:bg-blue-50 hover:border-blue-100 hover:shadow-[0_4rem_6rem_-1rem_rgba(59,130,246,0.1)] hover:-translate-y-4 min-h-[400px] flex flex-col justify-center">
                  <span className="absolute right-8 bottom-4 text-[10rem] lg:text-[13rem] font-bold leading-none text-slate-100 group-hover:text-slate-200 transition-colors duration-500 select-none pointer-events-none">{item.step}</span>
                  <div className="relative z-10 flex flex-col space-y-6">
                    <span className="text-accent font-bold text-sm uppercase tracking-[0.3em]">{item.category}</span>
                    <h3 className="text-4xl lg:text-5xl font-normal text-[#1e293b] tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-lg text-zinc-500 font-normal leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillar 1 Detail: Premium Grid Layout */}
        <section className="py-20 lg:py-28 bg-[#fcfcfc] overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            
            <div className="flex flex-col md:flex-row items-start mb-20 gap-8 lg:gap-12 text-left">
              <div className="md:w-[40%] space-y-6">
                <div className="w-12 h-1 bg-[#1e293b] rounded-full"></div>
                <h2 className="text-4xl lg:text-5xl font-normal text-[#1e293b] tracking-tight">
                  Front End: Pre-Service
                </h2>
              </div>
              <div className="md:w-[60%] space-y-4">
                <p className="text-lg text-zinc-500 font-normal leading-relaxed">
                  We genuinely believe that the most integral part of Revenue Cycle Management takes place before the patient physically steps into the Hospital. 
                </p>
                <p className="text-lg text-zinc-500 font-normal leading-relaxed">
                  Latest industry data reinforce the fact that majority of claim denials stem from errors made at the very beginning of the process. Our team helps you avoid such preventable failures.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-0 border-t border-slate-200 mt-16 text-left">
              {[
                { q: "Accuracy of Data", a: "We implement strict Data Integrity by collecting the patient's full legal name and cross check this with their insurance ID, current address, and date of birth. We also scan the drivers licence & insurance card details into the EHR system, as against manual typing.", step: "01" },
                { q: "Eligibility Verification", a: "We use automated tools to query the payer’s database immediately upon scheduling and again 24 hours before the appointment. We check for important details such as coverage validity, plan exclusions, and deductible status.", step: "02" },
                { q: "Prior Authorisations", a: "Specific procedures require permission in advance. Failure can often lead to claim denial with no recourse for appeal. We obtain the Prior Authorisation number by invoking specific CPT codes against the patients insurance policy.", step: "03" },
                { q: "Financial Transparency", a: "Chasing patients for money post procedures is costly. We calculate the estimated patient responsibility (copay + remaining deductible) so that the patient can take an informed decision.", step: "04" }
              ].map((item, i) => (
                <div key={i} className="group flex flex-col md:flex-row items-start py-12 lg:py-16 border-b border-slate-200 hover:bg-slate-50/50 transition-colors duration-500 px-6 lg:px-12 -mx-6 lg:-mx-12">
                  <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <span className="text-5xl lg:text-7xl font-light text-slate-200 group-hover:text-blue-500 transition-colors duration-500">{item.step}</span>
                  </div>
                  <div className="w-full md:w-1/3 mb-4 md:mb-0 pr-8 pt-2">
                    <h3 className="text-4xl font-normal text-[#1e293b] group-hover:text-[#0a192f] transition-colors">{item.q}</h3>
                  </div>
                  <div className="w-full md:w-5/12 pt-2">
                    <p className="text-base text-zinc-500 leading-relaxed font-normal">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillar 2 Detail: Top Header & Grid Cards */}
        <section className="py-20 lg:py-28 bg-[#f8fafc] border-y border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Header Block on Top */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-12 text-left">
              <div className="max-w-2xl space-y-6">
                <div className="w-12 h-1 bg-[#1e293b] rounded-full"></div>
                <h2 className="text-4xl lg:text-5xl font-normal text-[#1e293b] tracking-tight">
                  Mid Cycle: Medical Coding & Charge Capture
                </h2>
              </div>
              <div className="max-w-md space-y-4">
                <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                  Centum RCM translates clinical activity into billable revenue with high precision. This stage is most important as errors lead to claim denials and revenue leakage.
                </p>
              </div>
            </div>

            {/* Bento Box Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
              {/* Card 1: 01 (Span 2, Dark) */}
              <div className="lg:col-span-2 bg-[#0a192f] text-white p-10 lg:p-14 rounded-[2.5rem] flex flex-col justify-center group transition-transform duration-500 hover:-translate-y-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 mb-8 text-sm text-white/90 w-fit">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> 01
                </div>
                <h3 className="text-4xl lg:text-5xl font-normal tracking-tight mb-6">Precision Medical Coding</h3>
                <p className="text-white/80 leading-relaxed lg:max-w-xl text-sm lg:text-base">
                  In addition to translating physician documentation into ICD-10 CM, CPT & HCPCS Level – 2, we also apply necessary modifiers to prevent automatic rejections. We strive to achieve 95% or higher coding accuracy.
                </p>
              </div>

              {/* Card 2: 02 (Span 1, Light) */}
              <div className="bg-[#f0f0f0] p-10 lg:p-12 rounded-[2.5rem] flex flex-col group transition-transform duration-500 hover:-translate-y-1">
                <h3 className="text-6xl lg:text-7xl font-normal text-[#1a1a1a] mb-8">02</h3>
                <h4 className="text-2xl font-normal text-[#1a1a1a] mb-4">Thorough Charge Capture</h4>
                <p className="text-sm text-zinc-500 leading-relaxed mt-auto">
                  We help prevent revenue leakage by capturing every procedure, treatment & consultation. Reconciling daily provider schedule against charges captured also helps us fixing missing entries.
                </p>
              </div>

              {/* Card 3: 03 (Span 1, Light) */}
              <div className="bg-[#f0f0f0] p-10 lg:p-12 rounded-[2.5rem] flex flex-col group transition-transform duration-500 hover:-translate-y-1">
                <h3 className="text-6xl lg:text-7xl font-normal text-[#1a1a1a] mb-8">03</h3>
                <h4 className="text-2xl font-normal text-[#1a1a1a] mb-4">Documentation Integrity</h4>
                <p className="text-sm text-zinc-500 leading-relaxed mt-auto">
                  We help providers implement speciality-specific EHR Templates. This helps improve workflow efficiency, reduces documentation errors, and makes coding dependable.
                </p>
              </div>

              {/* Card 4: 04 (Span 2, Light Wide) */}
              <div className="lg:col-span-2 bg-[#f0f0f0] p-10 lg:p-14 rounded-[2.5rem] flex flex-col md:flex-row gap-8 lg:gap-16 items-start md:items-center group transition-transform duration-500 hover:-translate-y-1">
                <div className="md:w-1/3">
                  <h3 className="text-7xl lg:text-[7rem] font-normal text-[#1a1a1a] leading-none">04</h3>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-3xl font-normal text-[#1a1a1a] mb-4">Compliance and Auditing</h4>
                  <p className="text-sm lg:text-base text-zinc-500 leading-relaxed">
                    We also review a statistically valid sample of coded cases to identify patterns of under coding (lost revenue) or over coding (compliance risk).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 3: Dark Dot Pattern Theme */}
        <section className="relative py-20 lg:py-28 bg-[#0a192f] text-white overflow-hidden border-y border-[#0a192f]">
          {/* Left pattern: more at top, less at bottom */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ 
            backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', 
            backgroundSize: '24px 24px',
            WebkitMaskImage: 'linear-gradient(to bottom right, black 0%, transparent 50%)',
            maskImage: 'linear-gradient(to bottom right, black 0%, transparent 50%)'
          }}></div>
          
          {/* Right pattern: less at top, more at bottom */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ 
            backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', 
            backgroundSize: '24px 24px',
            WebkitMaskImage: 'linear-gradient(to top left, black 0%, transparent 50%)',
            maskImage: 'linear-gradient(to top left, black 0%, transparent 50%)'
          }}></div>

          <div className="relative z-10 container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12 text-left">
                  <div className="max-w-2xl space-y-6">
                    <div className="w-12 h-1 bg-white rounded-full"></div>
                    <span className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase block">Pillar Three</span>
                    <h2 className="text-4xl lg:text-5xl font-normal text-white tracking-tight">
                      Back-End: Velocity
                    </h2>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                {[
                  { q: "Using Technology for Claims", a: "We use Claim Scrubber Software to identify and correct errors in medical claims before submission. This ensures faster arrival of payments." },
                  { q: "Denial Management", a: "We work with extra focus on identifying root causes. We resubmit or appeal within strict payer timelines to reduce denial rates to less than 5%." },
                  { q: "Posting Payments", a: "We promptly & accurately record the insurance and patient payments received. This helps us identify underpayments and denials immediately." }
                ].map((item, i) => (
                  <div key={i} className="space-y-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center font-bold text-white text-lg">0{i+1}</div>
                    <h3 className="text-2xl font-normal text-white">{item.q}</h3>
                    <p className="text-sm text-white/70 leading-relaxed font-normal">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 4: Clean Layout Theme */}
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row items-start mb-20 gap-16 text-left">
              <div className="md:w-1/2 space-y-6">
                <div className="w-12 h-1 bg-[#1e293b] rounded-full"></div>
                <span className="text-blue-500 font-bold tracking-[0.3em] text-xs uppercase block">Final Pillar</span>
                <h2 className="text-4xl lg:text-5xl font-normal text-[#1e293b] tracking-tight">
                  Ongoing Optimization
                </h2>
              </div>
              <div className="md:w-1/2 space-y-4">
                <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                  We refine billing, coding and administrative workflows on a continuous basis. 
                  This helps you maximise cash flows, reduce denials as well as ensure regulatory compliance. 
                  Optimization aligns your efforts to ongoing changes in payer rules and technology.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {["KPI Tracking", "Root-Cause Analysis", "Payer Updates", "Coding Compliance"].map((p, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-100 group">
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.4)] group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-sm lg:text-base font-semibold tracking-wide text-[#1e293b]">{p}</span>
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
