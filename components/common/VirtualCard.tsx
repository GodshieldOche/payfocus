import Image from "next/image";
import React, { useRef, useState } from "react";
import CardImage from "../../public/card.png";
import Frame from "../../public/Frame 2035.png";
import mastercard from "../../public/image 1.png";
import visa from "../../public/visa.png";
import { Card } from "../../typeDefs";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useRouter } from "next/router";

const array = [
  {
    Id: "b4856-fba2-11ec-b0e6-e20d387cb972",
    owner: "uglify",
    currency: "566",
    name: "Unche Emmanuel",
    number: "5340723160524429",
    pin: "0000",
    cvv: "312",
    expiry: "10/25",
    address: "Leisure Court Estate",
    balance: 5000,
    type: "MasterCard",
    transactions: null,
  },
  {
    Id: "70dd3-fdf2-11ec-831f-409c09150349",
    owner: "uglify",
    currency: "566",
    name: "Uniccon Group",
    number: "1234576621872857",
    pin: "0000",
    cvv: "965",
    expiry: "07/25",
    address: "Lanre Shittu Motors, Mabushi, Abuja",
    balance: 7800,
    type: "VisaCard",
    transactions: null,
  },
  {
    Id: "b4856-fba2-11ec-b0e6-e20d387cb972",
    owner: "uglify",
    currency: "566",
    name: "Unche Emmanuel",
    number: "5340723160524429",
    pin: "0000",
    cvv: "312",
    expiry: "10/25",
    address: "Leisure Court Estate",
    balance: 5000,
    type: "MasterCard",
    transactions: null,
  },
  {
    Id: "70dd3-fdf2-11ec-831f-409c09150349",
    owner: "uglify",
    currency: "566",
    name: "Uniccon Group",
    number: "1234576621872857",
    pin: "0000",
    cvv: "965",
    expiry: "07/25",
    address: "Lanre Shittu Motors, Mabushi, Abuja",
    balance: 7800,
    type: "VisaCard",
    transactions: null,
  },
  {
    Id: "b4856-fba2-11ec-b0e6-e20d387cb972",
    owner: "uglify",
    currency: "566",
    name: "Unche Emmanuel",
    number: "5340723160524429",
    pin: "0000",
    cvv: "312",
    expiry: "10/25",
    address: "Leisure Court Estate",
    balance: 5000,
    type: "MasterCard",
    transactions: null,
  },
  {
    Id: "70dd3-fdf2-11ec-831f-409c09150349",
    owner: "uglify",
    currency: "566",
    name: "Uniccon Group",
    number: "1234576621872857",
    pin: "0000",
    cvv: "965",
    expiry: "07/25",
    address: "Lanre Shittu Motors, Mabushi, Abuja",
    balance: 7800,
    type: "VisaCard",
    transactions: null,
  },
  {
    Id: "b4856-fba2-11ec-b0e6-e20d387cb972",
    owner: "uglify",
    currency: "566",
    name: "Unche Emmanuel",
    number: "5340723160524429",
    pin: "0000",
    cvv: "312",
    expiry: "10/25",
    address: "Leisure Court Estate",
    balance: 5000,
    type: "MasterCard",
    transactions: null,
  },
  {
    Id: "70dd3-fdf2-11ec-831f-409c09150349",
    owner: "uglify",
    currency: "566",
    name: "Uniccon Group",
    number: "1234576621872857",
    pin: "0000",
    cvv: "965",
    expiry: "07/25",
    address: "Lanre Shittu Motors, Mabushi, Abuja",
    balance: 7800,
    type: "VisaCard",
    transactions: null,
  },
];

interface Props {
  cards: Card[];
}

