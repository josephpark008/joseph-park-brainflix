import "./Video.scss";
export default function Video(props) {
  const { videoData, displayVideo } = props;

  return (
    <div
      className="video"
      onClick={() => {
        displayVideo(videoData.id);
      }}
    >
      <img
        className="video__image"
        src={videoData.image}
        alt="thumbnail image"
      />

      <div className="video-text">
        <h1 className="video-text__title">{videoData.title}</h1>
        <p className="video-text__creator">{videoData.channel}</p>
      </div>
    </div>
  );
}
