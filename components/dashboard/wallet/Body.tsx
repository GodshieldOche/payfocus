import React, {useState, useEffect} from 'react'
import { transaction } from '../../../pages/dashboard/wallet'
import Transaction from '../../common/Transaction'
import Tab from './Tab'

interface Props {
  transactions: transaction[]
}

const Body: React.FC<Props> = ({ transactions }) => {

  const [active, setActive] = useState<string>('All')
  const [inflow, setInflow] = useState<any[]>([])
  const [outflow, setOutflow] = useState<any[]>([])

  useEffect(() => {
    setInflow(prev => {
      return transactions?.filter(item => item.type === 'inflow')
    })

    setOutflow(prev => {
      return transactions?.filter(item => item.type === 'outflow')
    })
    
  }, [transactions])
  

  return (
    <div className='w-full h-full !pt-[69px] px-4 sm:px-[43px] lg:px-6 space-y-6'>
        <h1 className=' text-base lg:text-xl text-primaryOne  '>Recent Transactions</h1>
        <Tab setActive={setActive} active={active} />

        {
          active === 'All' 
          && <div className='space-y-4'>
              {
                  transactions?.map((item: transaction) => (
                      <Transaction price={item.amount} type={item.type} date={item.completed} id={item.id} key={item.id} />
                  ))
              }
            </div>
        }

        {
          active === 'Inflow' 
          && <div className='space-y-4'>
              {
                  inflow?.map((item: transaction) => (
                      <Transaction price={item.amount} type={item.type} date={item.completed} id={item.id} key={item.id} />
                  ))
              }
            </div>
        }


        {
          active === 'Outflow' 
          && <div className='space-y-4'>
              {
                  outflow?.map((item: transaction) => (
                      <Transaction price={item.amount} type={item.type} date={item.completed} id={item.id} key={item.id} />
                  ))
              }
            </div>
        }
        
    </div>
  )
}

export default Body
