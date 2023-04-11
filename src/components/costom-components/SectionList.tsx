import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import StyledComponent from "../feature-components/styledComponent";
 
const SectionList = ({ blok }: any) => {
  return (
    <div className={blok?.className} {...storyblokEditable(blok)}>
      {blok?.list?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  );
};
 
export default SectionList;