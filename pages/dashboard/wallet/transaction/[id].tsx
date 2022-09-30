import axios from 'axios'
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

export async function getServerSideProps({req, res, params}: any) {
  
  const id = params.id
  
  const { jwt } = req.cookies

  let transaction

  const data = await axios.get(`https://api.payfocuss.com/transaction/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  })

  transaction = data.data

  console.log(transaction)
 

  // Pass data to the page via props
  return { 
    props: { 
      transaction,
   } 
  }
}

export default TransactionDetailsPage
