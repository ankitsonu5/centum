"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    assist: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", company: "", assist: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f0ede8] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* Banner with a different backdrop */}
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/get_in_touch_banner_centum.jpg')",
          }}
        >
          {/* Light effect gradient overlay matching Career style */}
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

          <div className="relative z-10 text-center text-white px-6">
            <span className="text-white text-3xl md:text-4xl lg:text-5xl tracking-[0.16em] block font-bold mb-4 uppercase">
              Connect With Centum
            </span>
          </div>
        </div>

        {/* Unique Split Layout Section */}
        <div className="w-full bg-white py-24 lg:py-32">
          <div className="max-w-[1366px] mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
              {/* Left Column: Info & Details */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-6xl font-serif font-normal text-[#1a1a1a] leading-tight">
                    Let’s begin
                    <br />a new journey.
                  </h2>
                  <p className="text-lg lg:text-xl text-[#555555] leading-relaxed max-w-lg">
                    Need increased velocity in revenue flow? Seeking effective
                    solutions on billing process? Reducing claim denials on your
                    mind? We are here to help.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#B98C29]">
                      Email at
                    </h4>
                    <a
                      href="mailto:team@centumrcm.com"
                      className="text-xl font-medium text-[#1a1a1a] hover:text-[#B98C29] transition-colors break-words underline decoration-[#B98C29]/30 underline-offset-8"
                    >
                      team@centumrcm.com
                    </a>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#B98C29]">
                      Office
                    </h4>
                    <p className="text-lg text-[#1a1a1a] leading-relaxed">
                      Centum RCM
                      <br />
                      1430, VENUS ST,
                      <br />
                      MERRITT ISLAND, <br />
                      FLORIDA 32953
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <div className="w-16 h-1 bg-[#B98C29] rounded-full"></div>
                </div>
              </div>

              {/* Right Column: Premium Contact Form */}
              <div className="bg-[#f8f9fa] p-5 md:p-8 lg:p-12 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/30">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">
                      Message Sent
                    </h3>
                    <p className="text-slate-600">
                      Thank you for reaching out. We will get back to you
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                          Name :
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                          Email :
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                          Phone :
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                          Company :
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                        How can we assist you :
                      </label>
                      <textarea
                        name="assist"
                        required
                        rows="5"
                        value={formData.assist}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300 resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#111111] text-white font-bold py-5 rounded-xl hover:bg-[#B98C29] transition-all duration-300 transform active:scale-[0.98] shadow-lg hover:shadow-[#B98C29]/20 uppercase tracking-[0.2em] text-xs"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
