import s from "./info.module.css";
import LayOut from "../layOut";

const Info = () => {
  return (
    <LayOut backgroundColor="var(--main-background-color)">
      <div className={s.list_box}>
        <span
          className={s.box}
          style={{ background: "var(--accent-background-color)" }}
        >
          <span>
            <p className={s.list_text}>
              VICE MEDIA @ ART <br /> BASEL, MIAMI BEACH
            </p>
          </span>
        </span>
        <span className={s.box}></span>
      </div>
    </LayOut>
  );
};

export default Info;
