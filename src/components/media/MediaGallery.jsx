import s from "./media.module.css";
import LayOut from "../layOut";

const MediaGallery = () => {
  return (
    <LayOut>
      <div className={s.list_box}>
        {new Array(2).fill(0).map((_, id) => (
          <span key={id} className={s.box_text}></span>
        ))}
      </div>
      <p className={s.list_text}>
        <span>
          VICE is taking over the historic Carl Fisher Clubhouse (centrally
          located next to the Art Basel Miami Beach Convention Center) for a
          72-hour residency.
        </span>
        <span>
          In the Main Clubhouse, Curator and Author, Kimberly Drew of Black
          Futures sits down with the tastemakers and visionaries pushing Hip-Hop
          forward, including Ghetto Gastro and Jerome Lamaar.
        </span>
        <span>
          In The Yard, join NOISEY for afternoon DJ sets and evening showcases
          from Donovan’s Yard, Uncle Waffles, JPEGMafia, and more.
        </span>
        <span>
          In Inflection,a multimedia installation and immersive group
          experience, visual artist and composer Time Boy explores the concept
          of pressure on Hip-Hop’s originators and present day creators and how
          it results in innovation in the genre, culture and beyond.
        </span>
      </p>
      <div className={s.list_box} style={{ margin: "0" }}>
        {new Array(8).fill(0).map((_, id) => (
          <span key={id} className={s.box}></span>
        ))}
      </div>
    </LayOut>
  );
};

export default MediaGallery;
