import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button
        className="px-4 py-2
        mt-2
        bg-gray-100
        rounded-lg
        text-sm
        font-medium
        whitespace-nowrap
        flex-shrink-0
        hover:bg-black hover:text-white"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
