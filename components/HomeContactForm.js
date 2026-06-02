"use client";
import { useState } from "react";

export default function HomeContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    assist: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", company: "", assist: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "phone") {
      // Remove all non-digit characters
      value = value.replace(/\D/g, "");
    }
    setFormData({ ...formData, [name]: value });
  };

  if (isSubmitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#1a1a1a]">Message Sent</h3>
        <p className="text-slate-600">Thank you for reaching out. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Name :</label>
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
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email :</label>
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
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Phone :</label>
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
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Company :</label>
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
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">How can we assist you :</label>
        <textarea
          name="assist"
          required
          rows={5}
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
  );
}
