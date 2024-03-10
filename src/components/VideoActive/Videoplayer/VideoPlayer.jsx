import VideoInfo from "../VideoInfo/VideoInfo";
import "./VideoPlayer.scss";
import VideoDetails from "../../../Data/video-details.json";

export default function VideoPlayer({ image }) {
  return (
    <div className="video">
      <video className="video__poster" controls poster={image} src=""></video>
      
    </div>
  );
}
