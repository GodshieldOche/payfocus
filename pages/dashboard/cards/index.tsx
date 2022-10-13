import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import Cards from "../../../components/dashboard/cards/Cards";

const CardsPage: NextPage<any> = (props) => {
  return (
    <div>
      <Head>
        <title>Pay Focus | Cards</title>
        <meta name="description" content="PayFocus by Uniccon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cards cards={props.cards} />
    </div>
  );
};

export async function getServerSideProps({ req, res }: any) {
  const { jwt } = req.cookies;

  let cards: any;

  const dataOne = await axios.get("https://api.payfocuss.com/cards", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  cards = JSON.parse(dataOne.data.data);

  // console.log(cards)

  // Pass data to the page via props
  return {
    props: {
      cards,
    },
  };
}

export default CardsPage;
