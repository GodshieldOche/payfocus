import type { NextPage } from "next";
import Head from "next/head";
import Wallet from "../../../components/dashboard/wallet/Wallet";
import axios from "axios";
import { User } from "../../../components/layout/RightNav";
import { balance, transaction } from "../../../typeDefs";

export interface WalletProps {
  transactions: transaction[];
  balances: balance[];
  currentUser: User;
}

const WalletPage: NextPage<any> = (props) => {
  return (
    <div>
      <Head>
        <title>Pay Focus | Wallet</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wallet
        transactions={props.transactions}
        balances={props.balances}
        currentUser={props.currentUser}
      />
    </div>
  );
};

export async function getServerSideProps({ req, res }: any) {
  const { jwt } = req.cookies;

  let balances;
  let transactions;

  const dataOne = await axios.get("https://api.payfocuss.com/balance", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  const dataTwo = await axios.get("https://api.payfocuss.com/transactions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  balances = dataOne.data;
  transactions = dataTwo.data;

  // Pass data to the page via props
  return {
    props: {
      transactions,
      balances,
    },
  };
}

export default WalletPage;
