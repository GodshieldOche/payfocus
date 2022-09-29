import React from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../formik/Input';
import Button from '../../common/Button';
import TextButton from '../../common/TextButton';
import { useDispatch } from 'react-redux';
import { postRegister, reset } from '../../../redux/features/register';
import { setModal, setModalData } from '../../../redux/features/modal';
import { useRouter } from 'next/router';


const signupSchema = yup.object().shape({
    name: yup.string().required('This field is required.'),
    email: yup.string().email('Email address is incorrect').required('This field is required.'),
    phone: yup.string().required('This field is required.'),
    password: yup.string().min(8).required('This field is required.'),
})

interface signupValues {
    name: string;
    email: string;
    password: string;
    phone: string;
  }
  

const SignupForm: React.FC = () => {


    const dispatch = useDispatch()
    const router = useRouter()

    const initialValues: signupValues = {
        name:'',
        email: '',
        password: '',
        phone: ''
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



  return (
    <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={(data, {resetForm, setSubmitting}) => {
            dispatch(postRegister(data)).then((res: any) => {
                if(res.payload?.status === 'failed') {
                    dispatch(setModalData({
                        ...error,
                        text: res?.payload?.message || 'Something went wrong'
                    }))
                    dispatch(setModal(true))
                    setSubmitting(false)
                    dispatch(reset())
                    return
                }

                dispatch(setModalData({
                    ...success,
                    text: 'Enter the otp sent to your email and phone number to verify your account',
                    func: () => {
                        dispatch(setModal(false))
                        router.push('/auth/signup/otp')
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
                         label='Full Name'
                         name='name'
                         type="text"
                         value={values.name}
                         handleChange={handleChange}
                         placeholder='Full Name'
                         errors={errors.name}
                         touched={touched.name}
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
                         name='phone'
                         type="tel"
                         value={values.phone}
                         handleChange={handleChange}
                         placeholder='Phone Number'
                         errors={errors.phone}
                         touched={touched.phone}
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
                     <div className='w-full h-full space-y-5 !mt-[56px]'>
                        <Button text="Create Account" handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
                        <TextButton text="Sign In" route="signin"  />
                     </div>

                </Form>
            )
        }
    </Formik>
  )
}

export default SignupForm