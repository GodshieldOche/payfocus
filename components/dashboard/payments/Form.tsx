import React, { useState, useEffect } from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import { Payment } from '../../../typeDefs'
import BackNav from '../../common/BackNav'
import Input from '../../formik/Input';
import SelectInput from '../../formik/SelectInput';
import Button from '../../common/Button';

const currencies = [
    {
        "value": "566",
        "name": "NGN",
    },
    {
        "value": "840",
        "name": "USD",
    },
    {
        "value": "724",
        "name": "EUR",
    },
    {
        "value": "826",
        "name": "GBP",
    }
]


const paymentSchema = yup.object().shape({
    amount: yup.string(),
    title: yup.string(),
    redirect: yup.string(),
})

interface paymentValues {
    amount: any;
    title: string;
    redirect?: string;
}

interface Props {
    type: string,
    payment?: Payment
}


const PayForm: React.FC<Props> = ({type, payment}) => {

    const [currency, setCurrency] = useState('Please Select')
    const [currencyId, setCurrencyId] = useState('')

    const initialValues: paymentValues = {
        amount: '',
        title: '',
        redirect: ''
    }


    useEffect(() => {
        if(type === 'Edit Payment') {
            const currency = currencies.find((currency) => currency.value === payment?.Currency)
            let amount = parseInt(payment?.Amount!.slice(1, 100).split(',').join('')!)
            initialValues.amount = amount!
            initialValues.title = payment?.Title!
            initialValues.redirect = payment?.Redirect || ''
            setCurrency(currency?.name!)
            setCurrencyId(currency?.value!)
        }
        
    }, [payment])


  return (
    <div>
      <BackNav text={type} />
      <div className='px-4 sm:px-[43px] lg:px-6 !mt-8 sm:!mt-14'>
      <Formik
            initialValues={initialValues}
            validationSchema={paymentSchema}
            onSubmit={(data, {resetForm, setSubmitting}) => {
                
                console.log(data)
                resetForm()
                setSubmitting(false)
                
            }}
        >
            {
                ({ errors, touched, handleSubmit, values, handleChange, isSubmitting }) => (
                    <Form autoComplete='off' className="w-full space-y-7 pb-10">

                        <Input
                            label='Title'
                            name='title'
                            type="text"
                            value={values.title!}
                            handleChange={handleChange}
                            placeholder='Title'
                            errors={errors.title}
                            touched={touched.title}
                        />

                        <SelectInput 
                            label='Select Transfer Type' 
                            options={[{name:'Please Select', value:'Please Select'}, ...currencies]} 
                            value={currency}
                            handleChange={setCurrency}
                            setValue={setCurrencyId}
                        />

                        <Input
                            label='Enter Amount'
                            name='amount'
                            type="number"
                            value={values.amount}
                            handleChange={handleChange}
                            placeholder='Enter Amount'
                            errors={errors.amount}
                            touched={touched.amount}
                        />

                        <Input
                            label='Redirect Link'
                            name='redirect'
                            type="text"
                            value={values.redirect!}
                            handleChange={handleChange}
                            placeholder='Redirect Link'
                            errors={errors.redirect}
                            touched={touched.redirect}
                        />

                        {/* Bttons */}
                        <div className='w-full h-full space-y-5 !mt-[56px]'>
                            <Button text={type} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
                        </div>

                    </Form>
                )
            }
            </Formik>
      </div>
    </div>
  )
}

export default PayForm
