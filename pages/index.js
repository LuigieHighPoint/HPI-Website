import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('buyers')

  useEffect(() => {
    if (router.query.tab === 'projects') setActiveTab('projects')
  }, [router.query.tab])

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
