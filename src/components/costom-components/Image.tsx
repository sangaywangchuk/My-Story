import { storyblokEditable } from "@storyblok/react";
import Image from 'next/image';

const Images = ({ blok }: any) =>{
 return (
    <div className={blok?.className} {...storyblokEditable(blok)}>
      <Image src={blok?.image.filename} className={blok?.className} width={300} height={300} alt="image" />
    </div>
  );
   
} 
export default Images;