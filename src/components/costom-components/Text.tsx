import { storyblokEditable } from "@storyblok/react";
 
const Text = ({ blok }: any) => (
  <p className={blok?.className} {...storyblokEditable(blok)}>
    {blok.text}
  </p>
);
 
export default Text;