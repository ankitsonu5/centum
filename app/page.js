"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const videoRef = useRef(null);

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
            poster="/images/hero_main.png"
            className="absolute inset-0 w-full h-full object-cover opacity-75 z-0"
          >
            <source src="/videos/centumrcm_video.mp4" type="video/mp4" />
          </video>
          
          {/* Clear View Video Overlays - Top/Bottom only */}
          <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-hero-bg/60 to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-hero-bg/80 via-hero-bg/40 to-transparent z-10"></div>
          <div className="relative container mx-auto px-6 text-center max-w-6xl z-20 pt-40 md:pt-60">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl text-white mb-8 leading-[1.2] lg:leading-[1.1] tracking-tight font-bold drop-shadow-lg uppercase">
              Precision billing <br /> Proven Results
            </h1>
          </div>
        </section>



        {/* Integrated Excellence: Core Solutions Grid */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-6">
              <div className="text-left">
                <span className="text-accent uppercase tracking-widest text-xs font-bold block mb-4">Core Solutions</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1e293b]">Integrated Excellence</h2>
              </div>
              <Link href="#" className="text-accent font-bold text-sm tracking-wide flex items-center gap-2 group transition-all">
                View All Solutions <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Staggered Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Smart RCM (Col 1-2, Row 1) */}
              <div className="lg:col-span-2 bg-[#f8fafc] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 flex flex-col justify-between group transition-all duration-700 hover:shadow-2xl hover:bg-white hover:-translate-y-2">
                <div className="space-y-6 md:space-y-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 11V7h4"/><path d="M11 17h6v-4"/></svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl text-[#1e293b]">Smart RCM</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                      Full-cycle revenue management powered by neural networks to predict denials before they happen.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-10 md:mt-12">
                  <span className="px-4 py-1.5 md:px-5 md:py-2 bg-accent/5 text-accent text-[10px] md:text-xs font-bold rounded-full uppercase tracking-widest">Predictive Coding</span>
                  <span className="px-4 py-1.5 md:px-5 md:py-2 bg-accent/5 text-accent text-[10px] md:text-xs font-bold rounded-full uppercase tracking-widest">Claim Integrity</span>
                </div>
              </div>

              {/* Card 2: Patient Experience (Col 3, Row 1-2) */}
              <div className="lg:col-span-1 bg-[#072746] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-between text-white group transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(7,39,70,0.3)] hover:-translate-y-2">
                <div className="space-y-8 md:space-y-12">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/></svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl tracking-tight">Patient Experience</h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Seamless financial journeys for patients from pre-op to final payment.
                    </p>
                  </div>
                </div>
                <Link href="#" className="flex items-center gap-2 font-bold tracking-wide mt-10 md:mt-12 group/link">
                  Learn more <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Card 3: Automation & AI (Col 1, Row 2) */}
              <div className="lg:col-span-1 bg-[#f8fafc] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 flex flex-col space-y-6 md:space-y-8 group transition-all duration-700 hover:shadow-2xl hover:bg-white hover:-translate-y-2">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#072746] text-white rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl text-[#1e293b]">Automation & AI</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Automate 90% of routine billing tasks with high-precision surgical AI models.
                  </p>
                </div>
              </div>

              {/* Card 4: Financial Performance (Col 2, Row 2) */}
              <div className="lg:col-span-2 bg-[#f8fafc] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 flex flex-col md:flex-row justify-between items-center group transition-all duration-700 hover:shadow-2xl hover:bg-white hover:-translate-y-2">
                <div className="space-y-6 md:space-y-8 w-full md:w-1/2">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#072746]/10 text-[#072746] rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl text-[#1e293b]">Financial Performance</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      Real-time visibility into your health system's financial pulse with executive-ready reporting.
                    </p>
                  </div>
                </div>
                {/* Visual Graphic Representation */}
                <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mt-8 md:mt-0">
                  <div className="space-y-4">
                    <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-[#072746]/20 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-[#072746] rounded-full animate-in slide-in-from-left duration-1000"></div>
                      </div>
                      <div className="h-4 w-full bg-[#072746]/10 rounded-full overflow-hidden">
                        <div className="h-full w-2/5 bg-[#072746]/60 rounded-full animate-in slide-in-from-left duration-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
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
              Technology-Enabled Revenue Cycle Services<br/>
              for Healthcare Providers
            </h2>
            <p className="text-sm lg:text-base text-gray-300 max-w-4xl mx-auto mb-16">
              Experience how Access Healthcare's team of experienced revenue cycle resources and next-generation technology<br/>
              can help you automate your revenue cycle and reduce your costs to collect.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-0">
              {[
                { 
                  title: "Front End Revenue Cycle", 
                  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGJpbGxpbmd8ZW58MHx8MHx8fDA%3D",
                },
                { 
                  title: "Mid Revenue Cycle", 
                  image: "https://plus.unsplash.com/premium_photo-1726862767644-4b0f03d0fdf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3VyYW5jZSUyMGNsYWltc3xlbnwwfHwwfHx8MA%3D%3D",
                },
                { 
                  title: "Back End Revenue Cycle", 
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D",
                },
                { 
                  title: "Consultative Support", 
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col h-full bg-white rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-24 bg-zinc-50 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <span className="text-accent uppercase tracking-widest text-sm font-bold block mb-4">Core Technology</span>
            <h2 className="text-4xl lg:text-5xl mb-16">Three-Cell Revenue OS Architecture</h2>
            
            <div className="relative max-w-[1366px] mx-auto py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {[
                  { title: "Intelligent Ingest", desc: "Automated data normalization across every channel.", step: "01" },
                  { title: "Real-time Adjudication", desc: "Instant policy verification and claim processing.", step: "02" },
                  { title: "Smart Settlement", desc: "Optimized payment routing and reconciliation.", step: "03" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 flex flex-col items-center group hover:-translate-y-2 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center text-accent font-bold mb-6 group-hover:bg-[#0a192f] group-hover:text-white transition-all">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#0a192f] transition-colors">{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed text-center">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Banner Case Study Section */}
        <section className="relative py-32 lg:py-48 flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/case_study_banner.png" 
              alt="Case Study Team" 
              fill 
              className="object-cover object-center" 
            />
          </div>
          
          {/* Gradients Overlay */}
          <div className="absolute inset-0 bg-[#041d3d]/50 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-transparent to-[#041d3d]/80 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#041d3d] via-transparent to-transparent z-10"></div>
          
          <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
            <span className="text-white tracking-[0.2em] text-lg font-bold block mb-4 drop-shadow-md uppercase">
              Case Study
            </span>
            <h2 className="text-2xl lg:text-4xl font-medium text-white leading-snug mb-10 drop-shadow-lg">
              From augmentation to ownership: Transforming customer service for a market leader
            </h2>
            <button className="bg-white text-[#1e293b] px-10 py-3.5 rounded-full font-bold text-base hover:bg-slate-100 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 inline-block uppercase tracking-wider">
              Read More
            </button>
          </div>
        </section>

        {/* News Section */}
        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">News</h2>
            <p className="text-xl lg:text-2xl font-medium text-slate-600 mb-10">For more news, visit our Press Room.</p>
            <Link href="/news" className="bg-[#2a2a2a] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-black transition-colors mb-20 shadow-sm inline-block uppercase tracking-wider">
              Learn More
            </Link>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { 
                  img: "/images/news_truck.png", 
                  title: "North Texas Food Bank Rolls Out Co-Branded Truck with Access Healthcare and Texas Super Kings" 
                },
                { 
                  img: "/images/news_person.png", 
                  title: "Anurag Jain's Access Healthcare Joins Smarter Technologies in $6 Billion Deal With New Mountain Capital" 
                },
                { 
                  img: "/images/news_fierce.png", 
                  title: "New Mountain Capital brings together 3 companies to form AI-enabled RCM platform" 
                }
              ].map((news, idx) => (
                <div key={idx} className="group cursor-pointer flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-white border border-slate-100">
                    <Image src={news.img} alt="News Image" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-base lg:text-lg font-normal text-slate-700 leading-relaxed group-hover:text-[#3b82f6] transition-colors">
                    {news.title}
                  </h3>
                </div>
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
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-800 group mb-12">
                <Image src="/images/hero_main.png" alt="Demo Video" fill className="object-cover opacity-75 grayscale group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-24 h-24 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 transition-transform shadow-2xl text-left">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
              <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold tracking-wide text-[16px] hover:bg-black transition-all shadow-xl">Get Started Today</button>
              <button className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2 font-medium">Talk to an expert <svg className="w-4 h-4 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
