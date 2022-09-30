import React from 'react'
import { transaction } from '../../../typeDefs'
import BackNav from '../../common/BackNav'

interface TransactionDetailsProps {
  transaction: transaction
}

const Details: React.FC<TransactionDetailsProps> = ({transaction}) => {
  return (
    <div>
      <BackNav text='Transaction Details' />
      {
        transaction &&
        <>
            <div className='!mt-8 sm:!mt-14 '>
              <div className='w-full flex flex-col items-center justify-center space-y-4 sm:space-y-6'>
                  <h1 className='font-medium text-sm sm:text-base  '>Amount</h1>
                  <h1 className={`${transaction.type === 'inflow' ? "text-primaryTwo" : "text-primaryThree"} font-semibold text-[32px] sm:text-[40px]  `}>
                    {`${transaction.type === 'inflow' ? "+ " : "- "} ${transaction.amount}`}
                  </h1>
              </div>

              <div className='w-full px-4 sm:px-8 py-6 flex flex-col space-y-8 bg-secondaryOne dark:bg-darkOne mt-[48px]  sm:mt-[80px]'>
                  {/* status */}
                  <div className='w-full flex justify-between'>
                      <h1 className='left'>Status</h1>
                      <h1 className='right'>{transaction.status ? transaction.status : "Not initiated"}</h1>
                  </div>
                  {/* Currency */}
                  <div className='w-full flex justify-between'>
                      <h1 className='left'>Currency</h1>
                      <h1 className='right !uppercase'>{
                        transaction.currency === '840' 
                        ? 'USD'
                        : transaction.currency === "724"
                        ? 'EUR'
                        : transaction.currency === "826"
                        ? 'GBP'
                        : 'NGN'
                      }</h1>
                  </div>
                  {/* Transaction Type */}
                  <div className='w-full flex justify-between'>
                      <h1 className='left'>Transaction Type</h1>
                      <h1 className='right'>{ transaction.type }</h1>
                  </div>
                  {/* Narration */}
                  <div className='w-full flex justify-between'>
                      <h1 className='left'>Narration</h1>
                      <h1 className='right'>{transaction.narration}</h1>
                  </div>
                  {/* Channel */}
                  <div className='w-full flex justify-between'>
                      <h1 className='left'>Channel</h1>
                      <h1 className='right'>{transaction.channel}</h1>
                  </div>
                  {/* Timestamp */}
                  <div className='w-full flex justify-between'>
                      <h1 className='left'>Timestamp</h1>
                      <h1 className='right'>
                        {
                          transaction.status === 'completed'
                          ? transaction.completed
                          : transaction.initiated
                        }
                      </h1>
                  </div>
              </div>
            </div>
        </>
      }
    </div>
  )
}

export default Details
