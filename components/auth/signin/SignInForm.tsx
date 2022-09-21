import React from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../formik/Input';
import Button from '../../common/Button';
import TextButton from '../../common/TextButton';
import { useRouter } from 'next/router'

const signinSchema = yup.object().shape({
    email: yup.string().email('Email address is incorrect').required('This field is required.'),
    password: yup.string().min(8).required('This field is required.'),
})

interface siginValues {
    email: string;
    password: string;
  }
  

const SignInForm: React.FC = () => {

    const router = useRouter()

    const initialValues: siginValues = {
        email: '',
        password: '',
    }


  return (
    <Formik
        initialValues={initialValues}
        validationSchema={signinSchema}
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
                         label='Email Address'
                         name='email'
                         type="email"
                         value={values.email}
                         handleChange={handleChange}
                         placeholder='Email Address'
                         errors={errors.email}
                         touched={touched.email}
                     />

                    <Input
                         label='Password'
                         name='password'
                         type="password"
                         value={values.password}
                         handleChange={handleChange}
                         placeholder='Password'
                         errors={errors.password}
                         touched={touched.password}
                     />

                     <h3 
                     className='text-right !mt-3 cursor-pointer'
                     onClick={() => router.push('/auth/signin/password/reset')}
                     >
                        Reset Password
                     </h3>


                     {/* Bttons */}
                     <div className='w-full h-full space-y-5 !mt-[56px]'>
                        <Button text="Sign In" handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
                        <TextButton text="Create Account" route="signup"  />
                     </div>

                </Form>
            )
        }
    </Formik>
  )
}

export default SignInForm