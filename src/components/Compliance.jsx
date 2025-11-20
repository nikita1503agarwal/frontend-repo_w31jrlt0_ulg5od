import React from 'react'

const Compliance = () => {
  const badges = ['FCA (UK)', 'MiCA (EU)', 'FINTRAC (CA)']
  const standards = ['ISO', 'SOC2', 'ERC-3643', 'AML', 'KYB', 'SMCR-ready']

  return (
    <section id="compliance" className="relative w-full bg-[#0D0D0D] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-br from-white to-[#C8A75F] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Compliance
        </h2>
        <p className="mt-4 max-w-3xl text-white/80">
          “Opes Digital is built on regulatory rails — not workarounds.”
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {badges.map((b) => (
            <span key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90">{b}</span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {standards.map((s) => (
            <span key={s} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Compliance
