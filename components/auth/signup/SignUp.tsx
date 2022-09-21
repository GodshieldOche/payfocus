import React from 'react'
import SignupForm from './Form'



const SignUp: React.FC = () => {
  return (
    <div className='mt-5 w-full h-full space-y-10'>
        <h1 className='text-xl xl:text-[22px] text-left font-[700] text-primaryOne tracking-wide '>Sign Up to Create Account</h1>
        <SignupForm />
    </div>
  )
}

export default SignUp