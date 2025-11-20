import React from 'react'

const stats = [
  { value: '$24T+', label: 'Tokenized RWAs by 2030' },
  { value: '$84T', label: 'Global private wealth' },
  { value: '16%', label: 'UHNWIs exposed to digital assets' },
]

const Market = () => {
  return (
    <section id="market" className="relative w-full bg-[#0D0D0D] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-br from-white to-[#C8A75F] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Market Opportunity
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-4xl font-bold text-[#C8A75F]">{s.value}</div>
              <div className="mt-2 text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Market
