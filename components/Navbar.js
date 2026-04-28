"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    name: "ABOUT US",
    dropdown: true,
    href: "#",
    subItems: [
      { name: "OVERVIEW", href: "/about/overview" },
      { name: "WHAT WE PRACTICE", href: "/about/practice" },
      { name: "WHY CENTUM RCM", href: "/about/why-centum-rcm" }
    ]
  },
  {
    name: "SOLUTIONS",
    dropdown: true,
    href: "#",
    subItems: [
      { name: "FRONT END", href: "/solutions/pre-service" },
      { name: "MID-CYCLE", href: "/solutions/mid-cycle" },
      { name: "BACK-END", href: "/solutions/back-end" },
      { name: "CREDENTIALING SERVICES", href: "/solutions/credentialing-services" },
      { name: "STANDALONE SOLUTIONS", href: "/solutions/standalone" }
    ]
  },
  {
    name: "RESOURCES",
    dropdown: true,
    href: "#",
    subItems: [
      { name: "INSIGHTS", href: "/resources/insights" },
      { name: "FAQ", href: "/resources/faq" }
    ]
  },
  { name: "CAREERS", dropdown: false, href: "/career" },
  { name: "CONTACT US", dropdown: false, href: "/contact" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isHome = window.location.pathname === "/";
      const threshold = isHome
        ? window.innerHeight - 100
        : Math.max(450, window.innerHeight * 0.65) - 80;

      setIsScrolled(window.scrollY > threshold);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDesktopDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleDesktopDropdown = (e, name) => {
    e.preventDefault();
    setActiveDesktopDropdown((current) => (current === name ? null : name));
  };

  return (
    <>
      {/* Mobile Menu Backdrop Blur Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/20 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Header Section Gradient removed as requested */}

      {/* Navbar Container */}
      <div className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ${isScrolled ? "bg-white/50 backdrop-blur-md border-b border-slate-100 shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <nav ref={navRef} className={`flex items-center justify-between transition-all duration-500 relative ${isScrolled ? "py-3" : "py-4 lg:py-6"}`}>
            {/* Logo - Left Side */}
            <Link href="/" className={`flex items-center px-8 py-2 transition-all duration-500 ${isScrolled ? "" : "bg-[#F2F4EC] rounded-full shadow-sm"}`}>
              <Image
                src="/images/centum_cm_logo.png"
                alt="Centum Logo"
                width={180}
                height={50}
                className="h-8 lg:h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu - Right Side */}
            <div className="hidden lg:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.subItems) {
                        toggleDesktopDropdown(e, item.name);
                      } else {
                        setActiveDesktopDropdown(null);
                      }
                    }}
                    className={`flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] transition-all ${item.name === "CONTACT US"
                      ? "bg-[#B98C29] text-white px-7 py-3 rounded-md hover:bg-[#A67E25] transition-colors"
                      : `${isScrolled ? "text-slate-900 hover:text-[#B98C29]" : "text-white hover:text-[#F2F4EC]"}`
                      }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg className={`w-4 h-4 transition-transform duration-300 ${activeDesktopDropdown === item.name ? "rotate-180" : ""} ${isScrolled ? "text-slate-900" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <div className={`absolute top-full left-0 mt-4 w-64 bg-white rounded-xl overflow-hidden transition-all duration-300 transform origin-top border border-slate-100 ${
                      activeDesktopDropdown === item.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2 pointer-events-none"
                    }`}>
                      <div className="py-2">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setActiveDesktopDropdown(null)}
                            className="block px-6 py-4 text-[12px] font-bold tracking-wider text-slate-700 hover:bg-slate-50 hover:text-[#243B6F] transition-colors border-b border-slate-50 last:border-0"
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
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isScrolled ? "bg-black/5 text-slate-900" : "bg-white/10 text-white"}`}
                aria-label="Toggle menu">
                {isMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`absolute top-[calc(100%+0.75rem)] left-0 w-full bg-slate-900 border border-white/10 rounded-[2rem] p-8 transition-all duration-500 lg:hidden origin-top ${isMenuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4 pointer-events-none'}`}>
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
                      className={`text-lg font-bold tracking-widest transition-colors flex items-center justify-between group ${item.name === "CONTACT US"
                        ? "bg-[#B98C29] text-white px-6 py-4 rounded-xl"
                        : "text-white/90 hover:text-[#F2F4EC]"
                        }`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <svg className={`w-4 h-4 opacity-50 transition-transform duration-300 ${activeMobileDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
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
      </div>
    </>
  );
}
