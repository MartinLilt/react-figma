import s from "./schedule.module.css";
import LayOut from "../layOut";
import { ReactComponent as IconPlus } from "../../assets/icons/plus.svg";
import { useState, useContext, useRef, useLayoutEffect } from "react";
import { deviceWidth } from "../../vars/deviceWidth";
import { PageFormatContext } from "../../context/pageFormatContext";

const options = {
  wed: [
    {
      time: "11:00am - 11:pm daily",
      place: "RUM ROOM",
      name: "TIMEBOYS  “INFLECTIONS”",
      description: "Art Installation by artist and technologist TimeboY",
    },
    {
      time: "01:00pm - 07:00pm",
      place: "THE YARD",
      name: "NOISEY DJ SETS",
      description:
        "Join NOISEY for afternoon DJ sets and evening concerts with global musicians pushing the boundaries of what Hip-Hop can be",
    },
    {
      time: "03:00pm - 04:00pm",
      place: "Main clubhouse",
      name: "“WOMEN IN THE MOVEMENT”",
      description:
        "Kimberly Drew in conversation with TBD (Aya Brown, Suzi Analogue, Jody Simms)",
    },
    {
      time: "05:00pm - 06:00pm",
      place: "Main clubhouse",
      name: "NOISEY TALKS",
      description: "NOISEY TALKS with TBD Talent",
    },
    {
      time: "9:00pm - 11:00pm ",
      place: "THE YARD",
      name: "DONAVAN’S YARD",
      description: "VIP OPENING PARTY",
    },
  ],
  thur: [
    {
      time: "thur--11:00am - 11:pm daily",
      place: "RUM ROOM",
      name: "TIMEBOYS  “INFLECTIONS”",
      description: "Art Installation by artist and technologist TimeboY",
    },
    {
      time: "01:00pm - 07:00pm",
      place: "THE YARD",
      name: "NOISEY DJ SETS",
      description:
        "Join NOISEY for afternoon DJ sets and evening concerts with global musicians pushing the boundaries of what Hip-Hop can be",
    },
    {
      time: "03:00pm - 04:00pm",
      place: "Main clubhouse",
      name: "“WOMEN IN THE MOVEMENT”",
      description:
        "Kimberly Drew in conversation with TBD (Aya Brown, Suzi Analogue, Jody Simms)",
    },
    {
      time: "05:00pm - 06:00pm",
      place: "Main clubhouse",
      name: "NOISEY TALKS",
      description: "NOISEY TALKS with TBD Talent",
    },
    {
      time: "9:00pm - 11:00pm ",
      place: "THE YARD",
      name: "DONAVAN’S YARD",
      description: "VIP OPENING PARTY",
    },
  ],
  fri: [
    {
      time: "fri--11:00am - 11:pm daily",
      place: "RUM ROOM",
      name: "TIMEBOYS  “INFLECTIONS”",
      description: "Art Installation by artist and technologist TimeboY",
    },
    {
      time: "01:00pm - 07:00pm",
      place: "THE YARD",
      name: "NOISEY DJ SETS",
      description:
        "Join NOISEY for afternoon DJ sets and evening concerts with global musicians pushing the boundaries of what Hip-Hop can be",
    },
    {
      time: "03:00pm - 04:00pm",
      place: "Main clubhouse",
      name: "“WOMEN IN THE MOVEMENT”",
      description:
        "Kimberly Drew in conversation with TBD (Aya Brown, Suzi Analogue, Jody Simms)",
    },
    {
      time: "05:00pm - 06:00pm",
      place: "Main clubhouse",
      name: "NOISEY TALKS",
      description: "NOISEY TALKS with TBD Talent",
    },
    {
      time: "9:00pm - 11:00pm ",
      place: "THE YARD",
      name: "DONAVAN’S YARD",
      description: "VIP OPENING PARTY",
    },
  ],
};

const desktopOptions = {
  1: [
    {
      time: "3:00pm - 4:00pm",
      name: "“WOMEN IN THE MOVEMENT”",
      description:
        "Kimberly Drew in conversation with TBD (Aya Brown, Suzi Analogue, Jody Simms)",
    },
    {
      time: "5:00pm - 6:00pm",
      name: "NOISEY TALKS",
      description: "NOISEY TALKS with TBD Talent",
    },
    {
      time: "3:00pm - 4:00pm",
      name: "“WOMEN IN THE MOVEMENT”",
      description:
        "Kimberly Drew in conversation with TBD (Aya Brown, Suzi Analogue, Jody Simms)",
    },
  ],
  2: [
    {
      time: "1:00pm - 7:00pm",
      name: "NOISEY DJ SETS",
      description:
        "Join NOISEY for afternoon DJ sets and evening concerts with global musicians pushing the boundaries of what Hip-Hop can be",
    },
    {
      time: "9:00pm - 11:00pm",
      name: "DONAVAN’S YARD",
      description: "VIP OPENING PARTY",
    },
  ],
  3: [
    {
      time: "11:00am - 11:pm daily",
      name: "TIMEBOYS  “INFLECTIONS”",
      description: "Art Installation by artist and technologist TimeboY",
    },
  ],
};

