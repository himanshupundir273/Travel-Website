import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="logo w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
          <img src="/trasave1.png" alt="Trasave" className="w-[107px] h-[107px]" />
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <nav>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 text-[22px] text-center md:text-left">
              <li><a href="#" className="hover:text-green-400 w-full md:w-auto">Home</a></li>
              <li><a href="#" className="hover:text-green-400 w-full md:w-auto">Save</a></li>
              <li><a href="#" className="hover:text-green-400 w-full md:w-auto">Travel</a></li>
              <li><a href="#" className="hover:text-green-400 w-full md:w-auto">Experience</a></li>
              <li><a href="#" className="hover:text-green-400 w-full md:w-auto">Wallet</a></li>
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
