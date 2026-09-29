import React from "react";
import Yinlin from "../assets/images/Yinlin.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiHibernate,
  SiApachemaven,
  SiLinux,
  SiPandas,
  SiNumpy,
  SiPython,
  SiJupyter,
  SiScikitlearn,
} from "react-icons/si";
import { GrOracle } from "react-icons/gr";

const Skill = () => {
  return (
    <div
      id="skills"
      className="min-h-screen bg-cover bg-center md:bg-fixed px-4 sm:px-6 py-16 flex items-center justify-center"
      style={{
        backgroundImage: `url(${Yinlin})`,
      }}
    >
      <div className="bg-blue-200/80 sm:bg-blue-200/60 backdrop-blur-xs rounded-lg shadow-lg text-black w-full max-w-5xl p-5 sm:p-8 md:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-950 text-center mb-6 sm:mb-8">
          My Skills (a.k.a. The Stuff That Keeps Me Dangerous)
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-white/40 sm:bg-transparent rounded-lg p-4 sm:p-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Frontend (forced labor)
            </h2>
            <div className="flex gap-4 items-center flex-wrap">
              <FaHtml5 size={32} color="orangered" />
              <FaCss3Alt size={32} color="dodgerblue" />
            </div>
            <p className="text-xs sm:text-sm mt-2 italic">
              I can make things *look* good... under protest.
            </p>
          </div>

          {/* Backend */}
          <div className="bg-white/40 sm:bg-transparent rounded-lg p-4 sm:p-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Backend (my battlefield)
            </h2>
            <div className="flex gap-3 sm:gap-4 flex-wrap items-center">
              <FaJava size={32} color="red" />
              <SiSpringboot size={32} color="green" />
              <SiHibernate size={32} color="#59666C" />
              <SiApachemaven size={32} color="#C71A36" />
              <SiPostman size={32} color="#FF6C37" />
            </div>
            <p className="text-xs sm:text-sm mt-2 italic">
              Where logic lives and nonsense dies.
            </p>
          </div>

          {/* Database */}
          <div className="bg-white/40 sm:bg-transparent rounded-lg p-4 sm:p-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Database (my vault)</h2>
            <div className="flex gap-3 sm:gap-4 flex-wrap items-center">
              <SiMysql size={32} color="#00758F" />
              <SiMongodb size={32} color="green" />
              <GrOracle size={32} color="darkred" />
              <SiRedis size={32} color="#DC382D" />
              <FaDatabase size={32} />
            </div>
            <p className="text-xs sm:text-sm mt-2 italic">
              Queries so fast, even time gets jealous.
            </p>
          </div>

          {/* Dev Tools */}
          <div className="bg-white/40 sm:bg-transparent rounded-lg p-4 sm:p-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Dev Tools (my utility belt)
            </h2>
            <div className="flex gap-3 sm:gap-4 flex-wrap items-center">
              <FaGithub size={32} />
              <SiDocker size={32} color="#2496ED" />
              <SiLinux size={32} color="#000000" />
            </div>
            <p className="text-xs sm:text-sm mt-2 italic">
              Where I automate pain and deploy dreams.
            </p>
          </div>

          {/* Data Analysis */}
          <div className="bg-white/40 sm:bg-transparent rounded-lg p-4 sm:p-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Data Analysis (nerd mode)
            </h2>
            <div className="flex gap-3 sm:gap-4 flex-wrap items-center">
              <SiPython size={32} color="#3776AB" />
              <SiPandas size={32} color="#150458" />
              <SiNumpy size={32} color="#013243" />
              <SiJupyter size={32} color="#F37726" />
              <SiScikitlearn size={32} color="#F7931E" />
            </div>
            <p className="text-xs sm:text-sm mt-2 italic">
              Where I slice, dice, and expose your data’s secrets.
            </p>
          </div>

          {/* Gyaan Peelna Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Gyaan Peelna 📢</h2>
            <div className="bg-white/70 rounded-lg p-4 text-xs sm:text-sm italic leading-relaxed shadow">
              <p className="mb-2">
                “React se toh duniya chalta hai, par backend se hi duniya bacha
                hai.”
              </p>
              <p className="mb-2">
                “Code likho aise jaise tumhare future junior tumhe gaali na de.”
              </p>
              <p className="mb-2">
                “Every time you console.log in prod, a backend dev cries.”
              </p>
              <p>“Frameworks aate jaate rahenge, par logic amar hai.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

