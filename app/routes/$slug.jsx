import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
  storyblokInit,
  apiPlugin,
} from "@storyblok/react";

import Feature, { links as featureLinks } from "~/blocks/Feature";
import Footer, { links as footerLinks } from "~/blocks/Footer";
import Grid, { links as gridLinks } from "~/blocks/Grid";
import Page, { links as pageLinks } from "~/components/Page";
import Teaser, { links as teaserLinks } from "~/blocks/Teaser";

// https://www.storyblok.com/tp/headless-cms-remix

const components = {
  feature: Feature,
  footer: Footer,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "sGgfmMHOj5USmzN7zwWnIgtt",
  components,
  use: [apiPlugin],
});

export const links = () => [
  ...pageLinks(),
  ...teaserLinks(),
  ...gridLinks(),
  ...featureLinks(),
  ...footerLinks(),
];

export const loader = async ({ params }) => {
  const slug = params.slug ?? "home";

  let sbParams = {
    version: "draft",
  };

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);

  return json(data?.story);
};

export default function () {
  let story = useLoaderData();

  story = useStoryblokState(story);

  return <StoryblokComponent blok={story.content} />;
}
