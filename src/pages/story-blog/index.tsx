import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { StoryblokComponent, getStoryblokApi, useStoryblokState } from '@storyblok/react'
import Layout from '@/components/Layout'
import PromoSection from '@/components/feature-components/promoSection'
import ProductSections from '@/components/feature-components/productSection'
import FeatureSection from '@/components/feature-components/featureSection'
import ContactSection from '@/components/feature-components/contactSection'
import PricingSection from '@/components/feature-components/pricingSection'
import HeaderNav from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home({story}: any) {
  story = useStoryblokState(story);
  
  return (
    <>
      <Head>
        <title>Story blok</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
      {/* <Layout> */}
      <HeaderNav/>
      <StoryblokComponent blok={story?.content} />
      <PromoSection></PromoSection>
      {/* <ProductSections></ProductSections>
      <FeatureSection></FeatureSection>
      <ContactSection></ContactSection>
      <PricingSection></PricingSection> */}
      {/* </Layout> */}
      </main>
    </>
  )
}

export async function getStaticProps() {
  let slug = "home";
  let sbParams = {
    version: "draft", // or 'published'
  } as any;
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}