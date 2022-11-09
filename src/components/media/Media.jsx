import s from "./media.module.css";
import { ReactComponent as IconPlus } from "../../assets/icons/plus.svg";
import LayOut from "../layOut";
import MediaGallery from "./MediaGallery";
import { deviceWidth } from "../../vars/deviceWidth";
import { useContext } from "react";
import { PageFormatContext } from "../../context/pageFormatContext";

const Media = () => {
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat < deviceWidth.desktopW ? true : false;

  return (
    <>
      <LayOut
        styles={isMobile ? "85px 0 40px 0" : null}
        backgroundColor="var(--main-background-color)"
        isSection="default"
      >
        <div>
          <span className={s.text}>
            <p style={{ margin: "0 0 35px 0" }}>
              The first 50 years of Hip-Hop was defined by unbridled creative
              expression and innovation.
            </p>
            <p>
              What's next? Hang out with VICE and a community of creators,
              artists and musicians as we forecast the future of this
              boundary-pushing art form. Plus performances, parties, food,
              music, talks & more).
            </p>
          </span>
          <IconPlus className={s.icon} />
          <p className={s.title}>
            Vice <br /> @Art Basel, Miami Beach
          </p>
          {isMobile ? (
            <div className={s.description}>
              <p className={s.description_text}>
                THE CARL FISHER <br /> CLUBHOUSE
              </p>
              <p className={s.description_text}>
                2100 Washington Ave, <br /> Miami Beach, FL 33139, <br /> United
                States
              </p>
              <p className={s.description_text}>NOV 30 - DEC 02 2022</p>
              <p className={s.description_text}>3pm - 11pm daily</p>
            </div>
          ) : null}
        </div>
      </LayOut>
      <MediaGallery />
    </>
  );
};

export default Media;
