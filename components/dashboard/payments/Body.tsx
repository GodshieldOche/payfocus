import { useRouter } from "next/router";
import React from "react";
import { Payment } from "../../../typeDefs";
import Button from "../../common/Button";
import PaymentComp from "../../common/Payment";

interface Props {
  payments: Payment[];
}

const Body: React.FC<Props> = ({ payments }) => {
  const router = useRouter();
  return (
    <div className="px-4 sm:px-[43px] lg:px-6 font-Poppins !mt-8 sm:!mt-8">
      {payments.length >= 1 ? (
        <div className="flex flex-col w-full space-y-5">
          {payments.map((payment) => (
            <PaymentComp
              id={payment.Id}
              title={payment.Title}
              key={payment.Id}
              amount={payment.Amount}
              created={payment.Created}
            />
          ))}
        </div>
      ) : (
        <div className="!mt-[130px] w-full flex flex-col space-y-14 justify-center items-center ">
          <h3 className=" text-sm sm:text-[17px] text-center max-w-[306px] leading-7 ">
            You currently dont have any payment link generated
          </h3>
          <Button
            text="Generate Payment Link"
            handleSubmit={() => {
              router.push("/dashboard/payments/add");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Body;
