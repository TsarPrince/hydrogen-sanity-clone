import '../styles/globals.css'

import NextNProgress from 'nextjs-progressbar'

import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#3b53ca" />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
