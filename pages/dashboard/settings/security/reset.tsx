import type { NextPage } from "next";
import Head from "next/head";
import Password from "../../../../components/dashboard/settings/Security/Password";

const ResetPage: NextPage<any> = (props) => {
  return (
    <div>
      <Head>
        <title>Pay Focus | Settings</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Password />
    </div>
  );
};

export async function getServerSideProps({ req, res }: any) {
  // Pass data to the page via props
  return {
    props: {},
  };
}

export default ResetPage;
