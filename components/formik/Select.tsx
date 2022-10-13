import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { options } from "../dashboard/wallet/swap/Body";

interface Props {
  label: string;
  name: string;
  value: string;
  handleChange: any;
  errors: any;
  touched: any;
  options: options;
}

const Select: React.FC<Props> = ({
  label,
  name,
  errors,
  touched,
  value,
  options,
  handleChange,
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="space-y-2">
      <label htmlFor={name} className=" ">
        <h3
          className={`${
            active ? "text-primaryOne dark:text-gray-300" : "text-mainBlack"
          }`}
        >
          {label}
        </h3>
      </label>
      <div className="w-full h-full relative">
        <Field
          id={name}
          name={name}
          className={`input  w-full ${
            active ? "!text-primaryOne dark:!text-gray-300" : "text-mainBlack"
          } `}
          as="select"
          value={value}
          onChange={handleChange}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        >
          {options.map((option, index) => (
            <option className="!space-y-2" key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </Field>
        <div className="absolute h-full top-0 bottom-0 my-auto right-3 flex flex-col justify-center">
          <TiArrowSortedDown className="text-mainBlack !font-medium !text-base" />
        </div>
      </div>

      <ErrorMessage
        className="text-xs font-medium !text-red-400"
        name={name}
        component="div"
      />
    </div>
  );
};

export default Select;
