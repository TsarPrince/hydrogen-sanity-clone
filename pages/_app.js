import '../styles/globals.css'

import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import NextNProgress from 'nextjs-progressbar'

import Footer from '../components/Footer'
import { usePreserveScroll } from '../hooks/usePreserveScroll'

function MyApp({ Component, pageProps }) {
  // scroll to last position when navigating back
  usePreserveScroll()

  const router = useRouter()

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Head>
        <title>Mike Wilen Realty - Minnesota Real Estate & Homes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="title"
          content="Mike Wilen Realty - Minnesota Real Estate & Homes"
        />
        <meta
          name="description"
          content="Discover Minnesota's Premier Real Estate Destination with Mike Wilen: Your Trusted Brokerage for Exceptional Properties. From charming suburban homes to picturesque lakeside estates, Mike Wilen leads the way in helping you find the perfect piece of Minnesota. Explore our exclusive listings and expert guidance today.          "
        />
        <meta name="author" content="tsarprince" />
        <meta property="og:image" content={'https://1mw.com/og.png'} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content={1200} />
        <meta property="og:image:height" content={630} />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <NextNProgress color="#3b53ca" />
      <Component {...pageProps} />
      {!(router.asPath === '/contact') && <Footer />}
    </>
  )
}

export default MyApp
