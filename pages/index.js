import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Compare from '../components/Compare'
import Benefits from '../components/Benefits'
import Meet from '../components/Meet'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Areas from '../components/Areas'
import { CTA, Footer } from '../components/CTAFooter'
import Projects from '../components/Projects'

export default function Home() {
  const [activeTab, setActiveTab] = useState('buyers')

  return (
    <>
      <Head>
        <title>High Point Investments LLC — We Buy Houses Fast for Cash | highpointinvest.com</title>
      </Head>

      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'buyers' ? (
        <>
          <Hero />
          <HowItWorks />
          <Compare />
          <Benefits />
          <Meet />
          <Testimonials />
          <FAQ />
          <Areas />
          <CTA />
        </>
      ) : (
        <Projects />
      )}

      <Footer />
    </>
  )
}
