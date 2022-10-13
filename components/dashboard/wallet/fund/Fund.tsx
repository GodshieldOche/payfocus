import React from "react";
import BackNav from "../../../common/BackNav";
import { BalancesProp } from "../swap/Swap";
import Body from "./Body";

const Fund: React.FC<BalancesProp> = ({ balances }) => {
  return (
    <div className="w-full h-full min-h-screen dark:bg-dark">
      <BackNav text="Fund Wallet" />
      <Body balances={balances} />
    </div>
  );
};

export default Fund;
