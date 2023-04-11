import { storyblokEditable } from "@storyblok/react";
 
const Image = ({ blok }: any) =>{
 return (
    <div className={blok?.className} {...storyblokEditable(blok)}>
      <img src={blok?.image.filename} className={blok?.className} alt="image" />
    </div>
  );
   
} 
export default Image;