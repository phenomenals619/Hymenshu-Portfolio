import React from "react";
import changli from "../assets/images/changli.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-cover bg-center bg-no-repeat md:bg-fixed flex justify-center md:justify-end items-center px-4 py-12 sm:px-8 md:p-12"
      style={{
        backgroundImage: `url(${changli})`,
      }}
    >
      <div className="bg-blue-200/70 backdrop-blur-sm rounded-xl shadow-xl text-black w-full max-w-md p-6 sm:p-8 border border-white/30">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 text-center">
          About Hymenshu 😎
        </h1>
        <p className="text-sm sm:text-base italic indent-4 sm:indent-6 mb-3 leading-relaxed">
          I’m Hymenshu – a proud Sigma backend developer. I don’t do frontend.
          Buttons scare me. CSS gives me nightmares. If you ever see me writing
          {" <div> "}, just know it’s my evil twin.
        </p>
        <p className="text-sm sm:text-base italic indent-4 sm:indent-6 mb-3 leading-relaxed">
          While others waste time choosing fonts and colors, I’m in the backend
          trenches – optimizing queries, building APIs, and making sure your
          fancy React UI actually works.
        </p>
        <p className="text-sm sm:text-base italic indent-4 sm:indent-6 leading-relaxed">
          They say “frontend is important” – I say “real men return 200 OK.” If
          you want design, call a decorator. If you want performance, call me.
        </p>
      </div>
    </div>
  );
};

export default About;

