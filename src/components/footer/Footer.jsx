import s from "./footer.module.css";
import LayOut from "../layOut";
import imageLoader from "../../images/footer/loader.png";

const Footer = () => {
  return (
    <LayOut
      tag="footer"
      isSection="default"
      backgroundColor="var(--main-background-color)"
      styles="30px 0 25px 0"
    >
      <div>
        <span className={s.loader}>
          <img src={imageLoader} alt="Footer loader"></img>
        </span>
        <span className={s.link}>
          <p className={s.text}>Privacy policy</p>
          <p className={s.text}>ABOUT VICE</p>
        </span>
        <p className={s.text}>© 2022 VICE MEDIA GROUP</p>
      </div>
    </LayOut>
  );
};

export default Footer;
