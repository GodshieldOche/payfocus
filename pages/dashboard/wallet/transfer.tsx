import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Fund from '../../../components/dashboard/wallet/fund/Fund'
import Transfer from '../../../components/dashboard/wallet/transfer/Transfer'

const SwapPage: NextPage<any> = ( props ) => {


  return (
    <div>
        <Head>
            <title>Pay Focus | Trannsfer</title>
            <meta name="description" content="PayFocus by Uniccon group" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
       <Transfer balances={props.balances} banks={props.banks} />
    </div>
  )
}

export async function getServerSideProps({req, res}: any) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  
  const { jwt } = req.cookies

  let balances
  let banks

  const dataOne = await axios.get('https://api.payfocuss.com/balance', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  })

  const dataTwo = await axios.get('https://api.payfocuss.com/banks', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  })


  balances = dataOne.data
  banks = JSON.parse(dataTwo.data.data)

  // Pass data to the page via props
  return { 
    props: { 
      balances,
      banks
   }
  }
}

export default SwapPage
