import React from 'react'
import { Shield, Coins, Gauge, Vault } from 'lucide-react'

const features = [
  { icon: Shield, title: 'Regulated Custody' },
  { icon: Coins, title: 'Tokenization' },
  { icon: Gauge, title: 'AI-Personalized Dashboards' },
  { icon: Vault, title: 'Vault Infrastructure' },
]

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0D0D0D] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-br from-white to-[#C8A75F] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          About Opes Digital
        </h2>
        <p className="mt-4 max-w-3xl text-white/80">
          Opes Digital is a next-generation platform that unifies custody, token issuance, private deal rooms, and
          institutional-grade digital asset management.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <Icon className="h-5 w-5 text-[#00C4B4]" />
                </div>
                <h3 className="font-medium text-white">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
