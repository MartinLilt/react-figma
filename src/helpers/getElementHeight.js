import { useState } from "react";
import { useLayoutEffect } from "react";

export default function useElementHeight({ ref }) {
  let [elementHeight, setElementHeight] = useState("auto");

  useLayoutEffect(() => {
    const getWindowWidth = () => {
      console.log(ref.current.offsetWidth);
      setElementHeight(ref.current.offsetWidth);
    };

    window.addEventListener("resize", getWindowWidth);
    return () => window.removeEventListener("resize", getWindowWidth);
  }, []);

  return elementHeight;
}
