import { storyblokEditable } from "@storyblok/react";
 
const Teaser = ({ blok }: any) => {
  return <div {...storyblokEditable(blok)}>
    <p className="p-4"> {blok.headline}</p>
     {blok.price}
    </div>;
};
 
export default Teaser;