import { useEffect, useState } from "react";
import { GOOGLE_API_KEY as API_KEY } from "../utils/constants";

const useVideoDetails = (videoId) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (!videoId) return;

    const fetchVideo = async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      );
      const data = await res.json();
      setVideo(data.items[0]);
    };

    fetchVideo();
  }, [videoId]);

  return video;
};

export default useVideoDetails;
