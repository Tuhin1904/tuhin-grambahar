import Footer from '@/components/Lagacy/Footer/Footer';
import NavBar from '@/components/Lagacy/NavBar/NavBar';
import '@/styles/font.css';
import '@/styles/globals.css';
import axios from 'axios';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const originalRequest = error.config;

      if (error.response.status === 401 && originalRequest.url.includes('api.grambahar.com')) {
        localStorage.removeItem('user');
        return Promise.reject(error);
      }

      return Promise.reject(error);
    },
  );

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
