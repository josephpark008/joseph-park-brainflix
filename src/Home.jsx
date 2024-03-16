import VideoList from "./components/VideoQue/VideoList/VideoList";
import CommentsSection from "./components/CommentsFolder/CommentsSection/CommentsSection";
import VideoPlayer from "./components/VideoActive/Videoplayer/VideoPlayer";
import { useEffect, useState } from "react";
import axios from "axios";
import VideoInfo from "./components/VideoActive/VideoInfo/VideoInfo";
import { useParams } from "react-router-dom";

export default function Home() {
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const apiKey = "d65958f8-8162-4880-bc39-f0b7a4645b2c";
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState(null);

  const { id } = useParams();

  console.log(videos, videoDetails);

  useEffect(() => {
    //Fetching videos data
    const fetchVideoData = async () => {
      try {
        const getVideos = await axios.get(`${baseUrl}videos?api_key=${apiKey}`);
        setVideos(getVideos.data);
      } catch (error) {
        console.log(error);
      }
    };
    //call function to access videoData
    fetchVideoData();
  }, []);

  useEffect(() => {
    //Fetching videosdetails data, parameter 'id', for selected video id to be pased as argument, to get the data for that video
    const fetchVideosDetails = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}videos/${id || "84e96018-4022-434e-80bf-000ce4cd12b8"}?api_key=${apiKey}`
        );
        setVideoDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    //call function to access videoDetailsData
    fetchVideosDetails();
  }, [id]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  if (!videoDetails) {
    return <div>loading...</div>;
  }

  return (
    <>
      <VideoPlayer image={videoDetails.image} />
      <div className="video-playing">
        <VideoInfo videoData={videoDetails} />
        <CommentsSection videoData={videoDetails} />
      </div>
      <VideoList videos={videos.filter((vid) => vid.id !== videoDetails.id)} />
    </>
  );
}
