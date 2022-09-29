import React, { useState, useEffect } from 'react'
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Input from '../../../formik/Input';
import Button from '../../../common/Button';
import Select from '../../../formik/Select';
import { balance } from '../../../../pages/dashboard/wallet';
import { useDispatch } from 'react-redux';
import { postSwap } from '../../../../redux/features/swap';
import { getSession } from '../../../../redux/features/session';
import { reset, setModal, setModalData } from '../../../../redux/features/modal';
import { useRouter } from 'next/router';


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

interface Props {
    balances: balance[]
}

export type options = {name: string, value: string}[]

const Body: React.FC <Props> = ({balances}) => {

    const [options, setOptions] = useState<options>([])

    useEffect(() => {
        setOptions(prev => balances.map((item: balance) => {
            return {
                name: item.balance,
                value: item.id
            }
        }))
    }, [balances])

    const initialValues: fundValues = {
        source: '',
        target: '',
        amount: ''
    }

    const dispatch = useDispatch()
    const router = useRouter()


    const error = {
        title: 'Swap Unsuccessful',
        type: 'error',
        text: 'Something went wrong',
        buttonText: 'OK',
        func: () => {dispatch(setModal(false))}
    }


    const success = {
        title: 'Swap Successful',
        type: 'success',
        text: 'Currency exchange successful, your target wallet has been credited accordingly',
        buttonText: 'Proceed',
        func: () => {
            router.push('/dashboard/wallet/swap')
            dispatch(setModal(false))
        }
    }


  return (
    <div className='px-4 sm:px-[43px] lg:px-6 !mt-8 sm:!mt-14'>
       <Formik
            initialValues={initialValues}
            validationSchema={fundSchema}
            onSubmit={(data, {resetForm, setSubmitting}) => {
                const body = {
                    src: data.source,
                    dst: data.target,
                    amountDst: data.amount
                }

                dispatch(getSession()).then((res:any) => {
                    dispatch(postSwap({body, token: res?.payload?.token}))
                    .then((res: any) => {
                        if(res.payload?.status === 'failed' || res.error) {
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
                    })
                })

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
                            options={[{value: '1', name: 'From'}, ...options]}
                         />

                        <Select
                            label='Select Target wallet'
                            name='target'
                            value={values.target}
                            handleChange={handleChange}
                            errors={errors.target}
                            touched={touched.target}
                            options={[{value: '1', name: 'To'}, ...options]}
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
