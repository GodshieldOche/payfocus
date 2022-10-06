import React from 'react'
import { Card } from '../../../typeDefs'
import PaymentNav from '../../common/PaymentNav'
import Body from './Body'

interface Props {
    cards: Card[]
}


const Cards: React.FC<Props> = ({cards}) => {
  return (
    <div>
       <PaymentNav text='Cards' showIcon={false} />
       <Body cards={cards} />
    </div>
  )
}

export default Cards
