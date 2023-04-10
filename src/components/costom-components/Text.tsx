import { storyblokEditable } from "@storyblok/react";
 
const Text = ({ blok }: any) => (
  <div className={blok?.className} {...storyblokEditable(blok)}>
    {blok.text}
  </div>
);
 
export default Text;