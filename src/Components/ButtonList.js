import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Sports",
    "Gaming",
    "News",
    "Movies",
    "Live",
    "Fashion",
    "Learning",
    "Spotlight",
    "360° Video",
    "Comedy",
    "Cooking",
    "Podcast",
    "Travel",
    "Documentary",
    "Science & Technology",
  ];
  return (
    <div className="flex gap-3 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
