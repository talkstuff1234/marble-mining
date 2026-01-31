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

export default function Products() {
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
            src={assets.images.productsHero}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/80" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
              Our Products
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl mx-auto">
              <p className="text-white/80 text-sm md:text-base">
                Critical and solid minerals powering infrastructure, energy, and
                industrial growth.
              </p>
            </div>
          </div>
        </section>
      </header>

      <main className="px-4 py-3">
        {/* OUR OPERATIONS */}
        <section
          id="our-operations"
          ref={operationsRef}
          className="max-w-7xl mx-auto px-6 py-2 reveal"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B6BCCD] mb-6">
              <Image src={assets.icons.icon1} alt="icon 1" />
              <span className="text-sm text-[#6A6A6A]">
                Solid minerals powering infrastructure
              </span>
            </div>
          </div>
          <div className="text-center mb-4">
            <h1 className="text-[#212121] text-xl md:text-3xl">Tin</h1>
            <p className="text-center text-[#6A6A6A]">
              Tin is a versatile metal valued for its corrosion resistance, low
              toxicity, and ability to alloy with other metals.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-6xl mx-auto py-6">
              {/* Background container */}
              <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl">
                {/* Background image */}
                <Image
                  src={assets.images.productsImage2}
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
                    src={assets.images.productsImage1}
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
                    src={assets.images.productsImage3}
                    alt="Field work"
                    width={260}
                    height={160}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl text-[#212121] font-normal">
                Key Uses:
              </h2>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Tin plating to protect metals from rust and corrosion
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Core ingredient in solder for electronics and circuit boards
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Production of tin cans, metal containers, and alloys such as
                    bronze
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Protective coatings for aerospace and automotive components
                  </span>
                </li>
              </ul>
              <h2 className="text-xl md:text-2xl text-[#212121] font-normal">
                Primary Industry:
              </h2>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Electronics & Electrical Manufacturing
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Packaging & Food Processing
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">Automotive & Aerospace</span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Metallurgy & Manufacturing
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-center">
              <h1 className="text-[#212121] text-xl md:text-3xl">Monazite</h1>
              <p className="text-center text-[#6A6A6A]">
                Monazite is a phosphate mineral and a major source of rare earth
                elements critical to modern technology.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
              <div>
                <p className="mt-4 text-[#6A6A6A] max-w-lg font-bold">
                  Key Uses:
                </p>

                <ul className="mt-6 space-y-4">
                  <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                    <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                    <span className="text-[#6A6A6A]">
                      Source of rare earth elements such as cerium, lanthanum,
                      and neodymium
                    </span>
                  </li>
                  <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                    <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                    <span className="text-[#6A6A6A]">
                      Used in permanent magnets, catalysts, and electronic
                      components
                    </span>
                  </li>
                  <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                    <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                    <span className="text-[#6A6A6A]">
                      Contains thorium, used in nuclear research and advanced
                      energy studies
                    </span>
                  </li>
                  <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                    <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                    <span className="text-[#6A6A6A]">
                      Applied in glass polishing and specialized optical
                      materials
                    </span>
                  </li>
                </ul>
                <p className="mt-4 font-bold text-[#6A6A6A] max-w-lg">
                  Primary Industry:
                </p>

                <ul className="mt-6 space-y-4">
                  <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                    <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                    <span className="text-[#6A6A6A]">
                      High-Tech & Electronics
                    </span>
                  </li>
                  <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                    <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                    <span className="text-[#6A6A6A]">
                      Renewable Energy & Magnet Manufacturing
                    </span>
                  </li>
                  <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                    <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                    <span className="text-[#6A6A6A]">Nuclear Research</span>
                  </li>
                  <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                    <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                    <span className="text-[#6A6A6A]">
                      Optical & Glass Industries
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative w-full max-w-6xl mx-auto py-6">
                {/* Background container */}
                <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src={assets.images.productsImage4}
                    alt="Strategic Location"
                    width={700}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="bg-[#F7F7F7] px-4 py-10 space-y-24">
        <section
          id="mineral-focus"
          ref={purposeRef}
          className="max-w-7xl mx-auto px-6 py-10 reveal"
        >
          <div className="text-center mb-12">
            <h1 className="text-[#212121] text-xl md:text-3xl">Lead</h1>
            <p className="text-center text-[#6A6A6A]">
              Lead is a dense, malleable metal widely used for energy storage
              and radiation protection
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mt-4 text-[#6A6A6A] max-w-lg font-bold">
                Key Uses:
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Lead-acid batteries for vehicles, solar systems, and power
                    backups
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Radiation shielding in hospitals and laboratories
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Ammunition manufacturing
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Cable sheathing, counterweights, and construction materials
                  </span>
                </li>
              </ul>
              <p className="mt-4 font-bold text-[#6A6A6A] max-w-lg">
                Primary Industry:
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Energy Storage & Power Systems
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Healthcare & Medical Infrastructure
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">Defense & Security</span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Construction & Industrial Manufacturing
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative w-full max-w-6xl mx-auto py-6">
              {/* Background container */}
              <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl">
                {/* Background image */}
                <Image
                  src={assets.images.productsImage6}
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
                    src={assets.images.productsImage5}
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
                    src={assets.images.productsImage7}
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
      </div>

      <div className="px-4 py-10 space-y-24">
        <section
          id="additional-focus"
          ref={visionRef}
          className="max-w-7xl mx-auto px-6 py-10 reveal"
        >
          <div className="text-center">
            <h1 className="text-[#212121] text-xl md:text-3xl">Lithium</h1>
            <p className="text-center text-[#6A6A6A]">
              Lithium is a strategic mineral essential to modern energy storage
              and clean technology.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-6xl mx-auto py-6">
              {/* Background container */}
              <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src={assets.images.productsImage8}
                  alt="Strategic Location"
                  width={700}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="mt-4 text-[#6A6A6A] max-w-lg font-bold">
                Key Uses:
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Lithium-ion batteries for phones, laptops, electric
                    vehicles, and solar storage
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Lightweight alloys for improved strength and performance
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Glass and ceramics to enhance heat resistance and durability
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Air purification systems and pharmaceutical applications
                  </span>
                </li>
              </ul>
              <p className="mt-4 font-bold text-[#6A6A6A] max-w-lg">
                Primary Industry:
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Electric Vehicles & Renewable Energy
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Electronics & Consumer Technology
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Glass & Ceramics Manufacturing
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Healthcare & Pharmaceuticals
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="additional-focus"
          ref={strategyRef}
          className="max-w-7xl mx-auto px-6 py-10 reveal"
        >
          <div className="text-center">
            <h1 className="text-[#212121] text-xl md:text-3xl">Wolframite</h1>
            <p className="text-center text-[#6A6A6A]">
              Wolframite is the primary ore of tungsten, known for exceptional
              hardness and heat resistance.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mt-4 text-[#6A6A6A] max-w-lg font-bold">
                Key Uses:
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Production of tungsten for cutting tools, drill bits, and
                    heavy machinery
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Electrical contacts and light bulb filaments
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Military-grade equipment, armor-piercing ammunition, and
                    high-temperature
                  </span>
                </li>
              </ul>
              <p className="mt-4 font-bold text-[#6A6A6A] max-w-lg">Systems</p>
              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Aerospace components and high-strength alloys
                  </span>
                </li>
              </ul>
              <p className="mt-4 font-bold text-[#6A6A6A] max-w-lg">
                Primary Industry:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">Mining & Metallurgy</span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Industrial Manufacturing
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">Defense & Military</span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border bg-white border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Aerospace & Heavy Engineering
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative w-full max-w-6xl mx-auto py-6">
              {/* Background container */}
              <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl">
                {/* Background image */}
                <Image
                  src={assets.images.productsImage10}
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
                    src={assets.images.productsImage9}
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
                    src={assets.images.productsImage11}
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
