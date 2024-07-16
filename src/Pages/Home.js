import React from 'react'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Sdgs from '../Components/Sdgs/Sdgs'
import HowItWorks from '../Components/HowItWorks/HowItWorks'

function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Sdgs />
        <HowItWorks />
    </div>
  )
}

export default Home