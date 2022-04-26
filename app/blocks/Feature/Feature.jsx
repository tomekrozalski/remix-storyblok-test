import { storyblokEditable } from "@storyblok/react";

import styles from "./feature.css";

export const links = () => [{ href: styles, rel: "stylesheet" }];

const Feature = ({ blok }) => {
  return (
    <div className="feature" {...storyblokEditable(blok)} key={blok._uid}>
      {blok.name}
    </div>
  );
};

export default Feature;
