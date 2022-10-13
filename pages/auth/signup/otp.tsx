import type { NextPage } from "next";
import Otp from "../../../components/auth/signup/Otp";
import AuthLayout from "../../../components/layout/AuthLayout";

const SignupPage: NextPage = () => {
  return (
    <AuthLayout title="Create Your Account">
      <Otp />
    </AuthLayout>
  );
};

export default SignupPage;
