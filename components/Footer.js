import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a192f] text-slate-200 py-24 border-t border-white/5 font-primary selection:bg-white/10 uppercase overflow-hidden">
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <Link href="/" className="flex items-center bg-white px-8 py-2 rounded-md shadow-sm self-start">
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
                Modernizing healthcare revenue operations through real-time adjudication and advanced automation.
              </p>
            </div>
            
            <div className="flex flex-col gap-8 mt-2">
              <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase opacity-50">Follow Us</h4>
              <ul className="flex flex-col gap-4 text-[13px] font-medium tracking-wider uppercase">
                <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Facebook</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
              </ul>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase opacity-50">Solutions</h4>
            <ul className="flex flex-col gap-4 text-[13px] font-medium tracking-wider uppercase">
              <li><Link href="#" className="hover:text-white transition-colors">Hospital Revenue</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Provider Billing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Patient Payments</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Payer Relations</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase opacity-50">Resources</h4>
            <ul className="flex flex-col gap-4 text-[13px] font-medium tracking-wider uppercase">
              <li><Link href="#" className="hover:text-white transition-colors">Whitepapers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Webinars</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">API Docs</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase opacity-50">Company</h4>
            <ul className="flex flex-col gap-4 text-[13px] font-medium tracking-wider uppercase">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/career" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Newsroom</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
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
