import { IoMdClose } from "react-icons/io";
import { sideBar } from "../constants/constant";

const Sidebar = ({ visibility, setVisibility }) => {
  // JS

  // Close sidebar
  const closeSidebar = () => setVisibility((prev) => !prev);

  // RENDER
  return (
    visibility && (
      <section className="relative h-[100vh] w-full">
        {/* Black background */}
        <div
          onClick={closeSidebar}
          className="fixed top-0 bg-black opacity-80 w-full h-full"
        ></div>
        {/* Sidebar */}
        <div
          className={`fixed top-0 flex-col bg-black h-[100vh] w-64 z-10 ${
            visibility ? "slide-in sidebar" : ""
          }`}
        >
          {/* Icon */}
          <div className="flex w-[100%] justify-end">
            <IoMdClose
              onClick={closeSidebar}
              size={46}
              className="text-white cursor-pointer h-24"
            />
          </div>
          {/* Menu */}
          <div className="flex flex-col items-center text-xl text-white h-[100vh] space-y-4 ">
            {sideBar.map((linkk, index) => (
              <p
                key={index}
                className="cursor-pointer hover:text-orangey transition"
              >
                <a href={linkk.url}>{linkk.name}</a>
              </p>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default Sidebar;
