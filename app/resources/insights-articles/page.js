"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function InsightsArticlesPage() {
  const articles = [
    {
      title: "The Future of AI in Medical Coding & Charge Capture",
      category: "Automation & Technology",
      date: "Oct 24, 2025",
      excerpt:
        "Discover how intelligent automation is transforming mid-cycle workflows, reducing claim denials, and accelerating revenue collection without human error.",
      image: "/images/insights-articles_centum.jpg",
      link: "/resources/insights-articles/future-of-ai-medical-coding",
    },
    {
      title: "Navigating Payer Audits: Strategies for 100% Compliance",
      category: "Compliance",
      date: "Nov 02, 2025",
      excerpt:
        "A comprehensive guide to ensuring your documentation integrity stands up to rigorous payer audits and eliminates revenue leakage.",
      image: "/images/compliance_and_auditing_centum.jpg",
      link: "/resources/insights-articles/navigating-payer-audits-strategies-for-100-compliance",
    },
    {
      title:
        "Maximizing Front-End Collections Without Compromising Patient Experience",
      category: "Patient Experience",
      date: "Nov 15, 2025",
      excerpt:
        "Learn how financial transparency tools and early eligibility verification can boost your practice's upfront revenue while keeping patients happy.",
      image: "/images/patient_experience_centum.jpg",
      link: "/resources/insights-articles/maximizing-front-end-collections",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        {/* Banner Section */}
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/insights-articles_centum.jpg')",
          }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#243B71]/80 via-[#243B71]/40 to-[#243B71]/80 z-10"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <span className="text-[#B98C29] text-sm md:text-base tracking-[0.2em] block font-bold mb-4 uppercase">
              Resources
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-wide drop-shadow-md">
              Insights & Articles
            </h1>
          </div>
        </div>

        {/* Articles Layout */}
        <section className="py-20 lg:py-28 bg-[#fcfcfc] overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {articles.map((article, i) => (
                <Link
                  href={article.link}
                  key={i}
                  className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col cursor-pointer"
                >
                  {/* Image Block */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Text Block */}
                  <div className="p-8 lg:p-10 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold tracking-[0.1em] text-[#B98C29] uppercase">
                        {article.category}
                      </span>
                      <span className="text-sm font-normal text-slate-400">
                        {article.date}
                      </span>
                    </div>

                    <h3 className="text-2xl font-normal text-[#1e293b] leading-tight mb-4 group-hover:text-[#243B72] transition-colors duration-300 tracking-tight">
                      {article.title}
                    </h3>

                    <p className="text-slate-500 font-normal leading-relaxed mb-8 flex-1">
                      {article.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-[#1e293b] group-hover:text-[#B98C29] transition-colors mt-auto w-fit uppercase">
                      Read More
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter Subscription Banner */}
            <div className="mt-24 lg:mt-32 p-10 md:p-16 rounded-[3rem] bg-[#f8fafc] border border-slate-100 text-center relative overflow-hidden group">
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-8 border border-slate-100">
                  <svg
                    className="w-8 h-8 text-[#B98C29]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl lg:text-5xl font-normal tracking-tight text-[#1e293b] mb-6">
                  Stay ahead of the curve.
                </h2>
                <p className="text-lg text-slate-500 font-normal mb-10 leading-relaxed">
                  Join leading healthcare executives receiving our monthly
                  newsletter on maximizing revenue efficiency.
                </p>
                <form
                  className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="px-6 py-4 rounded-full bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#B98C29] transition-colors w-full flex-1 shadow-sm"
                  />
                  <button className="px-8 py-4 rounded-full bg-[#1e293b] text-white font-bold tracking-wide hover:bg-[#B98C29] transition-colors shadow-md">
                    SUBSCRIBE
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
