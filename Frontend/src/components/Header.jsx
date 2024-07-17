import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-auto flex justify-between items-center mb-4 md:mb-0">
          <img src="/trasave1.png" alt="Trasave" className="w-[107px] h-[107px]" />
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className={`w-full md:w-auto flex-col md:flex-row items-center gap-4 md:gap-10 ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 text-[22px] text-center md:text-left">
              <li><a href="#" className="hover:text-green-400 block w-full md:w-auto">Home</a></li>
              <li><a href="#" className="hover:text-green-400 block w-full md:w-auto">Save</a></li>
              <li><a href="#" className="hover:text-green-400 block w-full md:w-auto">Travel</a></li>
              <li><a href="#" className="hover:text-green-400 block w-full md:w-auto">Experience</a></li>
              <li><a href="#" className="hover:text-green-400 block w-full md:w-auto">Wallet</a></li>
            </ul>
          </nav>
          <button className="bg-gradient-to-b from-[#07E807] to-[#0C310C] text-white px-10 py-3 rounded-[10px] border border-[#FFFFFF] w-full md:w-auto">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;