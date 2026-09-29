import React from "react";
import carlo from "../assets/images/carlo.jpg";

const Project = () => {
  return (
    <div
      id="project"
      className="min-h-screen bg-cover bg-center bg-no-repeat md:bg-fixed px-4 py-12 sm:px-6 md:py-16"
      style={{
        backgroundImage: `url(${carlo})`,
      }}
    >
      <div className="bg-blue-200/75 backdrop-blur-sm rounded-xl shadow-xl text-black max-w-7xl mx-auto p-5 sm:p-8 md:p-10 border border-white/30">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-950 mb-8 sm:mb-10">
          Projects 🚀
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Project 1 */}
          <div className="bg-gray-900/90 text-white rounded-xl p-5 sm:p-6 shadow-md flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-green-300">
                HeroShop (sort of mine 💀)
              </h2>
              <p className="text-sm italic indent-4 sm:indent-6 mb-4 text-gray-300 leading-relaxed">
                Allegedly built by a friend... but somehow ended up on my
                GitHub. 🕵️‍♂️ It's an e-commerce site — React, Firebase, and a dash
                of mystery. I maintain it now, so technically it’s mine. Right?
              </p>
            </div>
            <a
              href="https://github.com/Phenomenals619/HeroShop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 text-black font-semibold mt-auto px-4 py-2 rounded-lg hover:bg-green-300 transition-colors w-fit text-sm sm:text-base inline-block"
            >
              🛒 Source Code
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900/90 text-white rounded-xl p-5 sm:p-6 shadow-md flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-green-300">
                College Management System (not mine... again)
              </h2>
              <p className="text-sm italic indent-4 sm:indent-6 mb-4 text-gray-300 leading-relaxed">
                Built by another overachieving friend who thought managing
                colleges is fun. I didn’t write a single line, but hey — I can
                explain the code like I did. It’s a full-stack Spring Boot +
                MySQL setup. I just forked the repo and added a README 😎.
              </p>
            </div>
            <a
              href="https://github.com/yourusername/college-management"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 text-black font-semibold mt-auto px-4 py-2 rounded-lg hover:bg-green-300 transition-colors w-fit text-sm sm:text-base inline-block"
            >
              🎓 Source Code
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900/90 text-white rounded-xl p-5 sm:p-6 shadow-md flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-green-300">
                ID Card Generator (Built by ChatGPT 💻)
              </h2>
              <p className="text-sm italic indent-4 sm:indent-6 mb-4 text-gray-300 leading-relaxed">
                Created entirely by ChatGPT while Me watched CornHub. A Simple
                JavaScript web app that auto-generates ID cards because doing it
                manually is too “low-level”. No real effort was harmed in the
                making of this project.
              </p>
            </div>
            <a
              href="https://github.com/Phenomenals619/ID-CARD-GENERATOR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 text-black font-semibold mt-auto px-4 py-2 rounded-lg hover:bg-green-300 transition-colors w-fit text-sm sm:text-base inline-block"
            >
              🪪 Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
