import { render } from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react";
 
const RichText = ({ blok }: any) => (
  <div className={blok?.className} {...storyblokEditable(blok)}>
    {render(blok?.richText)}
  </div>
);
 
export default RichText;