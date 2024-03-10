import VideoList from "./components/VideoQue/VideoList/VideoList";
import NavHeader from "./components/NavHeader/NavHeader";
import CommentsSection from "./components/CommentsFolder/CommentsSection/CommentsSection";
import VideoPlayer from "./components/VideoActive/Videoplayer/VideoPlayer";
import { useState } from "react";
import VideoDetails from "./Data/video-details.json";
import VideoInfo from "./components/VideoActive/VideoInfo/VideoInfo";
import "./App.scss";

export function App() {
  const [CurrentVideo, setCurrentVideo] = useState(VideoDetails[0]);
  // const [selectedScientist, setSelectedScientist] = useState(details[1]);
  function getVideoFromId(id) {
    const detail = VideoDetails.find((deet) => deet.id === id);
    // console.log(detail);
    setCurrentVideo(detail);
  }

  return (
    <>
      <NavHeader />
      <VideoPlayer image={CurrentVideo.image} />
      <div className="video-playing">
        <VideoInfo key={CurrentVideo.id} videoData={CurrentVideo} />
        <CommentsSection />
      </div>
      <VideoList
        videos={VideoDetails.filter((video) => video.id !== CurrentVideo.id)}
        setVideo={getVideoFromId}
      />
    </>
  );
}
