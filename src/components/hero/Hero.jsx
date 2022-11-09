import s from "./hero.module.css";
import { deviceWidth } from "../../vars/deviceWidth";
import { useContext } from "react";
import { PageFormatContext } from "../../context/pageFormatContext";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const pageFormat = useContext(PageFormatContext);
  let [amout, setAmout] = useState(null);

  useEffect(() => {
    const isMobile = pageFormat < deviceWidth.desktopW ? true : false;
    setAmout(isMobile ? 10 : 25);
  }, [pageFormat]);

  return (
    <section>
      <div className={s.list_box}>
        {new Array(amout).fill(0).map((_, id) => {
          return <span key={id} className={s.box}></span>;
        })}
      </div>
    </section>
  );
};

export default Hero;
