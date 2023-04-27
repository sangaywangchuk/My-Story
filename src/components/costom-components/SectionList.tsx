import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Head from "next/head";
 
const SectionList = ({ blok }: any) => {
  return (
    <div className={blok?.className} {...storyblokEditable(blok)}>
       <Head>
        <meta name="description" content="Section List"/>
      </Head>
      {blok?.list?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  );
};
 
export default SectionList;