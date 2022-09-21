import type { NextPage } from 'next'
import SignIn from '../../../components/auth/signin/SignIn'
import AuthLayout from '../../../components/layout/AuthLayout'

const signinPage: NextPage = () => {
  return (
    <AuthLayout title='Sign In to Your Account'>
      <SignIn />
    </AuthLayout>
  )
}

export default signinPage
