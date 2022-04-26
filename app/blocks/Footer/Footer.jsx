import { storyblokEditable } from "@storyblok/react";

import styles from "./footer.css";

export const links = () => [{ href: styles, rel: "stylesheet" }];

const Footer = ({ blok }) => {
  return (
    <footer className="footer" {...storyblokEditable(blok)} key={blok._uid}>
      <h2>{blok.headline}</h2>
    </footer>
  );
};

export default Footer;
