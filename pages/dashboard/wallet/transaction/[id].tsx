import type { NextPage } from 'next'
import Head from 'next/head'
import Details from '../../../../components/dashboard/wallet/Details'

const TransactionDetailsPage: NextPage<any> = ( props ) => {


  return (
    <div>
        <Head>
            <title>Pay Focus | Currency Exchange</title>
            <meta name="description" content="PayFocus by Uniccon group" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Details />
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

export default TransactionDetailsPage
