import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Ecosystem from './components/Ecosystem'
import Compliance from './components/Compliance'
import Market from './components/Market'
import Advantage from './components/Advantage'
import AccessForm from './components/AccessForm'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0D0D0D] text-white">
      <Hero />
      <About />
      <Ecosystem />
      <Compliance />
      <Market />
      <Advantage />
      <AccessForm />
    </div>
  )
}

export default App
