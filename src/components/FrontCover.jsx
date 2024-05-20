import { MdPlayArrow } from "react-icons/md";
import { miss } from "../../public/images";
import Button from "../utils/Button";

const jump = <br className="lg:hidden" />;

const FrontCover = () => {
  return (
    <section className="flex xs:flex-col-reverse lg:flex-row bg-greyy">
      <img src={miss} alt="miss" className="lg:w-[50%] lg:mt-0 mt-10" />
      <div className="flex flex-col justify-center w-[100%] p-6 pl-14">
        {/* Title */}
        <p className="text-6xl font-semibold mb-6 mt-8">
          The full-service{jump} interior design studio
        </p>
        {/* Two others */}
        <div className="flex items-center p-2">
          <MdPlayArrow size={36} className="text-orangey" />
          <p className="text-2xl font-light">Duis aute irure dolor</p>
        </div>
        <div className="flex items-center p-2">
          <MdPlayArrow size={36} className="text-orangey" />
          <p className="text-2xl font-light">Ut enim ad minim</p>
        </div>
        <Button name="Contact Us" url="#" />
      </div>
    </section>
  );
};

export default FrontCover;
