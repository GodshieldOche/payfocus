import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

interface Props {}

const Toggle: React.FC<Props> = ({}) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);

  const [toggleTheme, setToggleTheme] = useState(false);

  return (
    <div className="flex items-center w-full space-x-1 py-1 px-1 bg-secondaryOne dark:bg-darkOne rounded-[15px] ">
      {mounted && (
        <>
          <div
            onClick={() => setTheme("dark")}
            className={` ${
              resolvedTheme === "dark"
                ? "bg-primaryOne "
                : "bg-transparent hover:bg-mainBlack/10 "
            } 
        cursor-pointer px-5 py-2 xl:px-6 xl:py-3 rounded-[10px]`}
          >
            <Icon
              icon="bxs:moon"
              className={` ${
                resolvedTheme === "dark" ? "text-light " : "text-mainBlack "
              } !text-lg `}
            />
          </div>

          <div
            onClick={() => setTheme("light")}
            className={`${
              resolvedTheme === "dark" ? "bg-transparent " : "bg-primaryOne "
            } cursor-pointer px-5 py-2 xl:px-6 xl:py-3 rounded-[10px]`}
          >
            <Icon
              icon="carbon:light-filled"
              className={`${
                resolvedTheme === "dark" ? "text-mainBlack " : "text-light "
              } !text-lg `}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Toggle;
