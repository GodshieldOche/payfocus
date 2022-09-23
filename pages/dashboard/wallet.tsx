import type { NextPage } from 'next'
import Head from 'next/head'
import Wallet from '../../components/dashboard/wallet/Wallet'

const WalletPage: NextPage = () => {
  return (
    <div>
        <Head>
            <title>Pay Focus | Wallet</title>
            <meta name="description" content="PayFocus by Uniccon group" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Wallet />
    </div>
  )
}

export default WalletPage
