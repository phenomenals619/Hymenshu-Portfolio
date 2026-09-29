import React from "react";
import home from "../assets/images/home.avif";
import profile from "../assets/images/profile.jpg";

const Home = () => {
  return (
    <div
      className="min-h-[calc(100vh-69px)] flex items-center justify-center sm:justify-start bg-cover bg-center bg-no-repeat p-4 sm:p-8 md:p-16"
      style={{
        backgroundImage: `url(${home})`,
      }}
    >
      <div className="w-full max-w-lg md:max-w-xl bg-gray-500/60 backdrop-blur-sm p-6 sm:p-10 md:p-12 rounded-2xl shadow-2xl text-white border border-white/20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center sm:text-left">
          THIS IS HYMENSHU
        </h1>
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-center justify-between gap-6 sm:gap-10">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <p className="text-xl sm:text-2xl font-medium">I'm Backend Developer</p>
            <p className="text-red-400 font-semibold text-lg">Sorry!!!!</p>
          </div>
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-xl overflow-hidden border-2 border-white/50 shadow-lg shrink-0 bg-gray-700/50">
            <img
              src={profile}
              alt="Hymenshu"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

