import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import Details from "../../../components/dashboard/cards/Details";
import { Card } from "../../../typeDefs";

const CardsDetailsPage: NextPage<any> = (props) => {
  return (
    <div>
      <Head>
        <title>Pay Focus | Card Details</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Details card={props.card} />
    </div>
  );
};

export async function getServerSideProps({ req, res, params }: any) {
  const id = params.id;

  const { jwt } = req.cookies;

  let card: Card;
  let cards: Card[];

  const dataOne = await axios.get(`https://api.payfocuss.com/cards`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  cards = JSON.parse(dataOne.data.data);

  card = cards.find((card) => card.Id === id)!;

  // Pass data to the page via props
  return {
    props: {
      card,
    },
  };
}

export default CardsDetailsPage;
