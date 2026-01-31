export default function Legal() {
  return (
    <main className="px-4 mt-28">
      <section className="max-w-4xl mx-auto py-20">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-medium text-[#212121] mb-8">
          Legal Notice
        </h1>

        {/* Content */}
        <div className="space-y-6 text-sm md:text-base text-[#6A6A6A] leading-relaxed">
          <p>
            This website is operated by Westland Minerals & Mining Ltd
            (“Westland”, “we”, “our”, or “us”) and is provided for general
            informational purposes only.
          </p>

          <p>
            The information contained on this website is intended to provide an
            overview of Westland Minerals & Mining Ltd, its strategic focus, and
            its approach to responsible mining. While we strive to ensure that
            information presented is accurate and current, we make no
            representations or warranties, express or implied, regarding the
            completeness, accuracy, or reliability of the content.
          </p>

          <p>
            Information on this website may be updated, modified, or removed at
            any time without notice as our operations and activities evolve.
            Nothing on this website constitutes, or should be construed as:
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>An offer to sell or a solicitation to buy securities</li>
            <li>Investment, financial, legal, or technical advice</li>
            <li>A guarantee of future performance, outcomes, or results</li>
          </ol>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[#EFEFF3]" />

        {/* Limitation of Liability */}
        <div className="space-y-4 text-sm md:text-base text-[#6A6A6A] leading-relaxed">
          <h2 className="text-xl md:text-2xl font-medium text-[#212121]">
            Limitation of Liability
          </h2>

          <p>
            To the fullest extent permitted by applicable law, Westland Minerals
            & Mining Ltd shall not be liable for any loss or damage arising out
            of, or in connection with, the use of this website or reliance on
            any information contained herein.
          </p>

          <p>Use of this website is at your own risk.</p>
        </div>
      </section>
    </main>
  );
}
