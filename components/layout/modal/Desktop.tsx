import React from "react";
import vector from "../../../public/ant-design_check-circle-filled.png";
import cancel from "../../../public/cancel.png";
import Image from "next/image";
import Button from "../../common/Button";
import { useDispatch } from "react-redux";
import { setModal } from "../../../redux/features/modal";
import { MdClose } from "react-icons/md";

type Props = {
  close: () => void;
  title: string;
  text: string;
  buttonText: string;
  type: string;
};

const Desktop: React.FC<Props> = ({ close, buttonText, text, title, type }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full relative md:w-[460px] h-fit bg-light dark:bg-dark rounded-t-[20px] md:rounded-[10px] flex flex-col items-center py-[24px] px-[16px] space-y-5 ">
      <h1 className="text-lg text-primaryOne font-[600] tracking-wide ">
        {title}
      </h1>
      <div className="">
        {type === "error" && <Image src={cancel} />}
        {type === "success" && <Image src={vector} />}
      </div>
      <div className="w-full mx-auto max-w-[323px]">
        <p className="text-mainBlack text-center">{text}</p>
      </div>
      {type === "logout" ? (
        <div className="flex  w-full !mb-[35px] sm:!mb-0 ">
          <button
            className={`bg-primaryThree border-0 text-white w-full h-fit text-sm  font-medium py-[12px] rounded-[7px] `}
            type="button"
            onClick={close}
          >
            Log Out
          </button>
        </div>
      ) : (
        <Button text={buttonText} handleSubmit={close} />
      )}

      {type === "logout" && (
        <div className="absolute top-1 right-4">
          <MdClose
            onClick={() => {
              dispatch(setModal(false));
            }}
            className="!text-mainBlack !text-lg cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Desktop;

// Recover Password
// Password reset link has been sent to the email entered with an OTP for verification
