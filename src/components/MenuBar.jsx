import { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";

// Local
import { SidebarContext } from "../App";

const MenuBar = () => {
  // JS
  const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);

  // Render
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center px-2 md:px-6 xs:px-8 h-24 w-[100%]">
        <img
          src="../../public/logos/default-logo.png"
          alt="logo"
          className="w-[72px] h-[40px]"
        />
        {/* Menu icom */}
        <AiOutlineMenu
          size={36}
          className="cursor-pointer"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        />
      </div>
    </nav>
  );
};

export default MenuBar;
