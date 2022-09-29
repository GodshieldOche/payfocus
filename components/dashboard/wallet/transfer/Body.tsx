import React, { useState, useEffect } from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../../formik/Input';
import Button from '../../../common/Button';
import Select from '../../../formik/Select';
import { options } from '../swap/Body';
import { balance } from '../../../../pages/dashboard/wallet';
import { Banks, TransferProp } from './Transfer';


const transferSchema = yup.object().shape({
    type: yup.string().required('This field is required.'),
    wallet: yup.string().required('This field is required.'),
    amount: yup.string().required('This field is required.'),
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
    accountName?: string;
}

const Body: React.FC<TransferProp> = ({balances, banks}) => {

    const [options, setOptions] = useState<options>([])
    const [bankOptions, setBankOptions] = useState<options>([])

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
    }, [balances, banks])

    const initialValues: transferValues = {
        type: '',
        wallet: '',
        amount: '',
        narration: '',
        recepient: '',
        accountName: '',
        bank: '',
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

                        {
                            values.type === "Bank Account" 
                            &&
                                <>
                                    <Input
                                        label='Enter Account Number'
                                        name='accountNumber'
                                        type="text"
                                        value={values.accountName!}
                                        handleChange={handleChange}
                                        placeholder='Account Number'
                                        errors={errors.accountName}
                                        touched={touched.accountName}
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
                                <Input
                                    label='Find Recepient by Email, Phone or Name'
                                    name='recepient'
                                    type="text"
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
