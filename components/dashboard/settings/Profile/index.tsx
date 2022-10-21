import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import BackNav from "../../../common/BackNav";
import { User } from "../../../layout/RightNav";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Button from "../../../common/Button";
import Input from "../../../formik/Input";

const profileSchema = yup.object().shape({
  name: yup.string().required("This field is required."),
  email: yup
    .string()
    .email("Email address is incorrect")
    .required("This field is required."),
  phone: yup.string().required("This field is required."),
});

interface profileValues {
  name: string;
  email: string;
  phone: string;
}

interface Props {
  currentUser: User;
}

const Profile: React.FC<Props> = ({ currentUser }) => {
  const initialValues: profileValues = {
    name: currentUser.fullName,
    email: currentUser.email,
    phone: currentUser.phone,
  };
  return (
    <div>
      <BackNav text="Profile" />
      <div className="px-4 sm:px-[43px] lg:px-6 !mt-8 sm:!mt-14">
        <div className="w-full flex flex-col items-center space-y-6 mb-9 ">
          <div className="relative w-[104px] h-[104px] lg:w-[80px] lg:h-[80px] xl:w-[96px] xl:h-[96px] border-2 border-primaryOne rounded-full">
            <Image
              src={currentUser.logo}
              layout="fill"
              objectFit="cover"
              className="w-full h-full rounded-full"
              objectPosition={0}
              priority
            />
          </div>
          <div className="flex space-x-1 justify-end items-center cursor-pointer !w-fit">
            <Icon
              icon="clarity:note-edit-solid"
              className="!text-2xl !text-primaryOne "
            />
            <h3 className="text-sm text-primaryOne">Edit</h3>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={profileSchema}
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
            <Form autoComplete="false" className="w-full space-y-7 pb-10">
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
                label="Email Address"
                name="email"
                type="email"
                value={values.email}
                handleChange={handleChange}
                placeholder="Email Address"
                errors={errors.email}
                touched={touched.email}
              />

              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={values.phone}
                handleChange={handleChange}
                placeholder="Phone Number"
                errors={errors.phone}
                touched={touched.phone}
              />

              {/* Bttons */}
              <div className="w-full h-full space-y-5 !mt-[56px]">
                <Button
                  text="Update profile"
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

export default Profile;
