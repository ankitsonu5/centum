"use client";

import Link from "next/link";
import Image from "next/image";

const allSolutions = [
  { 
    title: "Front End", 
    image: "/images/front_end_cycle_centum.jpg",
    href: "/solutions/pre-service"
  },
  { 
    title: "Mid Cycle", 
    image: "/images/mid_revenue_cycle_centum.jpg",
    href: "/solutions/mid-cycle"
  },
  { 
    title: "Back End", 
    image: "/images/backend_revenue_cycle_centum.jpg",
    href: "/solutions/back-end"
  },
  { 
    title: "Credentialing Services", 
    image: "/images/credentialing_services_centum.jpg",
    href: "/solutions/credentialing-services"
  },
  {
    title: "Standalone Solutions",
    image: "/images/standalone_solutions_centum.jpg",
    href: "/solutions/standalone"
  }
];

export default function OtherSolutions({ activePath }) {
  const otherSolutions = allSolutions.filter(s => s.href !== activePath);

  return (
    <section className="py-20 bg-white border-t border-slate-100 text-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#243B71]">Explore Other Solutions</h2>
          <div className="w-12 h-1 bg-[#B98C29] rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherSolutions.map((item, i) => (
            <Link 
              key={i} 
              href={item.href} 
              className="flex flex-col h-full bg-[#f8fafc] rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-1 border border-slate-100"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-[#243B71]/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="bg-[#243B71] p-5 mt-auto transition-colors duration-300 group-hover:bg-[#1a2c54]">
                <h3 className="text-white text-sm lg:text-[15px] font-bold text-center tracking-widest uppercase flex items-center justify-center gap-2">
                  {item.title}
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
