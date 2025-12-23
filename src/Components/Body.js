import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      
      {/* Sidebar */}
      {isMenuOpen && (
        <div className="w-48 flex-shrink-0 border-r">
          <SideBar />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;