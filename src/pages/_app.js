import Head from 'next/head';
import '../../styles/globals.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import 'reactjs-popup/dist/index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { VisibleProvider } from '../components/VisibleContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { BlogDataProvider } from '../components/BlogData';
import { HomePopup } from '../components/HomePopup';
import { TranslationProvider } from '../components/TranslationContext';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps, pageTitle }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(typeof window !== 'undefined');
      setIsLoading(false);
    }
  }, []);
  return (
    <VisibleProvider>
      <TranslationProvider {...pageProps}>
        <BlogDataProvider>
          <Head>
            <title>{pageTitle}</title>
            <meta name="description" content="Your page description." />
            <link rel="icon" href="/assets/fav.png" />
          </Head>
          <Header {...pageProps} />
          <Component {...pageProps} />
          <Footer {...pageProps} />
          {isLoading ? <LoadingOverlay /> : null}
          <HomePopup {...pageProps} />
        </BlogDataProvider>
      </TranslationProvider>
    </VisibleProvider>
  );
}

export default MyApp;
