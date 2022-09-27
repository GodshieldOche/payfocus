import React from 'react'
import { WalletProps } from '../../../pages/dashboard/wallet'
import Header from '../../layout/Header'
import Body from './Body'

const Wallet: React.FC<WalletProps> = ({transactions, balances, currentUser}) => {
  return (
    <div >
      <Header balances={balances} currentUser={currentUser}  />
      <Body transactions={transactions} />
    </div>
  )
}

export default Wallet
