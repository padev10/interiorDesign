// import React from 'react'

import { designService } from "../constants/constant";
import Button from "../utils/Button";

const jump = <br className="sm:block hidden" />;
const jump1 = <br className="lg:hidden" />;

const DesignService = () => {
  return (
    <section className="mt-12">
      <div className="flex flex-col justify-center items-center p-4 mt-16">
        <p className="sm:text-5xl text-4xl font-semibold text-center sm:leading-[60px]">
          Complete Interior{jump1} Design Service
        </p>
        <p className="text-center mt-12 italic text-greyText font-normal leading-7 xs:px-12 px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut{jump} labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco{jump} laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 py-2 mt-14 gap-y-14">
        {designService.map((linkk) => (
          <div
            key={linkk.title}
            className="flex flex-col items-center justify-start"
          >
            {/* Title */}
            <p className="text-4xl font-semibold">{linkk.title}</p>
            {/* Image */}
            <img
              src={linkk.picture}
              alt={linkk.alt}
              className="w-[350px] h-[250px] mt-8 object-cover"
            />
            {/* Paragraph */}
            <p className="xl:px-12 md:px-20 sm:px-40 px-4 text-center text-lg font-thin mt-8">
              {linkk.descrption}
            </p>
            {/* MORE */}
            <span className="hover:border-orangey transition cursor-pointer border-b-2 border-black font-semibold mt-8">
              <a href={linkk.link}>{linkk.more}</a>
            </span>
          </div>
        ))}
      </div>
      {/* Button */}
      <div className="flex justify-center w-full my-20 ">
        <Button
          name="Learn More"
          url="#"
        />
      </div>
    </section>
  );
};

export default DesignService;
