export const metadata = {
  title: "RCM Services to Reduce Denials & Accelerate Collections",
  description: "Helping small clinics improve billing accuracy and reduce denials. Compliant RCM services that accelerate collections, enabled by AI",
};

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-accent/30 font-primary">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[100vh] flex items-end justify-center overflow-hidden bg-hero-bg pb-28 sm:pb-12">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-75 z-0"
          >
            <source src="/videos/centumrcm_video.mp4" type="video/mp4" />
          </video>

          {/* Solid Color Filter Overlay Removed */}
          <div className="relative container mx-auto px-6 text-center max-w-7xl z-20 pt-40 md:pt-60 flex flex-col items-center">
            {/* Main Header */}
            <h1 className="w-full max-w-[1120px] text-[2.45rem] sm:text-6xl lg:text-[3.5rem] xl:text-[4.2rem] 2xl:text-[5rem] text-white mb-6 leading-[1.08] uppercase flex flex-col items-center text-center">
              <span className="font-bold text-[0.81em]">Precision Billing.</span>
              <span className="font-bold text-[0.84em] text-transparent bg-clip-text bg-gradient-to-r from-[#f0da9b] via-[#e5ca78] to-[#B98C29] tracking-[0.04em]">Proven Results.</span>
            </h1>
          </div>
        </section>



        {/* About Us Section (Replaced Core Solutions) */}
        <section className="py-20 lg:py-24 bg-[#f0ede8]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-8">
              <div className="text-left max-w-2xl">
                <span className="text-[#B98C29] uppercase tracking-widest text-base md:text-lg font-bold block mb-4">About Us</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#243B71] leading-tight mb-6">Optimizing Revenues. <br className="hidden md:block" />Empowering Care.</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Centum RCM is your end-to-end partner in administering the Revenue Cycle Management process effectively. We strive to help healthcare providers surmount the complexities of medical billing, thereby amplifying focus on patient care.
                </p>
              </div>
              <Link href="/about/overview" className="inline-flex text-[#243B71] font-bold text-base md:text-lg tracking-wide items-center gap-2 lg:mb-2 group transition-all">
                Read More About Us <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* 3-Column About Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Overview / Vision */}
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between group transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="space-y-6 md:space-y-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#B98C29]/10 rounded-2xl flex items-center justify-center text-[#B98C29]">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl text-[#243B71] tracking-tight">Vision & Mission</h3>
                    <p className="text-zinc-500 text-base md:text-lg leading-relaxed">
                      To deliver predictable financial performance for U.S. healthcare providers by reducing revenue leakage & accelerating cash flow through precision, technology, and compliance.
                    </p>
                  </div>
                </div>
                <Link href="/about/overview" className="mt-10 md:mt-12 text-[#B98C29] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Discover <span className="text-lg">→</span>
                </Link>
              </div>

              {/* What We Practice */}
              <div className="bg-[#1e293b] text-white p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between group transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
                <div className="relative z-10 space-y-6 md:space-y-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl tracking-tight">What We Practice</h3>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed">
                      We follow strict HIPAA-compliant processes, accurate coding standards, and payer guidelines ensuring zero compliance risk.
                    </p>
                    <ul className="space-y-3 text-sm md:text-base text-white/70 pt-2">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B98C29] rounded-full"></span> Legal Compliance</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B98C29] rounded-full"></span> Operational Integrity</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B98C29] rounded-full"></span> Security & Data Protection</li>
                    </ul>
                  </div>
                </div>
                <Link href="/about/practice" className="relative z-10 mt-10 md:mt-12 text-[#B98C29] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Our Practices <span className="text-lg">→</span>
                </Link>
              </div>

              {/* Why Centum RCM */}
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between group transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="space-y-6 md:space-y-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#B98C29]/10 rounded-2xl flex items-center justify-center text-[#B98C29]">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl text-[#243B71] tracking-tight">Why Centum RCM</h3>
                    <p className="text-zinc-500 text-base md:text-lg leading-relaxed">
                      We specialize in a wide range of EHR and PM systems. We don't require you to switch systems; we integrate seamlessly.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-[#f0ede8] text-[#243B71] text-xs font-bold rounded-full uppercase tracking-wider">No Learning Curve</span>
                      <span className="px-3 py-1.5 bg-[#f0ede8] text-[#243B71] text-xs font-bold rounded-full uppercase tracking-wider">Fast Onboarding</span>
                      <span className="px-3 py-1.5 bg-[#f0ede8] text-[#243B71] text-xs font-bold rounded-full uppercase tracking-wider">Zero Disruption</span>
                    </div>
                  </div>
                </div>
                <Link href="/about/why-centum-rcm" className="mt-10 md:mt-12 text-[#B98C29] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Know More <span className="text-lg">→</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Intelligent Automation at Scale: New Image Grid Section */}
        <section className="relative py-24 bg-[#0a192f] text-white overflow-hidden">
          <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Custom tailored Revenue Cycle Solutions
            </h2>
            <p className="text-sm lg:text-base text-gray-300 max-w-4xl mx-auto mb-16">
              We help you improve customer experience, accelerate revenue cycles, reduce denials & mitigate revenue leakage. All this while ensuring that your processes are strictly compliant - to current and as well as emerging laws.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4 lg:px-0">
              {[
                {
                  title: "Front End",
                  image: "/images/front_end_cycle_centum.jpg",
                  href: "/solutions/pre-service"
                },
                {
                  title: "Mid Cycle",
                  image: "/images/mid_revenue_cycle_centum.jpg",
                  href: "/solutions/mid-cycle"
                },
                {
                  title: "Back End",
                  image: "/images/backend_revenue_cycle_centum.jpg",
                  href: "/solutions/back-end"
                },
                {
                  title: "Credentialing Services",
                  image: "/images/credentialing_services_centum.jpg",
                  href: "/solutions/credentialing-services"
                },
                {
                  title: "Standalone Solutions",
                  image: "/images/standalone_solutions_centum.jpg",
                  href: "/solutions/standalone"
                }
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex flex-col h-full bg-white rounded-lg overflow-hidden group cursor-pointer transition-all duration-300">
                  <div className="relative h-48 lg:h-56 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-slate-800 p-4 mt-auto">
                    <h3 className="text-white text-sm lg:text-base font-medium text-center transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#243B71] mb-2 tracking-tight">How It Works</h2>
            <p className="text-lg text-slate-500 italic mb-20">
              Our Proven RCM Process in <span className="font-bold text-[#243B71]">7 Easy Steps.</span>
            </p>

            <div className="relative flex flex-wrap lg:flex-nowrap justify-between items-start gap-y-12 lg:gap-x-2">
              {[
                {
                  title: "Discovery & Assessment",
                  sub: "Needs Analysis & Strategy",
                  image: "/images/how-it-works-1.png"
                },
                {
                  title: "Sign Up & Agreement",
                  sub: "Contract & Pricing",
                  image: "/images/how-it-works-2.png"
                },
                {
                  title: "SOW & SLA",
                  sub: "Scope & Service Levels",
                  image: "/images/how-it-works-3.png"
                },
                {
                  title: "Onboarding & KT",
                  sub: "System Setup & Training",
                  image: "/images/how-it-works-4.png"
                },
                {
                  title: "Setup & Testing",
                  sub: "Workflow & Claims Testing",
                  image: "/images/how-it-works-5.png"
                },
                {
                  title: "Go Live",
                  sub: "Launch & Start Operations",
                  image: "/images/how-it-works-6.png"
                },
                {
                  title: "Optimize & Grow",
                  sub: "Continuous Improvement",
                  image: "/images/how-it-works-7.png"
                }
              ].map((step, i, arr) => (
                <div key={i} className="flex flex-col items-center w-full min-[364px]:w-1/2 lg:w-auto relative px-2">
                  {/* Icon Image Container - Fixed Size, No Shadow */}
                  <div className="w-24 h-24 flex items-center justify-center relative z-10 hover:scale-110 transition-transform duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-4 min-[364px]:mt-8 space-y-4 w-full max-w-[150px] flex flex-col items-center">
                    <h4 className="text-[20px] font-bold text-[#243B71] leading-tight h-[66px] flex items-center justify-center text-center w-full">
                      {step.title}
                    </h4>

                    {/* Decorative Line */}
                    <div className="w-full h-[1px] bg-slate-200"></div>

                    <p className="text-[15px] text-slate-500 italic leading-snug min-h-[40px] text-center">
                      {step.sub}
                    </p>
                  </div>

                  {/* Arrow for Desktop */}
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[100%] -translate-x-1/2 z-0">
                      <svg className="w-12 h-6 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 48 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h32m0 0l-8-8m8 8l-8 8" /></svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Banner */}
            <div className="mt-24 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#243B71] to-transparent opacity-10 blur-xl"></div>
              <div className="relative bg-gradient-to-r from-white via-[#243B71] to-white py-4">
                <p className="text-white italic text-lg lg:text-xl font-medium tracking-wide">
                  From Onboarding to Optimization, We've Got You Covered
                </p>
              </div>
            </div>
          </div>
        </section>




        {/* Contact Form Section (Replaced Final CTA Video) */}
        <section className="py-24 bg-[#f4f5f7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Column: Text & Contact Info */}
              <div className="max-w-md">
                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4 block">
                  Connect With Centum
                </span>
                <h2 className="text-4xl md:text-[2.75rem] font-medium text-[#1e293b] leading-tight mb-6">
                  Let’s begin<br />a new journey.
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-12">
                  Need increased velocity in revenue flow? Seeking effective solutions on billing process? Reducing claim denials on your mind? We are here to help.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-2">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#B98C29]">Email at</h4>
                    <a href="mailto:team@centumrcm.com" className="text-lg font-medium text-[#1a1a1a] hover:text-[#B98C29] transition-colors break-words underline decoration-[#B98C29]/30 underline-offset-8">
                      team@centumrcm.com
                    </a>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#B98C29]">Office</h4>
                    <p className="text-base text-[#1a1a1a] leading-relaxed">
                      Centum RCM<br />
                      1430, Venus St,<br />
                      Merritt Island,<br />
                      Florida 32953
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="bg-[#f8f9fa] p-5 md:p-8 lg:p-12 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/30 w-full max-w-[520px] mx-auto lg:ml-auto">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Name :</label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email :</label>
                      <input
                        type="email"
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Phone :</label>
                      <input
                        type="tel"
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Company :</label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">How can we assist you :</label>
                    <textarea
                      rows={5}
                      className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-[#111111] text-white font-bold py-5 rounded-xl hover:bg-[#B98C29] transition-all duration-300 transform active:scale-[0.98] shadow-lg hover:shadow-[#B98C29]/20 uppercase tracking-[0.2em] text-xs"
                  >
                    Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
