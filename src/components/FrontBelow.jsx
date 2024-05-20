// import React from 'react'

// Local
import { room } from "../../public/images";
import { frontBelow } from "../constants/constant";

const FrontBelow = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse gap-4 bg-greyy p-12 pt-20">
      <div className="flex flex-col flex-1 justify-between">
        <p className="lg:text-6xl text-5xl font-medium xl:mt-0 mt-14">
          We believe the most beautiful spaces are those with soul.
        </p>
        <div className="grid md:grid-cols-2 gap-4 xl:mt-0 mt-14">
          {frontBelow.map((linkk, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-2 items-center w-[100%] bg-white py-12"
            >
              <img src={linkk.icon} alt={linkk.alt} className="w-[80px] mb-4" />
              <p className="text-2xl text-greyText">{linkk.name}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        src={room}
        alt="room"
        className="lg:flex-1 lg:w-[438px] lg:h-auto h-[630px] object-cover"
      />
    </section>
  );
};

export default FrontBelow;
