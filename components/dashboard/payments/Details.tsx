import React from 'react'
import { Payment } from '../../../typeDefs'
import PaymentNav from '../../common/PaymentNav'

interface Props {
    payment: Payment
}

const Details: React.FC<Props> = ({ payment }) => {
  return (
    <div>
        <PaymentNav text='Payments' icon1='ep:delete-filled' showIcon={true} />

        {
        payment &&
        <>
            <div className='!mt-8 sm:!mt-14 '>
              <div className='w-full flex flex-col items-center justify-center space-y-4 sm:space-y-6'>
                  <h1 className='font-medium text-sm sm:text-base  '>Amount</h1>
                  <h1 className={`text-primaryOne font-semibold text-[32px] sm:text-[40px]  `}>
                    {` ${payment.Amount}`}
                  </h1>
              </div>



              <div className='w-full px-4 sm:px-8 py-6 flex flex-col space-y-8 bg-secondaryOne dark:bg-darkOne mt-[48px]  sm:mt-[80px]'>
                  {/* Title */}
                  <div className='w-full flex justify-between'>
                      <h1 className='left'>Title</h1>
                      <h1 className='right'>{payment.Title}</h1>
                  </div>
                   {/* Status */}
                   <div className='w-full flex justify-between'>
                      <h1 className='left'>Status</h1>
                      <h1 className='right'>{ payment.Status }</h1>
                  </div>
                  {/* Currency */}
                  <div className='w-full flex justify-between'>
                      <h1 className='left'>Currency</h1>
                      <h1 className='right !uppercase'>{
                        payment.Currency === '840' 
                        ? 'USD'
                        : payment.Currency === "724"
                        ? 'EUR'
                        : payment.Currency === "826"
                        ? 'GBP'
                        : 'NGN'
                      }</h1>
                  </div>
                  {/* Redirect Link */}
                  <div className='w-full flex justify-between'>
                      <h1 className='left'>Redirect Link</h1>
                      <h1 className='right'>{payment.Redirect}</h1>
                  </div>
                  {/* Created */}
                  <div className='w-full flex justify-between'>
                      <h1 className='left'>Created</h1>
                      <h1 className='right'>{payment.Created}</h1>
                  </div>
              </div>
            </div>
        </>
      }
    </div>
  )
}

export default Details