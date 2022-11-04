import s from "./container.module.css";

const Container = ({ children, styles }) => {
  return (
    <div className={s.padd_box} style={{ padding: styles }}>
      {children}
    </div>
  );
};

export default Container;
