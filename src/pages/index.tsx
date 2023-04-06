import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { StoryblokComponent, getStoryblokApi, useStoryblokState } from '@storyblok/react'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home({story}: any) {
  story = useStoryblokState(story);
  
debugger;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Layout>
      <StoryblokComponent blok={story?.content} />
      </Layout>
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
