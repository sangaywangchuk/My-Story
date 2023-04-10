import { storyblokEditable } from "@storyblok/react";
 
const Number = ({ blok }: any) => (
  <div className={blok?.className} {...storyblokEditable(blok)}>
    {blok.number}
  </div>
);
 
export default Number;