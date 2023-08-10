import Head from 'next/head';
import { VisibleProvider } from '../components/VisibleContext';
import '../../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'reactjs-popup/dist/index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps, pageTitle }) {
  return (
    <VisibleProvider>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Your page description." />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </VisibleProvider>
  );
}

export default MyApp;