import React from 'react'

const items = [
  { name: 'Cryptauram™', desc: 'FCA-regulated custody & exchange' },
  { name: 'NOVOR™', desc: 'Gold-backed stablecoin + utility token' },
  { name: 'OMNIA™', desc: 'RWA tokenization & UHNW deal rooms' },
  { name: 'Asset Holding Co.', desc: 'Digital vaults + trust entities' },
]

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="relative w-full bg-[#0D0D0D] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-br from-white to-[#C8A75F] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Ecosystem
        </h2>
        <p className="mt-4 max-w-3xl text-white/80">Four pillars connected in a single compliant stack.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#00C4B4]/10 blur-2xl" />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{it.name}</h3>
                <div className="rounded-full border border-[#C8A75F]/30 bg-[#C8A75F]/10 px-3 py-1 text-xs text-[#C8A75F]">Explore</div>
              </div>
              <p className="mt-2 text-white/75">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ecosystem
