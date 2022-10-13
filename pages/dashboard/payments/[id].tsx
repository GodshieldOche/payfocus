import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import Details from "../../../components/dashboard/payments/Details";
import { Payment } from "../../../typeDefs";

const PaymentPage: NextPage<any> = (props) => {
  return (
    <div>
      <Head>
        <title>Pay Focus | Payment Details</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Details payment={props.payment} />
    </div>
  );
};

export async function getServerSideProps({ req, res, params }: any) {
  const id = params.id;

  const { jwt } = req.cookies;

  let payments: Payment[];
  let payment: Payment;

  const dataOne = await axios.get("https://api.payfocuss.com/payments", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  payments = dataOne.data;

  payment = payments.find((payment) => payment.Id === id)!;

  // Pass data to the page via props
  return {
    props: {
      payment,
    },
  };
}

export default PaymentPage;
