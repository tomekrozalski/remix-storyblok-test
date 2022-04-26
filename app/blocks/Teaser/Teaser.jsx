import { storyblokEditable } from "@storyblok/react";

import styles from "./teaser.css";
import stylesDesktop from "./teaser-desktop.css";

export const links = () => [
  { href: styles, rel: "stylesheet" },
  { href: stylesDesktop, rel: "stylesheet", media: "(min-width: 800px)" },
];

const Teaser = ({ blok }) => {
  return (
    <div className="teaser" {...storyblokEditable(blok)} key={blok._uid}>
      <h2>{blok.headline}</h2>
    </div>
  );
};

export default Teaser;
