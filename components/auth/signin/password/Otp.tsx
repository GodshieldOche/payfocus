import React from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../../formik/Input';
import Button from '../../../common/Button';


const otpSchema = yup.object().shape({
    otp: yup.string().required('This field is required.'),
})

interface otpValues {
    otp: string;
  }


const Otp = () => {

    const initialValues: otpValues = {
        otp: '',
    }

    
  return (
    <div className='mt-5 w-full h-full space-y-10'>
        <h1 className='text-xl xl:text-[22px] text-left font-[700] text-primaryOne tracking-wide '>Enter OTP</h1>
            <Formik
            initialValues={initialValues}
            validationSchema={otpSchema}
            onSubmit={(values, {resetForm, setSubmitting}) => {
                console.log('submitted')
                resetForm()
                setSubmitting(false)
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


                        {/* Bttons */}
                        <div className='w-full h-full space-y-5 !mt-[56px]'>
                            <Button text="Change Password" handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
                        </div>

                    </Form>
                )
            }
            </Formik>
    </div>
  )
}

export default Otp