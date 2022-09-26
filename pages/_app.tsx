import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <ThemeProvider attribute='class'>
       <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp) 
