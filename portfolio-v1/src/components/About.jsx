import React from "react";
import changli from "../assets/images/changli.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen bg-cover bg-center bg-no-repeat bg-fixed flex justify-end items-center p-6"
      style={{
        backgroundImage: `url(${changli})`,
      }}
    >
      <div className="bg-blue-200/50 rounded shadow-md text-black max-w-md p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-4 text-center">
          About Hymenshu 😎
        </h1>
        <p className="text-base italic indent-6 mb-3">
          I’m Hymenshu – a proud Sigma backend developer. I don’t do frontend.
          Buttons scare me. CSS gives me nightmares. If you ever see me writing
          {" <div> "}, just know it’s my evil twin.
        </p>
        <p className="text-base italic indent-6 mb-3">
          While others waste time choosing fonts and colors, I’m in the backend
          trenches – optimizing queries, building APIs, and making sure your
          fancy React UI actually works.
        </p>
        <p className="text-base italic indent-6">
          They say “frontend is important” – I say “real men return 200 OK.” If
          you want design, call a decorator. If you want performance, call me.
        </p>
      </div>
    </div>
  );
};

export default About;
