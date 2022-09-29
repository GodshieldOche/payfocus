import React from 'react'
import { balance } from '../../../../pages/dashboard/wallet'
import BackNav from '../../../common/BackNav'
import Body from './Body'


export interface BalancesProp {
  balances: balance[]
}

const Swap: React.FC<BalancesProp> = ({balances}) => {
  return (
    <div className='w-full h-full min-h-screen dark:bg-dark'>
      <BackNav text='Currency Exchange' />
      <Body balances={balances} />
    </div>
  )
}

export default Swap
