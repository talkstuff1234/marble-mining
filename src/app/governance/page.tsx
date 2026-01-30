import { assets } from "@/assets/assets";
import Image from "next/image";

const leaders = [
  {
    section: "Group & Senior Leadership",
    people: [
      {
        name: "Abdullahi Naziru Abdullahi",
        role: "President / Chief Executive Officer",
      },
      { name: "Mohammed Sanusi Bello", role: "Executive Vice President" },
    ],
  },
  {
    section: "Operations & Business Units",
    people: [
      {
        name: "Mohammed Sani Suleiman",
        role: "Managing Director, Agro Trading (Marble Foods)",
      },
      { name: "Ali Olabode Yusuf", role: "Export Manager" },
    ],
  },
  {
    section: "Quality, Finance & Administration",
    people: [
      { name: "Idrees Adekanmbi", role: "Quality Assurance Manager" },
      { name: "Ismail Yusuf Salihu", role: "Inventory Manager" },
      { name: "Success Ogbadu", role: "Corporate Financial Assistant" },
    ],
  },
];

export default function About() {
  return (
    <main className="px-4 py-3">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[70vh] md:min-h-[85vh] rounded-3xl overflow-hidden flex items-center justify-center text-center">
        <Image
          src={assets.images.aboutHero}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-5xl p-6 flex flex-col">
          <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl">
            Who We Are
          </h1>

          <div className="mt-6 space-y-4 max-w-2xl">
            <p className="text-white/80 text-sm md:text-base">
              Marble Group is an established Nigerian operating group focused on
              developing and managing businesses across essential industries.
            </p>
            <p className="text-white/80 text-sm md:text-base">
              The Group acts as an active owner, providing strategic direction,
              governance oversight, and shared standards to its subsidiaries.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="relative py-20 overflow-hidden">
        {/* Background text */}
        <h1 className="absolute inset-x-0 top-10 text-center text-[72px] md:text-[140px] font-bold text-[#F2F2F2] tracking-widest select-none">
          Leaders
        </h1>

        <div className="relative max-w-7xl mx-auto px-4 space-y-20">
          {/* Group & Senior Leadership */}
          <div>
            <h2 className="text-center text-xl md:text-2xl font-semibold mb-10">
              Group & Senior Leadership
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center">
                <div className="w-full h-56 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Abdullahi Naziru Abdullahi
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  President / Chief Executive Officer
                </p>
              </div>

              <div className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center">
                <div className="w-full h-56 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Mohammed Sanusi Bello
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  Executive Vice President
                </p>
              </div>
            </div>
          </div>

          {/* Operations & Business Units */}
          <div>
            <h2 className="text-center text-xl md:text-2xl font-semibold mb-10">
              Operations & Business Units
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center">
                <div className="w-full h-56 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Mohammed Sani Suleiman
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  Managing Director, Agro Trading (Marble Foods)
                </p>
              </div>

              <div className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center">
                <div className="w-full h-56 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Ali Olabode Yusuf
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">Export Manager</p>
              </div>
            </div>
          </div>

          {/* Quality, Finance & Administration */}
          <div>
            <h2 className="text-center text-xl md:text-2xl font-semibold mb-10">
              Quality, Finance & Administration
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center">
                <div className="w-full h-54 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">Idrees Adekanmbi</h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  Quality Assurance Manager
                </p>
              </div>

              <div className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center">
                <div className="w-full h-54 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Ismail Yusuf Salihu
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">Inventory Manager</p>
              </div>

              <div className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center">
                <div className="w-full h-54 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">Success Ogbadu</h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  Corporate Financial Assistant
                </p>
              </div>
            </div>
          </div>
          {/* Operations & Business Units */}
          <div>
            <h2 className="text-center text-xl md:text-2xl font-semibold mb-10">
              Executive & Technical Support
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center">
                <div className="w-full h-56 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Audu Abdulaziz Yahya
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  Technical Assistant
                </p>
              </div>

              <div className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center">
                <div className="w-full h-56 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Kabiru Muhammad Inuwa
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  Technical Assistant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
