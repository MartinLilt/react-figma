import s from "./header.module.css";
import LayOut from "../layOut";
import { ReactComponent as IconVice } from "../../icons/vice.svg";
import { ReactComponent as IconTitle } from "../../icons/title.svg";
import { ReactComponent as IconTickets } from "../../icons/tickets.svg";
import { ReactComponent as IconGroup } from "../../icons/group.svg";
import { ReactComponent as IconText } from "../../icons/text.svg";
import { deviceWidth } from "../../vars/deviceWidth";
import AnchorLink from "react-anchor-link-smooth-scroll";
import documentWidth from "../../helpers/getWindowWidth";

const Header = () => {
  const window = documentWidth();
  const getLinesAmout = window.width > deviceWidth.mobileW ? 6 : 3;
  return (
    <>
      <div className={s.line}>
        <span className={s.infinite_line}>
          <span className={s.animation}>
            {new Array(getLinesAmout).fill(0).map((_, id) => (
              <IconTickets key={id} style={{ margin: "0 8 0 0" }} />
            ))}
          </span>
          <span className={s.animation}>
            {new Array(getLinesAmout).fill(0).map((_, id) => (
              <IconTickets key={id} style={{ margin: "0 8 0 0" }} />
            ))}
          </span>
        </span>
      </div>
      <LayOut tag="header" styles="30px 0 5px 0" isSection="default">
        <div className={s.flex}>
          <span>
            <IconVice className={s.logo_icon} />
            <p className={s.logo_text}>
              VICE @ ART BASEL <br /> MIAMI BEACH
            </p>
          </span>
          <span>
            <ul className={s.anchor}>
              <li>
                <AnchorLink style={{ color: "inherit" }} href="#SCHEDULE">
                  SCHEDULE
                </AnchorLink>
              </li>
              <li>
                <AnchorLink style={{ color: "inherit" }} href="#TALENT">
                  TALENT
                </AnchorLink>
              </li>
              <li>
                <AnchorLink style={{ color: "inherit" }} href="#FAQS">
                  FAQS
                </AnchorLink>
              </li>
              <li>
                <AnchorLink style={{ color: "inherit" }} href="#ABOUTVICE">
                  ABOUT
                </AnchorLink>
              </li>
            </ul>
          </span>
        </div>
        <div>
          <span className={s.description}>
            <IconText />
          </span>
          <p className={s.data}>NOV 30 - DEC 02 2022</p>
          <span className={s.group}>
            <IconGroup />
          </span>
        </div>
        <div className={s.title}>
          <IconTitle style={{ width: "inherit" }} />
        </div>
      </LayOut>
    </>
  );
};

export default Header;
