import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import notifyIcon from "../../public/notification.png";
import { User } from "../layout/RightNav";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/session";

interface Props {
  currentUser: User;
}

const Mobile: React.FC<Props> = ({ currentUser }) => {
  const dispatch = useDispatch();

  const handleClick = async (e: any) => {
    dispatch(logout()).then((res: any) => {
      setTimeout(() => {
        location.reload();
      }, 1000);
    });
  };

  return (
    <div className="w-full flex justify-between items-center bg-transparent lg:hidden">
      <div
        onClick={handleClick}
        className="relative w-[32px] h-[32px] sm:w-[50px] sm:h-[50px] border border-mainBlack/60 rounded-full"
      >
        <Image
          src={currentUser.logo}
          layout="fill"
          objectFit="cover"
          className="w-full h-full rounded-full"
          objectPosition={0}
        />
      </div>
      <div className="relative">
        <Image src={notifyIcon} />
        <div className="w-[6px] h-[6px] absolute top-1 right-0 bg-[#CC2525] rounded-full  "></div>
      </div>
    </div>
  );
};

export default Mobile;
