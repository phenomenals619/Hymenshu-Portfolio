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
      className="min-h-screen bg-cover bg-center bg-no-repeat md:bg-fixed px-4 py-12 sm:px-6 md:p-10 flex items-center justify-center"
      style={{
        backgroundImage: `url(${Yinlin})`,
      }}
    >
      <div className="bg-blue-200/75 backdrop-blur-sm rounded-xl shadow-xl text-black w-full max-w-5xl p-5 sm:p-8 md:p-10 border border-white/30">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 text-center mb-6 sm:mb-8">
          My Skills (a.k.a. The Stuff That Keeps Me Dangerous)
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Frontend */}
          <div className="bg-white/40 sm:bg-transparent rounded-lg p-3 sm:p-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-950">
              Frontend (forced labor)
            </h2>
            <div className="flex gap-4 items-center flex-wrap">
              <FaHtml5 size={32} color="orangered" title="HTML5" />
              <FaCss3Alt size={32} color="dodgerblue" title="CSS3" />
            </div>
            <p className="text-sm mt-2 italic text-gray-800">
              I can make things *look* good... under protest.
            </p>
          </div>

          {/* Backend */}
          <div className="bg-white/40 sm:bg-transparent rounded-lg p-3 sm:p-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-950">
              Backend (my battlefield)
            </h2>
            <div className="flex gap-3 sm:gap-4 flex-wrap items-center">
              <FaJava size={32} color="red" title="Java" />
              <SiSpringboot size={32} color="green" title="Spring Boot" />
              <SiHibernate size={32} color="#59666C" title="Hibernate" />
              <SiApachemaven size={32} color="#C71A36" title="Maven" />
              <SiPostman size={32} color="#FF6C37" title="Postman" />
            </div>
            <p className="text-sm mt-2 italic text-gray-800">
              Where logic lives and nonsense dies.
            </p>
          </div>

          {/* Database */}
          <div className="bg-white/40 sm:bg-transparent rounded-lg p-3 sm:p-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-950">
              Database (my vault)
            </h2>
            <div className="flex gap-3 sm:gap-4 flex-wrap items-center">
              <SiMysql size={32} color="#00758F" title="MySQL" />
              <SiMongodb size={32} color="green" title="MongoDB" />
              <GrOracle size={32} color="darkred" title="Oracle" />
              <SiRedis size={32} color="#DC382D" title="Redis" />
              <FaDatabase size={32} title="Database" />
            </div>
            <p className="text-sm mt-2 italic text-gray-800">
              Queries so fast, even time gets jealous.
            </p>
          </div>

          {/* Dev Tools */}
          <div className="bg-white/40 sm:bg-transparent rounded-lg p-3 sm:p-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-950">
              Dev Tools (my utility belt)
            </h2>
            <div className="flex gap-3 sm:gap-4 flex-wrap items-center">
              <FaGithub size={32} title="GitHub" />
              <SiDocker size={32} color="#2496ED" title="Docker" />
              <SiLinux size={32} color="#000000" title="Linux" />
            </div>
            <p className="text-sm mt-2 italic text-gray-800">
              Where I automate pain and deploy dreams.
            </p>
          </div>

          {/* Data Analysis */}
          <div className="bg-white/40 sm:bg-transparent rounded-lg p-3 sm:p-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-950">
              Data Analysis (nerd mode)
            </h2>
            <div className="flex gap-3 sm:gap-4 flex-wrap items-center">
              <SiPython size={32} color="#3776AB" title="Python" />
              <SiPandas size={32} color="#150458" title="Pandas" />
              <SiNumpy size={32} color="#013243" title="NumPy" />
              <SiJupyter size={32} color="#F37726" title="Jupyter" />
              <SiScikitlearn size={32} color="#F7931E" title="Scikit-Learn" />
            </div>
            <p className="text-sm mt-2 italic text-gray-800">
              Where I slice, dice, and expose your data’s secrets.
            </p>
          </div>

          {/* Gyaan Peelna Section */}
          <div className="bg-white/40 sm:bg-transparent rounded-lg p-3 sm:p-0">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-950">
              Gyaan Peelna 📢
            </h2>
            <div className="bg-white/80 rounded-lg p-3 sm:p-4 text-xs sm:text-sm italic leading-relaxed shadow-sm text-gray-800">
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
