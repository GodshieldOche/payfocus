import React from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../formik/Input';
import Button from '../../common/Button';
import TextButton from '../../common/TextButton';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { postSignIn } from '../../../redux/features/auth';
import { setModal, setModalData } from '../../../redux/features/modal';

const signinSchema = yup.object().shape({
    email: yup.string().email('Email address is incorrect').required('This field is required.'),
    password: yup.string().required('This field is required.'),
})

interface siginValues {
    email: string;
    password: string;
  }
  


const SignInForm: React.FC = () => {

    const initialValues: siginValues = {
        email: '',
        password: '',
    }


    const dispatch = useDispatch()
    const router = useRouter()

    const error = {
        title: 'Login Unsuccessful',
        type: 'error',
        text: 'Invalid email or password',
        buttonText: 'OK',
        func: () => {dispatch(setModal(false))}
    }

   

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={signinSchema}
        onSubmit={(data, {resetForm, setSubmitting}) => {
            dispatch(postSignIn(data)).then((res: any) => {
                if(res.error) {
                    dispatch(setModalData(error))
                    dispatch(setModal(true))
                    setSubmitting(false)
                    return
                }
                
                setTimeout(() => {
                    resetForm()
                    setSubmitting(false)
                    router.push('/')
                }, 2000)
            })
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
                    <div className='w-full flex items-center justify-end !mt-3'>
                        <h3 
                        className='text-right cursor-pointer'
                        onClick={() => router.push('/auth/signin/password/reset')}
                        >
                            Reset Password
                        </h3>
                    </div>
                   
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