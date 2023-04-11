import { render } from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react";
 
const RichText = ({ blok }: any) => (
  <p className={blok?.className} {...storyblokEditable(blok)}>
    {render(blok?.richText)}
  </p>
);
 
export default RichText;