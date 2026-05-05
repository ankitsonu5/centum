"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import OtherSolutions from "../../../components/OtherSolutions";

export default function PreServicePage() {
  const steps = [
    {
      q: "Accuracy of Data",
      a: "We ensure high data accuracy by following structured validation of patient data at every step. All details including patient's full legal name, date of birth, insurance ID, address etc are cross verified during the data entry phase. We can also create secure patient portals which can be used by patients to enter and confirm their information prior to visits. All these result in reduced claim denials and hence improved revenue cycle efficiency.",
      step: "01",
    },
    {
      q: "Eligibility Verification",
      a: "We use automated tools to query the payer's database immediately upon scheduling and again 24 hours before the appointment. We check for important details such as coverage validity, plan exclusions, deductible status as well as copay amounts.",
      step: "02",
    },
    {
      q: "Pre-Authorisation",
      a: "Specific procedures and specialists require permission from the insurer in advance. Failure can often lead to claim denial with no recourse for appeal. We obtain the Prior Authorisation number by invoking specific CPT codes against the patient’s insurance policy.",
      step: "03",
    },
    {
      q: "Financial Transparency",
      a: "Chasing patients for money post procedures is not just difficult it is costly. We calculate the estimated patient responsibility (copay, Co-Insurance + remaining deductible) so that the patient can take an informed decision.",
      step: "04",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] selection:bg-accent/30 font-primary text-slate-800">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        {/* Banner - Matching project style */}
        <div
          className="relative w-full h-[60vh] min-h-[450px] lg:h-[65vh] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/solutions_centum_banner.jpg')",
          }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#243B71]/80 via-[#243B71]/40 to-[#243B71]/80 z-10"></div>

          <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight md:tracking-wide drop-shadow-md">
              <span className="text-[#B98C29]">Pre-Service:</span> Patient
              Registration & Insurance Verification
            </h1>
          </div>
        </div>

        {/* Detail Content Section */}
        <section className="py-20 lg:py-28 bg-[#f8fafc] border-y border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-start items-start mb-14 gap-8 lg:gap-16 text-left">
              <div className="md:w-1/2 max-w-2xl space-y-6">
                <div className="w-12 h-1 bg-[#1e293b] rounded-full mt-2"></div>
                <h2 className="text-4xl lg:text-5xl font-normal text-[#1e293b] tracking-tight">
                  Front End: Pre-Service
                </h2>
              </div>
              <div className="md:w-1/2 max-w-xl space-y-4 pt-2">
                <p className="text-lg lg:text-xl text-zinc-600 font-normal leading-relaxed">
                  We genuinely believe that the most integral part of Revenue
                  Cycle Management takes place before the patient physically
                  steps into the Hospital.
                </p>
                <p className="text-lg lg:text-xl text-zinc-600 font-normal leading-relaxed">
                  Latest industry data reinforces the fact that majority of
                  claim denials stem from errors made at the very beginning of
                  the process. Our team helps you avoid such preventable
                  failures.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
              {steps.map((item, i) => {
                const isFeatureCard = i % 4 === 0 || i % 4 === 3;
                const image =
                  i % 4 === 3
                    ? "/images/patient_experience_centum.jpg"
                    : "/images/front_end_cycle_centum.jpg";

                return isFeatureCard ? (
                  <div
                    key={item.step}
                    className="lg:col-span-2 relative text-white p-10 lg:p-14 rounded-[2.5rem] flex flex-col justify-center group overflow-hidden transition-transform duration-500 hover:-translate-y-1"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-[#0a192f]/70 transition-opacity duration-500 group-hover:bg-[#0a192f]/60"></div>
                    <div className="relative z-10">
                      <p className="text-6xl lg:text-7xl font-normal text-white/30 mb-8">
                        {item.step}
                      </p>
                      <h3 className="text-4xl lg:text-5xl font-normal tracking-tight mb-6 drop-shadow-lg">
                        {item.q}
                      </h3>
                      <p className="text-lg lg:text-xl text-white/90 leading-relaxed lg:max-w-4xl font-normal drop-shadow-md">
                        {item.a}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    key={item.step}
                    className="bg-[#f0f0f0] p-10 lg:p-12 rounded-[2.5rem] flex flex-col group transition-transform duration-500 hover:-translate-y-1"
                  >
                    <h3 className="text-6xl lg:text-7xl font-normal text-[#1a1a1a] mb-8">
                      {item.step}
                    </h3>
                    <h4 className="text-2xl font-normal text-[#1a1a1a] mb-4">
                      {item.q}
                    </h4>
                    <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed mt-auto font-normal">
                      {item.a}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <OtherSolutions activePath="/solutions/pre-service" />
      </main>

      <Footer />
    </div>
  );
}
