import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import TopHeader from './components/TopHeaderOffer/TopHeader';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BottomNavBar from './components/BottomNavBar/BottomNavBar';
import Rewards from './pages/Rewards/Rewards';
import Cart from './pages/Cart/Cart';
import SecondaryBottomNavbar from './components/SecondaryBottomNavBar/SecondaryBottomNavbar'
import Profile from './pages/Profile/Profile';
import Login from './pages/LoginSignup/Login';
function AppWrapper({ children }) {
  return (
    <>
      <TopHeader />
      <NavBar />
      {children}
      <Footer />
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
        <AppWrapper>
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
      path:'/profile',
      element:(
        <AppWrapper>
          <Profile/>
        </AppWrapper>
      )
    },
    {
      path:'/login',
      element:(
        <AppWrapper>
          <Login/>
        </AppWrapper>
      )
    }
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
