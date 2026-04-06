"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Career() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0ede8] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center pb-20">
        {/* Banner */}
        <div 
          className="relative w-full h-[50vh] min-h-[380px] lg:h-[60vh] flex flex-col justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/career_banner_bg.png')" }}
        >
          {/* Overlay to ensure text readability and mimic uploaded image styling */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-[#0f172a]/70 to-[#0f172a]/20"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <span className="text-sm md:text-base tracking-wider block font-medium mb-1 drop-shadow-sm">Careers</span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-wide drop-shadow-md">Overview</h1>
          </div>
        </div>

        {/* Info Section - styled as per uploaded image */}
        <div className="w-full bg-[#f0ede8]">
          {/* Top block: Large heading + CTA button */}
          <div className="max-w-[1366px] mx-auto px-8 lg:px-16 pt-16 pb-12">
            <h2 className="text-4xl lg:text-6xl font-serif font-normal text-[#1a1a1a] leading-tight mb-8">
              Join Our Team
            </h2>
            <a
              href="mailto:nithya@centumrcm.in"
              className="inline-block bg-[#111111] text-white text-xs font-bold tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#333] transition-colors"
            >
              Apply Now
            </a>
          </div>

          {/* Divider */}
          <div className="max-w-[1366px] mx-auto px-8 lg:px-16">
            <hr className="border-t border-[#d4cfc9]" />
          </div>

          {/* Bottom block: Mission heading + description */}
          <div className="max-w-[1366px] mx-auto px-8 lg:px-16 pt-12 pb-20">
            <h3 className="text-3xl lg:text-5xl font-serif font-normal text-[#1a1a1a] leading-snug mb-6">
              Our doors are always open to talent that wants to help co-create a robust and win-win RCM Ecosystem.
            </h3>
            <p className="text-sm lg:text-base text-[#555555] leading-relaxed max-w-2xl">
              Join us on the next big ride and become important stakeholders. Key in your career goals and career path in a simple five liner and we would sure get in touch with you at{" "}
              <a href="mailto:nithya@centumrcm.in" className="text-[#1a1a1a] underline hover:text-accent transition-colors">
                nithya@centumrcm.in
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
