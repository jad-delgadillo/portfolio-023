import React from "react";

export default function HeroTitle() {
  return (
    <>
      <h1 className="cursor-default p-7 text-[11vw] font-medium leading-tight md:p-0 md:text-[4vw]  ">
        <a className="group relative">
          <span className="absolute hidden h-[100%] w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full md:flex"></span>
          <span className="relative transition-all duration-300 ease-out hover:text-orange-500 group-hover:w-full md:hover:text-white ">
            {" "}
            Hello👋 I&#39;m Jorge,{" "}
          </span>
        </a>
        <br />
        <span className="group relative transition-all duration-300 ease-out hover:text-indigo-600 hover:underline-offset-2 group-hover:w-full">
          {" "}
          a
          <span className="relative transition-all duration-300 ease-out hover:underline-offset-2 group-hover:w-full group-hover:text-indigo-600">
            {" "}
            Full-Stack developer
          </span>{" "}
          <span className="relative transition-all duration-300 ease-out hover:text-indigo-600 hover:underline-offset-2 group-hover:w-full">
            {" "}
          </span>{" "}
        </span>{" "}
        <br />
        <span className="group relative  transition-all duration-300 ease-out hover:text-red-500 group-hover:w-full">
          {" "}
          that loves to
          <span className="relative transition-all duration-300 ease-out group-hover:text-red-500">
            {" "}
            code
          </span>{" "}
        </span>{" "}
        <br />
        <span className="group relative transition-all duration-300 ease-out hover:text-blue-700 group-hover:w-full">
          {" "}
          and find{" "}
          <span className="rounded-xl px-2 ring-green-500 transition-all duration-300 ease-out group-hover:text-green-500 group-hover:ring-2">
            solutions
          </span>
          <span className="rounded-xl transition-all duration-300 ease-out group-hover:text-blue-700">
            {" "}
            to your
          </span>
          <span className="rounded-xl transition-all duration-300 ease-out group-hover:text-blue-700">
            {" "}
            problems.
          </span>
        </span>{" "}
      </h1>
    </>
  );
}
