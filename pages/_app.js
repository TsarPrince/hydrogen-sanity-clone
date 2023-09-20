import '../styles/globals.css'

import Head from 'next/head'
import Script from 'next/script'
import NextNProgress from 'nextjs-progressbar'

import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
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
        <title>Real Estate & Homes For Sale – Mike Wilen Realty</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="title"
          content="Real Estate & Homes For Sale – Mike Wilen Realty"
        />
        <meta
          name="description"
          content="Headed by industry leader Mike Wilen and supported by twelve highly experienced, multidisciplinary professionals. The Group has methodically built and developed a powerhouse real estate practice that sits prominently where buyer’s find real estate for sale. Utilizing our unprecedented resources, we will craft a unique and winning strategy to sell your real estate. Let us put our experience to work for you."
        />
        <meta name="author" content="tsarprince" />
        <meta property="og:image" content={'https://1mw.com/og.png'} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content={1200} />
        <meta property="og:image:height" content={630} />
      </Head>
      <NextNProgress color="#3b53ca" />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
