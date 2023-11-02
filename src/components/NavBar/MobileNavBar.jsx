/* eslint-disable react/button-has-type */
import { useState } from 'react';
import Menu from '../Icons/Menu';
import Search from '../Icons/Search';
import User from '../Icons/User';
import Cart from '../Icons/Cart';
import { Link } from 'react-router-dom';

function MobileNavBar() {
  const [open, setOpen] = useState(false);

  const onClickToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="flex w-full px-4 py-2 border-b sm:hidden border-primary">
        <div className="flex-grow">
          <button
            onClick={onClickToggle}
            className="p-2 duration-500 ease-in-out bg-white text-primary hover:bg-primary hover:text-white"
          >
            <Menu />
          </button>{' '}
        </div>
        <div>
          <Link to="/">
            <img src="grambahar_logo.ico" alt="" height="30px" width="100px" />{' '}
          </Link>
        </div>
        <div>
          <button className="p-2 mr-2 duration-500 ease-in-out bg-white text-primary hover:bg-primary hover:text-white">
            <Search />
          </button>

          <button className="p-2 mr-2 duration-500 ease-in-out bg-white text-primary hover:bg-primary hover:text-white">
            <Link to="/login">
              <User />
            </Link>
          </button>
          <button className="p-2 duration-500 ease-in-out bg-white text-primary hover:bg-primary hover:text-white">
            <Link to="/cart">
              <Cart />
            </Link>
          </button>
        </div>
      </nav>{' '}
      {open && (
        <div className="fixed right-0 z-50 w-64 h-screen px-6 pt-8 bg-white shadow-2xl top-22 pb-28">
          <ul className="text-base">
            <li className="mb-4"> Products </li> <li className="mb-4"> About US </li>{' '}
            <li className="mb-4"> Rewards </li> <li className="mb-4"> Feedback </li> <li className="mb-4"> Career </li>{' '}
            <li className="mb-4"> Meet Our Farmers </li>{' '}
          </ul>{' '}
        </div>
      )}{' '}
    </>
  );
}

export default MobileNavBar;
