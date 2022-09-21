import type { NextPage } from 'next'
import Head from 'next/head'
import SignUp from '../../../components/auth/signup/SignUp'
import AuthLayout from '../../../components/layout/AuthLayout'

const SignupPage: NextPage = () => {
  return (
    <AuthLayout title='Create Your Account'>
      <SignUp />
    </AuthLayout>
  )
}

export default SignupPage
