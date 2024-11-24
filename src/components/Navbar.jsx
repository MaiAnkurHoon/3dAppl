import React from 'react';
import { appleImg, bagImg, searchImg } from '../utils';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10">
      <nav className="flex items-center justify-between">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex gap-5">
          {['phones', 'macbook', 'ipads'].map((nav) => (
            <div key={nav} className="text-gray-700 capitalize">
              {nav}
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}


export default Navbar;
