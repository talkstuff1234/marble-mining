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

export default function OperationsAndProjects() {
  const heroRef = useReveal<HTMLElement>();
  const operationsRef = useReveal<HTMLElement>();
  const purposeRef = useReveal<HTMLElement>();
  const visionRef = useReveal<HTMLElement>();
  const strategyRef = useReveal<HTMLElement>();
  const governanceRef = useReveal<HTMLElement>();
  const copperBeltRef = useReveal<HTMLElement>();
  const forwardRef = useReveal<HTMLElement>();

  return (
    <>
      <header className="p-2">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[70vh] md:min-h-[85vh] rounded-3xl overflow-hidden flex items-center justify-center text-center reveal"
        >
          <Image
            src={assets.images.operationsHero}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/80" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
              Our Operations & Projects
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl mx-auto">
              <p className="text-white/80 text-sm md:text-base">
                Westlands Minerals & Mining Ltd advances mineral opportunities
                across Nigeria&apos;s most prospective geological regions, with
                a strategic focus on critical and industrial minerals that
                support power infrastructure, clean energy, and industrial
                growth.
              </p>
            </div>
          </div>
        </section>
      </header>
      <section className="w-full bg-[#F9F9F9] px-4 sm:px-6 py-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={assets.images.aboutImage1}
                alt="Operating Bases"
                width={600}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#212121]">
                Operating Bases
              </h2>
              <p className="mt-2 text-sm text-[#6A6A6A]">
                Nigeria & Regional Operations
              </p>

              <p className="mt-6 text-sm leading-relaxed text-[#4A4A4A]">
                Westlands Minerals & Mining Ltd maintains active operating bases
                across key mineral-rich regions in Nigeria, with additional
                cross-border activities extending into Cameroon to support
                regional mineral supply and trade.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#4A4A4A]">
                The company’s operating footprint reflects a focus on minerals
                critical to infrastructure, industrial manufacturing, energy
                systems, and strategic supply chains.
              </p>
            </div>
          </div>

          {/* Nigeria Operations */}
          <div>
            <h3 className="text-xl font-medium text-[#212121]">
              Nigeria Operations
            </h3>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Nasarawa State",
                  items: [
                    "Akwanga Local Government Area – Lead & Zinc",
                    "Toto Local Government Area – Wolframite",
                  ],
                },
                {
                  title: "Kano State",
                  items: ["Riruwai – Tin"],
                },
                {
                  title: "Bauchi State",
                  items: ["Alkaleri – Lead & Zinc", "Gwana – Lead & Zinc"],
                },
                {
                  title: "Bauchi State",
                  items: ["Alkaleri – Lead & Zinc", "Gwana – Lead & Zinc"],
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#EFEFF3] bg-white p-4"
                >
                  <h4 className="text-sm font-medium text-[#212121]">
                    {card.title}
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-[#6A6A6A] list-disc list-inside">
                    {card.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Operations */}
          <div className="">
            <h3 className="text-xl font-medium text-[#212121]">
              Regional Operations
            </h3>

            <div className="mt-4 rounded-xl border border-[#EFEFF3] bg-white p-5">
              <h4 className="text-sm font-medium text-[#212121]">Cameroon</h4>
              <p className="mt-2 text-sm text-[#6A6A6A] leading-relaxed">
                Cross-border mineral sourcing and regional supply activities
                supporting Westland Minerals & Mining Ltd’s broader
                Africa-focused operations.
              </p>
            </div>
          </div>

          {/* Operational Advantage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <h3 className="text-xl font-medium text-[#212121]">
                Operational Advantage
              </h3>

              <p className="mt-4 text-sm text-[#6A6A6A] leading-relaxed">
                This geographically diversified operating base allows Westland
                Minerals & Mining Ltd to:
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Access multiple mineral belts and commodity types",
                  "Maintain flexibility across jurisdictions",
                  "Support consistent supply to domestic and international markets",
                  "Strengthen regional mineral trade and logistics networks",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm text-[#4A4A4A] p-2 rounded-full bg-white border border-[#EFEFF3]"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6B5A2B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-[#6A6A6A] leading-relaxed">
                Westland Minerals & Mining Ltd’s operations are managed in
                accordance with applicable regulatory frameworks, with a strong
                emphasis on safety, environmental responsibility, and community
                engagement.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={assets.images.operationsImage12}
                alt="Operational Advantage"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <main className="px-4 py-3">
        {/* OUR OPERATIONS */}
        <section
          id="our-operations"
          ref={operationsRef}
          className="max-w-7xl mx-auto px-6 py-2 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Project Development Approach
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Westlands Minerals & Mining Ltd advances opportunities through:
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Regulatory alignment and licensing assessment
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Technical and geological evaluation
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Community and stakeholder engagement
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Progressive advancement based on feasibility
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Project details are disclosed publicly only when assets reach
                defined and appropriate stages.
              </p>
            </div>
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
              <div className="absolute top-1/4 right-0 md:-right-8 z-20 animate-float-delayed">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white hover:scale-105 transition-transform duration-300">
                  <Image
                    src={assets.images.homeImage2}
                    alt="Field work"
                    width={260}
                    height={160}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="bg-[#F7F7F7] px-4 py-20 space-y-24">
        <section
          id="mineral-focus"
          ref={purposeRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-6xl mx-auto py-6">
              {/* Background container */}
              <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl">
                {/* Background image */}
                <Image
                  src={assets.images.operationsImage4}
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
                    src={assets.images.operationsImage3}
                    alt="Survey equipment"
                    width={200}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating card – right */}
              <div className="absolute top-1/4 right-0 md:-right-8 z-20 animate-float-delayed">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white hover:scale-105 transition-transform duration-300">
                  <Image
                    src={assets.images.operationsImage5}
                    alt="Field work"
                    width={260}
                    height={160}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Strategic Mineral Focus
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                The mineral focus of Westlands Minerals & Mining Ltd includes:
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Copper — electricity transmission and power grids
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Lithium, cobalt, nickel — energy storage and batteries
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Manganese, graphite — battery cathodes and anodes
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Bauxite, iron ore — infrastructure and manufacturing
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Tantalite, fluorite, baryte, lead, monazite, beryllium
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="copper-belt"
          ref={visionRef}
          className="max-w-7xl mx-auto px-6 py-2 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Copper Belt Context
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Nigeria hosts an emerging copper belt spanning Zamfara, Kaduna,
                Plateau, Nasarawa, Benue, and Bauchi States. Copper
                mineralization may occur as chalcopyrite, bornite, and
                malachite, subject to technical and regulatory evaluation.
              </p>
            </div>
            <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.operationsImage6}
                alt="Strategic Location"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="beneficiation"
          ref={strategyRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-6xl mx-auto py-6">
              {/* Background container */}
              <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl">
                {/* Background image */}
                <Image
                  src={assets.images.operationsImage11}
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
                    src={assets.images.operationsImage10}
                    alt="Survey equipment"
                    width={200}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating card – right */}
              <div className="absolute top-1/4 right-0 md:-right-8 z-20 animate-float-delayed">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white hover:scale-105 transition-transform duration-300">
                  <Image
                    src={assets.images.operationsImage9}
                    alt="Field work"
                    width={260}
                    height={160}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Beneficiation & Processing Pathways
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Progressive beneficiation stages may include:
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">Crushing and screening</span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Concentration and upgrading
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Refining into market-ready products
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Specialized processing for high-value derivatives
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Westlands Minerals & Mining Ltd evaluates such pathways in line
                with feasibility, approvals, and infrastructure access.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="px-4 py-20 space-y-24">
        <section
          id="additional-focus"
          ref={governanceRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Regulatory Complaince
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                All activities are conducted in accordance with:
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Nigerian Minerals and Mining Act
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Mining Cadastre Office licensing requirements
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Environmental regulations
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Community development obligations
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative w-full max-w-6xl mx-auto py-6">
              {/* Background container */}
              <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl">
                {/* Background image */}
                <Image
                  src={assets.images.operationsImage7}
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
                    src={assets.images.homeImage9}
                    alt="Survey equipment"
                    width={200}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating card – right */}
              <div className="absolute top-1/4 right-0 md:-right-8 z-20 animate-float-delayed">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white hover:scale-105 transition-transform duration-300">
                  <Image
                    src={assets.images.operationsImage8}
                    alt="Field work"
                    width={260}
                    height={160}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="copper-belt-2"
          ref={copperBeltRef}
          className="max-w-7xl mx-auto px-6 py-2 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.aboutImage6}
                alt="Strategic Location"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Health, Safety & People
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Safety, environmental protection, and responsible land
                management are integral across all project stages.
              </p>
            </div>
          </div>
        </section>
      </div>

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

      {/* Global reveal and float animations */}
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
