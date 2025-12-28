import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center py-2">
      <img
        className="h-8"
        alt="user-img"
        src="https://imgs.search.brave.com/u4jVFIwegQrJWrijo-ejVSE2j22nfeprrCXIv00f8J0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/MjMzLzQ5NC9zbWFs/bC91c2VyLWFjY291/bnQtY2lyY2xlLWds/eXBoLWljb24tdXNl/ci1wcm9maWxlLXBp/Y3R1cmUtdXNlcnBp/Yy1zaWxob3VldHRl/LXN5bWJvbC1uZWdh/dGl2ZS1zcGFjZS1p/c29sYXRlZC1pbGx1/c3RyYXRpb24tdmVj/dG9yLmpwZw"
      />
      <span className="font-bold px-2 text-lg">{name}</span>
      <p className="text-gray-400">{message}</p>
    </div>
  );
};

export default ChatMessage;