const VirtualCard: React.FC<Props> = ({ cards }) => {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState({ width: 398, height: 230.91 });
  const [sizeType, setSizeType] = useState({ width: 58, height: 35 });
  const scrollRef: any = useRef(0);
  const mobileScrollRef: any = useRef(0);

  const router = useRouter();

  const handleLeft = (e: any) => {
    e.preventDefault();
    // console.log(cardRef.current.getElementsByClassName('hidden')[0].innerText)\
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft + 400,
      behavior: "smooth",
    });
    if (index < cards.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleRight = (e: any) => {
    e.preventDefault();
    // console.log(cardRef)
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft - 400,
      behavior: "smooth",
    });
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleJump = (indexer: number) => {
    scrollRef.current.scrollTo({ left: indexer * 400, behavior: "smooth" });
    setIndex(indexer);
  };

  return (
    <div className="flex flex-col items-center w-full h-full  space-y-9">
      <div
        ref={scrollRef}
        onScroll={() => {
          // console.log(scrollRef.current.offsetWidth)
          // setIndex(Math.trunc(scrollRef.current.scrollLeft / 150))
        }}
        className={`flex ${
          cards.length === 1 ? "justify-center" : "justify-start"
        } hidden sm:flex px-2 sm:px-3 items-center w-full h-full space-x-[18px] overflow-y-hidden overflow-x-auto scroller   `}
      >
        {cards.map((card, i) => (
          <div
            onClick={() => router.push(`/dashboard/cards/${card.Id}`)}
            key={card.Id}
            className="relative w-fit h-fit cursor-pointer "
          >
            <div className="relative w-[343px] h-[199px]  sm:w-[398px] sm:h-[230.91px] ">
              <Image src={CardImage} width={size.width} height={size.height} />
              <div className="absolute top-0 left-10">
                <Image src={Frame} />
              </div>
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex flex-col sm:pb-[9px] py-5 sm:pt-7 px-4 sm:px-[18.57px]">
              <div className="flex items-center justify-between">
                <h3 className="text-light font-[700] text-x[12px]  sm:text-[13.9242px] uppercase ">
                  {card.owner}
                </h3>
                <h3 className="text-light font-semibold text-[12.3924px]   sm:text-[14.3795px] capitalize">
                  {card.name}
                </h3>
              </div>

              <h1 className="font-semibold text-[20px] sm:text-[23.207px] text-light mt-[25px] sm:mt-[30px] ">
                {`
                                    ${
                                      card.currency === "840"
                                        ? "$"
                                        : card.currency === "724"
                                        ? "€"
                                        : card.currency === "826"
                                        ? "£"
                                        : "₦"
                                    }
                                    ${card.balance}
                                `}
              </h1>
              <h1 className="font-semibold leading-[20px] text-sm sm:text-[16.2449px] text-light mt-[20px] sm:mt-[25px] ">
                {`
                                    ${card.number.slice(0, 4)}
                                    ${card.number.slice(4, 8)}
                                    ${card.number.slice(8, 12)}
                                    ${card.number.slice(12, 16)}
                                `}
              </h1>
              <div className="flex items-start  justify-between">
                <div className="flex flex-col space-y-1 mt-[35px]">
                  <h4 className="font-semibold text-[9px] sm:text-[10.4431px] text-light">
                    VALID TILL
                  </h4>
                  <h4 className="font-semibold text-[9px] sm:text-[10.4431px] text-light">
                    {card.expiry}
                  </h4>
                </div>
                <div className="flex flex-col ">
                  <div className="relative flex justify-end">
                    <Image
                      src={card.type === "MasterCard" ? mastercard : visa}
                      width={sizeType.width}
                      height={sizeType.height}
                    />
                  </div>
                  <h3 className="font-semibold tracking-wider text-right text-[10px] sm:text-[11px] text-light mt-[2px] sm:mt-1">
                    {card.type === "MasterCard" ? "mastercard" : "visa"}
                  </h3>
                  <h4 className="font-semibold tracking-wider text-right text-[10px] sm:text-[11px] -mt-1 text-light">
                    virtual
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div
        className="flex sm:hidden items-center justify-center"
        ref={mobileScrollRef}
        onScroll={() => {
          console.log(scrollRef.current.scrollX);
        }}
      >
        <div
          onClick={() => router.push(`/dashboard/cards/${cards[index].Id}`)}
          key={cards[index].Id}
          className="relative w-fit h-fit cursor-pointer "
        >
          <div className="relative w-[343px] h-[199px] overflow-hidden ">
            <Image src={CardImage} width={343} height={199} />
            <div className="absolute top-0 left-8 h-full">
              <Image src={Frame} />
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex flex-col sm:pb-[9px] py-5 sm:pt-7 px-4 sm:px-[18.57px]">
            <div className="flex items-center justify-between">
              <h3 className="text-light font-[700] text-x[12px]  sm:text-[13.9242px] uppercase ">
                {cards[index].owner}
              </h3>
              <h3 className="text-light font-semibold text-[12.3924px]   sm:text-[14.3795px] capitalize">
                {cards[index].name}
              </h3>
            </div>

            <h1 className="font-semibold text-[20px] sm:text-[23.207px] text-light mt-[25px] sm:mt-[30px] ">
              {`
                                        ${
                                          cards[index].currency === "840"
                                            ? "$"
                                            : cards[index].currency === "724"
                                            ? "€"
                                            : cards[index].currency === "826"
                                            ? "£"
                                            : "₦"
                                        }
                                        ${cards[index].balance}
                                    `}
            </h1>
            <h1 className="font-semibold leading-[20px] text-sm sm:text-[16.2449px] text-light mt-[20px] sm:mt-[25px] ">
              {`
                                        ${cards[index].number.slice(0, 4)}
                                        ${cards[index].number.slice(4, 8)}
                                        ${cards[index].number.slice(8, 12)}
                                        ${cards[index].number.slice(12, 16)}
                                    `}
            </h1>
            <div className="flex items-start  justify-between">
              <div className="flex flex-col space-y-1 mt-[35px]">
                <h4 className="font-semibold text-[9px] sm:text-[10.4431px] text-light">
                  VALID TILL
                </h4>
                <h4 className="font-semibold text-[9px] sm:text-[10.4431px] text-light">
                  {cards[index].expiry}
                </h4>
              </div>
              <div className="flex flex-col ">
                <div className="relative flex justify-end">
                  <Image
                    src={cards[index].type === "MasterCard" ? mastercard : visa}
                    width={50}
                    height={28}
                  />
                </div>
                <h3 className="font-semibold tracking-wider text-right text-[10px] sm:text-[11px] text-light mt-[2px] sm:mt-1">
                  {cards[index].type === "MasterCard" ? "mastercard" : "visa"}
                </h3>
                <h4 className="font-semibold tracking-wider text-right text-[10px] sm:text-[11px] -mt-1 text-light">
                  virtual
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full max-w-[399px]  ">
        <div className="hidden sm:block">
          <HiOutlineArrowLeft
            onClick={handleRight}
            className="text-lg text-primaryOne xl:!text-2xl cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between space-x-1 w-full sm:!mx-7 ">
          {cards.map((card, i) => (
            <span
              onClick={() => handleJump(i)}
              key={card.Id}
              className={`h-[3px] cursor-pointer !w-full ${
                i === index ? "bg-primaryOne" : "bg-secondaryFour"
              }   `}
            />
          ))}
        </div>
        <div className="hidden sm:block">
          <HiOutlineArrowRight
            onClick={handleLeft}
            className=" text-lg text-primaryOne xl:!text-2xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualCard;
