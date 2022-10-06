import React from 'react'
import { Payment } from '../../../typeDefs'
import PaymentNav from '../../common/PaymentNav'
import { Icon } from '@iconify/react';
import Button from '../../common/Button';
import { useRouter } from 'next/router';

interface Props {
    payment: Payment
}

const Details: React.FC<Props> = ({ payment }) => {

  const router = useRouter()

  return (
    <div>
        <PaymentNav text='Payments' showIcon={true} />

        {
        payment &&
        <>
            <div className='!mt-8 sm:!mt-14 pb-16 '>
              <div className='w-full flex flex-col items-center justify-center space-y-4 sm:space-y-6'>
                  <h1 className='font-medium text-sm sm:text-base  '>Amount</h1>
                  <h1 className={`text-primaryOne font-semibold text-[32px] sm:text-[40px]  `}>
                    {` ${payment.Amount}`}
                  </h1>
              </div>
              
              <div 
               
                className='mt-[48px] sm:mt-[80px] w-full flex items-center justify-end !mb-4 px-4 sm:px-8 '>
                
                <div  onClick={() => router.push(`/dashboard/payments/edit/${payment.Id}`)}  
                  className='flex space-x-1 justify-end items-center cursor-pointer !w-fit'>
                  <Icon 
                    icon="clarity:note-edit-solid"
                    className='!text-xl !text-mainBlack '
                    />
                    <h3 className='text-sm text-mainBlack'>Edit</h3>
                </div>
              </div>



              <div className='w-full px-4 sm:px-8 py-6 flex flex-col space-y-8 bg-secondaryOne dark:bg-darkOne '>
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

              <div className='w-full px-4 sm:px-8 flex flex-col items-center justify-center space-y-4 !mt-12 sm:space-y-6'>
                  <h1 className='font-medium text-sm sm:text-base  '>Payment Link</h1>
                  <h3 className=' text-sm sm:text-[18px] text-primaryOne font-semibold w-full flex-wrap !text-center leading-7 '>
                    {` ${payment.Link.toString()}`}
                  </h3>
                  <Button text='Copy Link' handleSubmit={() => {}} />
              </div>
            </div>
        </>
      }
    </div>
  )
}

export default Details