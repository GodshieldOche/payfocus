import React from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../../formik/Input';
import Button from '../../../common/Button';
import Select from '../../../formik/Select';


const walletSchema = yup.object().shape({
    wallet: yup.string().required('This field is required.'),
    amount: yup.string().required('This field is required.'),
})

interface walletValues {
    wallet: string;
    amount: string;
}

const Body = () => {

    const initialValues: walletValues = {
        wallet: '',
        amount: ''
    }

  return (
    <div className='px-4 sm:px-[43px] lg:px-6 !mt-8 sm:!mt-14'>
         <Formik
            initialValues={initialValues}
            validationSchema={walletSchema}
            onSubmit={(data, {resetForm, setSubmitting}) => {
                
            }}
        >
            {
                ({ errors, touched, handleSubmit, values, handleChange, isSubmitting }) => (
                    <Form className="w-full space-y-7 pb-10">

                        <Select
                            label='Select Wallet to fund'
                            name='wallet'
                            value={values.wallet}
                            handleChange={handleChange}
                            errors={errors.wallet}
                            touched={touched.wallet}
                            options={['Select Wallet', 'USD', 'EUR', 'GPB', 'NGN']}
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
                            <Button text="Fund Wallet" handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
                        </div>

                    </Form>
                )
            }
            </Formik>
      
    </div>
  )
}

export default Body
