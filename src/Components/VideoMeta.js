import useVideoDetails from "../hooks/useVideoDetails";
import useChannelDetails from "../hooks/useChannelDetails";
import { useState } from "react";

const VideoMeta = ({ videoId }) => {
  const video = useVideoDetails(videoId);
  const channel = useChannelDetails(video?.snippet?.channelId);
  const [showMore, setShowMore] = useState(false);

  if (!video || !channel) return null;

  const { snippet, statistics } = video;
  const { title, description, publishedAt, channelTitle } = snippet;
  const { viewCount, likeCount } = statistics;

  const { thumbnails, statistics: channelStats } = channel;

  return (
    <div className="mt-4">
      <h1 className="text-xl font-semibold">{title}</h1>

      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-3">
          <img
            src={
              'https://www.gravatar.com/avatar/?d=mp&s=200'
            }
            alt="channel"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <p className="font-semibold text-sm">{channelTitle}</p>
            <p className="text-xs text-gray-500">
              {Number(channelStats.subscriberCount).toLocaleString()}{" "}
              subscribers
            </p>
          </div>

          <button className="ml-4 bg-black text-white px-4 py-2 rounded-full text-sm">
            Subscribe
          </button>
        </div>

        <div className="flex gap-2">
          <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">
            👍 {Number(likeCount).toLocaleString()}
          </button>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">
            👎
          </button>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">
            Share
          </button>
        </div>
      </div>

      <div className="mt-4 bg-gray-100 rounded-xl p-4 text-sm">
        <p className="font-semibold mb-1">
          {Number(viewCount).toLocaleString()} views •{" "}
          {new Date(publishedAt).toDateString()}
        </p>
        <div className="mt-2 bg-gray-100 rounded-xl text-sm">
          <p
            className={`whitespace-pre-line text-gray-800 ${
              showMore ? "" : "line-clamp-3"
            }`}
          >
            {description}
          </p>

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-2 font-semibold text-sm"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoMeta;
