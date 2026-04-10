"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function AboutUs() {
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

          {/* Banner Content matched to Careers style with About Us text */}
          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-wide drop-shadow-md">
              About Us
            </h1>
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


        {/* Pillar 4: Clean Layout Theme */}
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row items-start mb-12 md:mb-20 gap-10 md:gap-16 text-left">
              <div className="md:w-[40%] space-y-6">
                <div className="w-12 h-1 bg-[#1e293b] rounded-full"></div>
                <span className="text-blue-500 font-bold tracking-[0.3em] text-xs uppercase block">Final Pillar</span>
                <h2 className="text-3xl md:text-5xl font-normal text-[#1e293b] tracking-tight">
                  Ongoing Optimization
                </h2>
              </div>
              <div className="md:w-[60%] space-y-4">
                <p className="text-lg text-zinc-500 font-normal leading-relaxed">
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
