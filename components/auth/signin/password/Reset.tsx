import React from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../../formik/Input';
import Button from '../../../common/Button';
import { useRouter } from 'next/router'


const resetSchema = yup.object().shape({
    email: yup.string().email('Email address is incorrect').required('This field is required.'),
})

interface resetValues {
    email: string;
  }

const Reset: React.FC = () => {

    const router = useRouter()

    const initialValues: resetValues = {
        email: '',
    }

  return (
    <div className='mt-5 w-full h-full space-y-10'>
        <h1 className='text-xl xl:text-[22px] text-left font-[700] text-primaryOne tracking-wide '>Reset Password</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={resetSchema}
        onSubmit={(values, {resetForm, setSubmitting}) => {
            console.log('submitted')
            resetForm()
            setSubmitting(false)
            router.push('/auth/signin/password/otp')
        }}
    >
        {
            ({ errors, touched, handleSubmit, values, handleChange, isSubmitting }) => (
                <Form className="w-full space-y-7 pb-10">
        
                    <Input
                         label='Email Address'
                         name='email'
                         type="email"
                         value={values.email}
                         handleChange={handleChange}
                         placeholder='Email Address'
                         errors={errors.email}
                         touched={touched.email}
                     />


                     {/* Bttons */}
                     <div className='w-full h-full space-y-5 !mt-[56px]'>
                        <Button text="Reset Password" handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
                     </div>

                </Form>
            )
        }
    </Formik>
    </div>
  )
}

export default Reset