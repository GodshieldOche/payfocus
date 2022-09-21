import React from 'react'
import SignInForm from './SignInForm'

const SignIn: React.FC = () => {
  return (
    <div className='mt-5 w-full h-full space-y-10'>
        <h1 className='text-xl xl:text-[22px] text-left font-[700] text-primaryOne tracking-wide '>Sign In to Get Access</h1>
        <SignInForm />
    </div>
  )
}

export default SignIn