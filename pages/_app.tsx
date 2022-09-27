import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout/Layout'
import App from 'next/app'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: any) {
  return ( 
    <ThemeProvider attribute='class'>
       <NextNProgress color='#358DEB' />
       <Layout currentUser={pageProps.currentUser}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    const jwt = appContext?.ctx?.req?.cookies?.jwt || null

    let user = null

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',  Authorization: `Bearer ${jwt}`},
    };

    if (jwt) {
        const res = await fetch(`https://api.payfocuss.com/account/info`, requestOptions )
        user = await res.json()
    }

    return { 
      pageProps: {
        ...appProps.pageProps,
        currentUser: user
      },
     }
  }

export default wrapper.withRedux(MyApp)
