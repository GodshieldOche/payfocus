import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Details from '../../../../components/dashboard/wallet/Details'
import { transaction } from '../../../../typeDefs'

const TransactionDetailsPage: NextPage<any> = ( props ) => {


  return (
    <div>
        <Head>
            <title>Pay Focus | Currency Exchange</title>
            <meta name="description" content="PayFocus by Uniccon group" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Details transaction={props.transaction} />
    </div>
  )
}

export async function getServerSideProps({req, res, params}: any) {
  
  const id = params.id
  
  const { jwt } = req.cookies

  let transactions
  let transaction

  const data = await axios.get(`https://api.payfocuss.com/transactions`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  })

  transactions = data.data 

  transaction = transactions.find((transaction : transaction) => transaction.id === id)

  console.log(transaction && transaction)
  // Pass data to the page via props
  return { 
    props: { 
      transaction,
   } 
  }
}

export default TransactionDetailsPage
