import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { store } from '../../state/store';

const Page = dynamic(() => import('@/components/costom-components/Page'));
const SectionList = dynamic(() => import('@/components/costom-components/SectionList'));
const Image = dynamic(() => import('@/components/costom-components/Image'));
const Text = dynamic(() => import('@/components/costom-components/Text'));
const RichText = dynamic(() => import('@/components/costom-components/RichText'));
const TextArea = dynamic(() => import('@/components/costom-components/TextArea'));
const Number = dynamic(() => import('@/components/costom-components/number'));
const StyledComponent = dynamic(() => import('@/components/feature-components/styledComponent'))
const FeatureSection = dynamic(() => import('@/components/feature-components/featureSection'))
const ProductSection = dynamic(() => import('@/components/feature-components/productSection'))

const components = {
  sectionList: SectionList,
  page: Page,
  imageComponent: Image,
  richText: RichText,
  text: Text,
  textArea: TextArea,
  number: Number,
  featureList: FeatureSection,
  productList: ProductSection
};

storyblokInit({
  accessToken: "MH3QAY8cP3yZruZ2vlrU5gtt",
  use: [apiPlugin],
  components
});
  
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
