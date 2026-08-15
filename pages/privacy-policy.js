import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import PrivacyPolicy from '../components/PrivacyPolicy'
import { CTA, Footer } from '../components/CTAFooter'

export default function PrivacyPolicyPage() {
  const router = useRouter()

  function handleTabChange(tab) {
    router.push(tab === 'projects' ? '/?tab=projects' : '/')
  }

  return (
    <>
      <Head>
        <title>Privacy Policy — High Point Investments LLC</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Navbar activeTab="buyers" onTabChange={handleTabChange} basePath="/" />
      <PrivacyPolicy />
      <CTA />
      <Footer />
    </>
  )
}
