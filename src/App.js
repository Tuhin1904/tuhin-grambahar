import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import TopHeader from './components/TopHeaderOffer/TopHeader';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BottomNavBar from './components/BottomNavBar/BottomNavBar';
import Rewards from './pages/Rewards/Rewards';
import Cart from './pages/Cart/Cart';
import SecondaryBottomNavbar from './components/SecondaryBottomNavBar/SecondaryBottomNavbar';
import Profile from './pages/Profile/Profile';
import Login from './pages/LoginSignup/Login';
import StaticPageWithMdRendering from './pages/StaticPageWithMdRendering';

import privacyPolicyContentPath from './contents/privacy-policy.md';
import cookiePolicyContentPath from './contents/cookie-policy.md';
import refundPolicyContentPath from './contents/refund-policy.md';
import shippingPolicyContentPath from './contents/shipping-policy.md';
import termsOfServicesContentPath from './contents/terms-of-services.md';

function AppWrapper({ children, footerPb = '' }) {
  return (
    <>
      <TopHeader />
      <NavBar />
      {children}
      <Footer pb={footerPb} />
      {/* <SecondaryBottomNavbar/> */}
      {/* <BottomNavBar /> */}
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <AppWrapper footerPb="pb-16 sm:pb-0">
          <HomePage />
        </AppWrapper>
      ),
    },
    {
      path: '/rewards',
      element: (
        <AppWrapper>
          <Rewards />
        </AppWrapper>
      ),
    },
    {
      path: '/cart',
      element: (
        <AppWrapper>
          <Cart />
        </AppWrapper>
      ),
    },
    {
      path: '/profile',
      element: (
        <AppWrapper>
          <Profile />
        </AppWrapper>
      ),
    },
    {
      path: '/login',
      element: (
        <AppWrapper>
          <Login />
        </AppWrapper>
      ),
    },
    {
      path: '/privacy-policy',
      element: (
        <AppWrapper>
          <StaticPageWithMdRendering contentPath={privacyPolicyContentPath} />
        </AppWrapper>
      ),
    },
    {
      path: '/refund-policy',
      element: (
        <AppWrapper>
          <StaticPageWithMdRendering contentPath={refundPolicyContentPath} />
        </AppWrapper>
      ),
    },
    {
      path: '/cookie-policy',
      element: (
        <AppWrapper>
          <StaticPageWithMdRendering contentPath={cookiePolicyContentPath} />
        </AppWrapper>
      ),
    },
    {
      path: '/shipping-policy',
      element: (
        <AppWrapper>
          <StaticPageWithMdRendering contentPath={shippingPolicyContentPath} />
        </AppWrapper>
      ),
    },
    {
      path: '/terms-of-services',
      element: (
        <AppWrapper>
          <StaticPageWithMdRendering contentPath={termsOfServicesContentPath} />
        </AppWrapper>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      {/* <HomePage/> */}

      {/* <div className="flex flex-col items-center justify-center h-screen text-4xl font-bold text-center text-white bg-red-600">
        <div class="container">
        <h1 className="mb-2">Error 403</h1>
        <p>Access not granted, server error!</p>
        </div>
      </div> */}
    </>
  );
}

export default App;
