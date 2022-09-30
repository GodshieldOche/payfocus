import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout/Layout'
import App from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { Provider } from 'react-redux'

function MyApp({ Component, ...rest }: any) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return ( 
    <Provider store={store}>
      <ThemeProvider attribute='class'>
        <NextNProgress color='#f59e0b' />
        <Layout currentUser={props.pageProps.currentUser}>
          <Component {...props.pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    const jwt = appContext?.ctx?.req?.cookies?.jwt || null

    let user = null

    

    if (jwt) {
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json',  Authorization: `Bearer ${jwt}`},
        };
        
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

export default MyApp