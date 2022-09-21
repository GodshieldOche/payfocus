import React from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../formik/Input';
import Button from '../../common/Button';
import TextButton from '../../common/TextButton';


const signupSchema = yup.object().shape({
    fullName: yup.string().required('This field is required.'),
    email: yup.string().email('Email address is incorrect').required('This field is required.'),
    phoneNumber: yup.string().required('This field is required.'),
    password: yup.string().min(8).required('This field is required.'),
})

interface signupValues {
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
  }
  

const SignupForm = () => {


    const initialValues: signupValues = {
        fullName:'',
        email: '',
        password: '',
        phoneNumber: ''
    }


  return (
    <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={() => {
            console.log('submitted')
        }}
    >
        {
            ({ errors, touched, handleSubmit, values, handleChange }) => (
                <Form className="w-full space-y-7 pb-10">
                    <Input
                         label='Full Name'
                         name='fullName'
                         type="text"
                         value={values.fullName}
                         handleChange={handleChange}
                         placeholder='Full Name'
                         errors={errors.fullName}
                         touched={touched.fullName}
                     />

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
                         label='Phone Number'
                         name='phoneNumber'
                         type="tel"
                         value={values.phoneNumber}
                         handleChange={handleChange}
                         placeholder='Phone Number'
                         errors={errors.phoneNumber}
                         touched={touched.phoneNumber}
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


                     {/* Bttons */}
                     <div className='w-full h-full space-y-5 '>
                        <Button text="Create Account" />
                        <TextButton text="Sign In"  />
                     </div>

                </Form>
            )
        }
    </Formik>
  )
}

export default SignupForm