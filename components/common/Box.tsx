import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

interface Props {
  icon: string;
  text: string;
}

const Box: React.FC<Props> = ({ icon, text }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/dashboard/wallet/${text}`)}
      className=" w-[95px] sm:w-[136px] py-2 sm:py-3 cursor-pointer bg-primaryOne flex flex-col items-center rounded-[8px] "
    >
      <Icon icon={icon} className="!text-light" />
      <h1 className="text-light font-semibold text-[13px] capitalize ">
        {text}
      </h1>
    </div>
  );
};

export default Box;
