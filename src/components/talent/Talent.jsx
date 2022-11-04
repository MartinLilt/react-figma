import s from "./talent.module.css";
import { ReactComponent as IconPluse } from "../../icons/pluseWhite.svg";
import LayOut from "../layOut";

const Talent = () => {
  return (
    <LayOut backgroundColor="var(--accent-background-color)">
      <div className={s.box_title} id="TALENT">
        <IconPluse className={s.icon} />
        <h3 className={s.title}>TALENT</h3>
      </div>
      <div className={s.list_box}>
        {new Array(Number(22)).fill(0).map((_, id) => (
          <span key={id} className={s.box}></span>
        ))}
      </div>
    </LayOut>
  );
};

export default Talent;
