"use client";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a192f] text-slate-200 py-24 border-t border-white/5 font-primary selection:bg-white/10 uppercase overflow-hidden">
      {/* Left pattern: more at top, less at bottom */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)',
        backgroundSize: '24px 24px',
        WebkitMaskImage: 'linear-gradient(to bottom right, black 0%, transparent 50%)',
        maskImage: 'linear-gradient(to bottom right, black 0%, transparent 50%)',
      }}></div>

      {/* Right pattern: less at top, more at bottom */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)',
        backgroundSize: '24px 24px',
        WebkitMaskImage: 'linear-gradient(to top left, black 0%, transparent 50%)',
        maskImage: 'linear-gradient(to top left, black 0%, transparent 50%)',
      }}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <Link href="/" className="flex items-center bg-[#F2F4EC] px-8 py-2 rounded-full shadow-sm self-start">
                <Image
                  src="/images/centum_cm_logo.png"
                  alt="Centum Logo"
                  width={180}
                  height={50}
                  className="h-8 lg:h-10 w-auto object-contain"
                  priority
                />
              </Link>
              <p className="text-[13px] leading-relaxed max-w-xs font-medium tracking-wider uppercase">
                UPSCALING FINANCIAL OUTCOMES THROUGH ACCURATE, COMPLIANT AND EFFICIENT REVENUE CYCLE MANAGEMENT SERVICES.
              </p>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-[13px] font-bold tracking-[0.3em] uppercase opacity-100">Solutions</h4>
            <ul className="flex flex-col gap-4 text-[13px] font-medium tracking-wider uppercase">
              <li><Link href="/solutions/pre-service" className="hover:text-[#F2F4EC] transition-colors">Pre-Service</Link></li>
              <li><Link href="/solutions/mid-cycle" className="hover:text-[#F2F4EC] transition-colors">Mid-Cycle</Link></li>
              <li><Link href="/solutions/back-end" className="hover:text-[#F2F4EC] transition-colors">Back-End</Link></li>
              <li><Link href="/solutions/credentialing-services" className="hover:text-[#F2F4EC] transition-colors">Credentialing Services</Link></li>
              <li><Link href="/solutions/standalone" className="hover:text-[#F2F4EC] transition-colors">Standalone Solutions</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-[13px] font-bold tracking-[0.3em] uppercase opacity-100">Company</h4>
            <ul className="flex flex-col gap-4 text-[13px] font-medium tracking-wider uppercase">
              <li><Link href="/career" className="hover:text-[#F2F4EC] transition-colors">Careers</Link></li>
              <li><Link href="/resources/insights-articles" className="hover:text-[#F2F4EC] transition-colors">INSIGHTS ARTICLES</Link></li>
              <li><Link href="/contact" className="hover:text-[#F2F4EC] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-[13px] font-bold tracking-[0.3em] uppercase opacity-100">Follow Us</h4>
            <ul className="flex flex-col gap-4 text-[13px] font-medium tracking-wider uppercase">
              <li><Link href="#" className="hover:text-[#F2F4EC] transition-colors flex items-center gap-2"><FaLinkedinIn size={16} /> LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-[#F2F4EC] transition-colors flex items-center gap-2"><FaFacebookF size={16} /> Facebook</Link></li>
              <li><Link href="#" className="hover:text-[#F2F4EC] transition-colors flex items-center gap-2"><FaInstagram size={16} /> Instagram</Link></li>
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-white/10 mb-8" />

        {/* Lower Level: Copyright */}
        <div className="flex justify-center items-center">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 text-center">
            © 2026 CENTUM TECHNOLOGY GROUP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
