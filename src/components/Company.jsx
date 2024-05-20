import { pic14 } from "../../public/images";
import { company } from "../constants/constant";
import Button from "../utils/Button";
import { AiOutlineCheck } from "react-icons/ai";

const Company = () => (
  <section className="flex flex-col lg:flex-row bg-greyy p-12 md:px-20 px-8 gap-x-6">
    <div className="flex flex-col flex-1 w-full my-8">
      <p className="md:text-5xl text-4xl font-semibold">Company</p>
      <p className="text-xl my-12 italic font-medium">
        Elementum eu facilisis sed odio morbi quis
      </p>
      <p className="text-xl leading-[48px]">
        Massa ultricies mi quis hendrerit dolor magna eget est. Lacinia at quis
        risus sed vulputate odio ut enim blandit. Auctor elit sed vulputate mi
        sit. Massa tincidunt dui ut ornare lectus. Turpis egestas sed tempus
        urna et. Diam vulputate ut pharetra sit amet aliquam id. Nisi est sit
        amet facilisis. In nisl nisi scelerisque eu ultrices vitae. Massa
        ultricies mi quis hendrerit dolor magna eget est. Lacinia at quis risus
        sed vulputate odio ut enim blandit. Auctor elit sed vulputate mi sit.
      </p>
      <div className="my-8">
        <Button name="Contact Us" url="#" />
      </div>
    </div>
    <div className="flex flex-col lg:w-[450px] p-8 bg-white">
      <div>
        {company.map((linkk, index) => (
          <div
            key={index}
            className="flex justify-start pl-6 p-2 gap-4 w-full items-center"
          >
            <AiOutlineCheck size={22} />
            <p className="text-2xl">{linkk.name}</p>
          </div>
        ))}
      </div>
      {/* Image */}
      <img src={pic14} alt="computer" className="p-6" />
    </div>
  </section>
);

export default Company;
