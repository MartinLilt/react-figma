import video from "../../assets/video/noTest-2.mp4";
import s from "./loader.module.css";

const Video = () => {
  return <video className={s.video} src={video} autoPlay loop muted />;
};

export default Video;
