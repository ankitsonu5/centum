"use client";
import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    const nextIsVisible = window.pageYOffset > 300;
    setIsVisible((current) => (current === nextIsVisible ? current : nextIsVisible));
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#243B72] hover:bg-[#B98C29] text-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 active:scale-95 border border-white/10 group"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      )}
    </div>
  );
}
