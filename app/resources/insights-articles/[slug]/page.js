import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import Link from "next/link";

// Mock data to handle dynamic content based on slug
const getArticleData = (slug) => {
  const allArticles = {
    "future-of-ai-medical-coding": {
      title: "The Future of AI in Medical Coding & Charge Capture",
      category: "Automation & Technology",
      date: "Oct 24, 2025",
      author: "Dr. Emily Chen, Head of Innovation",
      image: "/images/insights-articles_centum.jpg",
      content: [
        "The healthcare revenue cycle has historically been a labor-intensive, manual process prone to human error. However, the advent of Artificial Intelligence (AI) and Machine Learning (ML) is fundamentally disrupting how healthcare providers approach medical coding and charge capture.",
        "Intelligent automation is no longer a futuristic concept; it is a current reality. By leveraging Natural Language Processing (NLP), sophisticated algorithms can now read unstructured clinical notes, lab results, and physician narratives to extract accurate diagnostic and procedural codes.",
        "This shift dramatically reduces the burden on human coders, allowing them to focus on complex, high-value cases rather than routine encounters. Furthermore, AI-driven charge capture ensures that no billable service is missed, directly combating revenue leakage at its source.",
        "As we look towards 2026 and beyond, the integration of generative AI models promises to further streamline these workflows, offering real-time coding suggestions during patient encounters. The providers that adopt these technologies early will not only see a significant reduction in their cost-to-collect but will also set a new standard for operational excellence."
      ]
    },
    "navigating-payer-audits-strategies-for-100-compliance": {
      title: "Navigating Payer Audits: Strategies for 100% Compliance",
      category: "Compliance",
      date: "Nov 02, 2025",
      author: "Michael Roberts, VP of Compliance",
      image: "/images/compliance_and_auditing_centum.jpg",
      content: [
        "Payer audits are an inevitable reality of the healthcare revenue cycle. Whether triggered by the OIG, CMS RACs, or commercial insurers, these audits can result in massive financial takebacks and severe operational disruptions if a practice is caught unprepared.",
        "The cornerstone of audit survival is documentation integrity. It is not enough to simply bill the right code; the clinical documentation must undeniably support medical necessity and the level of service billed. Providers often fall into the trap of over-reliance on EHR templates, leading to 'cloned' notes that auditors easily flag.",
        "To achieve near-100% compliance, organizations must implement robust internal auditing programs. Conducting regular, randomized reviews of coded charts before claims are submitted allows practices to identify patterns of over-coding, under-coding, and missing documentation.",
        "Furthermore, continuous provider education is vital. When physicians understand the direct link between their documentation habits and the financial health (and risk profile) of the organization, compliance becomes a shared cultural value rather than an administrative burden."
      ]
    },
    "maximizing-front-end-collections": {
      title: "Maximizing Front-End Collections Without Compromising Patient Experience",
      category: "Patient Experience",
      date: "Nov 15, 2025",
      author: "Sarah Jenkins, Director of Operations",
      image: "/images/patient_experience_centum.jpg",
      content: [
        "The shift towards high-deductible health plans has fundamentally transformed the revenue cycle landscape. Patients are now one of the largest 'payers' in healthcare. However, attempting to collect these balances post-service is notoriously difficult, expensive, and often damages the patient-provider relationship.",
        "The solution lies in robust front-end processes that prioritize financial transparency. Patients today expect a retail-like experience where they know the cost of their services upfront. Implementing accurate, real-time eligibility verification and out-of-pocket estimations prior to or at the point of service is no longer optional.",
        "When staff are equipped with accurate estimation tools, they can have confident, compassionate financial conversations with patients before clinical care is provided. Offering flexible payment plans, keeping cards on file, and providing digital payment links significantly increases collection rates while preventing the 'surprise bill' phenomenon.",
        "Ultimately, optimizing front-end collections is not just about aggressive billing; it is about providing a transparent, supportive, and modern consumer tech experience that respects the patient's financial reality."
      ]
    }
  };
  
  return allArticles[slug] || {
    title: "Article Not Found",
    category: "General",
    date: "",
    author: "Centum Team",
    image: "/images/career_centum_banner.jpg",
    content: ["The requested article could not be found. Please return to the insights page to browse our other articles."]
  };
};

export default function ArticleDetailsPage({ params }) {
  const article = getArticleData(params.slug);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center pb-20">
        {/* Banner Section */}
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/images/insights-articles_centum.jpg')" }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-[#0f172a]/70 to-[#0f172a]/20"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <span className="text-[#B98C29] text-sm md:text-base tracking-[0.2em] block font-bold mb-4 uppercase">Resources</span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-wide drop-shadow-md">Insights & Articles</h1>
          </div>
        </div>

        {/* Content Section */}
        <article className="w-full max-w-[1366px] mx-auto px-6 lg:px-8 py-16">
          <div className="bg-white p-8 md:p-14 lg:p-20 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 mb-16">
            
            {/* Back to articles link */}
            <Link 
              href="/resources/insights-articles" 
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#B98C29] hover:text-[#0f172a] transition-colors uppercase mb-8 group"
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Insights
            </Link>

            {/* Article Header Data */}
            <div className="mb-12 border-b border-slate-100 pb-10 max-w-5xl mx-auto">
              <span className="text-[#B98C29] text-xs tracking-widest block font-bold mb-4 uppercase">{article.category}</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0f172a] leading-tight mb-6">
                {article.title}
              </h1>
              <div className="flex items-center gap-6 text-slate-500 text-sm font-light uppercase tracking-wider">
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#B98C29]"></span>
                <span>{article.author}</span>
              </div>
            </div>

            {/* Article Featured Image */}
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-sm border border-slate-100">
               <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className="object-cover"
               />
            </div>

            {/* Article Body */}
            <div className="max-w-5xl mx-auto">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-lg lg:text-xl leading-relaxed mb-8 font-normal text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author Footer */}
            <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-slate-100 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-[#B98C29] shadow-sm border border-slate-100 font-bold text-xl uppercase tracking-wider">
                {article.author.split(' ').map(n => n[0]).join('').substring(0,2)}
              </div>
              <div>
                <p className="text-xs tracking-widest text-[#B98C29] font-bold uppercase mb-1">Written By</p>
                <p className="text-lg font-normal text-[#1a1a1a]">{article.author}</p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
