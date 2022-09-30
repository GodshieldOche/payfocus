import React, { useState, useEffect } from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../../formik/Input';
import Button from '../../../common/Button';
import Select from '../../../formik/Select';
import { options } from '../swap/Body';
import { Banks, TransferProp } from './Transfer';
import { balance } from '../../../../typeDefs';
import SearchInput from '../../../formik/SearchInput';
import { useSelector } from 'react-redux';


const transferSchema = yup.object().shape({
    type: yup.string().required('This field is required.'),
    wallet: yup.string().required('This field is required.'),
    amount: yup.string().required('This field is required.'),
    currency: yup.string().required('Required.'),
    narration: yup.string(),
    recepient: yup.string().required('This field is required.'),
    accountNumber: yup.string().required('This field is required.'),
    bank: yup.string().required('This field is required.'),
    accountName: yup.string().required('This field is required.'),
})

interface transferValues {
    type: string;
    wallet: string;
    amount: string;
    narration?: string;
    recepient?: string;
    accountNumber?: string;
    bank?: string;
    currency: string
    accountName?: string;
}

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

const Body: React.FC<TransferProp> = ({balances, banks}) => {

    const [options, setOptions] = useState<options>([])
    const [bankOptions, setBankOptions] = useState<options>([])
    const [recepient, setRecepient] = useState('')

    const { person } = useSelector((state : any) => state.modal)

    useEffect(() => {
        setOptions(prev => balances.map((item: balance) => {
            return {
                name: item.balance,
                value: item.id
            }
        }))

        setBankOptions(prev => banks.map((item: Banks) => {
            return {
                name: item.name,
                value: item.id
            }
        }))

        setRecepient(person)
    }, [balances, banks, person])

    const initialValues: transferValues = {
        type: '',
        wallet: '',
        amount: '',
        narration: '',
        recepient: recepient,
        accountName: '',
        bank: '',
        currency: '',
        accountNumber: ''
    }
  return (
    <div className='px-4 sm:px-[43px] lg:px-6 !mt-8 sm:!mt-14'>
       <Formik
            initialValues={initialValues}
            validationSchema={transferSchema}
            onSubmit={(data, {resetForm, setSubmitting}) => {
                
            }}
        >
            {
                ({ errors, touched, handleSubmit, values, handleChange, isSubmitting }) => (
                    <Form className="w-full space-y-7 pb-10">

                        <Select
                            label='Select Transfer Type'
                            name='type'
                            value={values.type}
                            handleChange={handleChange}
                            errors={errors.type}
                            touched={touched.type}
                            options={[
                                {name:'Please Select', value:'Please Select'}, 
                                {name:'Payfocus Account', value: 'Payfocus Account'},
                                {name:'Bank Account', value: 'Bank Account'}
                                ]}
                         />

                        <Select
                            label='Select Wallet to debit'
                            name='wallet'
                            value={values.wallet}
                            handleChange={handleChange}
                            errors={errors.wallet}
                            touched={touched.wallet}
                            options={[{name:'Please Select', value:'Please Select'}, ...options]}
                         />
                        <div className='w-full grid grid-cols-12 gap-2'>
                            <div className='col-span-3 sm:col-span-2'>
                                <Select
                                    label='Currency'
                                    name='currency'
                                    value={values.currency}
                                    handleChange={handleChange}
                                    errors={errors.currency}
                                    touched={touched.currency}
                                    options={currencies}
                                />
                            </div>
                            <div className='col-span-9 sm:col-span-10'>
                                <Input
                                label='Amount'
                                name='amount'
                                type="number"
                                value={values.amount}
                                handleChange={handleChange}
                                placeholder='Enter Amount'
                                errors={errors.amount}
                                touched={touched.amount}
                            />
                            </div>
                        </div>
                       

                        {
                            values.type === "Bank Account" 
                            &&
                                <>
                                    <Input
                                        label='Enter Account Number'
                                        name='accountNumber'
                                        type="number"
                                        value={values.accountNumber!}
                                        handleChange={handleChange}
                                        placeholder='Account Number'
                                        errors={errors.accountNumber}
                                        touched={touched.accountNumber}
                                    /> 
                                     <Select
                                        label='Select Bank Name'
                                        name='bank'
                                        value={values.bank!}
                                        handleChange={handleChange}
                                        errors={errors.bank}
                                        touched={touched.bank}
                                        options={[{ name: 'Bank', value: '0'}, ...bankOptions]}
                                    />   
                                    <Input
                                        label='Account Holder Name'
                                        name='accountName'
                                        type="text"
                                        value={values.accountName!}
                                        handleChange={handleChange}
                                        placeholder='Account Holder Name'
                                        errors={errors.accountName}
                                        touched={touched.accountName}
                                    /> 
                                </>
                          
                        }
                        {

                            values.type === 'Payfocus Account' &&
                            <>
                                <SearchInput
                                    label='Find Recepient by Email, Phone or Name'
                                    name='recepient'
                                    type="search"
                                    value={values.recepient!}
                                    handleChange={handleChange}
                                    placeholder='Find Recepient by Email, Phone or Name'
                                    errors={errors.recepient}
                                    touched={touched.recepient}
                                /> 
                            </>
                        }

                        <Input
                            label='Narration (Optional)'
                            name='narration'
                            type="text"
                            value={values.narration!}
                            handleChange={handleChange}
                            placeholder='Narration'
                            errors={errors.narration}
                            touched={touched.narration}
                        />

                        {/* Bttons */}
                        <div className='w-full h-full space-y-5 !mt-[56px]'>
                            <Button text="Transfer" handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
                        </div>

                    </Form>
                )
            }
            </Formik>
    </div>
  )
}

export default Body
