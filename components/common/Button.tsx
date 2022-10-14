import React from "react";
import ButtonLoader from "./ButtonLoader";

type Props = {
  text: string;
  handleSubmit: () => void;
  isSubmitting?: boolean;
  outline?: boolean;
};

const Button: React.FC<Props> = ({
  text,
  handleSubmit,
  isSubmitting,
  outline,
}) => {
  return (
    <button
      className={`${
        outline
          ? "dark:text-gray-300 text-primaryOne bg-transparent border dark:border-gray-300 border-primaryOne "
          : "bg-primaryOne border-0 text-light"
      } w-full h-fit text-sm  font-medium  py-[12px] rounded-[7px] `}
      type="button"
      onClick={handleSubmit}
    >
      {isSubmitting ? <ButtonLoader /> : text}
    </button>
  );
};

export default Button;
