import React from "react";
import gojo from "../assets/images/gojo.jpeg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-[calc(100vh-69px)] bg-cover bg-center bg-no-repeat flex justify-center md:justify-end items-center px-4 py-12 sm:px-8 md:px-16"
      style={{ backgroundImage: `url(${gojo})` }}
    >
      <div className="w-full max-w-md bg-blue-200/75 backdrop-blur-sm rounded-xl shadow-xl text-black p-5 sm:p-7 border border-white/30 my-4">
        <h1 className="text-3xl sm:text-4xl text-center font-bold text-blue-950 mb-4 tracking-wider">
          CONTACT
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-yellow-100/90 rounded-lg p-5 sm:p-6 flex flex-col gap-4 shadow-sm"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold text-gray-800 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="border border-green-700 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold text-gray-800 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="border border-green-700 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-semibold text-gray-800 text-sm">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Write your message here..."
              className="border border-green-700 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-600 bg-white resize-y"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-md transition-colors cursor-pointer shadow hover:shadow-md active:scale-98 text-center mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

