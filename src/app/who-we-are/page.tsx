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

export default function About() {
  const heroRef = useReveal<HTMLElement>();
  const purposeRef = useReveal<HTMLElement>();
  const visionRef = useReveal<HTMLElement>();
  const strategyRef = useReveal<HTMLElement>();
  // const governanceRef = useReveal<HTMLElement>();
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
            src={assets.images.homeImage4}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/80" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
              Who We Are
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl mx-auto">
              <p className="text-white/80 text-sm md:text-base">
                A Nigerian Mining Company Focused on Responsible Resource
                Development
              </p>
              <p className="text-white/80 text-sm md:text-base">
                Westland Minerals & Mining Ltd is a Nigeria-based mining company
                headquartered in Jos, focused on the responsible exploration and
                development of mineral resources across strategic regions of the
                country.
              </p>
              <p className="text-white/80 text-sm md:text-base">
                The company is committed to building a mining business that
                delivers long-term value through disciplined operations, strong
                governance, and sustainable practices. The approach balances
                commercial performance with environmental stewardship, workforce
                safety, and meaningful community engagement.
              </p>
            </div>
          </div>
        </section>
      </header>

      <main className="px-4 py-3">
        {/* OUR PURPOSE */}
        <section
          id="our-purpose"
          ref={purposeRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.aboutImage1}
                alt="Our Purpose"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Our Purpose
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Unlocking Nigeria’s Mineral Potential Responsibly
              </p>

              <p className="mt-4 text-[#6A6A6A] font-medium">
                The purpose of Westland Minerals & Mining Ltd is to responsibly
                develop Nigeria’s mineral resources to support national
                development, job creation, and long-term economic value. This is
                achieved by:
              </p>
              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                This is achieved by:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Operating safely and efficiently
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Advancing mineral opportunities with long-term potential
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Supporting local communities and employment
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#5B3A1B] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#5B3A1B]" />
                  <span className="text-[#6A6A6A]">
                    Maintaining high standards of integrity and compliance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <div className="bg-[#F7F7F7] px-4 py-20 space-y-24">
        {/* VISION, MISSION & VALUES */}
        <section
          id="vision-mission-values"
          ref={visionRef}
          className="max-w-5xl mx-auto space-y-10 reveal"
        >
          {/* Section Label */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B6BCCD] bg-white">
              <Image
                src={assets.icons.icon1}
                alt="icon"
                width={16}
                height={16}
              />
              <span className="text-sm text-[#6A6A6A]">
                Vision, Mission & Values
              </span>
            </div>
          </div>

          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Our Vision Card */}
            <div className="bg-white rounded-2xl p-2 space-y-4 hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-62 rounded-xl overflow-hidden">
                <Image
                  src={assets.images.aboutImage10}
                  alt="Our Vision"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="font-medium text-[#212121]">Our Vision</h3>
              <p className="text-sm text-[#6A6A6A]">
                To be a leading Nigerian mining company recognized for
                operational excellence, responsible mining practices, and
                sustainable value creation.
              </p>
            </div>

            {/* Our Mission Card */}
            <div className="bg-white rounded-2xl p-2 space-y-4 hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-62 rounded-xl overflow-hidden">
                <Image
                  src={assets.images.aboutImage11}
                  alt="Our Mission"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="font-medium text-[#212121]">Our Mission</h3>
              <p className="text-sm text-[#6A6A6A]">
                To advance mineral opportunities in Nigeria in a manner that
                delivers lasting economic benefits while protecting people,
                communities, and the environment.
              </p>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl">
            {/* IMAGE CARD */}
            <div className="bg-white rounded-2xl p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-64 rounded-xl overflow-hidden">
                <Image
                  src={assets.images.aboutImage7}
                  alt="Values"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* VALUES LIST */}
            <div className="bg-white rounded-2xl p-6 space-y-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-medium text-[#212121]">Our Values</h3>

              <ul className="space-y-3 text-sm text-[#6A6A6A]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#5B3A1B] rounded-full" />
                  Safety First
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#5B3A1B] rounded-full" />
                  Integrity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#5B3A1B] rounded-full" />
                  Respect
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#5B3A1B] rounded-full" />
                  Excellence
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#5B3A1B] rounded-full" />
                  Accountability
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* STRATEGY, OPERATIONS & COMMUNITY */}
      <section
        id="strategy-operations"
        ref={strategyRef}
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
            <h4 className="font-medium text-[#212121]">Strategy</h4>
            <p className="text-sm text-[#6A6A6A] mt-1">
              A Disciplined, Nigeria-Focused Growth Strategy
            </p>
            <p className="text-sm text-[#6A6A6A] mt-1">
              Westlands Minerals & Mining Ltd operates with a strategy aligned
              with Nigeria&apos;s mining sector reforms, emphasizing disciplined
              opportunity selection, operational excellence, responsible growth,
              and long-term value creation.
            </p>
          </div>
        </div>

        {/* Operations & Footprints */}
        <div className="relative rounded-2xl overflow-hidden h-80 hover:scale-[1.02] transition-transform duration-300">
          <Image
            src={assets.images.hero}
            alt="Operations"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 w-[70%] left-4 right-4 bg-white rounded-xl p-4">
            <h4 className="font-medium text-[#212121]">
              Operations & Footprints
            </h4>
            <p className="text-sm text-[#6A6A6A] mt-1">
              Headquartered in Jos, Westland Minerals & Mining Ltd evaluates
              mineral opportunities across key geological regions of Nigeria,
              supporting regulatory engagement, local employment, and regional
              economic development.
            </p>
          </div>
        </div>

        {/* Health, Safety & People */}
        <div className="relative rounded-2xl overflow-hidden h-80 hover:scale-[1.02] transition-transform duration-300">
          <Image
            src={assets.images.aboutImage6}
            alt="Health Safety People"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 w-[70%] left-4 right-4 bg-white rounded-xl p-4">
            <h4 className="font-medium text-[#212121]">
              Health, Safety & People
            </h4>
            <p className="text-sm text-[#6A6A6A] mt-1">
              Westlands Minerals & Mining Ltd prioritizes safe and healthy
              working environments through clear safety procedures, training,
              leadership accountability, and continuous improvement.
            </p>
          </div>
        </div>

        {/* Community Engagement */}
        <div className="relative rounded-2xl overflow-hidden h-80 hover:scale-[1.02] transition-transform duration-300">
          <Image
            src={assets.images.aboutImage8}
            alt="Community Engagement"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 w-[70%] left-4 right-4 bg-white rounded-xl p-4">
            <h4 className="font-medium text-[#212121]">Community Engagement</h4>
            <p className="text-sm text-[#6A6A6A] mt-1">
              Responsible mining at Westland Minerals & Mining Ltd requires
              ongoing engagement with host communities, focused on local
              employment, consultation, respect for land and culture, and shared
              value creation.
            </p>
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
                href="#our-purpose"
                className="px-6 py-2 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-colors inline-block"
              >
                Explore Our Operations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global reveal animation */}
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
