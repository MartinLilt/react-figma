import s from "./faqs.module.css";
import LayOut from "../layOut";
import { ReactComponent as IconPluse } from "../../icons/pluse.svg";
import { ReactComponent as IconMinus } from "../../icons/minus.svg";
import faqImage from "../../images/faqImage/mobile/faqImage.png";
import { useState } from "react";

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
  let [currentTitle, SetcurrentTitle] = useState(null);
  return (
    <>
      <LayOut
        backgroundColor="var(--main-background-color)"
        styles="0 0 80px 0"
      >
        <div className={s.container} id="FAQS">
          <div className={s.box_title}>
            <IconPluse className={s.icon} />
            <h3 className={s.title}>Location & FAQS</h3>
          </div>
          <div className={s.text}>
            <p>LOCATION</p>
            <p className={s.question}>WHERE AND WHEN IS NOT A TEST?</p>
            <p className={s.description}>
              NOT A TEST is happening at The Carl Fisher Clubhouse 2100
              Washington Ave Miami Beach Florida 33139, on November 30 to
              December 2nd 2022
            </p>
          </div>
        </div>
        <div className={s.image}>
          <img src={faqImage} alt="Faqs map" />
        </div>
        <div className={s.container}>
          <p className={s.text}>FAQS</p>
          <ul>
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
                      {currentTitle !== id ? <IconPluse /> : <IconMinus />}
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
      </LayOut>
    </>
  );
};

export default Faqs;
