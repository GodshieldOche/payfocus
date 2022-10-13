import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { Person } from "../../typeDefs";

interface Props extends Person {
  setId: any;
  handleChange: any;
  setUsers: any;
}

const User: React.FC<Props> = ({
  Id,
  Name,
  Picture,
  handleChange,
  setId,
  setUsers,
}) => {
  return (
    <div
      onClick={() => {
        handleChange(Name);
        setId(Id);
        setUsers([]);
      }}
      className="w-full flex items-center  space-x-5 cursor-pointer  "
    >
      <div className="relative w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full ">
        <Image
          src={
            Picture ||
            "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1660075992/cld-sample-2.jpg"
          }
          layout="fill"
          objectFit="cover"
          className="w-full h-full rounded-full"
          objectPosition={0}
        />
      </div>
      <h3 className="text-primaryOne dark:text-gray-300">{Name}</h3>
    </div>
  );
};

export default User;
