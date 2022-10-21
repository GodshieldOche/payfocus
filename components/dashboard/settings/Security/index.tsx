import React from "react";
import BackNav from "../../../common/BackNav";
import BoxLink from "../../../common/BoxLink";

const Security = () => {
  return (
    <div>
      <BackNav text="Security Settings" />
      <div className="px-4 sm:px-[43px] lg:px-6 !mt-6">
        <BoxLink
          title=""
          text="Reset Password"
          icon="bi:shield-lock-fill"
          link="security/reset"
        />
      </div>
    </div>
  );
};

export default Security;
