import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchVideo from "./WatchVideo";
import VideoMeta from "./VideoMeta";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex px-6 py-4">
      {/* LEFT SECTION */}
      <div className="flex-1 max-w-5xl">
        <WatchVideo videoId={videoId} />
        <VideoMeta videoId={videoId} />
        <CommentsContainer videoId={videoId} />
      </div>

      {/* RIGHT SECTION (Live Chat) */}
      <div className="hidden lg:block w-[400px] ml-6">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;

