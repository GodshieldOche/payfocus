import type { NextPage } from 'next'
import New from '../../../../components/auth/signin/password/New'
import Otp from '../../../../components/auth/signin/password/Otp'
import AuthLayout from '../../../../components/layout/AuthLayout'

const OtpPage: NextPage = () => {
  return (
    <AuthLayout title='Enter OTP'>
      <Otp />
    </AuthLayout>
  )
}

export default OtpPage
