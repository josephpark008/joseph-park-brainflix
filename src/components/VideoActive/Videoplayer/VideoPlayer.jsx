import VideoInfo from "../VideoInfo/VideoInfo";
import "./VideoPlayer.scss";
import VideoDetails from "../../../Data/video-details.json";

export default function VideoPlayer({ image }) {
  return (
    <div className="video-active">
      <video controls className="video-active__poster" poster={image}></video>
      
    </div>
  );
}
