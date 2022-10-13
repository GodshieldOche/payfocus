import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Swap from "../../../components/dashboard/wallet/swap/Swap";

const SwapPage: NextPage<any> = (props) => {
  return (
    <div>
      <Head>
        <title>Pay Focus | Currency Exchange</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Swap balances={props.balances} />
    </div>
  );
};

export async function getServerSideProps({ req, res }: any) {
  const { jwt } = req.cookies;

  let balances;

  const dataOne = await axios.get("https://api.payfocuss.com/balance", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  balances = dataOne.data;

  // Pass data to the page via props
  return {
    props: {
      balances,
    },
  };
}

export default SwapPage;
