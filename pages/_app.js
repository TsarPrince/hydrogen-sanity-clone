import '../styles/globals.css'

import Footer from '../components/Footer'
import StrapiLoader from '../components/StrapiLoader'
import AppProvider from '../context/appContext'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <StrapiLoader>
        <Component {...pageProps} />
        <Footer />
      </StrapiLoader>
    </AppProvider>
  )
}

export default MyApp
