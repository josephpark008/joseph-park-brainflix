import { VideoList } from "./components/VideoList/VideoList";
import NavHeader from "./components/NavHeader/NavHeader";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import VideoPlayer from "./components/Videoplayer/VideoPlayer";
import { useState } from "react";
import VideoDetails from "./Data/video-details.json";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import './App.scss';
export function App() {
  const [CurrentVideo, setCurrentVideo] = useState(VideoDetails[0]);

  return (
    <>
      <NavHeader />
      <VideoPlayer image={CurrentVideo.image} />

      <VideoInfo key={CurrentVideo.id} videoData={CurrentVideo} />
      

      
      <CommentsSection />
      <VideoList />
    </>
  );
}
