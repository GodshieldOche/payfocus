import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/session";
import BoxLink from "../../common/BoxLink";
import ButtonLoader from "../../common/ButtonLoader";
import { User } from "../../layout/RightNav";
import Header from "./Header";

interface Props {
  currentUser: User;
}

const Settings: React.FC<Props> = ({ currentUser }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleClick = async (e: any) => {
    setLoading(true);
    dispatch(logout()).then((res: any) => {
      setTimeout(() => {
        setLoading(false);
        location.reload();
      }, 1000);
    });
  };

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

        <div>
          {" "}
          <button
            className={`
        bg-primaryThree border-0 text-white
          w-full h-fit text-sm  font-medium py-[12px] md:py-[18px] rounded-[7px] `}
            type="button"
            onClick={handleClick}
          >
            {loading ? <ButtonLoader /> : "Log Out"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
