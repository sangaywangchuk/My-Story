import { storyblokEditable } from "@storyblok/react";
 
const TextArea = ({ blok }: any) => (
  <div className={blok?.className} {...storyblokEditable(blok)}>
    {blok.textArea}
  </div>
);
 
export default TextArea;