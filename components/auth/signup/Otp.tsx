import React from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../formik/Input';
import Button from '../../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { resendOtp, verifyAccount } from '../../../redux/features/register';
import { setModal, setModalData } from '../../../redux/features/modal';
import { useRouter } from 'next/router';


const otpSchema = yup.object().shape({
    otp: yup.string().required('This field is required.'),
})

interface otpValues {
    otp: string;
  }


const Otp = () => {

    const dispatch = useDispatch()
    const router = useRouter()
  

    const userData = useSelector((state :any)  => state.register.data)

    // console.log(userData.data.token)

    const initialValues: otpValues = {
        otp: '',
    }

    const error = {
        title: 'Register Unsuccessful',
        type: 'error',
        text: 'Something went wrong',
        buttonText: 'OK',
        func: () => {dispatch(setModal(false))}
    }


    const success = {
        title: 'Create Account',
        type: 'success',
        text: '',
        buttonText: 'Proceed',
        func: ''
    }

    const resendOTP = async () => {
        dispatch(resendOtp({email: userData?.data?.email || null, token: userData?.data?.token || '' })).then((res: any) => {
            if(res.error || res.payload.status === 'failed') {
                dispatch(setModalData({
                    ...error,
                    text: res.payload.message || 'Unauthorized'
                }))
                dispatch(setModal(true))
                return
            }

            dispatch(setModalData({
                ...success,
                text: res.payload.message,
                func: () => {
                    dispatch(setModal(false))
                    // router.push('/auth/signin')
                }
            }))
            dispatch(setModal(true))
            
        })
    }

    
  return (
    <div className='mt-5 w-full h-full space-y-10'>
        <h1 className='text-xl xl:text-[22px] text-left font-[700] text-primaryOne tracking-wide '>Enter OTP </h1>
            <Formik
            initialValues={initialValues}
            validationSchema={otpSchema}
            onSubmit={(data, {resetForm, setSubmitting}) => {
                dispatch(verifyAccount({otp: Number(data.otp), token: userData?.data?.token || '' })).then((res: any) => {
                    console.log(userData?.data?.token)
                    console.log(res)
                    if(res.error || res.payload.status === 'failed') {
                        dispatch(setModalData({
                            ...error,
                            text: res.payload.message || 'Unauthorized'
                        }))
                        dispatch(setModal(true))
                        setSubmitting(false)
                        // dispatch(reset())
                        return
                    }


                    dispatch(setModalData({
                        ...success,
                        text: 'Account Verified',
                        func: () => {
                            dispatch(setModal(false))
                            // router.push('/auth/signin')
                        }
                    }))
                    dispatch(setModal(true))
                    resetForm()
                    setSubmitting(false)
                    
                })
            }}
        >
            {
                ({ errors, touched, handleSubmit, values, handleChange, isSubmitting }) => (
                    <Form className="w-full space-y-7 pb-10">
            
                        <Input
                            label='Enter OTP'
                            name='otp'
                            type="code"
                            value={values.otp}
                            handleChange={handleChange}
                            placeholder='Enter OTP'
                            errors={errors.otp}
                            touched={touched.otp}
                        />
                        <div className='w-full flex items-center justify-end !mt-3'>
                            <h3 
                            className='text-right cursor-pointer'
                            onClick={resendOTP}
                            >
                                Resend OTP
                            </h3>
                        </div>


                        {/* Bttons */}
                        <div className='w-full h-full space-y-5 !mt-[56px]'>
                            <Button text="Verify Account" handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
                        </div>

                    </Form>
                )
            }
            </Formik>
    </div>
  )
}

export default Otp