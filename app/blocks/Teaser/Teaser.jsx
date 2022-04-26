import { storyblokEditable } from "@storyblok/react";

import styles from "./teaser.css";

export const links = () => [{ href: styles, rel: "stylesheet" }];

const Teaser = ({ blok }) => {
  return (
    <div className="teaser" {...storyblokEditable(blok)} key={blok._uid}>
      <h2>{blok.headline}</h2>
    </div>
  );
};

export default Teaser;
