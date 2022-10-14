import React, { useState } from "react";
import { balance, Card } from "../../../typeDefs";
import BackNav from "../../common/BackNav";
import Button from "../../common/Button";
import CopyForm from "../../formik/CopyForm";
import CardModal from "../../layout/modal/CardModal";

interface Props {
  card: Card;
  balances: balance[];
}

interface cardValues {
  name: string;
  number: string;
  pin: string;
  cvv: string;
  expiry: string;
  address: string;
  balance: number;
}

const Details: React.FC<Props> = ({ card, balances }) => {
  const [active, setActive] = useState("");

  const number = `${card.number.slice(0, 4)}
    ${card.number.slice(4, 8)}
    ${card.number.slice(8, 12)}
    ${card.number.slice(12, 16)}
`;

  return (
    <div>
      <BackNav text="Card Details" />
      <div className="px-4 sm:px-[43px] lg:px-6 !mt-8 sm:!mt-14 space-y-16">
        <form className="space-y-6">
          <CopyForm
            label="Card Name"
            name="name"
            value={card.name}
            type="text"
          />
          <CopyForm
            label="Card Number"
            name="number"
            value={number}
            type="text"
          />
          <CopyForm
            label="Expiry Date"
            name="date"
            value={card.expiry}
            type="text"
          />
          <CopyForm label="CVV" name="cvv" value={card.cvv} type="text" />
          <CopyForm
            label="Billing Address"
            name="address"
            value={card.address}
            type="text"
          />
          <CopyForm label="Pin" name="pin" value={card.pin} type="password" />
          <CopyForm
            label="Balance"
            name="balance"
            value={card.balance}
            type="password"
          />
        </form>

        <div className="flex justify-between items-center space-x-5 ">
          <Button
            text="Withdraw"
            outline={true}
            handleSubmit={() => setActive("withdraw")}
          />
          <Button text="Fund Card" handleSubmit={() => setActive("fund")} />
        </div>
      </div>
      {active && (
        <CardModal
          balance={card.balance}
          currency={card.currency}
          setActive={setActive}
          active={active}
          balances={balances}
        />
      )}
    </div>
  );
};

export default Details;
