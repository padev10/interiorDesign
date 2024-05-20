import { createContext, useState } from "react";

// Local
import {
  DesignService,
  FrontBelow,
  FrontCover,
  MenuBar,
  Sidebar,
  GalleryOne,
  Company,
  WordOffer,
  Extraordinary,
  Portfolio,
  Contact,
} from "./components";

// Exports
export const SidebarContext = createContext();

const App = () => {
  // JS
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // RENDER
  return (
    <div className="flex flex-col justify-center max-w-screen-xl mx-auto">
      <SidebarContext.Provider value={{ sidebarVisible, setSidebarVisible }}>
        <MenuBar />
        <FrontCover />
        <FrontBelow />
        <DesignService />
        <Extraordinary />
        <GalleryOne />
        <Company />
        <WordOffer />
        <Portfolio />
        <Contact />
        <Sidebar
          visibility={sidebarVisible}
          setVisibility={setSidebarVisible}
        />
      </SidebarContext.Provider>
    </div>
  );
};

export default App;
