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

function MyApp({ Component, pageProps, pageTitle }) {
  return (
    <VisibleProvider>
      <BlogDataProvider>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content="Your page description." />
        </Head>
        <Header {...pageProps} />
        <Component {...pageProps} />
        <Footer {...pageProps} />
        <HomePopup {...pageProps} />
      </BlogDataProvider>
    </VisibleProvider>
  );
}

export default MyApp;
