import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "../../../formik/Input";
import Button from "../../../common/Button";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../../redux/features/auth";
import {
  reset,
  setModal,
  setModalData,
} from "../../../../redux/features/modal";

const resetSchema = yup.object().shape({
  email: yup.string().required("This field is required."),
});

interface resetValues {
  email: string;
}

const Reset: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const initialValues: resetValues = {
    email: "",
  };

  const success = {
    title: "Reset Password",
    type: "success",
    text: "",
    buttonText: "Proceed",
    func: "",
  };

  return (
    <div className="mt-5 w-full h-full space-y-10">
      <h1 className="text-xl xl:text-[22px] text-left font-[700] text-primaryOne tracking-wide ">
        Reset Password
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={resetSchema}
        onSubmit={(data, { resetForm, setSubmitting }) => {
          dispatch(resetPassword(data)).then((res: any) => {
            dispatch(
              setModalData({
                ...success,
                text: res.payload.message,
                func: () => {
                  dispatch(setModal(false));
                  dispatch(reset());
                  router.push("/auth/signin/password/otp/?det=" + data.email);
                },
              })
            );
            dispatch(setModal(true));
            resetForm();
            setSubmitting(false);
            console.log(res);
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
            <Input
              label="Email Address or Phone Number"
              name="email"
              type="email"
              value={values.email}
              handleChange={handleChange}
              placeholder=""
              errors={errors.email}
              touched={touched.email}
            />

            {/* Bttons */}
            <div className="w-full h-full space-y-5 !mt-[56px]">
              <Button
                text="Reset Password"
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

export default Reset;
