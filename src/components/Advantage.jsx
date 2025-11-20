import React from 'react'

const rows = [
  { name: 'Opes Digital', reg: 'Yes', ux: 'Cinematic UX', token: 'RWA + Stablecoin', vaults: 'Trust + Digital Vaults', highlight: true },
  { name: 'Coinbase Institutional', reg: 'Partial', ux: 'Pro UX', token: 'Limited', vaults: 'Custody only' },
  { name: 'Fireblocks', reg: 'Partial', ux: 'Ops-centric', token: 'No', vaults: 'Custody only' },
  { name: 'SEBA / Sygnum', reg: 'Yes', ux: 'Bank UX', token: 'Limited', vaults: 'Custody' },
  { name: 'Tokeny', reg: 'No', ux: 'Issuance UX', token: 'RWA', vaults: 'No' },
]

const Advantage = () => {
  return (
    <section id="advantage" className="relative w-full bg-[#0D0D0D] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-br from-white to-[#C8A75F] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Competitive Advantage
        </h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-5 bg-white/5 px-4 py-3 text-sm text-white/80">
            <div>Platform</div>
            <div>Regulation</div>
            <div>UX</div>
            <div>Tokenization</div>
            <div>Vaults</div>
          </div>
          {rows.map((r) => (
            <div key={r.name} className={`grid grid-cols-5 items-center px-4 py-3 text-sm ${r.highlight ? 'bg-gradient-to-r from-[#C8A75F]/15 to-transparent' : 'bg-white/0'} border-t border-white/10`}>
              <div className="font-medium">{r.name}</div>
              <div>{r.reg}</div>
              <div>{r.ux}</div>
              <div>{r.token}</div>
              <div>{r.vaults}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantage
