import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#EFEFF3] px-4 py-12">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl px-6 py-10 md:px-10">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between gap-14">
          {/* LEFT */}
          <div className="max-w-sm">
            <Image src={assets.icons.logo} alt="logo" width={110} />
            <p className="mt-4 text-sm text-[#6A6A6A] leading-relaxed">
              Westlands Minerals & Mining Ltd is focused on the responsible
              exploration and development of mineral resources across strategic
              regions of the country.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row gap-16">
            {/* COMPANY */}
            <div>
              <h4 className="text-sm font-semibold text-[#212121] mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-[#6A6A6A]">
                <li>
                  <Link href="/" className="hover:text-black transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="who-we-are"
                    className="hover:text-black transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="operations-and-projects"
                    className="hover:text-black transition"
                  >
                    Operations & Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="sustainability"
                    className="hover:text-black transition"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    href="leadership-and-governance"
                    className="hover:text-black transition"
                  >
                    Leadership & Governance
                  </Link>
                </li>
                <li>
                  <Link
                    href="our-products"
                    className="hover:text-black transition"
                  >
                    Our Products
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="hover:text-black transition">
                    News & Update
                  </Link>
                </li> */}
                <li>
                  <Link href="contact" className="hover:text-black transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* GET UPDATES */}
            <div className="max-w-xs">
              <h4 className="text-sm font-semibold text-[#212121] mb-4">
                Get Updates
              </h4>

              <p className="text-sm text-[#6A6A6A] leading-relaxed mb-4">
                Subscribe to get the latest update about Western Mining
              </p>

              <form className="flex items-center border border-[#D1D5DB] rounded-md overflow-hidden bg-white">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="flex-1 px-3 py-2 text-sm outline-none"
                />
                <button
                  type="submit"
                  className="px-3 py-3 bg-[#5B3A1B] text-white flex items-center justify-center"
                >
                  <Image src={assets.icons.icon10} alt="alt" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px bg-[#EFEFF3]" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6A6A6A]">
          <span>© 2026 Westlands Minerals & Mining Ltd</span>

          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-black transition">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-black transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
