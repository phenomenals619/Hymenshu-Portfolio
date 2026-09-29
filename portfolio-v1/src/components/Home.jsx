import React from "react";
import home from "../assets/images/home.avif";

const Home = () => {
  return (
    <div
      className="min-h-[calc(100vh-69px)] flex items-center justify-center sm:justify-start bg-cover bg-center bg-no-repeat px-4 sm:px-12 md:px-20 py-12"
      style={{
        backgroundImage: `url(${home})`,
      }}
    >
      <div className="bg-gray-700/60 backdrop-blur-xs p-6 sm:p-10 md:p-14 rounded-lg shadow-xl text-white max-w-lg w-full sm:w-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          THIS IS HYMENSHU
        </h1>
        <p className="text-lg sm:text-xl font-medium">I'm Backend Developer</p>
        <p className="text-red-400 font-bold mt-1">Sorry!!!!</p>
      </div>
    </div>
  );
};

export default Home;

