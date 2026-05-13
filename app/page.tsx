export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          ATS Pass Rate Checker
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Does your resume actually{" "}
          <span className="text-[#58a6ff]">pass ATS?</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your PDF and instantly see what ATS systems parse, what they discard, and exactly how to fix it — before your next application.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Checking My Resume →
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">$9/mo · Cancel anytime · Instant results</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📄", title: "ATS Parsing Simulation", desc: "See your resume exactly as Taleo, Workday, and Greenhouse parse it." },
            { icon: "🔍", title: "Keyword Gap Analysis", desc: "Identify missing keywords that cause automatic rejections." },
            { icon: "✅", title: "Actionable Fix List", desc: "Get a prioritized checklist to boost your pass rate immediately." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$9</div>
          <p className="text-[#8b949e] text-sm mb-6">per month · unlimited checks</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited resume uploads",
              "Full ATS parsing report",
              "Keyword gap analysis",
              "Formatting issue detection",
              "Priority fix recommendations",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which ATS systems do you simulate?",
              a: "We simulate the parsing behavior of the most common enterprise ATS platforms including Taleo, Workday, Greenhouse, and Lever, covering over 90% of Fortune 500 hiring pipelines."
            },
            {
              q: "What file formats are supported?",
              a: "We currently support PDF uploads. PDF is the recommended format for ATS submissions, and our parser mirrors how real ATS engines extract text from PDF files."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel at any time from your billing portal with no questions asked. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} ATS Resume Checker. All rights reserved.
      </footer>
    </main>
  );
}
