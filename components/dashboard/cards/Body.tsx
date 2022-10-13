import { useRouter } from "next/router";
import React from "react";
import { Card } from "../../../typeDefs";
import Button from "../../common/Button";
import VirtualCard from "../../common/VirtualCard";

interface Props {
  cards: Card[];
}

const Body: React.FC<Props> = ({ cards }) => {
  const router = useRouter();

  return (
    <div className="px-4 sm:px-[43px] lg:px-6 font-Poppins !mt-8 sm:!mt-8 pb-10">
      {cards.length >= 1 ? (
        <div className="flex flex-col w-full space-y-5">
          <VirtualCard cards={cards} />
          <div className="!mt-[66px] w-full flex flex-col space-y-14 justify-center items-center ">
            <h3 className=" text-sm sm:text-[17px] text-center max-w-[341px] leading-7 ">
              We provide you with a virtual card to ease your local and
              international transactions
            </h3>
            <Button
              text="Create a new card"
              handleSubmit={() => router.push("/dashboard/cards/create")}
            />
          </div>
        </div>
      ) : (
        <div className="!mt-[130px] w-full flex flex-col space-y-14 justify-center items-center ">
          <h3 className=" text-sm sm:text-[17px] text-center max-w-[341px] leading-7 ">
            We provide you with a virtual card to ease your local and
            international transactions
          </h3>
          <Button
            text="Create a new card"
            handleSubmit={() => router.push("/dashboard/cards/create")}
          />
        </div>
      )}
    </div>
  );
};

export default Body;
