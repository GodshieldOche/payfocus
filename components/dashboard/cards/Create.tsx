import React, { useState, useEffect } from "react";
import BackNav from "../../common/BackNav";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "../../formik/Input";
import SelectInput from "../../formik/SelectInput";
import { BalancesProp } from "../wallet/swap/Swap";
import { options } from "../wallet/swap/Body";
import { balance, CardPayment } from "../../../typeDefs";
import Button from "../../common/Button";
import { useDispatch } from "react-redux";
import { getSession } from "../../../redux/features/session";
import { postCreateCard } from "../../../redux/features/card";
import { setModal, setModalData } from "../../../redux/features/modal";
import { useRouter } from "next/router";

const cardSchema = yup.object().shape({
  amount: yup.string(),
  name: yup.string(),
  address: yup.string(),
  pin: yup.string().min(4).max(4).required("This field is required."),
});

interface cardValues {
  amount: string;
  name: string;
  address: string;
  pin: string;
}

const Create: React.FC<BalancesProp> = ({ balances }) => {
  const [options, setOptions] = useState<options>([]);
  const [wallet, setWallet] = useState("Select Wallet");
  const [walletId, setWalletId] = useState("");
  const [provider, setProvider] = useState("Network provider");
  const [providerId, setProviderId] = useState("");

  const initialValues: cardValues = {
    amount: "",
    name: "",
    address: "",
    pin: "",
  };

  const dispatch = useDispatch();
  const router = useRouter();

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

  const error = {
    title: "Operation Unsuccessful",
    type: "error",
    text: "Something went wrong",
    buttonText: "OK",
    func: () => {
      dispatch(setModal(false));
    },
  };

  const success = {
    title: "Card created Successfully",
    type: "success",
    text: "A virtual card have been created inyour name for your transacions",
    buttonText: "Proceed",
    func: () => {
      router.push("/dashboard/cards");
      dispatch(setModal(false));
    },
  };

  return (
    <div>
      <BackNav text="Create Card" />
      <div className="px-4 sm:px-[43px] lg:px-6 !mt-8 sm:!mt-14">
        <Formik
          initialValues={initialValues}
          validationSchema={cardSchema}
          onSubmit={(data, { resetForm, setSubmitting }) => {
            const body: CardPayment = {
              Address: data.address,
              Balance: Number(data.amount),
              Currency: walletId,
              Name: data.name,
              Pin: data.pin,
              Type: providerId,
            };

            dispatch(getSession()).then((res: any) => {
              dispatch(
                postCreateCard({ body, token: res?.payload?.token })
              ).then((res: any) => {
                if (res.payload?.status === "failed" || res.error) {
                  console.log(res);

                  dispatch(
                    setModalData({
                      ...error,
                      text: res?.payload?.message || "Something went wrong",
                    })
                  );
                  dispatch(setModal(true));
                  setSubmitting(false);
                  return;
                }

                dispatch(setModalData(success));
                dispatch(setModal(true));
                resetForm();
                setSubmitting(false);
              });
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
            <Form autoComplete="off" className="w-full space-y-7 pb-10">
              <SelectInput
                label="Select Source Wallet"
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
                placeholder="Amount"
                errors={errors.amount}
                touched={touched.amount}
              />

              <Input
                label="Full Name"
                name="name"
                type="text"
                value={values.name}
                handleChange={handleChange}
                placeholder="Full Name"
                errors={errors.name}
                touched={touched.name}
              />

              <Input
                label="Address"
                name="address"
                type="text"
                value={values.address}
                handleChange={handleChange}
                placeholder="Address"
                errors={errors.address}
                touched={touched.address}
              />

              <Input
                label="Four Digit Card Pin"
                name="pin"
                type="password"
                value={values.pin}
                handleChange={handleChange}
                placeholder="Pin"
                errors={errors.pin}
                touched={touched.pin}
              />

              <SelectInput
                label="Network Provider"
                options={[
                  { name: "Master Card", value: "Master Card" },
                  { name: "Visa", value: "Visa" },
                ]}
                value={provider}
                handleChange={setProvider}
                setValue={setProvider}
              />

              {/* Bttons */}
              <div className="w-full h-full space-y-5 !mt-[56px]">
                <Button
                  text="Create"
                  handleSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Create;
