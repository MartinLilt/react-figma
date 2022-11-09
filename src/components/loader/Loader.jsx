import { useEffect, useState } from "react";
import s from "./loader.module.css";
// import Video from "./Video";

const Loader = () => {
  let [display, setDisplay] = useState(true);

  useEffect(() => {
    document.body.style.overflow = display ? "hidden" : "scroll";
  }, [display]);

  useEffect(() => {
    const getInProgressLoading = () => {
      setDisplay(false);
    };

    window.addEventListener("load", getInProgressLoading);
    return () => {
      window.removeEventListener("load", getInProgressLoading);
    };
  }, []);

  return display ? <div className={s.wrapper}>{/* <Video /> */}</div> : null;
};

export default Loader;
