import React from "react";
import Navbar from "../components/Navbar"; // Import your existing Navbar component
import { BillBoard } from "../components/BillBoard"; // Import the BillBoard component
import ViewBoard from "../components/ViewBoard";

const Home = () => {
  return (
    <div className="bg-black text-green-500 ">
      <>
        <Navbar />

        <BillBoard />
      </>
    </div>
  );
};

export default Home;
