import "./layOut.css";
import Container from "../container";

const LayOut = ({
  children,
  tag,
  isSection,
  styles,
  backgroundColor = "inherit",
}) => {
  const Tag = tag || "section";
  const getSectionStyle = isSection || "undefaund";

  return (
    <Tag className={getSectionStyle} style={{ background: backgroundColor }}>
      <Container styles={styles}>{children}</Container>
    </Tag>
  );
};

export default LayOut;
