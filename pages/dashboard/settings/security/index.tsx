import type { NextPage } from "next";
import Head from "next/head";
import Security from "../../../../components/dashboard/settings/Security";

const SecurityPage: NextPage<any> = (props) => {
  return (
    <div>
      <Head>
        <title>Pay Focus | Settings</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Security />
    </div>
  );
};

export async function getServerSideProps({ req, res }: any) {
  // Pass data to the page via props
  return {
    props: {},
  };
}

export default SecurityPage;
