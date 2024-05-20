// import React from 'react'

import { pic10, pic11, pic12, pic13 } from "../../public/images";

const jump = <br className="xs:hidden" />;

const GalleryOne = () => {
  return (
    <section className="grid lg:grid-cols-2 px-8 py-20 gap-4">
      <div className="flex flex-col w-full lg:flex-row justify-between">
        <p className="text-lg leading-[30px] pr-4 lg:mb-0 mb-8">
          Blandit aliquam etiam
          {jump} erat velit scelerisque
          {jump} in dictum. Metus
          {jump}
          vulputate eu
          {jump} scelerisque felis
          {jump} imperdiet proin
          {jump} fermentum leo. Vitae
          {jump}
          aliquet nec.
        </p>
        <img
          src={pic10}
          alt="man on chair"
          className="lg:w-[350px] md:h-[400px] xs:h-[250px] h-[630px] w-full object-cover"
        />
      </div>
      <img
        src={pic11}
        alt="room white sofa"
        className="object-cover lg:h-[400px] md:h-[400px] w-full h-full"
      />
      <img
        src={pic12}
        alt="room blue sofa"
        className="object-cover lg:h-[400px] md:h-[400px] w-full h-full"
      />
      <div className="flex flex-col w-full lg:flex-row justify-between">
        <img
          src={pic13}
          alt="man on chair"
          className="lg:w-[350px] md:h-[400px] xs:h-[250px] h-[630px] w-full object-cover"
        />
        <div className="flex flex-col px-4 lg:text-lg justify-center">
          <p className=" leading-[30px] my-4 lg:mt-0 mt-8">
            There are many things that
            {jump} make a space beautiful.
            {jump}
            Balance and proportion.
            {jump} Neque convallis a cras
            {jump}
            semper. Urna nec tincidunt
            {jump} praesent semper feugiat nibh.
          </p>
          <p className="border-black border-b-2 w-[45px] text-center my-6 hover:border-orangey cursor-pointer font-semibold">
            MORE
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryOne;
