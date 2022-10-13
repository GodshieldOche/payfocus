import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import PayForm from "../../../components/dashboard/payments/Form";

const EditPaymentPage: NextPage<any> = (props) => {
  return (
    <div>
      <Head>
        <title>Pay Focus | Edit Payment</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PayForm type="Add Payment" />
    </div>
  );
};

export async function getServerSideProps({ req, res }: any) {
  // Pass data to the page via props
  return {
    props: {},
  };
}

export default EditPaymentPage;
