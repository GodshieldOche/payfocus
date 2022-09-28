import React from 'react'
import BackNav from '../../../common/BackNav'
import Body from './Body'

const Swap = () => {
  return (
    <div className='w-full h-full min-h-screen dark:bg-dark'>
      <BackNav text='Currency Exchange' />
      <Body />
    </div>
  )
}

export default Swap
