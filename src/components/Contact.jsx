import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => (
  <section className="flex flex-col bg-orangey">
    <div className="flex md:flex-row flex-col md:px-20 md:py-24 px-8 py-10 ">
      {/* Left side */}
      <div className="flex flex-col flex-1 space-y-10 p-8 bg-white">
        <p className="text-5xl font-semibold">Contacts</p>
        <p className="text-lg font-extralight">
          Use our contact form for all information requests or contact us
          directly using the contact information below.
        </p>
        <p className="text-lg font-extralight">
          Feel free to get in touch with us via email or phone
        </p>
      </div>
      {/* Right side */}
      <div className="flex flex-col flex-1 p-8 space-y-10 bg-white pb-12">
        <p className="text-4xl font-thin">Sign up for the newsletter</p>
        <p className="text-lg font-extralight">
          Want to be the first to read our news? Subscribe to the newsletter to
          keep abreast of all events.
        </p>
        <form className="flex md:flex-row flex-col gap-x-4 md:px-0 px-8 justify-center items-center h-[80px]">
          <input
            type="email"
            className="md:w-[300px] md:h-[60px] rounded-full p-4 bg-greyy"
            placeholder="Enter a valid email address"
            required
          />
          <button
            type="submit"
            className="rounded-full bg-orangey text-white font-semibold text-lg w-[180px] h-[70px] md:py-0 py-4 md:mt-0 mt-4 uppercase tracking-widest hover:bg-greyText transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <div className="flex md:flex-row flex-col text-white justify-start md:px-20 px-8 mb-24 md:space-y-0 space-y-10">
      <div className="flex flex-1 gap-8">
        <IoLocationSharp size={44} className="text-white" />
        <div className="leading-8 text-lg">
          <p className="md:text-3xl text-xl font-semibold mb-6">
            Our Office Location
          </p>
          <p className="md:w-[400px] w-[200px]">
            The Interior Design Studio Company
          </p>
          <p>The Courtyard, Al Quoz 1, London, UK</p>
        </div>
      </div>
      <div className="flex flex-1 gap-8">
        <FaPhoneAlt size={36} className="text-white" />
        <div>
          <p className="md:text-3xl text-xl font-semibold mb-6">
            Phone (Landline)
          </p>
          <div className="flex flex-col leading-8 text-lg">
            <p>+ 44 23 567 8987</p>
            <p>+ 44 25 252 3336</p>
          </div>
        </div>
      </div>
    </div>
    {/* Bottom */}
    <div className="flex justify-center items-center h-[400px] bg-darkGrey">
      <p className="text-center font-thin text-white md:px-0 px-4">
        Sample text. Click to select the text box. Click again or double
        <br /> click to start editing the text.
      </p>
    </div>
  </section>
);

export default Contact;
