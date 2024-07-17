import React from 'react'

const Header = () => {
    return (
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo w-1,329px h-107px">
            <img src="/trasave1.png" alt="Trasave" className="w-107px h-107px gap-[504px] " />
          </div>
          <div className='w-718px h-48px gap-[40px] flex items-center'>
          <nav>
            <ul className="flex space-x-12 text-[22px] ">
              <li><a href="#" className="hover:text-green-400 w-61px h-30px ">Home</a></li>
              <li><a href="#" className="hover:text-green-400 w-49px h-30px ">Save</a></li>
              <li><a href="#" className="hover:text-green-400 w-62px h-30px ">Travel</a></li>
              <li><a href="#" className="hover:text-green-400 w-110px h-30px">Experience</a></li>
              <li><a href="#" className="hover:text-green-400 w-69px h-30px">Wallet</a></li>
            </ul>
          </nav>
          <button className="bg-gradient-to-b from-[#07E807] to-[#0C310C] text-white px-10 py-[15px] rounded-[10px] border border-[#FFFFFF]  w-117px h-30px">Contact Us</button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;