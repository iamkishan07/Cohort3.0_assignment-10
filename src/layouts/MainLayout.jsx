import React, { useContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyCart from "../components/MyCart";
import { MyStore } from "../context/ContextApi";

const MainLayout = () => {
  const { isCartOpen } = useContext(MyStore);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>

      {isCartOpen && <MyCart />}
    </>
  );
};

export default MainLayout;