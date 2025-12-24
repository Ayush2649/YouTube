import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const timer = setTimeout(() => {
      getResultSearch();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getResultSearch = async () => {
    if (!searchQuery) return;

    try {
      const data = await fetch(
        `http://localhost:5000/api/search?q=${searchQuery}`
      );
      const json = await data.json();
      setSuggestions(json[1]);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Search API failed (CORS)", error);
    }
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
      <div className="relative flex items-center w-full max-w-xl">
        {/* Search box */}
        <div className="flex w-full border border-gray-400 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => { if(searchQuery) setShowSuggestions(true) }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="flex-1 px-4 py-2 outline-none"
          />

          <button className="px-6 bg-gray-100 border-l border-gray-400">
            <img
              className="h-5 w-5 opacity-70"
              alt="search-btn"
              src="https://www.svgrepo.com/show/7109/search.svg"
            />
          </button>
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions && (
          <div
            className="
      absolute
      top-full
      left-0
      w-full
      bg-white
      rounded-xl
      shadow-lg
      border
      border-gray-200
      mt-2
      z-50
    "
          >
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 hover:rounded-xl cursor-pointer flex items-center gap-2"
                  onMouseDown={() => {
                    setSearchQuery(s);
                    setShowSuggestions(false);
                  }}
                >
                  <img
                    className="h-5 w-5 opacity-70"
                    alt="search-btn"
                    src="https://www.svgrepo.com/show/7109/search.svg"
                  />{" "}
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
