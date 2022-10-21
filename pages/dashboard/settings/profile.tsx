import type { NextPage } from "next";
import Head from "next/head";
import { User } from "../../../components/layout/RightNav";
import { balance, transaction } from "../../../typeDefs";
import axios from "axios";
import Profile from "../../../components/dashboard/settings/Profile";

export interface WalletProps {
  transactions: transaction[];
  balances: balance[];
  currentUser: User;
}

const ProfilePage: NextPage<any> = (props) => {
  return (
    <div>
      <Head>
        <title>Pay Focus | Settings</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile currentUser={props.currentUser} />
    </div>
  );
};

export async function getServerSideProps({ req, res }: any) {
  const { jwt } = req.cookies;

  let user;

  const dataOne = await axios.get("https://api.payfocuss.com/account/info", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  user = dataOne.data;
  // Pass data to the page via props
  return {
    props: {
      currentUser: user,
    },
  };
}

export default ProfilePage;
