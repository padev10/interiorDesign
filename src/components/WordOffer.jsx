import { BiSolidQuoteRight } from "react-icons/bi";

import Button from "../utils/Button";
import { pic15 } from "../../public/images";

const WordOffer = () => (
  <section className="flex lg:flex-row flex-col md:px-28 md:py-20 px-6 gap-4 mt-12">
    <div className="flex flex-col flex-1 lg:justify-start lg:items-start justify-center">
      <img
        src={pic15}
        alt="woman with poster"
        className="lg:w-[400px] lg:h-[400px] object-cover"
      />
      <p className="lg:w-[350px] md:text-4xl text-2xl font-medium my-12 md:leading-[48px] leading-[38px] ">
        We offer work at all stages until the completion of the project
      </p>
      <p className="text-lg font-thin lg:mb-0 mb-10">
        Sample text. Click to select the text box. Click again or double click
        to start editing the text.
      </p>
    </div>
    <div className="flex-1">
      <div className="bg-greyy p-12">
        <BiSolidQuoteRight size={76} className="text-orangey" />
        <p className="mt-6 text-2xl font-thin leading-[42px]">
          “I think a good designer is an anthropologist - it requires a certain
          amount of daring and erudition; to take risks, stimulate the senses,
          and explore personal style. You can tell the designers who work
          viscerally - their work is uplifting in its experiential quality
          which, to me, is entirely the point of design”
        </p>
      </div>
      <div className="flex flex-col items-start md:px-12 my-12 text-lg font-thin">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        <Button
          name="Learn More"
          url="#"
        />
      </div>
    </div>
  </section>
);

export default WordOffer;
