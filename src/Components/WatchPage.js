import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchVideo from "./WatchVideo";
import VideoMeta from "./VideoMeta";
import Comments from "./Comments";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  // 🔥 AUTO-CLOSE SIDEBAR WHEN WATCH PAGE LOADS
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex px-6 py-4">
      <div className="w-full max-w-5xl">
        <WatchVideo videoId={videoId} />
        <VideoMeta videoId={videoId} />
        <Comments videoId={videoId} />
      </div>

      <div className="hidden lg:block w-[400px] ml-6"></div>
    </div>
  );
};

export default WatchPage;
