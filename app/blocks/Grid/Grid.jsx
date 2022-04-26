import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

import styles from "./grid.css";

export const links = () => [{ href: styles, rel: "stylesheet" }];

const Grid = ({ blok }) => (
  <ul className="grid" {...storyblokEditable(blok)} key={blok._uid}>
    {blok.columns.map((blok) => (
      <li className="grid__item" key={blok._uid}>
        <StoryblokComponent blok={blok} />
      </li>
    ))}
  </ul>
);

export default Grid;
