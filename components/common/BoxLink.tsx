import React from "react";
import { Icon } from "@iconify/react";
import { RiArrowRightSFill } from "react-icons/ri";
import { useRouter } from "next/router";

interface Props {
  title: string;
  text: string;
  icon: string;
  link: string;
}

const BoxLink: React.FC<Props> = ({ title, text, icon, link }) => {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col space-y-2">
      <h1 className=" text-base md:text-lg text-primaryOne font-[600] ">
        {title}
      </h1>
      <div
        onClick={() => router.push(`/dashboard/settings/${link}`)}
        className="flex w-full items-center justify-between cursor-pointer rounded-[10px] bg-transparent border border-secondaryOne dark:bg-darkOne dark:border-0 p-[18px] md:p-[20px]"
      >
        <div className="flex items-center space-x-5">
          <Icon icon={icon} className="text-xl md:!text-2xl text-primaryOne " />
          <h3 className="font-medium text-sm md:text-base text-black dark:text-light ">
            {text}
          </h3>
        </div>
        <div className="flex h-full items-center justify-center space-x-5">
          <RiArrowRightSFill className="!text-mainBlack text-lg md:!text-xl" />
        </div>
      </div>
    </div>
  );
};

export default BoxLink;
