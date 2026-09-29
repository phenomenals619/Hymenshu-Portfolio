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
      className="min-h-screen bg-cover bg-center bg-fixed p-6 flex items-center justify-center"
      style={{
        backgroundImage: `url(${Yinlin})`,
      }}
    >
      <div className="bg-blue-200/50 rounded shadow-md text-black w-full max-w-5xl p-8">
        <h1 className="text-3xl font-bold text-blue-950 text-center mb-8">
          My Skills (a.k.a. The Stuff That Keeps Me Dangerous)
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Frontend (forced labor)
            </h2>
            <div className="flex gap-4 items-center">
              <FaHtml5 size={35} color="orangered" />
              <FaCss3Alt size={35} color="dodgerblue" />
            </div>
            <p className="text-sm mt-2 italic">
              I can make things *look* good... under protest.
            </p>
          </div>

          {/* Backend */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Backend (my battlefield)
            </h2>
            <div className="flex gap-4 flex-wrap items-center">
              <FaJava size={35} color="red" />
              <SiSpringboot size={35} color="green" />
              <SiHibernate size={35} color="#59666C" />
              <SiApachemaven size={35} color="#C71A36" />
              <SiPostman size={35} color="#FF6C37" />
            </div>
            <p className="text-sm mt-2 italic">
              Where logic lives and nonsense dies.
            </p>
          </div>

          {/* Database */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Database (my vault)</h2>
            <div className="flex gap-4 flex-wrap items-center">
              <SiMysql size={35} color="#00758F" />
              <SiMongodb size={35} color="green" />
              <GrOracle size={35} color="darkred" />
              <SiRedis size={35} color="#DC382D" />
              <FaDatabase size={35} />
            </div>
            <p className="text-sm mt-2 italic">
              Queries so fast, even time gets jealous.
            </p>
          </div>

          {/* Dev Tools */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Dev Tools (my utility belt)
            </h2>
            <div className="flex gap-4 flex-wrap items-center">
              <FaGithub size={35} />
              <SiDocker size={35} color="#2496ED" />
              <SiLinux size={35} color="#000000" />
            </div>
            <p className="text-sm mt-2 italic">
              Where I automate pain and deploy dreams.
            </p>
          </div>

          {/* Data Analysis */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Data Analysis (nerd mode)
            </h2>
            <div className="flex gap-4 flex-wrap items-center">
              <SiPython size={35} color="#3776AB" />
              <SiPandas size={35} color="#150458" />
              <SiNumpy size={35} color="#013243" />
              <SiJupyter size={35} color="#F37726" />
              <SiScikitlearn size={35} color="#F7931E" />
            </div>
            <p className="text-sm mt-2 italic">
              Where I slice, dice, and expose your data’s secrets.
            </p>
          </div>
          {/* Gyaan Peelna Section */}

          <div>
            <h2 className="text-xl font-semibold mb-2">Gyaan Peelna 📢</h2>
            <div className="bg-white/70 rounded p-4 text-sm italic leading-relaxed shadow">
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
