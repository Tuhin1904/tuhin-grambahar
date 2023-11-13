import Head from 'next/head';
import Profile from './../containers/Profile/Profile';

function LoginPage() {
  return (
    <>
      <Head>
        <title>Gram Bahar | Profile</title>
      </Head>
       
        <Profile/>
    </>
  );
}

export default LoginPage;
