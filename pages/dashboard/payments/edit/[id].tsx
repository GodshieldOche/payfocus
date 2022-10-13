import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { Payment } from "../../../../typeDefs";
import PayForm from "../../../../components/dashboard/payments/Form";

const EditPaymentPage: NextPage<any> = (props) => {
  return (
    <div>
      <Head>
        <title>Pay Focus | Edit Payment</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PayForm type="Edit Payment" payment={props.payment} />
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

export default EditPaymentPage;
