import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  text: string;
  icon: string;
}

const IconLink: React.FC<Props> = ({ text, icon }) => {
  const [active, setActive] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes(text)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [router.pathname]);

  return (
    <Link href={`/dashboard/${text}`}>
      <a>
        <div
          className={`flex flex-col lg:flex-row 
        items-center lg:w-full lg:pl-4 xl:pl-[32px] lg:py-3 cursor-pointer xl:rounded-l-[7px] 
        ${
          active
            ? "lg:bg-primaryOne/10 !text-primaryOne lg:border-r-[6px] xl:border-r-[10px] border-primaryOne "
            : ""
        }
        lg:space-x-4 xl:space-x-5  space-y-2 lg:space-y-0
        `}
        >
          <Icon
            icon={icon}
            className={`!text-2xl sm:!text-3xl ${
              active ? "!text-primaryOne" : "!text-mainBlack"
            }  `}
          />
          <h1
            className={`text-xs capitalize lg:text-base ${
              active ? "text-primaryOne font-semibold " : "font-normal"
            }`}
          >
            {text}
          </h1>
        </div>
      </a>
    </Link>
  );
};

export default IconLink;
