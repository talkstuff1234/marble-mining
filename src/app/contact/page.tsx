"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

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

export default function ContactPage() {
  const contactRef = useReveal<HTMLElement>();
  const ctaRef = useReveal<HTMLElement>();

  return (
    <>
      <main className="px-4 py-6 space-y-20">
        {/* ======================================================
            GET IN TOUCH SECTION
        ======================================================= */}
        <section
          ref={contactRef}
          className="relative w-full rounded-3xl overflow-hidden reveal"
        >
          {/* BACKGROUND IMAGE */}
          <Image
            src={assets.images.mapBase}
            alt="Contact background"
            fill
            className="object-contain object-bottom"
            priority
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/80" />

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            {/* LEFT CONTENT */}
            <div className="text-white space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-light">
                  Get In Touch
                </h1>

                <p className="mt-4 text-sm text-white/70 max-w-md">
                  Westland Minerals & Mining Ltd welcomes enquiries from
                  regulators, host communities, partners, suppliers, and
                  stakeholders.
                </p>
              </div>

              {/* CONTACT DETAILS */}
              <div className="space-y-6 text-sm">
                <div>
                  <p className="font-medium">Office Address</p>
                  <p className="text-white/70 mt-1">
                    No 1 old airport road, jos plateau pmb 2722 Nigeria
                  </p>
                </div>

                <div>
                  <p className="font-medium">Email Address</p>
                  <p className="text-white/70 mt-1">
                    info@westlandminerals.com
                  </p>
                </div>

                <div>
                  <p className="font-medium">Phone Number</p>
                  <p className="text-white/70 mt-1">
                    +2348088998990, +8039550868
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-auto">
              <form className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="text-xs text-[#212121]">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your fullname"
                    className="mt-1 w-full px-4 py-3 rounded-lg bg-[#E3E3E3] border text-sm outline-none focus:ring-1 focus:ring-black/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs text-[#212121]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="mt-1 w-full px-4 py-3 rounded-lg bg-[#E3E3E3] border text-sm outline-none focus:ring-1 focus:ring-black/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs text-[#212121]">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="mt-1 w-full px-4 py-3 rounded-lg bg-[#E3E3E3] border text-sm outline-none focus:ring-1 focus:ring-black/20"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-4 py-3 px-14 rounded-full border text-sm hover:bg-black hover:text-white transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ======================================================
            LOOKING FORWARD CTA SECTION
        ======================================================= */}
        <section
          ref={ctaRef}
          className="relative w-full rounded-3xl overflow-hidden reveal"
        >
          <div className="absolute inset-0 bg-[#272727]" />

          <div className="relative z-10 px-6 py-24 flex flex-col items-center text-center text-white">
            <h2 className="text-2xl md:text-3xl font-light">Looking Forward</h2>

            <p className="mt-3 text-sm text-white/70 max-w-md">
              To Building a Responsible Mining Future in Nigeria
            </p>

            <button className="mt-6 px-6 py-3 rounded-full bg-white text-black text-sm">
              Explore Our Operations
            </button>
          </div>
        </section>
      </main>

      {/* =========================
          GLOBAL REVEAL ANIMATION
      ========================== */}
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
