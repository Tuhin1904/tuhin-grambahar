/* eslint-disable react/button-has-type */
import { useState } from 'react';
import Link from 'next/link';
import Menu from '../Icons/Menu';
import Search from '../Icons/Search';
import User from '../Icons/User';
import Cart from '../Icons/Cart';
import { headerLinks } from '@/data/header';

function MobileNavBar() {
  const [open, setOpen] = useState(false);

  const onClickToggle = () => {
    setOpen(!open);
  };

  const handleLoginComponent = (e) => {
    if (typeof window !== 'undefined') {
      const userRes = localStorage.getItem('user');
      if (userRes) {
        e.preventDefault();
        console.log('inside if');
        window.location.href = '/profile';
        console.log('after');
      }
    }
  };

  return (
    <>
      <div className="border-b border-primary">
        <nav className="container flex grid-cols-3 px-4 py-2 mx-auto sm:grid ">
          <div className="flex items-center">
            <button onClick={onClickToggle} className="p-2 duration-500 ease-in-out text-primary">
              <Menu />
            </button>
          </div>
          <div className="flex items-center justify-center flex-grow">
            <Link href="/" className="transform translate-x-1/3 sm:translate-x-0">
              <img src="grambahar_logo.ico" alt="Grambahar Logo" className="w-20" height="30px" width="100px" />
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <button className="p-2 mr-2 duration-500 ease-in-out text-primary">
              <Link href="/login" onClick={handleLoginComponent}>
                <User />
              </Link>
            </button>
            <button className="p-2 duration-500 ease-in-out text-primary">
              <Link href="/cart">
                <Cart />
              </Link>
            </button>
          </div>
        </nav>
      </div>
      {open && (
        <div className="fixed left-0 z-50 w-64 h-screen px-6 pt-8 bg-white shadow-2xl top-18 pb-28">
          <ul className="text-base">
            {headerLinks.map((link) => (
              <li key={link.label} className="mb-4">
                <Link href={link.href} className="duration-300 ease-in-out hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}{' '}
    </>
  );
}

export default MobileNavBar;
