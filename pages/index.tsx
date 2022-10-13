import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-primaryOne">
      <Head>
        <title>Pay Focus</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {},
    redirect: {
      destination: "/dashboard/wallet",
      permanent: false,
    },
  };
}

export default Home;
