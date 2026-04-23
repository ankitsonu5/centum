"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
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
          style={{ backgroundImage: "url('/images/get_in_touch_banner_centum.jpg')" }}
        >
          {/* Light effect gradient overlay matching Career style */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#243B71]/80 via-[#243B71]/40 to-[#243B71]/80 z-10"></div>
          
          {/* Dots Effect - Left Side */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" style={{ 
            backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', 
            backgroundSize: '24px 24px',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 30%)',
            maskImage: 'linear-gradient(to right, black 0%, transparent 30%)'
          }}></div>
          
          <div className="relative z-10 text-center text-white px-6">
            <span className="text-[#B98C29] text-sm md:text-base tracking-[0.2em] block font-bold mb-4 uppercase">Connect With Centum</span>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight drop-shadow-2xl">Get In Touch</h1>
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
                    Let's start a <br/>conversation.
                  </h2>
                  <p className="text-lg lg:text-xl text-[#555555] leading-relaxed max-w-lg">
                    Whether you have questions about our solutions or want to explore a partnership, our team is ready to help you optimize your revenue cycle.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#B98C29]">Email Us</h4>
                    <a href="mailto:nithya@centumrcm.in" className="text-xl font-medium text-[#1a1a1a] hover:text-[#B98C29] transition-colors break-words underline decoration-[#B98C29]/30 underline-offset-8">
                      nithya@centumrcm.in
                    </a>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#B98C29]">Office</h4>
                    <p className="text-lg text-[#1a1a1a] leading-relaxed">
                      Centum RCM Hub<br/>
                      Healthcare Excellence Center<br/>
                      Global Business Park
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                   <div className="w-16 h-1 bg-[#B98C29] rounded-full"></div>
                </div>
              </div>

              {/* Right Column: Premium Contact Form */}
              <div className="bg-[#f8f9fa] p-5 md:p-8 lg:p-12 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">Message Sent</h3>
                    <p className="text-slate-600">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Message</label>
                      <textarea 
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#B98C29]/20 focus:border-[#B98C29] outline-none transition-all placeholder:text-slate-300 resize-none"
                        placeholder="Your message here..."
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