const desktopTitles = ["Main clubhouse", "THE YARD", "RUM ROOM"];

const days = [
  {
    data: options.wed,
    date: "30TH NOV",
    day: "WED",
    long: "WEDNESDAY",
    background: "var(--light-wed-background-color)",
  },
  {
    data: options.thur,
    date: "1st dec",
    day: "THUR",
    long: "THURSDAY",
    background: "var(--light-fri-background-color)",
  },
  {
    data: options.fri,
    date: "2nd dec",
    day: "FRI",
    long: "FRIDAY",
    background: "var(--light-thur-background-color)",
  },
];

const Schedule = () => {
  const target = useRef(null);
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat < deviceWidth.desktopW ? true : false;
  const initialBackground = days[0].background;
  let [currentDay, SetcurrentDay] = useState({
    data: options.wed,
    background: initialBackground,
  });

  useLayoutEffect(() => {
    if (target) {
      target.current.focus();
    }
  }, []);

  const { data, background } = currentDay;
  return (
    <LayOut
      styles={isMobile ? "35px 0 0 0" : null}
      backgroundColor="var(--main-background-color)"
    >
      <div id="SCHEDULE">
        {isMobile ? (
          <div className={s.box_title}>
            <IconPlus className={s.icon} />
            <h3 className={s.title}>SCHEDULE</h3>
          </div>
        ) : null}
        <div className={s.list_box}>
          <span className={s.box}>
            <span className={s.supptitle}>
              <p className={s.text}>
                THE CARL FISHER <br /> CLUBHOUSE
              </p>
              <p className={s.text}>NOV 30 - DEC 02 2022</p>
              <p className={s.text}>3pm - 11pm daily</p>
            </span>
          </span>
          <span className={s.box} style={{ background: background }}></span>
          {isMobile ? null : <h3 className={s.title_desktop}>SCHEDULE</h3>}
        </div>
        <div className={s.container} style={{ background: background }}>
          <div className={s.container_desktop}>
            <ul className={s.flex_day}>
              {days.map(({ data, date, day, long, background }, id) => {
                return (
                  <li key={id}>
                    <button
                      type="button"
                      className={s.day}
                      onClick={() => SetcurrentDay({ data, background })}
                      ref={id !== 0 ? null : target}
                    >
                      <p>{date}</p>
                      <strong className={s.strong}>
                        {isMobile ? day : long}
                      </strong>
                    </button>
                  </li>
                );
              })}
            </ul>
            <ul>
              {isMobile ? (
                data.map(({ time, place, name, description }, id) => {
                  return (
                    <li key={id} className={s.sentence}>
                      <span>
                        <p className={s.time}>
                          <span>{place}</span>
                          <span>{time}</span>
                        </p>
                        <p className={s.name}>{name}</p>
                        <p className={s.description}>{description}</p>
                        <p className={s.description_event}>
                          RSVP FOR THIS EVENT
                        </p>
                      </span>
                    </li>
                  );
                })
              ) : (
                <>
                  <li className={s.sentence}>
                    <h4 className={s.title_sentence}>{desktopTitles[0]}</h4>
                    <div className={s.flex_sentence}>
                      {desktopOptions[1].map(
                        ({ time, name, description }, id) => (
                          <span key={id} className={s.box_sentence}>
                            <p className={s.time}>{time}</p>
                            <p className={s.name}>{name}</p>
                            <p className={s.description}>{description}</p>
                            <p className={s.description_event}>
                              RSVP FOR THIS EVENT
                            </p>
                          </span>
                        )
                      )}
                    </div>
                  </li>
                  <li className={s.sentence}>
                    <h4 className={s.title_sentence}>{desktopTitles[1]}</h4>
                    <div className={s.flex_sentence}>
                      {desktopOptions[2].map(
                        ({ time, name, description }, id) => (
                          <span key={id} className={s.box_sentence}>
                            <p className={s.time}>{time}</p>
                            <p className={s.name}>{name}</p>
                            <p className={s.description}>{description}</p>
                            <p className={s.description_event}>
                              RSVP FOR THIS EVENT
                            </p>
                          </span>
                        )
                      )}
                    </div>
                  </li>
                  <li className={s.sentence}>
                    <h4 className={s.title_sentence}>{desktopTitles[2]}</h4>
                    <div className={s.flex_sentence}>
                      {desktopOptions[3].map(
                        ({ time, name, description }, id) => (
                          <span key={id} className={s.box_sentence}>
                            <p className={s.time}>{time}</p>
                            <p className={s.name}>{name}</p>
                            <p className={s.description}>{description}</p>
                            <p className={s.description_event}>
                              RSVP FOR THIS EVENT
                            </p>
                          </span>
                        )
                      )}
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className={s.list_box} style={{ position: "relative" }}>
          <span
            className={s.box}
            style={{ background: "var(--accent-background-color)" }}
          >
            <span className={s.supptitle}>
              <p className={s.list_text}>
                VICE MEDIA @ ART <br /> BASEL, MIAMI BEACH
              </p>
            </span>
          </span>
          <span
            className={`${s.box} ${s.box_position}`}
            style={{ background: background }}
          ></span>
        </div>
      </div>
    </LayOut>
  );
};

export default Schedule;
