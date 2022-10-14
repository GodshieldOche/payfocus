import React, { useEffect, useState } from "react";
import Button from "../../common/Button";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "../../formik/Input";
import SelectInput from "../../formik/SelectInput";
import { balance, Withdraw } from "../../../typeDefs";
import { options } from "../../dashboard/wallet/swap/Body";
import { useDispatch } from "react-redux";
import { getSession } from "../../../redux/features/session";
import { postWithdraw } from "../../../redux/features/card";
import { setModal, setModalData } from "../../../redux/features/modal";

const Schema = yup.object().shape({
  amount: yup.string(),
});

type values = {
  amount: string;
};

interface Props {
  active: string;
  setActive: any;
  balances: balance[];
  balance: number;
  currency: string;
}

const CardModal: React.FC<Props> = ({
  setActive,
  active,
  balances,
  balance,
  currency,
}) => {
  const [options, setOptions] = useState<options>([]);
  const [wallet, setWallet] = useState("Select Wallet");
  const [walletId, setWalletId] = useState("");
  const initialValues: values = {
    amount: "",
  };

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
    title: "Withdrawal Successfully",
    type: "success",
    text: "Your fund has successfuly been withdrawn, chck your wallet to see balance",
    buttonText: "Proceed",
    func: () => {
      dispatch(setModal(false));
    },
  };

  const handleWithdraw = async (
    body: Withdraw,
    resetForm: any,
    setSubmitting: any
  ) => {
    dispatch(getSession()).then((res: any) => {
      dispatch(postWithdraw({ body, token: res?.payload?.token })).then(
        (res: any) => {
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

          console.log(res);
          dispatch(setModalData(success));
          dispatch(setModal(true));
          resetForm();
          setSubmitting(false);
        }
      );
    });
  };

  return (
    <div
      onClick={() => setActive("")}
      className="flex fixed top-0 right-0 left-0 bottom-0 z-50 bg-black/60 w-full h-full overflow-hidden  items-end md:items-center  justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full md:w-[460px] h-fit bg-light dark:bg-dark rounded-t-[20px] md:rounded-[10px] flex flex-col items-center py-[24px] px-[16px] space-y-5 "
      >
        <h1 className="text-lg font-semibold text-primaryOne capitalize">
          {active}
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={Schema}
          onSubmit={(data, { resetForm, setSubmitting }) => {
            if (active === "withdraw") {
              const body: Withdraw = {
                amount: Number(data.amount),
                id: currency,
              };

              handleWithdraw(body, resetForm, setSubmitting);
            }
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
            <Form autoComplete="off" className="w-full space-y-7 pb-20 md:pb-0">
              {active === "fund" && (
                <SelectInput
                  label="Select Source Wallet"
                  options={[...options]}
                  value={wallet}
                  handleChange={setWallet}
                  setValue={setWalletId}
                />
              )}

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

              {active === "withdraw" && (
                <div className="w-full flex items-center justify-start !mt-3">
                  <h3 className="text-left">{`Current Balance: ${
                    currency === "840"
                      ? "USD"
                      : currency === "724"
                      ? "EUR"
                      : currency === "826"
                      ? "GBP"
                      : "NGN"
                  } ${balance.toLocaleString("en-US")}`}</h3>
                </div>
              )}
              {/* Bttons */}
              <Button
                text={active === "withdraw" ? "Proceed" : "Fund"}
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CardModal;
