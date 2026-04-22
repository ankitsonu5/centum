"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const videoRef = useRef(null);
  const ctaVideoRef = useRef(null);
  const [isPlayingCTA, setIsPlayingCTA] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-accent/30 font-primary">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[100vh] flex items-end justify-center overflow-hidden bg-hero-bg pb-6 sm:pb-12">
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-75 z-0"
          >
            <source src="/videos/centumrcm_video.mp4" type="video/mp4" />
          </video>

          {/* Solid Color Filter Overlay */}
          <div className="absolute inset-0 bg-[#243B72]/40 z-10"></div>
          <div className="relative container mx-auto px-6 text-center max-w-6xl z-20 pt-40 md:pt-60 flex flex-col items-center">
            {/* Main Header */}
            <h1 className="text-4xl sm:text-6xl lg:text-[3.5rem] xl:text-[4.2rem] 2xl:text-[5rem] text-white mb-6 leading-[1.2] uppercase flex flex-col items-center">
              <span className="font-bold">Precision Billing.</span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f0da9b] via-[#e5ca78] to-[#B98C29] tracking-[0.08em] -mr-[0.08em]">Proven Results.</span>
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
                  Centum RCM is your end-to-end partner in administering the Revenue Cycle Management process effectively. We strive to help healthcare providers surmount the complexities of medical billing, amplifying their focus on patient care.
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
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
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

              {/* Why Centum */}
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between group transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="space-y-6 md:space-y-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#B98C29]/10 rounded-2xl flex items-center justify-center text-[#B98C29]">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl text-[#243B71] tracking-tight">Why Centum</h3>
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
                <Link href="/about/why-centum" className="mt-10 md:mt-12 text-[#B98C29] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn Why <span className="text-lg">→</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Intelligent Automation at Scale: New Image Grid Section */}
        <section className="relative py-24 bg-[#0a192f] text-white overflow-hidden">
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

          <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Technology-Enabled Revenue Cycle Services<br />
              for Healthcare Providers
            </h2>
            <p className="text-sm lg:text-base text-gray-300 max-w-4xl mx-auto mb-16">
              Experience how Access Healthcare's team of experienced revenue cycle resources and next-generation technology<br />
              can help you automate your revenue cycle and reduce your costs to collect.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-0">
              {[
                {
                  title: "Front End Revenue Cycle",
                  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGJpbGxpbmd8ZW58MHx8MHx8fDA%3D",
                  href: "/solutions/pre-service"
                },
                {
                  title: "Mid Revenue Cycle",
                  image: "https://plus.unsplash.com/premium_photo-1726862767644-4b0f03d0fdf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3VyYW5jZSUyMGNsYWltc3xlbnwwfHwwfHx8MA%3D%3D",
                  href: "/solutions/mid-cycle"
                },
                {
                  title: "Back End Revenue Cycle",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D",
                  href: "/solutions/back-end"
                },
                {
                  title: "Consultative Support",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                  href: "/solutions/credentialing-services"
                }
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex flex-col h-full bg-white rounded-lg overflow-hidden group cursor-pointer transition-all duration-300">
                  <div className="relative h-48 lg:h-56 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
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
                <div key={i} className="flex flex-col items-center w-full lg:w-auto relative px-2">
                  {/* Icon Image Container - Fixed Size, No Shadow */}
                  <div className="w-24 h-24 flex items-center justify-center relative z-10 hover:scale-110 transition-transform duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-8 space-y-4 max-w-[150px] flex flex-col items-center">
                    <h4 className="text-[20px] font-bold text-[#243B71] leading-tight min-h-[60px] flex items-center justify-center text-center">
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




        {/* Banner Insights Section */}
        <section className="relative py-32 lg:py-48 flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/case_study_banner.png"
              alt="Insights Team"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Gradients Overlay */}
          <div className="absolute inset-0 bg-[#041d3d]/50 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-transparent to-[#041d3d]/80 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#041d3d] via-transparent to-transparent z-10"></div>

          <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
            <span className="text-white tracking-[0.2em] text-lg font-bold block mb-4 uppercase">
              Insights
            </span>
            <h2 className="text-2xl lg:text-4xl font-medium text-white leading-snug mb-10">
              The Future of AI in Medical Coding & Charge Capture
            </h2>
            <Link href="/resources/insights-articles" className="bg-white text-[#1e293b] px-10 py-3.5 rounded-full font-bold text-base hover:bg-slate-100 transition-all hover:-translate-y-1 inline-block uppercase tracking-wider">
              Read More
            </Link>
          </div>
        </section>

        {/* Articles Section (Replaced News) */}
        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">Articles</h2>
            <p className="text-xl lg:text-2xl font-medium text-slate-600 mb-10">Explore our latest resources and articles.</p>
            <Link href="/resources/insights-articles" className="bg-[#2a2a2a] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-black transition-colors mb-20 inline-block uppercase tracking-wider">
              Learn More
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  img: "/images/insights-articles_centum.jpg",
                  title: "The Future of AI in Medical Coding & Charge Capture",
                  link: "/resources/insights-articles/future-of-ai-medical-coding"
                },
                {
                  img: "/images/compliance_and_auditing_centum.jpg",
                  title: "Navigating Payer Audits: Strategies for 100% Compliance",
                  link: "/resources/insights-articles/navigating-payer-audits-strategies-for-100-compliance"
                },
                {
                  img: "/images/patient_experience_centum.jpg",
                  title: "Maximizing Front-End Collections Without Compromising Patient Experience",
                  link: "/resources/insights-articles/maximizing-front-end-collections"
                }
              ].map((article, idx) => (
                <Link href={article.link} key={idx} className="group cursor-pointer flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-white border border-slate-100">
                    <Image src={article.img} alt="Article Image" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-base lg:text-lg font-normal text-slate-700 leading-relaxed group-hover:text-[#3b82f6] transition-colors">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA / Video Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl mb-12 leading-tight text-slate-900 font-medium">
                Ready to transform your healthcare revenue lifecycle?
              </h2>
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 group mb-12">
                <video
                  ref={ctaVideoRef}
                  src="/videos/centumrcm_video.mp4"
                  className={`w-full h-full object-cover transition-all duration-300 ${!isPlayingCTA ? "opacity-75 grayscale" : "opacity-100 grayscale-0"}`}
                  controls={isPlayingCTA}
                  controlsList="nodownload noremoteplayback"
                  disablePictureInPicture
                  playsInline
                  poster="/images/hero_main.png"
                  onPlay={() => setIsPlayingCTA(true)}
                  onPause={() => setIsPlayingCTA(false)}
                  onEnded={() => setIsPlayingCTA(false)}
                />

                {!isPlayingCTA && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300 z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (ctaVideoRef.current) {
                        ctaVideoRef.current.play();
                      }
                    }}
                  >
                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors"></div>
                    <div className="w-24 h-24 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 transition-transform text-left relative z-20">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
              <Link href="/contact" className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold tracking-wide text-[16px] hover:bg-black transition-all">Get Started Today</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
