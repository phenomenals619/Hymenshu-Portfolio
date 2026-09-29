import React from "react";
import home from "../assets/images/home.avif";
import profile from "../assets/images/profile.jpg";

const Home = () => {
  return (
    <>
      <div
        className="min-h-[calc(100vh-69px)] flex items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${home})`,
        }}
      >
        <div className="m-6 md:m-20 bg-gray-500/[0.5] inline-block p-10 md:p-14 rounded-2xl shadow-xl text-white backdrop-blur-xs">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">THIS IS HYMENSHU</h1>
          <div className="flex items-center justify-between gap-8 md:gap-14">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-medium">I'm Backend Developer</p>
              <p className="text-red-500 font-semibold">Sorry!!!!</p>
            </div>
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden border-2 border-white/50 shadow-lg shrink-0 bg-gray-700/50">
              <img
                src={profile}
                alt="Hymenshu"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

