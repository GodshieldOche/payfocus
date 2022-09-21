import React from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../formik/Input';
import Button from '../../common/Button';
import TextButton from '../../common/TextButton';

const signupSchema = yup.object().shape({
    email: yup.string().email('Email address is incorrect').required('This field is required.'),
    password: yup.string().min(8).required('This field is required.'),
})

interface signupValues {
    email: string;
    password: string;
  }
  

const SignInForm = () => {

    const initialValues: signupValues = {
        email: '',
        password: '',
    }


  return (
    <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
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

                     <h3 className='text-right !mt-3 cursor-pointer'>Recover Password</h3>


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