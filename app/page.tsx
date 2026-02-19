
export default function Home() {
  return (
    <main className="bg-bg text-white overflow-hidden">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-lg font-bold tracking-wide">LeadMaxed</div>
        <a href="#contact" className="rounded-lg border border-accent/30 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/10 transition">
          Get in Touch
        </a>
      </nav>

      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_45%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <span className="inline-block mb-6 text-xs tracking-widest font-semibold text-accent">
            OUTBOUND PIPELINE EXECUTION
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Outbound Systems That <br />
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              Maximize Qualified Conversations
            </span>
          </h1>
          <p className="max-w-2xl mx-auto mt-8 text-lg text-slate-400">
            LeadMaxed builds and operates outbound pipelines for high-LTV businesses.
            We don’t sell leads — we create predictable conversation flow through proven outbound execution.
          </p>
          <div className="mt-12 flex justify-center">
            <a href="#contact" className="relative group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-[1.04]">
              Book a Short Intro Call
              <span className="absolute inset-0 rounded-xl bg-accent/40 blur-xl opacity-0 group-hover:opacity-100 transition" />
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-center text-4xl font-bold mb-16">Who LeadMaxed Is For</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-card/70 border border-white/5 p-10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-6 text-accent">Good Fit</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Funding & finance companies</li>
              <li>Mortgage brokers</li>
              <li>Agencies & professional services</li>
              <li>B2B businesses with $5k+ deal sizes</li>
              <li>Teams with capacity for more conversations</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-card/70 border border-white/5 p-10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-6 text-red-400">Not a Fit</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Pay-per-lead buyers</li>
              <li>Local solo operators</li>
              <li>Anyone chasing shortcuts</li>
              <li>No sales process</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="text-center py-24">
        <h2 className="text-4xl font-bold mb-6">Ready for the Next Step?</h2>
        <p className="text-slate-400 mb-10">A short conversation is the fastest way to see if LeadMaxed is a fit.</p>
        <a href="mailto:hello@leadmaxed.com" className="inline-flex rounded-xl bg-accent px-10 py-4 font-semibold text-slate-900 hover:scale-105 transition">
          Schedule an Intro Call
        </a>
      </section>

      <footer className="text-center text-sm text-slate-500 py-10">
        © 2026 LeadMaxed. All rights reserved.
      </footer>
    </main>
  )
}
