import React from "react";
import carlo from '../assets/images/carlo.jpg'

const Project = () => {
  return (
    <div
      id="project"
      className='min-h-screen bg-[url("/assets/images/carlo.jpg")] bg-cover bg-center bg-no-repeat px-6 py-12'
      style={{
              backgroundImage: `url(${carlo})`,
            }}
    >
      <div className="bg-blue-200/50 rounded shadow-lg text-black max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-blue-950 mb-10">
          Projects 🚀
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-900/90 text-white rounded-lg p-6 shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                HeroShop (sort of mine 💀)
              </h2>
              <p className="text-sm italic indent-6 mb-4">
                Allegedly built by a friend... but somehow ended up on my
                GitHub. 🕵️‍♂️ It's an e-commerce site — React, Firebase, and a dash
                of mystery. I maintain it now, so technically it’s mine. Right?
              </p>
            </div>
            <a
              href="https://github.com/Phenomenals619/HeroShop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 text-black font-semibold mt-auto px-4 py-2 rounded hover:bg-green-300 transition w-fit"
            >
              🛒 Source Code
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900/90 text-white rounded-lg p-6 shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                College Management System (not mine... again)
              </h2>
              <p className="text-sm italic indent-6 mb-4">
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
              className="bg-green-400 text-black font-semibold mt-auto px-4 py-2 rounded hover:bg-green-300 transition w-fit"
            >
              🎓 Source Code
            </a>
          </div>

          {/* Project 3 */}
          {/* Project 3 */}
          <div className="bg-gray-900/90 text-white rounded-lg p-6 shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                ID Card Generator (Built by ChatGPT 💻)
              </h2>
              <p className="text-sm italic indent-6 mb-4">
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
              className="bg-green-400 text-black font-semibold mt-auto px-4 py-2 rounded hover:bg-green-300 transition w-fit"
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
