import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import SMSConsent from '../components/SMSConsent'
import { CTA, Footer } from '../components/CTAFooter'

export default function SMSConsentPage() {
  const router = useRouter()

  function handleTabChange(tab) {
    router.push(tab === 'projects' ? '/?tab=projects' : '/')
  }

  return (
    <>
      <Head>
        <title>SMS Consent — High Point Investments LLC</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Navbar activeTab="buyers" onTabChange={handleTabChange} basePath="/" />
      <SMSConsent />
      <CTA basePath="/" />
      <Footer />
    </>
  )
}
