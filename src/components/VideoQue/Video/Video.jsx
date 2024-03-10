import "./Video.scss";
export default function Video(props) {
  const video = props.videoData;

  return (
    <div className="video">
      <img className="video__image" src={video.image} alt="thumbnail image" />

      <div className="video-text">
        <h1 className="video-text__title">{video.title}</h1>
        <p className="video-text__creator">{video.channel}</p>
      </div>
    </div>
  );
}
