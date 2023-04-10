import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Page = ({ blok }: any) => (
  <main {...storyblokEditable(blok)}>
    {blok?.page?.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
 
export default Page;