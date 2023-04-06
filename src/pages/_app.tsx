import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from '@/components/Feature';
import Grid from '@/components/Grid';
import Teaser from '@/components/Teaser';
import Page from '@/components/page';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "U6Vau0pPyEWEE07a4QZKaAtt",
  use: [apiPlugin],
  components
});
  
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}