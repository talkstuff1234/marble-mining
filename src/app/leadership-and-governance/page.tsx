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

export default function LeadershipAndGovernance() {
  const heroRef = useReveal<HTMLElement>();
  const environmentRef = useReveal<HTMLElement>();
  const socialRef = useReveal<HTMLElement>();
  const localContentRef = useReveal<HTMLElement>();
  const safetyRef = useReveal<HTMLElement>();
  const governanceRef = useReveal<HTMLElement>();
  const contactRef = useReveal<HTMLElement>();

  return (
    <>
      <main className="px-4 py-3">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[60vh] md:min-h-[85vh] rounded-3xl overflow-hidden flex items-center justify-center text-center reveal"
        >
          <Image
            src={assets.images.leadershipHero}
            alt="subsidiaries"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
              Leadership & Governance
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl mx-auto">
              <p className="text-white/80 text-sm md:text-base">
                Effective leadership and sound governance are central to
                responsible mining at Westlands Minerals & Mining Ltd.
              </p>
            </div>
          </div>
        </section>
        <section ref={environmentRef} className="bg-white px-4 py-24">
          <div className="max-w-7xl mx-auto">
            {/* =========================
            SECTION HEADER
        ========================== */}
            <div className="flex flex-col items-center text-center gap-4 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B6BCCD] mb-6">
                <Image src={assets.icons.icon1} alt="icon 1" />
                <span className="text-sm text-[#6A6A6A]">
                  Executive Management
                </span>
              </div>

              <p className="text-sm text-[#6A6A6A] max-w-xl">
                Executive management oversees operations, compliance,
                sustainability, and stakeholder engagement.
              </p>
            </div>

            {/* =========================
            MANAGEMENT GRID
        ========================== */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
              {/* LEFT LARGE CARD */}
              <div className="md:row-span-2 flex flex-col items-center text-center gap-3">
                {/* IMAGE */}
                <div className="relative w-44 h-56 rounded-2xl overflow-hidden bg-[#F7F7F7]">
                  <Image
                    src={assets.images.leadershipImage3}
                    alt="President / Chief Executive Officer"
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-xs text-[#6A6A6A]">
                  President / Chief Executive Officer
                </p>
              </div>

              {/* TOP ROW */}
              <div className="flex flex-col items-center text-center gap-3">
                <div className="relative w-44 h-44 rounded-2xl overflow-hidden bg-[#F7F7F7]">
                  <Image
                    src={assets.images.leadershipImage1}
                    alt="Chief Operating Officer"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-[#6A6A6A]">
                  Chief Operating Officer
                </p>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="relative w-44 h-44 rounded-2xl overflow-hidden bg-[#F7F7F7]">
                  <Image
                    src={assets.images.leadershipImage2}
                    alt="Chief Accountant"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-[#6A6A6A]">Chief Accountant</p>
              </div>

              {/* RIGHT LARGE CARD */}
              <div className="md:row-span-2 flex flex-col items-center text-center gap-3">
                <div className="relative w-44 h-56 rounded-2xl overflow-hidden bg-[#F7F7F7]">
                  <Image
                    src={assets.images.leadershipImage6}
                    alt="Co-Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-[#6A6A6A]">Co – Founder</p>
              </div>

              {/* BOTTOM ROW */}
              <div className="flex flex-col items-center text-center gap-3">
                <div className="relative w-44 h-44 rounded-2xl overflow-hidden bg-[#F7F7F7]">
                  <Image
                    src={assets.images.leadershipImage4}
                    alt="Secretary"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-[#6A6A6A]">Secretary</p>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="relative w-44 h-44 rounded-2xl overflow-hidden bg-[#F7F7F7]">
                  <Image
                    src={assets.images.leadershipImage5}
                    alt="Site Engineer"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-[#6A6A6A]">Site Engineer</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="strategy-operations"
          ref={socialRef}
          className="max-w-7xl mx-auto p-4 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 reveal bg-white"
        >
          {/* Strategy */}
          <div className="relative rounded-2xl overflow-hidden h-80 hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={assets.images.homeImage8}
              alt="Strategy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 w-[70%] left-4 right-4 bg-white rounded-xl p-4">
              <h4 className="font-medium text-[#212121]">Board Oversight</h4>
              <p className="text-sm text-[#6A6A6A] mt-1">
                The Board provides oversight of strategy, risk management,
                governance standards, and executive accountability.
              </p>
            </div>
          </div>

          {/* Operations & Footprints */}
          <div className="relative rounded-2xl overflow-hidden h-80 hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={assets.images.sustainabilityImage4}
              alt="Operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 w-[70%] left-4 right-4 bg-white rounded-xl p-4">
              <h4 className="font-medium text-[#212121]">
                Ethics & Compliance
              </h4>
              <p className="text-sm text-[#6A6A6A] mt-1">
                Westlands Minerals & Mining Ltd maintains zero tolerance for
                unethical conduct and is committed to full regulatory compliance
              </p>
            </div>
          </div>
        </section>

        {/* LOOKING FORWARD SECTION */}
        <section
          id="looking-forward"
          ref={contactRef}
          className="py-20 px-6 reveal"
        >
          <div className="relative max-w-6xl mx-auto rounded-3xl bg-[#272727] text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.15),transparent_40%)]" />

            <div className="relative z-10 py-20 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Looking Forward
              </h3>
              <p className="mt-3 text-sm text-neutral-300">
                To Building a Responsible Mining Future in Nigeria
              </p>

              <div className="mt-8">
                <a
                  href="#our-purpose"
                  className="px-6 py-2 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-colors inline-block"
                >
                  Explore Our Operations
                </a>
              </div>
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
