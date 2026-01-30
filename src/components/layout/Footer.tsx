import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Operations & Projects", href: "#" },
  { name: "Sustaunability", href: "#" },
  { name: "Leadership & Governance", href: "#" },
];

function Footer() {
  return (
    <footer className="bg-[#EFEFF3] px-4 py-12">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl px-6 py-10 md:px-10">
        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Left */}
          <div className="max-w-sm">
            <Image src={assets.icons.logo} alt="logo" width={100} />
            <p className="mt-4 text-sm text-[#6A6A6A] leading-relaxed">
              Westlands Minerals & Mining Ltd is focused on the responsible
              exploration and development of mineral resources across strategic
              regions of the country.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-12">
            {/* Company */}
            <div>
              <h4 className="text-sm font-bold mb-4 text-[#212121]">Company</h4>
              <ul className="space-y-3 text-sm text-[#6A6A6A]">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-black transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subsidiaries */}
            {/* <div>
              <h4 className="text-sm font-bold mb-4 text-[#212121] ">
                Subsidiaries
              </h4>
              <ul className="space-y-3 text-sm text-[#6A6A6A]">
                <li>Marble Grove Foods</li>
                <li>Westlands Minerals and Mining</li>
                <li>Marble Air</li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-[#EFEFF3]" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 text-xs text-[#6A6A6A]">
          <span>© 2026 Westlands Minerals & Mining Ltd</span>

          <div className="flex gap-6">
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
