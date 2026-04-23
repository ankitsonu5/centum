"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";

export default function PracticePage() {
  const complianceCategories = [
    {
      title: "Legal Compliance",
      items: ["HIPAA", "HITECH", "FCA", "AKS", "Stark Law"]
    },
    {
      title: "Operational Compliance",
      items: ["Coding standards", "CMS guidelines", "Payer rules"]
    },
    {
      title: "Security Compliance",
      items: ["Data protection", "Access control", "Audit systems"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        {/* Banner - Original height restored */}
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=2000&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGJpbGxpbmd8ZW58MHx8MHx8fDA%3D')" }}
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

          {/* Banner Content */}
          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <span className="text-[#B98C29] text-sm md:text-base tracking-[0.2em] block font-bold mb-4 uppercase">What We Practice</span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-wide drop-shadow-md">
              About Us
            </h1>
          </div>
        </div>

        {/* WHAT WE PRACTICE section styled exactly like original About page */}
        <section className="py-16 md:py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-[1366px]">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-normal text-slate-900 tracking-tight uppercase">
                What We Practice
              </h2>
              <div className="w-12 h-1 bg-slate-900 rounded-full mx-auto mt-6"></div>

              <div className="mt-12 max-w-3xl mx-auto text-center">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
                  We follow strict HIPAA-compliant processes, accurate coding standards, and payer guidelines.
                  This ensures zero compliance risk and maximum reimbursements.
                </p>
              </div>

              {/* Interactive Compliance Cards - EXACT original styles */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-7xl mx-auto px-0">
                {complianceCategories.map((category, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-[#f8fafc] p-8 md:p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="flex flex-col h-full">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                        {category.title}
                      </h3>
                      <div className="w-20 h-1 bg-blue-600 rounded-full mt-4"></div>

                      {/* Always Visible Content */}
                      <div className="mt-8">
                        <ul className="space-y-4">
                          {category.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-slate-700 text-lg md:text-xl font-medium">
                              <span className="w-2 h-2 rounded-full bg-slate-900 transition-transform duration-500"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
