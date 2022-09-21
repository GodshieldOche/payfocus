import type { NextPage } from 'next'
import Reset from '../../../../components/auth/signin/password/Reset'
import AuthLayout from '../../../../components/layout/AuthLayout'

const PasswordResetPage: NextPage = () => {
  return (
    <AuthLayout title='Reset Password'>
      <Reset />
    </AuthLayout>
  )
}

export default PasswordResetPage
