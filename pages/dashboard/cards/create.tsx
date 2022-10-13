import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Create from "../../../components/dashboard/cards/Create";

const CreateCardPage: NextPage<any> = (props) => {
  return (
    <div>
      <Head>
        <title>Pay Focus | Create Card</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Create balances={props.balances} />
    </div>
  );
};

export async function getServerSideProps({ req, res, params }: any) {
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

export default CreateCardPage;
