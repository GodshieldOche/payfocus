import Image from "next/image";
import React from "react";
import Button from "../../common/Button";
import Toggle from "../../common/Toggle";
import { User } from "../../layout/RightNav";

interface Props {
  currentUser: User;
}

const Header: React.FC<Props> = ({ currentUser }) => {
  return (
    <div
      className="relative w-full px-4 sm:px-[43px] pt-[24px]  pb-10
     bg-gradient-to-b from-[#133EA0] to-[#001030] dark:from-[#001030] dark:to-[#133EA0]  "
    >
      <div className=" flex flex-col items-center w-full max-w-[150px] sm:max-w-[200px] mx-auto space-y-6 xl:space-y-7">
        <h1 className="text-light font-[600] text-base lg:hidden ">Settings</h1>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <div
            // onClick={handleClick}
            className="relative w-[104px] h-[104px] lg:w-[80px] lg:h-[80px] xl:w-[96px] xl:h-[96px] border-2 border-primaryOne rounded-full"
          >
            <Image
              src={currentUser.logo}
              layout="fill"
              objectFit="cover"
              className="w-full h-full rounded-full"
              objectPosition={0}
              priority
            />
          </div>
          <h1 className=" lg:!text-lg xl:!text-xl text-light !font-semibold ">
            {currentUser.fullName}
          </h1>
        </div>

        <button
          className={`
        bg-white border-0 text-primaryOne
          w-full h-fit text-sm  font-medium  py-[12px] rounded-[7px] `}
          type="button"
        >
          Verify Account
        </button>

        <div className="hidden lg:block">
          <Toggle />
        </div>
      </div>
      <div className="absolute lg:hidden top-5 right-4 sm:right-[43px] ">
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
