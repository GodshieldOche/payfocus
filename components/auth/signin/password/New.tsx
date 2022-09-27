import React from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../../formik/Input';
import Button from '../../../common/Button';


const newPasswordSchema = yup.object().shape({
  password: yup.string().min(8).required('This field is required.'),
})

interface newPasswordValues {
    password: string;
  }


const New = () => {

  const initialValues: newPasswordValues = {
    password: '',
}

  return (
    <div className='mt-5 w-full h-full space-y-10'>
        <h1 className='text-xl xl:text-[22px] text-left font-[700] text-primaryOne tracking-wide '>Enter New Password</h1>
            <Formik
            initialValues={initialValues}
            validationSchema={newPasswordSchema}
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
                            label='New Password'
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
                            <Button text="Change Password" handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
                        </div>

                    </Form>
                )
            }
            </Formik>
    </div>
  )
}

export default New