import Head from 'next/head'
import PrivacyPolicy from '../components/PrivacyPolicy'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — High Point Investments LLC</title>
        <meta name="robots" content="noindex" />
      </Head>
      <PrivacyPolicy />
    </>
  )
}
