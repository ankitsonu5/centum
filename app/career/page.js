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
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/images/career_centum_banner.jpg')" }}
        >
          {/* Overlay to ensure text readability and mimic uploaded image styling */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#243B71]/80 via-[#243B71]/40 to-[#243B71]/80 z-10"></div>

          {/* Dots Effect - Left Side */}
          <div
            className="absolute inset-0 z-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
              backgroundSize: "24px 24px",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, transparent 30%)",
              maskImage: "linear-gradient(to right, black 0%, transparent 30%)",
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <span className="text-white text-3xl md:text-4xl lg:text-5xl tracking-[0.12em] md:tracking-[0.16em] block font-bold mb-4 uppercase">
              Careers
            </span>
          </div>
        </div>

        {/* Info Section - styled as per uploaded image */}
        <div className="w-full bg-[#f0ede8]">
          {/* Top block: Large heading + CTA button */}
          <div className="max-w-[1366px] mx-auto px-8 lg:px-16 pt-16 pb-12">
            <h2 className="text-3xl lg:text-5xl font-serif font-normal text-[#1a1a1a] leading-tight mb-8 uppercase tracking-wide">
              Join us and Co-create success stories
            </h2>
            <a
              href="mailto:team@centumrcm.com"
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
            <p className="text-lg lg:text-xl text-[#555555] leading-relaxed max-w-4xl mb-6">
              Our doors are always open to talent that wants to help co-create a
              robust and win-win RCM ecosystem.
            </p>
            <p className="text-lg lg:text-xl text-[#555555] leading-relaxed max-w-4xl">
              Key in your career goals and career path in a simple five liner
              and we would sure get in touch with you. Mail us at{" "}
              <a
                href="mailto:team@centumrcm.com"
                className="text-[#B98C29] font-bold underline hover:text-accent transition-colors"
              >
                team@centumrcm.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
