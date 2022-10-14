import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import Details from "../../../components/dashboard/cards/Details";
import { balance, Card } from "../../../typeDefs";

const CardsDetailsPage: NextPage<any> = (props) => {
  return (
    <div>
      <Head>
        <title>Pay Focus | Card Details</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Details card={props.card} balances={props.balances} />
    </div>
  );
};

export async function getServerSideProps({ req, res, params }: any) {
  const id = params.id;

  const { jwt } = req.cookies;

  let card: Card;
  let cards: Card[];
  let balances: balance[];

  const dataOne = await axios.get(`https://api.payfocuss.com/cards`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  const dataTwo = await axios.get("https://api.payfocuss.com/balance", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  balances = dataTwo.data;

  cards = JSON.parse(dataOne.data.data);

  card = cards.find((card) => card.Id === id)!;

  // Pass data to the page via props
  return {
    props: {
      card,
      balances,
    },
  };
}

export default CardsDetailsPage;
