import React from "react";
import BackNav from "../../../common/BackNav";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "../../../formik/Input";
import Button from "../../../common/Button";

const passwordSchema = yup.object().shape({
  current: yup.string().min(8).required("This field is required."),
  new: yup.string().min(8).required("This field is required."),
});

interface passwordValues {
  current: string;
  new: string;
}

const Password = () => {
  const initialValues: passwordValues = {
    current: "",
    new: "",
  };

  return (
    <div>
      <BackNav text="Reset Password" />
      <div className="px-4 sm:px-[43px] lg:px-6 !mt-8 sm:!mt-14">
        <Formik
          initialValues={initialValues}
          validationSchema={passwordSchema}
          onSubmit={(data, { resetForm, setSubmitting }) => {}}
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
              <Input
                label="Current Password"
                name="current"
                type="password"
                value={values.current}
                handleChange={handleChange}
                placeholder="Current Password"
                errors={errors.current}
                touched={touched.current}
              />

              <Input
                label="New Password"
                name="new"
                type="password"
                value={values.new}
                handleChange={handleChange}
                placeholder="New Password"
                errors={errors.new}
                touched={touched.new}
              />

              {/* Bttons */}
              <div className="w-full h-full space-y-5 !mt-[56px]">
                <Button
                  text="Sign In"
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

export default Password;
