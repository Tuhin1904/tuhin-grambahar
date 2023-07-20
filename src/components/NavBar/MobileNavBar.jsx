import { useState } from 'react';
import Menu from '../Icons/Menu';
import Search from '../Icons/Search';
import User from '../Icons/User';
import Cart from '../Icons/Cart';

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);

  const onClickToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="w-full sm:hidden py-2 px-4 border-b border-primary flex">
        <div className="flex-grow">
          <button
            onClick={onClickToggle}
            className="bg-white p-2 text-primary hover:bg-primary hover:text-white ease-in-out duration-500"
          >
            <Menu />
          </button>
        </div>
        <div>
          <button className="bg-white p-2 mr-2 text-primary  hover:bg-primary hover:text-white ease-in-out duration-500">
            <Search />
          </button>

          <button className="bg-white p-2 text-primary mr-2 hover:bg-primary hover:text-white ease-in-out duration-500">
            <User />
          </button>
          <button className="bg-white p-2 text-primary hover:bg-primary hover:text-white ease-in-out duration-500">
            <Cart />
          </button>
        </div>
      </nav>
      {open && (
        <div className="w-64 h-screen bg-white fixed top-22 right-0 pb-28 z-50 shadow-2xl px-6 pt-8">
          <ul className="text-base">
            <li className="mb-4">Products</li>
            <li className="mb-4">About US</li>
            <li className="mb-4">Rewards</li>
            <li className="mb-4">Feedback</li>
            <li className="mb-4">Career</li>
            <li className="mb-4">Meet Our Farmers</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNavBar;
