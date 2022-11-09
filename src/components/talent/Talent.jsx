import s from "./talent.module.css";
import { ReactComponent as IconPlus } from "../../assets/icons/plusWhite.svg";
import LayOut from "../layOut";
import { deviceWidth } from "../../vars/deviceWidth";
import { useContext } from "react";
import { PageFormatContext } from "../../context/pageFormatContext";

const Talent = () => {
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat < deviceWidth.desktopW ? true : false;

  return (
    <LayOut
      backgroundColor="var(--accent-background-color)"
      styles={isMobile ? null : "170px 0 0 0"}
    >
      <div className={s.box_title} id="TALENT">
        {isMobile ? (
          <IconPlus className={s.icon} />
        ) : (
          <span className={s.supp_title}>
            <p>VICE @ ART BASEL, MIAMI BEACH</p>
            <p>WED, Thurs, fri 11:00am - 11:00pm daily</p>
          </span>
        )}
        <h3 className={s.title}>TALENT</h3>
      </div>
      <div
        className={s.list_box}
        style={{ position: isMobile ? null : "relative" }}
      >
        {new Array(Number(isMobile ? 22 : 55)).fill(0).map((_, id) => (
          <span key={id} className={s.box}></span>
        ))}
      </div>
    </LayOut>
  );
};

export default Talent;
