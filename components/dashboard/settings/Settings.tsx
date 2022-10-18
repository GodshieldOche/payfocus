import React from "react";
import BoxLink from "../../common/BoxLink";
import { User } from "../../layout/RightNav";
import Header from "./Header";

interface Props {
  currentUser: User;
}

const Settings: React.FC<Props> = ({ currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="flex flex-col space-y-6 px-4 sm:px-[43px] lg:px-6 !mt-8 sm:!mt-14">
        <BoxLink
          title="Profile Information"
          text="Profile"
          icon="bi:person-fill"
          link=""
        />
        <BoxLink
          title="Account"
          text="Security Settings"
          icon="bi:shield-lock-fill"
          link=""
        />
        <BoxLink
          title="Others"
          text="About PayFocus"
          icon="fluent-mdl2:info-solid"
          link=""
        />
      </div>
    </div>
  );
};

export default Settings;
