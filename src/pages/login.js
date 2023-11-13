import Head from 'next/head';
import Login from '@/containers/LoginSignup/Login';

function LoginPage() {
  return (
    <>
      <Head>
        <title>Gram Bahar | Login</title>
      </Head>
        
        <Login/>
    </>
  );
}

export default LoginPage;
