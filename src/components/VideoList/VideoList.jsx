import videos from '../../Data/videos.json';
import { Video } from '../Video/Video';

export function VideoList(){
return(
  <>
  {videos.map((video) => {
    return (<Video key={video.id} videoData={video}/>)
    //<h1>{props.videoData.title}</h1>
  //<p>{props.videoData.channel}</p>
  })}
  </>
)
}

