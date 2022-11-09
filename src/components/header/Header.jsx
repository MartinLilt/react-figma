import s from "./header.module.css";
import LayOut from "../layOut";
import { ReactComponent as IconVice } from "../../assets/icons/vice.svg";
import { ReactComponent as IconTitle } from "../../assets/icons/title.svg";
import { ReactComponent as IconTickets } from "../../assets/icons/tickets.svg";
import { ReactComponent as IconGroup } from "../../assets/icons/group.svg";
import { ReactComponent as IconPlus } from "../../assets/icons/plusWhite.svg";
import { deviceWidth } from "../../vars/deviceWidth";
import { useContext } from "react";
import { PageFormatContext } from "../../context/pageFormatContext";
import { Link } from 'react-scroll';

const Header = () => {
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat < deviceWidth.desktopW ? true : false;


  return (
    <>
      <LayOut tag="header" styles="0 0 5px 0" isSection="default">
        <div className={s.relative}>
          <div className={s.relative_text}>
            {!isMobile ? null : <p>VICE @ ART BASEL <br/> MIAMI BEACH</p>}
            {isMobile ? null : <p>Carl Fisher Clubhouse <br/> Miami BEACH FLorida</p>}
            {isMobile ? null : <p>Open To The Public <br/> and Ticketed</p>}
            </div>
          <div className={s.position}>
            <div className={s.line}>
              <span className={s.infinite_line}>
                <span className={s.animation}>
                  {new Array(isMobile ? 4 : 6).fill(0).map((_, id) => (
                    <IconTickets key={id} style={{ margin: "0 8 0 0" }} />
                  ))}
                </span>
                <span className={s.animation}>
                  {new Array(isMobile ? 4 : 6).fill(0).map((_, id) => (
                    <IconTickets key={id} style={{ margin: "0 8 0 0" }} />
                  ))}
                </span>
              </span>
            </div>
            <div className={s.flex}>
              <span>
                <IconVice className={s.logo_icon} />
                {isMobile ? null : <p className={s.logo_text}>VICE @ ART BASEL <br/> MIAMI BEACH</p>}
              </span>
              <span>
                <ul className={s.anchor}>
                  <li style={{cursor: 'pointer'}}>
                    <Link to="SCHEDULE" spy={true} smooth={true} duration={1600} className={s.link}>
                      SCHEDULE
                    </Link>
                  </li>
                  <li style={{cursor: 'pointer'}}>
                    <Link to="TALENT" spy={true} smooth={true} duration={1600} className={s.link}>
                      TALENT
                    </Link>
                  </li>
                  <li style={{cursor: 'pointer'}}>
                    <Link to="FAQS" spy={true} smooth={true} duration={1600} className={s.link}>
                      FAQS
                    </Link>
                  </li>
                  <li style={{cursor: 'pointer'}}>
                    <Link to="ABOUTVICE" spy={true} smooth={true} duration={1600} className={s.link}>
                      ABOUT
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div>
          <span className={s.description}>
            {isMobile ? 'A three-day time-hopping tour of what’s next in Hip-Hop, brought to    you                by            VICE' 
          : 'A three-day time-hopping tour of what’s next in Hip-Hop, brought to            you                by            VICE'}  
          </span>
          <p className={s.data}>NOV 30 - DEC 02 2022</p>
          <span className={s.group}>
            {isMobile ? null : (
              <IconPlus style={{ width: "20px", height: "20px" }} />
            )}
            <span className={s.group_title}>
              <IconGroup style={{ width: "100%" }} />
            </span>
            {isMobile ? null : (
              <IconPlus style={{ width: "20px", height: "20px" }} />
            )}
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
