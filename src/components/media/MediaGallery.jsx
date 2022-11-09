import s from "./media.module.css";
import LayOut from "../layOut";
import { useLayoutEffect, useRef, useState, useContext } from "react";
import useResizeObserver from "@react-hook/resize-observer";
import { deviceWidth } from "../../vars/deviceWidth";
import { PageFormatContext } from "../../context/pageFormatContext";

const MediaGallery = () => {
  const target = useRef(null);
  const pageFormat = useContext(PageFormatContext);
  let [size, setSize] = useState({ width: 0, height: 0 });
  const isMobile = pageFormat < deviceWidth.desktopW ? true : false;

  useLayoutEffect(() => {
    target.current && setRoundedSize(target.current.getBoundingClientRect());
  }, [target]);

  const setRoundedSize = ({ width, height }) => {
    setSize({ width: Math.round(width), height: Math.round(height) });
  };

  useResizeObserver(target, (entry) => {
    const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
    setRoundedSize({ width, height });
  });

  return (
    <LayOut>
      <div className={s.list_box}>
        {new Array(isMobile ? 2 : 10).fill(0).map((_, id) => (
          <span key={id} className={s.box_text}></span>
        ))}
      </div>

      <p className={s.list_text}>
        <span>
          VICE is taking over the historic Carl Fisher Clubhouse (centrally
          located next to the Art Basel Miami Beach Convention Center) for a
          72-hour residency.
        </span>
        <span>
          In the Main Clubhouse, Curator and Author, Kimberly Drew of Black
          Futures sits down with the tastemakers and visionaries pushing Hip-Hop
          forward, including Ghetto Gastro and Jerome Lamaar.
        </span>
        <span>
          In The Yard, join NOISEY for afternoon DJ sets and evening showcases
          from Donovan’s Yard, Uncle Waffles, JPEGMafia, and more.
        </span>
        <span>
          In Inflection,a multimedia installation and immersive group
          experience, visual artist and composer Time Boy explores the concept
          of pressure on Hip-Hop’s originators and present day creators and how
          it results in innovation in the genre, culture and beyond.
        </span>
      </p>
      <div
        className={s.position}
        style={{ height: isMobile ? null : size.height - 240 }}
      >
        <div className={s.list_box_end} style={{ margin: "0" }} ref={target}>
          {new Array(isMobile ? 8 : 20).fill(0).map((_, id) => (
            <span key={id} className={s.box}></span>
          ))}
        </div>
      </div>
    </LayOut>
  );
};

export default MediaGallery;
