"use client";

import { useEffect, useRef } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

/* ---------------- Intersection Observer Hook ---------------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-active");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Subsidiaries() {
  const heroRef = useReveal<HTMLElement>();
  const environmentRef = useReveal<HTMLElement>();
  const socialRef = useReveal<HTMLElement>();
  const localContentRef = useReveal<HTMLElement>();
  const safetyRef = useReveal<HTMLElement>();
  const governanceRef = useReveal<HTMLElement>();

  return (
    <>
      <main className="px-4 py-3">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[60vh] md:min-h-[85vh] rounded-3xl overflow-hidden flex items-center justify-center text-center reveal"
        >
          <Image
            src={assets.images.aboutImage5}
            alt="subsidiaries"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
              Our Committment
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl mx-auto">
              <p className="text-white/80 text-sm md:text-base">
                Sustainability is integral to how Westlands Minerals & Mining
                Ltd operates and grows, supporting long-term value creation and
                social license to operate.
              </p>
            </div>
          </div>
        </section>

        {/* ENVIRONMENT SECTION */}
        <section
          id="environment"
          ref={environmentRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Environment
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Environmental impact assessments, land rehabilitation planning,
                waste management, water handling, and compliance monitoring.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.sustainabilityImage1}
                alt="Environment"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SOCIAL IMPACT SECTION */}
        <section
          id="social-impact"
          ref={socialRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.sustainabilityImage2}
                alt="Social Impact"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Social Impact
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Community engagement emphasizes consultation, respect for
                cultural heritage, local employment, and shared economic
                benefits.
              </p>
            </div>
          </div>
        </section>

        {/* LOCAL CONTENT SECTION */}
        <section
          id="local-content"
          ref={localContentRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Local Content and Economic Development
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Westlands Minerals & Mining Ltd supports Nigerian participation
                through local hiring, procurement, and skills transfer.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.subsidiariesImage3}
                alt="Local Content"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* HEALTH & SAFETY SECTION */}
        <section
          id="health-safety"
          ref={safetyRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.subsidiariesImage4}
                alt="Health and Safety"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Health and Safety
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Westlands Minerals & Mining Ltd prioritizes the health and
                safety of all personnel through rigorous safety protocols,
                regular training, risk assessments, and a culture of zero harm.
                All operations adhere to national safety standards and
                international best practices.
              </p>
            </div>
          </div>
        </section>

        {/* GOVERNANCE & COMPLIANCE SECTION */}
        <section
          id="governance"
          ref={governanceRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Governance and Compliance
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Strong governance frameworks ensure transparency,
                accountability, and adherence to all applicable legal and
                regulatory requirements. The company maintains robust internal
                controls, ethical business practices, and regular compliance
                audits across all operations.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.hero}
                alt="Governance and Compliance"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* GLOBAL ANIMATIONS */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
