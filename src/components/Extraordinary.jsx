// import React from 'react'

import { extraordinary } from "../constants/constant";

const jump = <br className="" />;

const Extraordinary = () => {
  return (
    <section className="bg-greyy px-8 py-14 mt-12">
      <p className="sm:text-5xl text-4xl font-semibold text-center sm:leading-[60px]">
        Extraordinary rooms with{jump} elegant, yet a rustic atmosphere
      </p>
      <div className="grid xl:grid-cols-3 gap-10 md:grid-cols-2 mt-12 justify-between ">
        {extraordinary.map((linkk) => (
          <div key={linkk.title} className="w-full bg-white">
            <img
              src={linkk.image}
              alt={linkk.alt}
              className="w-full h-[350px] object-cover"
            />

            <div className="flex flex-col items-center px-8 py-4 mt-6 w-full">
              <p className="sm:text-4xl text-2xl text-center font-medium">
                {linkk.title}
              </p>
              <p className="text-center text-3xl my-8 font-medium text-orangey uppercase">
                {linkk.m2}
              </p>
              <p className="px-4 md:px-0 text-lg text-center italic">
                {linkk.description}
              </p>
              <p className="hover:border-orangey transition cursor-pointer border-b-2 border-greyText font-semibold my-10 text-center w-[120px] text-lg">
                <a href={linkk.link}>{linkk.booking}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extraordinary;
