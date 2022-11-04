import s from "./about.module.css";
import LayOut from "../layOut";

const About = () => {
  return (
    <LayOut
      isSection="default"
      backgroundColor="var(--accent-background-color)"
      styles="70px 0 80px 0"
    >
      <ul className={s.list} id="ABOUTVICE">
        <li>
          <h4 className={s.title}>VICE MEDIA GROUP</h4>
          <p className={s.text}>
            VICE Media Group is a global multi-platform media company. Launched
            in 1994, VICE has offices across 25 countries across the globe with
            a focus on five key businesses: VICE.com, an award-winning
            international network of digital content; VICE STUDIOS, a feature
            film and television production studio; VICE TV, an Emmy-winning
            international television network; a Peabody award-winning NEWS
            division with the most Emmy-awarded nightly news broadcast; and
            VIRTUE, a global, full-service creative agency. VICE Media Group’s
            portfolio includes Refinery29, the leading global media and
            entertainment company focused on women; PULSE Films, a London-based
            next-generation production studio with outposts in Los Angeles, New
            York, Paris and Berlin; and i-D, a global digital and quarterly
            magazine defining fashion and contemporary culture and design.
          </p>
        </li>
        <li>
          <h4 className={s.title}>NOISEY: MUSIC BY VICE</h4>
          <p className={s.text}>
            <span>
              Since 2011, VNoisey has been curating emerging talent from around
              the world for our audience’s eyes and ears, in addition to
              covering industry mainstays in an unapologetically VICE manner.
            </span>
            <span>
              From editorial coverage of talent and cultural phenomena, original
              music videos as a part of Noisey Next, tour diaries on TikTok and
              performances under Noisey Nights, Noisey is a champion of talent
              who are the moment.
            </span>
          </p>
        </li>
      </ul>
    </LayOut>
  );
};

export default About;
