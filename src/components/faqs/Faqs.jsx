import s from "./faqs.module.css";
import LayOut from "../layOut";
import { ReactComponent as IconPlus } from "../../assets/icons/plus.svg";
import { ReactComponent as IconMinus } from "../../assets/icons/minus.svg";
import faqImage from "../../assets/images/faqs/map.jpg";
import { useState, useContext, useRef, useLayoutEffect } from "react";
import { deviceWidth } from "../../vars/deviceWidth";
import { PageFormatContext } from "../../context/pageFormatContext";
import useResizeObserver from "@react-hook/resize-observer";

const options = [
  {
    title: "WHEREWHAT TIME DOES THE EVENT START & END? AND WHEN IS NOT A TEST?",
    text: "The clubhouse is open from 11AM to 11PM each day. Please see the schedule for individual times. ",
  },
  {
    title:
      "WHEN WILL YOU BE ANNOUNCING FULL PROGRAMMING AND WHAT CAN GUESTS EXPECT THERE?",
    text: "The clubhouse is open from 11AM to 11PM each day. Please see the schedule for individual times. ",
  },
  {
    title: "ARE EVENTS TICKETED?",
    text: "The clubhouse is open from 11AM to 11PM each day. Please see the schedule for individual times. ",
  },
  {
    title: "WHAT WILL ACCESS TO SPECIFIC EVENTS AT THE CLUBHOUSE GET YOU?",
    text: "The clubhouse is open from 11AM to 11PM each day. Please see the schedule for individual times. ",
  },
  {
    title:
      "WHEN WILL YOU BE ANNOUNCING FULL PROGRAMMING AND WHAT CAN GUESTS EXPECT THERE?",
    text: "The clubhouse is open from 11AM to 11PM each day. Please see the schedule for individual times. ",
  },
  {
    title: "ARE EVENTS TICKETED?",
    text: "The clubhouse is open from 11AM to 11PM each day. Please see the schedule for individual times. ",
  },
  {
    title: "WHAT WILL ACCESS TO SPECIFIC EVENTS AT THE CLUBHOUSE GET YOU?",
    text: "The clubhouse is open from 11AM to 11PM each day. Please see the schedule for individual times. ",
  },
  {
    title: "WHAT WILL ACCESS TO SPECIFIC EVENTS AT THE CLUBHOUSE GET YOU?",
    text: "The clubhouse is open from 11AM to 11PM each day. Please see the schedule for individual times. ",
  },
  {
    title:
      "WHEN WILL YOU BE ANNOUNCING FULL PROGRAMMING AND WHAT CAN GUESTS EXPECT THERE?",
    text: "The clubhouse is open from 11AM to 11PM each day. Please see the schedule for individual times. ",
  },
  {
    title: "ARE EVENTS TICKETED?",
    text: "The clubhouse is open from 11AM to 11PM each day. Please see the schedule for individual times. ",
  },
];

const Faqs = () => {
  const target = useRef(null);
  let [currentTitle, SetcurrentTitle] = useState(0);
  let [size, setSize] = useState({ width: 0, height: 0 });
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat < deviceWidth.desktopW ? true : false;

  useLayoutEffect(() => {
    target.current && setRoundedSize(target.current.getBoundingClientRect());
  }, [target]);

  const setRoundedSize = ({ width, height }) => {
    setSize({ width: Math.round(width), height: Math.round(height) });
  };

  useResizeObserver(target, (entry) => {
    const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
    setRoundedSize({ width, height });
  });
  return (
    <>
      <LayOut
        backgroundColor="var(--main-background-color)"
        styles={isMobile ? "0 0 80px 0" : "150px 0 0 0"}
      >
        <div
          className={s.position}
          style={{ height: isMobile ? null : size.height + 50 }}
        >
          <div
            className={s.absolute}
            style={{ margin: isMobile ? null : "0 0 0 270px" }}
            ref={target}
          >
            <div className={s.container} id="FAQS">
              <div className={s.box_title}>
                <IconPlus className={s.icon} />
                <h3 className={s.title}>Location & FAQS</h3>
              </div>
              <div className={s.flex}>
                <div>
                  <div
                    className={s.text}
                    style={{ margin: isMobile ? null : "0 0 170px 0" }}
                  >
                    <p>LOCATION</p>
                    <p className={s.question}>WHERE AND WHEN IS NOT A TEST?</p>
                    <p className={s.description}>
                      NOT A TEST is happening at The Carl Fisher Clubhouse 2100
                      Washington Ave Miami Beach Florida 33139, on November 30
                      to December 2nd 2022
                    </p>
                  </div>
                </div>
                <div className={s.image}>
                  <img src={faqImage} alt="Faqs map" />
                </div>
              </div>
            </div>
            <div className={s.container}>
              <p
                className={s.text}
                style={{ margin: isMobile ? null : "0 0 50px 0" }}
              >
                FAQS
              </p>
              <ul style={{ margin: isMobile ? null : "0 410px 0 0" }}>
                {options.map(({ title, text }, id) => {
                  return (
                    <li
                      key={id}
                      className={s.list_button}
                      onClick={() => SetcurrentTitle(id)}
                    >
                      <span className={s.title_button}>
                        <p className={s.button}>{title}</p>
                        <span className={s.icon_button}>
                          {currentTitle !== id ? <IconPlus /> : <IconMinus />}
                        </span>
                      </span>
                      {currentTitle !== id ? null : (
                        <p className={s.text_button}>{text}</p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </LayOut>
    </>
  );
};

export default Faqs;
