import type { NextPage } from 'next'
import SignIn from '../../../../components/auth/signin/SignIn'
import AuthLayout from '../../../../components/layout/AuthLayout'

const NewPasswordPage: NextPage = () => {
  return (
    <AuthLayout title='Change Password'>
      <SignIn />
    </AuthLayout>
  )
}

export default NewPasswordPage
