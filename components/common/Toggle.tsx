import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

interface Props {}

const Toggle: React.FC<Props> = ({}) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);

  const router = useRouter();

  return (
    <div
      className={` ${
        router.pathname.includes("/settings")
          ? " bg-secondaryOne"
          : "bg-secondaryOne dark:bg-darkOne"
      } flex items-center w-full sm:space-x-1 space-x-[2px] py-[2px] sm:py-1 px-[2px] sm:px-1  rounded-full sm:rounded-[15px] `}
    >
      {mounted && (
        <>
          <div
            onClick={() => setTheme("dark")}
            className={` ${
              resolvedTheme === "dark"
                ? "bg-primaryOne "
                : "bg-transparent hover:bg-mainBlack/10 "
            } 
            ${
              router.pathname.includes("/settings") ? "px-4" : "px-5"
            } cursor-pointer   py-2 rounded-full sm:rounded-[10px]`}
          >
            <Icon
              icon="bxs:moon"
              className={` ${
                resolvedTheme === "dark" ? "text-light " : "text-mainBlack "
              } ${
                router.pathname.includes("/settings")
                  ? "!text-base"
                  : "sm:!text-lg"
              } `}
            />
          </div>

          <div
            onClick={() => setTheme("light")}
            className={`${
              resolvedTheme === "dark" ? "bg-transparent " : "bg-primaryOne "
            } ${
              router.pathname.includes("/settings") ? "px-4" : "px-5"
            } cursor-pointer   py-2 rounded-full sm:rounded-[10px]`}
          >
            <Icon
              icon="carbon:light-filled"
              className={`${
                resolvedTheme === "dark" ? "text-mainBlack " : "text-light "
              } ${
                router.pathname.includes("/settings")
                  ? "!text-base"
                  : "sm:!text-lg"
              } `}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Toggle;
