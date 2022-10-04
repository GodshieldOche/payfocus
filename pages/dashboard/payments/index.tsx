import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import Payments from '../../../components/dashboard/payments/Payments'

const PaymentPage: NextPage<any> = ( props ) => {


  return (
    <div>
        <Head>
            <title>Pay Focus | Payments</title>
            <meta name="description" content="PayFocus by Uniccon group" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Payments payments={props.payments} />
    </div>
  )
}

export async function getServerSideProps({req, res}: any) {
  
  const { jwt } = req.cookies
  
  let payments: any

  const dataOne = await axios.get('https://api.payfocuss.com/payments', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  })

  payments = dataOne.data

  console.log(payments)
 

  // Pass data to the page via props
  return { 
    props: { 
     payments
   } 
  }
}

export default PaymentPage
