import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import IconLink from "../common/Icon";

const LeftNav = () => {
  return (
    <div className="mt-12 flex flex-col items-center space-y-10 ">
      <div>
        <Image src={logo} />
      </div>
      <div className="w-full flex flex-col space-y-7">
        <IconLink text="wallet" icon="entypo:wallet" />
        <IconLink
          text="payments"
          icon="material-symbols:payments-outline-rounded"
        />
        <IconLink text="cards" icon="wpf:bank-cards" />
        <IconLink text="settings" icon="eva:settings-fill" />
        <IconLink text="notifications" icon="clarity:notification-solid" />
      </div>
    </div>
  );
};

export default LeftNav;
