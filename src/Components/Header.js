import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col items-center px-4 h-14 shadow-lg">
      <div className="flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer"
          alt="Hamburger-Menu"
          src="https://imgs.search.brave.com/6xhLbJHbHk89dQMljUV-i-W2RgOxY-biyARzH07cw_s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/NTAxLzk4OC9zbWFs/bC9oYW1idXJnZXIt/bWVudS1iYXItZmxh/dC1pY29uLWZvci1h/cHBzLWFuZC13ZWJz/aXRlcy13ZWJzaXRl/LW5hdmlnYXRpb24t/aGFtYnVyZ2VyLW1l/bnUtaWNvbnMtdmVj/dG9yLmpwZw"
        />
        <a href="/">
          <img
            className="h-6 ml-4"
            alt="Youtube Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="flex items-center w-full max-w-xl rounded-full border border-gray-600 overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className="
      flex-1
      px-4
      bg-transparent
      text-black
      placeholder-gray-400
      focus:outline-none
    "
        />

        <button
          className="
    h-9
    px-4
    border-l border-gray-400
    bg-gray-100
    flex items-center justify-center
  "
        >
          <img
            className="h-5 w-5 object-contain opacity-70"
            alt="search-btn"
            src="https://www.svgrepo.com/show/7109/search.svg"
          />
        </button>
      </div>

      <div>
        <img
          className="w-10 h-10 cursor-pointer ml-auto"
          alt="User Icon"
          src="https://imgs.search.brave.com/u4jVFIwegQrJWrijo-ejVSE2j22nfeprrCXIv00f8J0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/MjMzLzQ5NC9zbWFs/bC91c2VyLWFjY291/bnQtY2lyY2xlLWds/eXBoLWljb24tdXNl/ci1wcm9maWxlLXBp/Y3R1cmUtdXNlcnBp/Yy1zaWxob3VldHRl/LXN5bWJvbC1uZWdh/dGl2ZS1zcGFjZS1p/c29sYXRlZC1pbGx1/c3RyYXRpb24tdmVj/dG9yLmpwZw"
        />
      </div>
    </div>
  );
};

export default Header;
