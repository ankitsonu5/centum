"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { name: "ABOUT US", dropdown: false, href: "/about" },
  { name: "SOLUTIONS", dropdown: true, href: "#" },
  { name: "WHY CENTUM", dropdown: false, href: "#" },
  { name: "RESOURCES", dropdown: true, href: "#" },
  { name: "CAREER", dropdown: false, href: "/career" },
  { name: "CONTACT US", dropdown: false, href: "#" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Menu Backdrop Blur Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-md lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Navbar Container */}
      <div className="fixed top-6 lg:top-10 left-1/2 -translate-x-1/2 z-[100] w-full max-w-6xl px-4">
        <nav className="bg-[#f2f4f6] border border-black/5 rounded-md p-2 lg:py-2.5 lg:px-6 flex items-center justify-between shadow-md transition-all duration-300 relative">
          {/* Logo - Left Side */}
          <Link href="/" className="text-xl lg:text-2xl font-bold text-[#1a1a1a] tracking-[0.2em] uppercase">
            Centum
          </Link>
          
          {/* Desktop Menu - Right Side */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-2 text-[13px] font-medium tracking-[0.1em] transition-all group ${
                  item.name === "CONTACT US" 
                  ? "bg-[#050505] text-white px-7 py-3 rounded-md hover:bg-black transition-colors" 
                  : "text-[#1a1a1a] hover:text-black"
                }`}
              >
                {item.name}
                {item.dropdown && (
                  <svg className="w-4 h-4 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center lg:hidden gap-4">
            {/* Hamburger Button for Mobile only */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-[#0f172a]/5 flex items-center justify-center text-[#0f172a] active:bg-[#0f172a]/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div className={`absolute top-[calc(100%+0.75rem)] left-0 w-full bg-[#f2f4f6] border border-black/5 rounded-[2rem] p-8 shadow-xl transition-all duration-500 lg:hidden origin-top ${isMenuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-extrabold tracking-widest transition-colors flex items-center justify-between group ${
                    item.name === "CONTACT US"
                    ? "bg-[#050505] text-white px-6 py-4 rounded-xl shadow-md"
                    : "text-[#1a1a1a] hover:text-black"
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <svg className="w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
