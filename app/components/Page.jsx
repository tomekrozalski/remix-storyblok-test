import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

import globalStyles from "~/utils/styles/global.css";
import variables from "~/utils/styles/variables.css";

export const links = () => [
  { href: globalStyles, rel: "stylesheet" },
  { href: variables, rel: "stylesheet" },
];

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)} key={blok._uid}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
