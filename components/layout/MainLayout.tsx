import React from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const MainLayout: React.FC<any> = ({ children, currentUser }) => {
  return (
    <div className=" w-full h-screen max-w-[1168px] bg-light dark:bg-dark flex flex-col mx-auto lg:grid lg:grid-cols-16 pb-16 lg:pb-0">
      <div className="hidden h-full lg:block lg:col-span-4 w-full bg-white dark:bg-dark mb-10  border-r border-secondaryOne dark:border-darkOne">
        <LeftNav />
      </div>
      <div className="lg:col-span-12 h-full  overflow-y-auto scroller pb-10 ">
        {children}
      </div>
      <div className="hidden h-full lg:block lg:col-span-4 order-first lg:order-3 bg-white dark:bg-dark border-l border-secondaryOne dark:border-darkOne">
        <RightNav currentUser={currentUser} />
      </div>
    </div>
  );
};

export default MainLayout;
