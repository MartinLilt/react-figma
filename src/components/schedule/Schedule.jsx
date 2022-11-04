import s from "./schedule.module.css";
import LayOut from "../layOut";
import { ReactComponent as IconPluse } from "../../icons/pluse.svg";
import { useState } from "react";

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

const days = [
  {
    data: options.wed,
    date: "30TH NOV",
    day: "WED",
    background: "var(--light-wed-background-color)",
  },
  {
    data: options.thur,
    date: "1st dec",
    day: "THUR",
    background: "var(--light-fri-background-color)",
  },
  {
    data: options.fri,
    date: "2nd dec",
    day: "FRI",
    background: "var(--light-thur-background-color)",
  },
];

const Schedule = () => {
  const initialBackground = days[0].background;

  let [currentDay, SetcurrentDay] = useState({
    data: options.wed,
    background: initialBackground,
  });

  const { data, background } = currentDay;
  return (
    <LayOut styles="35px 0 0 0" backgroundColor="var(--main-background-color)">
      <div className={s.box_title} id="SCHEDULE">
        <IconPluse className={s.icon} />
        <h3 className={s.title}>SCHEDULE</h3>
      </div>
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
      </div>
      <div className={s.container} style={{ background: background }}>
        <ul className={s.flex_day}>
          {days.map(({ data, date, day, background }, id) => {
            return (
              <li key={id}>
                <button
                  type="button"
                  className={s.day}
                  onClick={() => SetcurrentDay({ data, background })}
                >
                  <p>{date}</p>
                  <strong className={s.strong}>{day}</strong>
                </button>
              </li>
            );
          })}
        </ul>
        <ul>
          {data.map(({ time, place, name, description }, id) => {
            return (
              <li key={id} className={s.sentence}>
                <span>
                  <p className={s.time}>
                    <span>{place}</span>
                    <span>{time}</span>
                  </p>
                  <p className={s.name}>{name}</p>
                  <p className={s.description}>{description}</p>
                  <p className={s.description_event}>RSVP FOR THIS EVENT</p>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.list_box}>
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
        <span className={s.box} style={{ background: background }}></span>
      </div>
    </LayOut>
  );
};

export default Schedule;
