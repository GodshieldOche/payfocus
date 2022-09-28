import type { NextPage } from 'next'
import Head from 'next/head'
import Fund from '../../../components/dashboard/wallet/fund/Fund'
import Swap from '../../../components/dashboard/wallet/swap/Swap'

const SwapPage: NextPage<any> = ( props ) => {


  return (
    <div>
        <Head>
            <title>Pay Focus | Swap</title>
            <meta name="description" content="PayFocus by Uniccon group" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
       <Swap />
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

export default SwapPage
