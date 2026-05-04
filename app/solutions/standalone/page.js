"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import OtherSolutions from "../../../components/OtherSolutions";
import Image from "next/image";
import {
  Database,
  Activity,
  Settings,
  ShieldCheck,
  Headphones,
  Share2,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function StandalonePage() {
  const services = [
    {
      title: "EHR / EMR Support",
      desc: "System setup, configuration, troubleshooting, and workflow optimization.",
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: "Practice Management Support",
      desc: "Scheduling, patient registration, and system performance support.",
      icon: <Activity className="w-8 h-8" />,
    },
    {
      title: "RCM Software Support",
      desc: "Billing system troubleshooting, claim submission support, and clearinghouse integration.",
      icon: <Settings className="w-8 h-8" />,
    },
    {
      title: "Eligibility & Clearinghouse Support",
      desc: "Resolution of eligibility (270/271) issues and payer connectivity support.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "IT Helpdesk Support",
      desc: "Daily technical support including login issues, access management, and system errors.",
      icon: <Headphones className="w-8 h-8" />,
    },
    {
      title: "Integration & Data Support",
      desc: "EHR-billing integration, API setup, and secure data synchronization.",
      icon: <Share2 className="w-8 h-8" />,
    },
    {
      title: "Website Building & Digital Marketing",
      desc: "Building Professional website, Developing Android / iOS Apps, Digital marketing strategies to enhance visibility & attract more patients.",
      icon: <Globe className="w-10 h-10" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] selection:bg-[#B98C29]/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* Original Style Banner */}
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=2560&auto=format&fit=crop&q=100')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#243B71]/80 via-[#243B71]/40 to-[#243B71]/80 z-10"></div>
          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight md:tracking-wide drop-shadow-md">
              <span className="text-[#B98C29]">Standalone:</span> Custom
              services
            </h1>
          </div>
        </div>

        {/* Original Intro Section */}
        <section className="pt-20 pb-0 bg-[#f8fafc]">
          <div className="container mx-auto px-6 max-w-7xl">
            <p className="text-xl lg:text-2xl text-zinc-600 font-normal leading-relaxed">
              At Centum RCM, we extend beyond revenue cycle management by
              providing dependable healthcare technology support. Our services
              ensure smooth integration between EHR/EMR systems, practice
              management software, and billing workflows—helping providers
              maintain uninterrupted operations and improved financial
              performance.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pt-16 pb-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[120px] -z-10"></div>

          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Targeted solutions
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Focused solutions designed to optimize every touchpoint of your
                healthcare technology stack.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[100px] -z-10 group-hover:bg-blue-100/50 transition-colors"></div>

                  <div className="w-16 h-16 rounded-2xl bg-slate-900 text-[#B98C29] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#243B71] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OtherSolutions activePath="/solutions/standalone" />
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}
