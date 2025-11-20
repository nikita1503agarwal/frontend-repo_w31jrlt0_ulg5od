import React, { useState } from 'react'

const AccessForm = () => {
  const [form, setForm] = useState({ full_name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle')

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${BACKEND_URL}/access-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ full_name: '', email: '', company: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="access" className="relative w-full bg-[#0D0D0D] py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="bg-gradient-to-br from-white to-[#C8A75F] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Request Access
        </h2>
        <p className="mt-2 text-white/80">Private access for institutions and UHNWIs.</p>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <input required value={form.full_name} onChange={(e)=>setForm({...form, full_name: e.target.value})} placeholder="Full Name" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" />
          <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} placeholder="Email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" />
          <input value={form.company} onChange={(e)=>setForm({...form, company: e.target.value})} placeholder="Company" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" />
          <textarea rows={4} value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} placeholder="Message" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" />
          <button disabled={status==='loading'} className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#C8A75F] px-6 py-3 text-sm font-medium text-black transition hover:brightness-110 disabled:opacity-60">
            {status==='loading' ? 'Sending…' : 'Request Private Access'}
          </button>
          {status==='success' && <p className="text-[#00C4B4]">Request received. We will be in touch.</p>}
          {status==='error' && <p className="text-red-400">Something went wrong. Please try again.</p>}
        </form>

        <p className="mt-10 text-xs text-white/50">
          Regulated activities subject to FCA, MiCA, and FINTRAC licensing. No services offered until authorized.
        </p>
      </div>
    </section>
  )
}

export default AccessForm
