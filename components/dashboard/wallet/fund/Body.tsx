import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "../../../formik/Input";
import Button from "../../../common/Button";
import Select from "../../../formik/Select";
import { BalancesProp } from "../swap/Swap";
import { options } from "../swap/Body";
import { getSession } from "../../../../redux/features/session";
import { useDispatch } from "react-redux";
import { postFund } from "../../../../redux/features/fund";
import { balance } from "../../../../typeDefs";
import SelectInput from "../../../formik/SelectInput";

const walletSchema = yup.object().shape({
  amount: yup.string(),
});

interface walletValues {
  amount: string;
}

const Body: React.FC<BalancesProp> = ({ balances }) => {
  const [options, setOptions] = useState<options>([]);
  const [wallet, setWallet] = useState("Select Wallet");
  const [walletId, setWalletId] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setOptions((prev) =>
      balances.map((item: balance) => {
        return {
          name: item.balance,
          value: item.id,
        };
      })
    );
  }, [balances]);

  const initialValues: walletValues = {
    amount: "",
  };

  return (
    <div className="px-4 sm:px-[43px] lg:px-6 !mt-8 sm:!mt-14">
      <Formik
        initialValues={initialValues}
        validationSchema={walletSchema}
        onSubmit={(data, { resetForm, setSubmitting }) => {
          const body = {
            src: walletId,
            amount: data.amount,
          };

          dispatch(getSession()).then((res: any) => {
            dispatch(postFund({ body, token: res?.payload?.token })).then(
              (res: any) => {
                // if(res.payload?.status === 'failed' || res.error) {
                //     dispatch(setModalData({
                //         ...error,
                //         text: res?.payload?.message || 'Something went wrong'
                //     }))
                //     dispatch(setModal(true))
                //     setSubmitting(false)
                //     return
                // }

                // dispatch(setModalData(success))
                // dispatch(setModal(true))
                console.log(res);
                open(res.payload.link);
                resetForm();
                setSubmitting(false);
              }
            );
          });
        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          values,
          handleChange,
          isSubmitting,
        }) => (
          <Form className="w-full space-y-7 pb-10">
            <SelectInput
              label="Select Wallet to debit"
              options={[...options]}
              value={wallet}
              handleChange={setWallet}
              setValue={setWalletId}
            />

            <Input
              label="Amount"
              name="amount"
              type="number"
              value={values.amount}
              handleChange={handleChange}
              placeholder="Enter Amount"
              errors={errors.amount}
              touched={touched.amount}
            />

            {/* Bttons */}
            <div className="w-full h-full space-y-5 !mt-[56px]">
              <Button
                text="Fund Wallet"
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Body;
