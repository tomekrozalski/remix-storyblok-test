import { storyblokEditable } from "@storyblok/react";
import Image from "remix-image";

import styles from "./feature.css";

export const links = () => [{ href: styles, rel: "stylesheet" }];

const Feature = ({ blok }) => {
  return (
    <div className="feature" {...storyblokEditable(blok)} key={blok._uid}>
      <div>{blok.name}</div>
      <Image
        alt={blok.image.alt ?? ""}
        className="feature__image"
        src={blok.image.filename}
        responsive={[
          { size: { width: 400 } },
          { size: { width: 600 } },
          { size: { width: 800 } },
          { size: { width: 1000 } },
          { size: { width: 1200 } },
        ]}
      />
    </div>
  );
};

export default Feature;
