import type { NextPage } from 'next'
import Head from 'next/head'
import Fund from '../../../components/dashboard/wallet/fund/Fund'

const FundPage: NextPage<any> = ( props ) => {


  return (
    <div>
        <Head>
            <title>Pay Focus | Fund Wallet</title>
            <meta name="description" content="PayFocus by Uniccon group" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
       <Fund />
    </div>
  )
}

export async function getServerSideProps({req, res}: any) {
 

  // Pass data to the page via props
  return { 
    props: { 
      
   } 
  }
}

export default FundPage
