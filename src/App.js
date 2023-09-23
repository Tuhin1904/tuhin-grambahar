import HomePage from './pages/HomePage/HomePage';
import TopHeader from './components/TopHeaderOffer/TopHeader';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BottomNavBar from './components/BottomNavBar/BottomNavBar';
import Rewards from './pages/Rewards/Rewards';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path:"/rewards",
      element:<Rewards/>
    }
  ]);
  return (
    <>
      <TopHeader/>
      <NavBar/>
  
      <RouterProvider router={router} />
  
      
      <Footer />
      <BottomNavBar />
      {/* <HomePage/> */}

      {/* <div className="flex flex-col items-center justify-center h-screen text-4xl font-bold text-center text-white bg-red-600">
        <div class="container">
          <h1 className="mb-2">Error 403</h1>
          <p>Access not granted, server error!</p>
        </div>
      </div> */}
    </>
  );
};

export default App;
