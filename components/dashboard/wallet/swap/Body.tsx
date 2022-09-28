import React from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../../formik/Input';
import Button from '../../../common/Button';
import Select from '../../../formik/Select';


const fundSchema = yup.object().shape({
    source: yup.string().required('This field is required.'),
    target: yup.string().required('This field is required.'),
    amount: yup.string().required('This field is required.'),
})

interface fundValues {
    source: string;
    target: string;
    amount: string;
}

const Body = () => {

    const initialValues: fundValues = {
        source: '',
        target: '',
        amount: ''
    }


  return (
    <div className='px-4 sm:px-[43px] lg:px-6 !mt-8 sm:!mt-14'>
       <Formik
            initialValues={initialValues}
            validationSchema={fundSchema}
            onSubmit={(data, {resetForm, setSubmitting}) => {
                
            }}
        >
            {
                ({ errors, touched, handleSubmit, values, handleChange, isSubmitting }) => (
                    <Form className="w-full space-y-7 pb-10">

                        <Select
                            label='Select Source Wallet'
                            name='source'
                            value={values.source}
                            handleChange={handleChange}
                            errors={errors.source}
                            touched={touched.source}
                            options={['Select Source Wallet', 'USD', 'EUR', 'GPB', 'NGN']}
                         />

                        <Select
                            label='Select Target wallet'
                            name='target'
                            value={values.target}
                            handleChange={handleChange}
                            errors={errors.target}
                            touched={touched.target}
                            options={['Select Target Wallet', 'USD', 'EUR', 'GPB', 'NGN']}
                         />
            
                        <Input
                            label='Amount'
                            name='amount'
                            type="text"
                            value={values.amount}
                            handleChange={handleChange}
                            placeholder='Enter Amount'
                            errors={errors.amount}
                            touched={touched.amount}
                        />

                        {/* Bttons */}
                        <div className='w-full h-full space-y-5 !mt-[56px]'>
                            <Button text="Swap Now" handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
                        </div>

                    </Form>
                )
            }
            </Formik>
    </div>
  )
}

export default Body
