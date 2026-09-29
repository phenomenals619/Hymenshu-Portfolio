import React from "react";
import Navbar from "./Navbar";
import home from "../assets/images/home.avif";

const Home = () => {
  return (
    <>
      <div
        className=" min-h-[calc(100vh-69px)] flex items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${home})`,
        }}
      >
        <div className="m-20 bg-gray-500/[0.5]  inline-block p-20 pt-10 rounded-sm mt-0 shadow-lg text-white">
          <h1 className=" text-4xl font-bold">THIS IS HYMENSHU</h1>
          <p className="text-xl">I'm Backend Developer</p>
          <p className="text-red-500">Sorry!!!!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
