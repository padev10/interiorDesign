// import React from 'react'

import { gallery } from "../constants/constant";

const Portfolio = () => (
  <section className="flex flex-col mt-12 pb-16 bg-greyy items-center">
    <p className="text-center md:text-6xl text-4xl font-semibold py-24">
      Porfolio
    </p>
    <hr className="border-[0,1px] xl:w-[1000px] w-[70%]  border-black border-opacity-50" />
    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 md:px-28 px-6 mt-24">
      {gallery.map((linkk, index) => (
        <img
          key={index}
          src={linkk.image}
          alt={linkk.alt}
          className="md:w-[400px] md:h-[300px] object-cover hover:brightness-75 transition duration-[400ms] ease-in-out cursor-pointer"
        />
      ))}
    </div>
    <p className="px-8 font-thin text-center my-16 md:text-4xl text-2xl">
      With experience across the residential, commercial and retail sectors, our
      people bring deep and complementary skills.
    </p>
  </section>
);

export default Portfolio;
