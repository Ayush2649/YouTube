const GOOGLE_API_KEY = "AIzaSyB516bro5KNR8rCmD4Figw88HUKDpogv_M";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY +
  "&maxResults=50";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
