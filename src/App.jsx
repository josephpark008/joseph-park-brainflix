import VideoList from "./components/VideoQue/VideoList/VideoList";
import NavHeader from "./components/NavHeader/NavHeader";
import CommentsSection from "./components/CommentsFolder/CommentsSection/CommentsSection";
import VideoPlayer from "./components/VideoActive/Videoplayer/VideoPlayer";
import VideoInfo from "./components/VideoActive/VideoInfo/VideoInfo";
import "./App.scss";
import Upload from "./Upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function App() {
  //STATE for videoselection
 

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:id" element={<Home />} />
        <Route path='/upload' element={<Upload/>}/>
      </Routes>
    </BrowserRouter>
  );

  //******NOW PASS IN PROPS BELOW*****
  return (
    <>
      <NavHeader />
      <VideoPlayer videoFunc={getVideoDetailsFromId} videoId={videosArray} />
      <div className="video-playing">
        <VideoInfo
          key={`videoInfo_${CurrentVideoDetails.id}`}
          videoFunc={getVideoDetailsFromId}
          videoId={videosArray}
        />
        <CommentsSection
          key={`commentsSection_${CurrentVideoDetails.id}`}
          videoFunc={getVideoDetailsFromId}
          videoId={videosArray}
        />
      </div>
      <VideoList
        videos={videosArray.filter((video) => video.id !== CurrentVideo.id)}
        setVideo={getVideoFromId}
      />
    </>
  );
}
