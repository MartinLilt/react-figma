import s from "./footer.module.css";
import LayOut from "../layOut";
import imageLoader from "../../assets/images/footer/loader.png";
import { useContext } from "react";
import { deviceWidth } from "../../vars/deviceWidth";
import { PageFormatContext } from "../../context/pageFormatContext";

const Footer = () => {
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat < deviceWidth.desktopW ? true : false;
  return (
    <LayOut
      tag="footer"
      isSection="default"
      backgroundColor={
        isMobile
          ? "var(--main-background-color)"
          : "var(--accent-background-color)"
      }
      styles={isMobile ? "30px 0 25px 0" : "50px 0 60px 0"}
    >
      <div className={s.flex}>
        <div style={{ display: isMobile ? null : "flex" }}>
          <span className={s.loader}>
            <img src={imageLoader} alt="Footer loader"></img>
          </span>
          {isMobile ? null : (
            <span className={s.group}>
              <p className={s.text}>© 2022 VICE MEDIA GROUP</p>
            </span>
          )}
        </div>
        <span className={s.link}>
          <p className={s.text}>Privacy policy</p>
          <p className={s.text}>ABOUT VICE</p>
        </span>
        {!isMobile ? null : <p className={s.text}>© 2022 VICE MEDIA GROUP</p>}
      </div>
    </LayOut>
  );
};

export default Footer;
