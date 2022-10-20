import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../common/Button";
import Toggle from "../common/Toggle";
import { useDispatch } from "react-redux";
import { getSession, logout } from "../../redux/features/session";
import { useRouter } from "next/router";
import axios from "axios";
import Transaction from "../common/Transaction";
import { transaction } from "../../typeDefs";

export type User = {
  id: string;
  fullName: string;
  email: string;
  type: string;
  address: string;
  country: string;
  state: string;
  merchantId: string;
  logo: string;
  status: string;
  akey: string;
  skey: string;
  phone: string;
};

interface Props {
  currentUser: User;
}

const RightNav: React.FC<Props> = ({ currentUser }) => {
  const [transactions, setTransactions] = useState<transaction[]>([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const getTransactions = async () => {
    let token;
    await dispatch(getSession()).then((res: any) => {
      token = res?.payload?.token;
    });
    const data = await axios.get("https://api.payfocuss.com/transactions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setTransactions(data.data);
  };

  useEffect(() => {
    getTransactions();
  }, [router.pathname.includes("/settings")]);

  return (
    <>
      {!router.pathname.includes("/settings") && (
        <div className="mt-10 flex flex-col items-center lg:space-y-6 xl:space-y-7 px-6">
          <div className="flex flex-col space-y-3 items-center justify-center">
            <div className="relative lg:w-[80px] lg:h-[80px] xl:w-[96px] xl:h-[96px] border-2 border-primaryOne rounded-full">
              <Image
                src={currentUser.logo}
                layout="fill"
                objectFit="cover"
                className="w-full h-full rounded-full"
                objectPosition={0}
                priority
              />
            </div>
            <h1 className=" lg:!text-lg xl:!text-xl text-black dark:text-light !font-semibold ">
              {currentUser.fullName}
            </h1>
          </div>

          <Button text="View Profile" handleSubmit={() => {}} />

          <div>
            <Toggle />
          </div>
        </div>
      )}
      {router.pathname.includes("/settings") && (
        <div className="w-full h-full mt-12 px-4 sm:px-[43px] lg:px-6 space-y-6">
          <h1 className=" text-base text-primaryOne  ">Recent Transactions</h1>
          <div className="space-y-4">
            {transactions?.slice(0, 5).map((item) => (
              <Transaction
                price={item.amount}
                type={item.type}
                date={
                  item.status === "completed" ? item.completed : item.initiated
                }
                id={item.id}
                key={item.id}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RightNav;
