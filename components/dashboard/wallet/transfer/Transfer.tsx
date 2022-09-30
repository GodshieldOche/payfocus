import React from 'react'
import { balance } from '../../../../typeDefs'
import BackNav from '../../../common/BackNav'
import Body from './Body'

export type Banks = {
  id: string;
  code: string;
  name: string;
}

export interface TransferProp {
  balances: balance[]
  banks: Banks[]
}

const Transfer: React.FC<TransferProp> = ({balances, banks}) => {
  return (
    <div>
      <BackNav text='Transfer' />
      <Body balances={balances} banks={banks}  />
    </div>
  )
}

export default Transfer
