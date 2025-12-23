import React from "react";
import { formatViews } from "../utils/formatViews";
import { timeAgo } from "../utils/timeAgo";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  if (!snippet || !statistics) return null;

  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div
      className="
        group
        px-2
        py-2
        w-[308px]
        cursor-pointer
        rounded-xl
        transition-all
        duration-300
        hover:bg-gray-300
        hover:text-white
        hover:shadow-2xl
        hover:-translate-y-1
      "
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={thumbnails?.medium?.url}
          alt="thumbnail"
          className="
            w-full
            aspect-video
            object-cover
            transition-all
            duration-300
            group-hover:brightness-75
          "
        />
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-semibold text-sm leading-5 line-clamp-2 text-black hover:text-white">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          {channelTitle}
        </p>

        <p className="text-gray-400 text-xs">
          {formatViews(viewCount)} views • {timeAgo(publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
