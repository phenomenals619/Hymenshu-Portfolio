import React from "react";
import gojo from "../assets/images/gojo.jpeg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="px-4 sm:px-8 md:px-20 py-12 min-h-[calc(100vh-69px)] bg-cover bg-center flex justify-center md:justify-end items-center"
      style={{ backgroundImage: `url(${gojo})` }}
    >
      <div className="w-full max-w-md bg-blue-200/80 sm:bg-blue-200/50 backdrop-blur-xs rounded-lg shadow-lg text-black p-4 sm:p-6">
        <h1 className="text-3xl sm:text-4xl pt-2 text-center font-bold text-blue-950 mb-4">
          CONTACT
        </h1>
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="bg-yellow-100/90 rounded-md p-4 sm:p-5 flex flex-col gap-4 shadow-sm"
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-800">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-green-700 bg-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-800">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-green-700 bg-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-800">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="border border-green-700 bg-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-200 shadow cursor-pointer mt-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

