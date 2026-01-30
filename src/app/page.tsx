"use client";

import { useEffect, useRef } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

/* -------- Intersection Observer Hook -------- */
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

export default function HomePage() {
  const heroRef = useReveal<HTMLElement>();
  const snapshotRef = useReveal<HTMLElement>();
  const operationsRef = useReveal<HTMLElement>();
  const locationRef = useReveal<HTMLElement>();
  const mineralRef = useReveal<HTMLElement>();
  const positioningRef = useReveal<HTMLElement>();
  const sustainabilityRef = useReveal<HTMLElement>();
  const poweringRef = useReveal<HTMLElement>();
  const forwardRef = useReveal<HTMLElement>();

  return (
    <>
      <header className="p-2">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[70vh] md:min-h-[95vh] rounded-3xl overflow-hidden flex items-end reveal"
        >
          <Image
            src={assets.images.hero}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl">
              Responsible Mining. Long-Term Value. Nigeria-Focused.
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl">
              <p className="text-white/80 text-sm md:text-base">
                Westlands Minerals & Mining Ltd is a Nigeria-based mining
                company headquartered in Kaduna, focused on the responsible
                exploration and development of mineral resources across
                strategic regions of the country.
              </p>
              <p className="text-white/80 text-sm md:text-base">
                Westlands Minerals & Mining Ltd is committed to disciplined
                mining practices, regulatory compliance, and sustainable value
                creation that supports Nigeria&apos;s economic growth and
                industrial development.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#company-snapshot"
                className="px-6 py-3 rounded-full bg-white text-sm hover:bg-white/90 transition-colors"
              >
                Explore Our Projects
              </a>
              <a
                href="#looking-forward"
                className="px-6 py-3 rounded-full bg-white/20 text-white text-sm backdrop-blur-md hover:bg-white/30 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </header>

      <main className="px-4 py-3">
        {/* COMPANY SNAPSHOT */}
        <section
          id="company-snapshot"
          ref={snapshotRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B6BCCD] mb-6">
              <Image src={assets.icons.icon1} alt="icon 1" />
              <span className="text-sm text-[#6A6A6A]">Company Snapshot</span>
            </div>
            <h2 className="text-xl md:text-4xl text-[#212121] font-normal">
              Building Value Through Responsible Mining
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-[#E4E4E6] bg-[#FCFCFC] hover:shadow-lg transition-shadow duration-300">
              <Image src={assets.icons.icon2} alt="icon 2" />
              <p className="text-sm text-[#2B2A28] mt-4">
                Nigeria-based operator headquartered in Kaduna
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E4E4E6] bg-[#FCFCFC] hover:shadow-lg transition-shadow duration-300">
              <Image src={assets.icons.icon3} alt="icon 3" />
              <p className="text-sm text-[#2B2A28] mt-4">
                Evaluation of mineral opportunities across key Nigerian mineral
                belts
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E4E4E6] bg-[#FCFCFC] hover:shadow-lg transition-shadow duration-300">
              <Image src={assets.icons.icon4} alt="icon 4" />
              <p className="text-sm text-[#2B2A28] mt-4">
                Focus on critical and industrial minerals
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E4E4E6] bg-[#FCFCFC] hover:shadow-lg transition-shadow duration-300">
              <Image src={assets.icons.icon5} alt="icon 5" />
              <p className="text-sm text-[#2B2A28] mt-4">
                Commitment to safety, communities, and regulatory compliance
              </p>
            </div>
          </div>
        </section>

        {/* OUR OPERATIONS */}
        <section
          id="our-operations"
          ref={operationsRef}
          className="max-w-7xl mx-auto px-6 py-2 reveal"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B6BCCD] mb-6">
              <Image src={assets.icons.icon1} alt="icon 1" />
              <span className="text-sm text-[#6A6A6A]">Our Operations</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-6xl mx-auto py-6">
              {/* Background container */}
              <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl">
                {/* Background image */}
                <Image
                  src={assets.images.homeImage1}
                  alt="Background grid"
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover opacity-80"
                  priority
                />

                {/* Overlay grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
              </div>

              {/* Floating card – left */}
              <div className="absolute top-10 left-30 md:-left-4 z-20 animate-float">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white hover:scale-105 transition-transform duration-300">
                  <Image
                    src={assets.images.homeImage3}
                    alt="Survey equipment"
                    width={200}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating card – right */}
              <div className="absolute top-1/2 right-0 md:-right-8 z-20 animate-float-delayed">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white hover:scale-105 transition-transform duration-300">
                  <Image
                    src={assets.images.homeImage2}
                    alt="Field work"
                    width={360}
                    height={260}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal mb-6">
                Developing Nigeria&apos;s Mineral Resources Responsibly
              </h2>

              <p className="text-[#6A6A6A] mb-8">
                Westlands Minerals & Mining Ltd advances mineral opportunities
                across Nigeria through disciplined regulatory and technical
                evaluation. The company focuses on assets with strong geological
                fundamentals and long-term development potential, supported by
                responsible stakeholder engagement.
              </p>
              <a
                href="#strategic-location"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5B3A1B] text-white text-sm hover:bg-[#4a2f16] transition-colors"
              >
                <span>Operations & Projects</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* STRATEGIC LOCATION */}
        <section
          id="strategic-location"
          ref={locationRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Strategic Location — Kaduna
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                A Central Hub for Resource Development
              </p>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                The headquarters of Westlands Minerals & Mining Ltd in Kaduna
                positions the company within a corridor connecting multiple
                mineralized states. This central location supports operational
                efficiency, workforce development, and the potential for future
                value-addition initiatives as projects advance.
              </p>
            </div>
            <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.homeImage4}
                alt="Strategic Location"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* MINERAL FOCUS */}
        <section
          id="mineral-focus"
          ref={mineralRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.homeImage5}
                alt="Mineral Focus"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Mineral Focus
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg font-bold">
                Supporting Power, Industry & Economic Growth
              </p>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                The mineral focus of Westlands Minerals & Mining Ltd aligns with
                resources that support:
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Power and electricity infrastructure
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Clean energy and energy storage
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Manufacturing and industrial development
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-sm text-[#6A6A6A] max-w-lg">
                This diversified focus supports resilience across commodity
                cycles and aligns with Nigeria&apos;s mineral development
                priorities.
              </p>
            </div>
          </div>
        </section>

        {/* STRATEGIC POSITIONING */}
        <section
          id="strategic-positioning"
          ref={positioningRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Strategic Positioning in Energy & Industry
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Westlands Minerals & Mining Ltd is positioned within mineral
                value chains that support power generation and transmission,
                renewable energy infrastructure, energy storage systems, and
                industrial manufacturing. This positioning reflects a long-term
                view of mineral development that supports both national growth
                and global supply chains.
              </p>
            </div>
            <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.homeImage6}
                alt="Strategic Positioning"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* SUSTAINABILITY SECTION */}
      <section
        id="sustainability"
        ref={sustainabilityRef}
        className="bg-[#272727] text-white py-24 reveal"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex bg-white items-center gap-2 px-4 py-2 rounded-full border border-[#B6BCCD] mb-6">
            <Image src={assets.icons.icon1} alt="icon 1" />
            <span className="text-sm text-[#6A6A6A]">
              Sustainability and Responsible Mining
            </span>
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl">
            Operating with Care, Accountability & Integrity
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-neutral-300">
            Responsible mining is central to how Westlands Minerals & Mining Ltd
            operates. The company&apos;s approach integrates:
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white flex flex-col items-center justify-center gap-3 text-neutral-900 rounded-xl px-5 py-6 hover:scale-105 transition-transform duration-300">
              <Image
                src={assets.icons.icon6}
                alt="Safety standards"
                width={60}
                className="object-cover"
              />
              <p className="text-sm font-medium">
                Strong health and safety standards
              </p>
            </div>

            <div className="bg-white flex flex-col items-center justify-center gap-3 text-neutral-900 rounded-xl px-5 py-6 hover:scale-105 transition-transform duration-300">
              <Image
                src={assets.icons.icon7}
                alt="Environmental protection"
                width={60}
                className="object-cover"
              />
              <p className="text-sm font-medium">
                Environmental protection and rehabilitation planning
              </p>
            </div>

            <div className="bg-white flex flex-col items-center justify-center gap-3 text-neutral-900 rounded-xl px-5 py-6 hover:scale-105 transition-transform duration-300">
              <Image
                src={assets.icons.icon8}
                alt="Community engagement"
                width={60}
                className="object-cover"
              />
              <p className="text-sm font-medium">
                Meaningful community engagement
              </p>
            </div>

            <div className="bg-white flex flex-col items-center justify-center gap-3 text-neutral-900 rounded-xl px-5 py-6 hover:scale-105 transition-transform duration-300">
              <Image
                src={assets.icons.icon9}
                alt="Ethical governance"
                width={60}
                className="object-cover"
              />
              <p className="text-sm font-medium">
                Ethical governance and regulatory compliance
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#powering-growth"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-sm hover:bg-white hover:text-black transition-colors"
            >
              Sustainability & Responsible Mining →
            </a>
          </div>
        </div>
      </section>

      {/* POWERING GROWTH SECTION */}
      <section
        id="powering-growth"
        ref={poweringRef}
        className="bg-white py-24 reveal"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-center">
            Powering Nigeria&apos;s sustainable industrial growth
          </h3>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-xl bg-[#E4E4E6] p-3 border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={assets.images.homeImage7}
                  alt="Beneficiation"
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="mt-2">
                <h4 className="text-sm font-semibold">
                  Beneficiation & Value Addition
                </h4>
                <p className="mt-2 text-xs text-neutral-600">
                  Westlands Minerals & Mining Ltd recognizes that raw mineral
                  extraction alone does not unlock full economic value. The
                  company actively invests in beneficiation infrastructure.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl bg-[#E4E4E6] p-3 border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={assets.images.homeImage8}
                  alt="Governance"
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="mt-2">
                <h4 className="text-sm font-semibold">
                  Leadership & Governance
                </h4>
                <p className="mt-2 text-xs text-neutral-600">
                  Westlands Minerals & Mining Ltd operates under a robust
                  governance framework designed to promote accountability,
                  transparency, and responsible decision-making.
                </p>
              </div>
              <div className="mt-2">
                <a
                  href="#looking-forward"
                  className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-white/30 text-sm hover:bg-neutral-100 transition-colors"
                >
                  Leadership & Governance →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl bg-[#E4E4E6] p-3 border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={assets.images.homeImage9}
                  alt="Community"
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="mt-2">
                <h4 className="text-sm font-semibold">
                  Community & Local Impact
                </h4>
                <p className="mt-2 text-xs text-neutral-600">
                  Westlands Minerals & Mining Ltd engages respectfully with host
                  communities, ensuring shared value creation and long-term
                  socio-economic benefits.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-neutral-600 list-disc list-inside">
                  <li>Local employment and skills development</li>
                  <li>Support for sustainable community initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOOKING FORWARD SECTION */}
      <section
        id="looking-forward"
        ref={forwardRef}
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
                href="#our-operations"
                className="px-6 py-2 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-colors inline-block"
              >
                Explore Our Operations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animation styles */}
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </>
  );
}