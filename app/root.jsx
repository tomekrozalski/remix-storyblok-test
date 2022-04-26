import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Feature, { links as featureLinks } from "~/blocks/Feature";
import Grid, { links as gridLinks } from "~/blocks/Grid";
import Page, { links as pageLinks } from "~/components/Page";
import Teaser, { links as teaserLinks } from "~/blocks/Teaser";

// It is just that simple!
// https://www.storyblok.com/tp/headless-cms-remix

const components = {
  feature: Feature,
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
];

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
