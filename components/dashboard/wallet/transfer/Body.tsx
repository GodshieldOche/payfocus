import React, { useState, useEffect } from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../../formik/Input';
import Button from '../../../common/Button';
import { options } from '../swap/Body';
import { Banks, TransferProp } from './Transfer';
import { balance, pfTransfer, bankTransfer } from '../../../../typeDefs';
import SearchInput from '../../../formik/SearchInput';
import { useDispatch } from 'react-redux';
import { getSession } from '../../../../redux/features/session';
import { postTransfer } from '../../../../redux/features/transfer';
import { setModal, setModalData } from '../../../../redux/features/modal';
import { useRouter } from 'next/router';
import SelectInput from '../../../formik/SelectInput';

const transferSchema = yup.object().shape({
    amount: yup.string(),
    currency: yup.string(),
    narration: yup.string(),
    accountName: yup.string(),
})

interface transferValues {
    amount: string;
    narration?: string;
    accountNumber?: string;
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
    const [recepientId, setRecepientId] = useState('')
    const [type, setType] = useState('Please Select')
    const [typeId, setTypeId] = useState('')
    const [wallet, setWallet] = useState('Please Select')
    const [walletId, setWalletId] = useState('')
    const [currency, setCurrency] = useState('NGN')
    const [currencyId, setCurrencyId] = useState('NGN')
    const [bank, setBank] = useState('Bank')
    const [bankId, setBankId] = useState('Bank')


    const dispatch = useDispatch()
    const router = useRouter()


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
        amount: '',
        narration: '',
        accountName: '',
        accountNumber: ''
    }

    
    const error = {
        title: 'Transfer Unsuccessful',
        type: 'error',
        text: 'Something went wrong',
        buttonText: 'OK',
        func: () => {dispatch(setModal(false))}
    }


    const success = {
        title: 'Transfer Successful',
        type: 'success',
        text: 'Transfer successful, the recepient has been credited accordingly',
        buttonText: 'Proceed',
        func: () => {
            router.push('/dashboard/wallet/transfer')
            dispatch(setModal(false))
        }
    }


    const handlePfTransfer = (body: pfTransfer | bankTransfer, setSubmitting: any, resetForm: any) => {
        dispatch(getSession()).then((res:any) => {
            dispatch(postTransfer({body, token: res?.payload?.token}))
            .then((res: any) => {
                if(res.payload?.status === 'failed' || res.error) {
                    console.log(res)
                    dispatch(setModalData({
                        ...error,
                        text: res?.payload?.message || 'Something went wrong'
                    }))
                    dispatch(setModal(true))
                    setSubmitting(false)
                    return
                }
                
                dispatch(setModalData(success))
                dispatch(setModal(true))
                resetForm()
                setSubmitting(false)
                console.log(res)
            })
        })
    }


  return (
    <div className='px-4 sm:px-[43px] lg:px-6 !mt-8 sm:!mt-14'>
       <Formik
            initialValues={initialValues}
            validationSchema={transferSchema}
            onSubmit={(data, {resetForm, setSubmitting}) => {
                const pfTransferBody: pfTransfer = {
                    amountDst: Number(data.amount),
                    channel: typeId,
                    dst: currencyId,
                    inData: recepientId,
                    src: walletId,
                    narration: data.narration
                }
                const bankTransfer: bankTransfer = {
                    amountDst: Number(data.amount),
                    channel: 'Bank',
                    dst: "566",
                    inData: {bankId: bankId, actNo: data.accountNumber!},
                    src: walletId,
                    narration: data.narration
                }

                if (type === 'Payfocus Account') {
                    handlePfTransfer(pfTransferBody, setSubmitting, resetForm)
                }   

                if (type === 'Bank Account') {
                    handlePfTransfer(bankTransfer, setSubmitting, resetForm)
                }   

                console.log(pfTransferBody, bankTransfer)
                
            }}
        >
            {
                ({ errors, touched, handleSubmit, values, handleChange, isSubmitting }) => (
                    <Form autoComplete='off' className="w-full space-y-7 pb-10">


                        <SelectInput 
                            label='Select Transfer Type' 
                            options={[{name:'Payfocus Account', value: 'Payfocus Account'},{name:'Bank Account', value: 'Bank Account'}]} 
                            value={type}
                            handleChange={setType}
                            setValue={setTypeId}
                        />

                         <SelectInput 
                            label='Select Wallet to debit' 
                            options={[...options]}
                            value={wallet}
                            handleChange={setWallet}
                            setValue={setWalletId}
                        />

                        <div className='w-full grid grid-cols-12 gap-2'>
                            <div className='col-span-3 sm:col-span-2'>
                                <SelectInput 
                                    label='Currency' 
                                    options={currencies}
                                    value={currency}
                                    handleChange={setCurrency}
                                    setValue={setCurrencyId}
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
                            type === "Bank Account" 
                            &&
                                <>
                                    <Input
                                        label='Enter Account Number'
                                        name='accountNumber'
                                        type="text"
                                        value={values.accountNumber!}
                                        handleChange={handleChange}
                                        placeholder='Account Number'
                                        errors={errors.accountNumber}
                                        touched={touched.accountNumber}
                                    /> 
                                    <SelectInput 
                                        label='Select Bank Name' 
                                        options={[...bankOptions]}
                                        value={bank}
                                        handleChange={setBank}
                                        setValue={setBankId}
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

                            type === 'Payfocus Account' &&
                            <>
                                <SearchInput
                                    label='Find Recepient by Email, Phone or Name'
                                    name='recepient'
                                    type="search"
                                    value={recepient}
                                    handleChange={setRecepient}
                                    setId={setRecepientId}
                                    placeholder='Find Recepient by Email, Phone or Name'
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
