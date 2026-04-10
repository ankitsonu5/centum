"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { 
    name: "ABOUT US", 
    dropdown: true, 
    href: "/about",
    subItems: [
      { name: "OVERVIEW", href: "/about/overview" },
      { name: "WHAT WE PRACTICE", href: "/about/practice" },
      { name: "WHY CENTUM", href: "/about/why-centum" }
    ]
  },
  { 
    name: "SOLUTIONS", 
    dropdown: true, 
    href: "#",
    subItems: [
      { name: "PRE-SERVICE", href: "/solutions/pre-service" },
      { name: "MID-CYCLE", href: "/solutions/mid-cycle" },
      { name: "BACK-END", href: "/solutions/back-end" },
      { name: "CREDENTIALING SERVICES", href: "/solutions/credentialing-services" }
    ]
  },
  { 
    name: "RESOURCES", 
    dropdown: true, 
    href: "#",
    subItems: [
      { name: "INSIGHTS ARTICLES", href: "/resources/insights-articles" }
    ]
  },
  { name: "CAREER", dropdown: false, href: "/career" },
  { name: "CONTACT US", dropdown: false, href: "#" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const toggleMobileDropdown = (e, name) => {
    e.preventDefault();
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

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
          className="fixed inset-0 z-[90] bg-black/20 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Header Section Gradient - Full Width */}
      <div className="fixed top-0 left-0 w-full h-48 bg-gradient-to-b from-black/90 via-black/40 via-black/10 to-transparent z-[95] pointer-events-none" />

      {/* Navbar Container */}
      <div className="fixed top-4 lg:top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-6xl px-4">
        <nav className="bg-transparent px-2 lg:py-2.5 lg:px-6 flex items-center justify-between transition-all duration-300 relative">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center bg-white px-8 py-2 rounded-md shadow-sm">
            <Image 
              src="/images/centum_cm_logo.png" 
              alt="Centum Logo" 
              width={160} 
              height={40} 
              className="h-8 lg:h-10 w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Menu - Right Side */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className={`flex items-center gap-2 text-[13px] font-medium tracking-[0.1em] transition-all ${
                    item.name === "CONTACT US" 
                    ? "bg-white text-black px-7 py-3 rounded-md hover:bg-gray-100 transition-colors" 
                    : "text-white hover:text-white/80"
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <svg className="w-4 h-4 text-white transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 border border-slate-100">
                    <div className="py-2">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href}
                          className="block px-6 py-4 text-[12px] font-bold tracking-wider text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors border-b border-slate-50 last:border-0"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center lg:hidden gap-4">
            {/* Hamburger Button for Mobile only */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white active:bg-white/20 transition-colors"
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
          <div className={`absolute top-[calc(100%+0.75rem)] left-0 w-full bg-slate-900 border border-white/10 rounded-[2rem] p-8 shadow-2xl transition-all duration-500 lg:hidden origin-top ${isMenuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-4">
                  <Link 
                    href={item.href}
                    onClick={(e) => {
                      if (item.subItems) {
                        toggleMobileDropdown(e, item.name);
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                    className={`text-lg font-extrabold tracking-widest transition-colors flex items-center justify-between group ${
                      item.name === "CONTACT US"
                      ? "bg-white text-black px-6 py-4 rounded-xl shadow-md"
                      : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg className={`w-4 h-4 opacity-50 transition-transform duration-300 ${activeMobileDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>
                    )}
                  </Link>

                  {/* Mobile Sub Items */}
                  {item.subItems && activeMobileDropdown === item.name && (
                    <div className="flex flex-col gap-4 pl-6 border-l border-white/10 mt-2 transition-all duration-300">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white/60 text-sm font-bold tracking-widest hover:text-white transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
