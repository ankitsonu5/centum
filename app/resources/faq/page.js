"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    q: "How long do we take to onboard clients?",
    a: "Typically, it takes 7 to 10 days to onboard clients. Time varies basis your practice size, EHR access, payer setup, and documentation readiness. Once onboarded, we begin claim submission immediately."
  },
  {
    q: "Is the process of taking over from our existing vendor smooth?",
    a: "Yes. We ensure a smooth transition and embed ourselves with seamless data migration, payer setup, and workflow alignment."
  },
  {
    q: "Do you work with my existing EHR or PM system?",
    a: "Yes, we integrate with most EHR and Practice Management systems including Epic, Athenahealth, eClinicalWorks, AdvancedMD, Kareo, and others."
  },
  {
    q: "Do I need to change my current billing workflow?",
    a: "No, we adapt to your existing workflow. Our ultimate goal is to ensure minimal disruption while improving efficiency and revenue cycle performance."
  },
  {
    q: "When will I start seeing payments once onboarding is completed?",
    a: "Most practices begin receiving processed claims within 2–4 weeks of completion of onboarding. This is subject to payer turnaround times."
  },
  {
    q: "How do you track and improve my monthly collections?",
    a: "We monitor KPIs such as clean claim rate, denial rate, AR days, and payer performance to continuously optimize revenue collection."
  },
  {
    q: "What kind of medical specialities do you serve?",
    a: "We support diverse specialties including primary care, cardiology, orthopaedics, radiology, anaesthesia, behavioural health, and more."
  },
  {
    q: "Is your billing process HIPAA compliant?",
    a: "Yes, we strictly follow HIPAA guidelines to ensure complete protection of patient health information (PHI)."
  },
  {
    q: "How quickly do you respond to billing issues?",
    a: "We typically respond to billing queries within 24 business hours. Priority handling is accorded to urgent issues."
  },
  {
    q: "How is your pricing structured?",
    a: "Pricing is usually based either on a percentage of monthly collections or a flat fee per claim. We can also work on a custom-tailored hybrid model."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* Banner */}
        <div className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center overflow-hidden">
          <Image
            src="/images/faq_centum.jpeg"
            alt="FAQ Banner"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#243B71]/80 via-[#243B71]/40 to-[#243B71]/80 z-10"></div>
          
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-wide drop-shadow-md">FAQs</h1>
          </div>
        </div>

        {/* FAQ Content Section */}
        <section className="w-full py-20 lg:py-28 bg-[#fcfcfc]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between gap-6 group"
                  >
                    <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${openIndex === index ? 'text-[#B98C29]' : 'text-[#243B71] group-hover:text-[#B98C29]'}`}>
                      {index + 1}. {faq.q}
                    </span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#B98C29] border-[#B98C29] text-white rotate-180' : 'text-[#243B71]'}`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-8 pb-8 pt-2">
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
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
