import { useRouter } from "next/router";
import React from "react";
import { Payment } from "../../../typeDefs";
import PaymentNav from "../../common/PaymentNav";
import Body from "./Body";

interface Props {
  payments: Payment[];
}

const Payments: React.FC<Props> = ({ payments }) => {
  const router = useRouter();

  return (
    <div>
      <PaymentNav
        text="Payments"
        icon1="akar-icons:plus"
        action={() => {
          router.push("/dashboard/payments/add");
        }}
        icon2="akar-icons:plus"
        showIcon={false}
      />
      <Body payments={payments} />
    </div>
  );
};

export default Payments;
