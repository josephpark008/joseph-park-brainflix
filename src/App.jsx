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

  return (
    <>
      <NavHeader />
      <VideoPlayer image={CurrentVideo.image} />
      <div className="video-playing">
        <VideoInfo key={CurrentVideo.id} videoData={CurrentVideo} />
        <CommentsSection />
      </div>
      <VideoList />
    </>
  );
}
