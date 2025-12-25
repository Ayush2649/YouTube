const WatchVideo = ({ videoId }) => {
  if (!videoId) return null;

  return (
    <iframe
      className="w-full aspect-video rounded-xl"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
      title="YouTube player"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  );
};

export default WatchVideo;
