import s from "./hero.module.css";

const Hero = () => {
  return (
    <section>
      <div className={s.list_box}>
        {new Array(10).fill(0).map((_, id) => (
          <span key={id} className={s.box}></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
