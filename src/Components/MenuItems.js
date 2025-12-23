import React from "react";
import {
  MdHome,
  MdSubscriptions,
  MdHistory,
  MdPlaylistPlay,
  MdWatchLater,
  MdThumbUp,
  MdVideoLibrary,
  MdSettings,
  MdHelp,
  MdFeedback,
  MdFlag,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MenuItems = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="text-sm">
      {/* Home */}
      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdHome size={22} />
        <span className="font-medium"><Link to="/">Home</Link></span>
      </div>

      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <SiYoutubeshorts size={20} />
        <span className="font-medium">Shorts</span>
      </div>

      <div className="my-3 h-px bg-gray-300"></div>

      {/* Subscriptions */}
      <h1 className="px-4 mb-2 font-semibold text-gray-600">Subscriptions</h1>

      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdSubscriptions size={22} />
        <span>Music</span>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdSubscriptions size={22} />
        <span>Sports</span>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdSubscriptions size={22} />
        <span>News</span>
      </div>

      <div className="my-3 h-px bg-gray-300"></div>

      {/* You */}
      <h1 className="px-4 mb-2 font-semibold text-gray-600">You</h1>

      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdHistory size={22} />
        <span>History</span>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdPlaylistPlay size={22} />
        <span>Playlists</span>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdWatchLater size={22} />
        <span>Watch Later</span>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdThumbUp size={22} />
        <span>Liked Videos</span>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdVideoLibrary size={22} />
        <span>Your Videos</span>
      </div>

      <div className="my-3 h-px bg-gray-300"></div>

      {/* Settings */}
      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdSettings size={22} />
        <span>Settings</span>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdFlag size={22} />
        <span>Report History</span>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdHelp size={22} />
        <span>Help</span>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <MdFeedback size={22} />
        <span>Send Feedback</span>
      </div>

      <p className="text-gray-500 px-4 mt-4 text-xs">© 2025 Google LLC</p>
    </div>
  );
};

export default MenuItems;
