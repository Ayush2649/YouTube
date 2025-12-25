import { useEffect, useState } from "react";
import { GOOGLE_API_KEY as API_KEY } from "../utils/constants";

const useChannelDetails = (channelId) => {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    if (!channelId) return;

    const fetchChannel = async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
      );
      const data = await res.json();
      setChannel(data.items[0]);
    };

    fetchChannel();
  }, [channelId]);

  return channel;
};

export default useChannelDetails;
