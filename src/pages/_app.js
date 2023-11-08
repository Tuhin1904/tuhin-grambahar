import Footer from '@/components/Lagacy/Footer/Footer';
import NavBar from '@/components/Lagacy/NavBar/NavBar';
import '@/styles/font.css';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Head>
        <title>Gram Bahar | Authentic Test of Nature</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
