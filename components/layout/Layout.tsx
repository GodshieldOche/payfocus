import React from "react";
import { useRouter } from "next/router";
import MainLayout from "./MainLayout";
import { useSelector } from "react-redux";
import Modal from "./modal/Modal";
import Footer from "./Footer";

const Layout: React.FC<any> = ({ children, currentUser }) => {
  const { modalState, searchModalState } = useSelector(
    (state: any) => state.modal
  );

  const router = useRouter();

  return (
    <div className="relative w-full h-full font-Poppins bg-light dark:bg-dark ">
      {router.pathname.includes("/auth") ? (
        children
      ) : (
        <>
          <MainLayout currentUser={currentUser}>{children}</MainLayout>
          {/* <IframeModal /> */}
          <Footer />
        </>
      )}
      {modalState && <Modal />}
    </div>
  );
};

export default Layout;
