import React from 'react';
import Link from 'next/link';
import MobileNavBar from './MobileNavBar';

function NavBar() {
  // console.log(userRes)

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
      <MobileNavBar />
    </>
  );
}

export default NavBar;
