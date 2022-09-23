import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='bg-primaryOne'>
      <Head>
        <title>Pay Focus</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </div>
  )
}

export async function getServerSideProps(context : any) {
  const { req } = context
  const { cookies } = req

  // console.log(cookies.jwt)

  const jwt = cookies.jwt

  let user

  const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',  Authorization: `Bearer ${jwt}`},
  };

  if (jwt) {
      const res = await fetch(`https://api.payfocuss.com/account/info`, requestOptions )
      user = await res.json()
  }

  if (!user) {
      return {
          redirect: {
              destination: '/auth/signin',
              permanent: false
          }
      }
  } 
  
  if (user) {
    return {
      redirect: {
          destination: '/dashboard/wallet',
          permanent: false
      }
    }
  }

  return {
      props: {}
  }
}

export default Home
