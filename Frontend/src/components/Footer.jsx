import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 bg-[url('/footer1.jpg')] bg-cover bg-center bg-no-repeat opacity">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-4 lg:px-0">
        <div className="flex flex-col items-start mb-8 lg:mb-0">
          <img src="/trasave1.png" alt="Trasave" className="w-32 mb-4" />
          <p className="w-full lg:w-[275px] h-auto lg:h-[99px] text-[24px] font-sans leading-[32.74px] mb-4">
            TRASAVE travel fund is a good way to track your travel money.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6 invert brightness-0 transition-all duration-200 hover:brightness-90" />
            </a>
            <a href="#" className="text-white">
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 invert brightness-0 transition-all duration-200 hover:brightness-90" />
            </a>
            <a href="#" className="text-white">
              <img src="/facebook.png" alt="Facebook" className="w-6 h-6 invert brightness-0 transition-all duration-200 hover:brightness-90" />
            </a>
            <a href="#" className="text-white">
              <img src="/twitter.png" alt="Twitter" className="w-6 h-6 invert brightness-0 transition-all duration-200 hover:brightness-90" />
            </a>
          </div>
        </div>
        <div className="mb-8 lg:mb-0">
          <h3 className="text-[28px] font-semibold mb-4 text-green-500">About</h3>
          <ul className="space-y-2 text-[24px]">
            <li><a href="#" className="hover:text-green-400">•  Technical Info</a></li>
            <li><a href="#" className="hover:text-green-400">•  Other Products</a></li>
          </ul>
        </div>
        <div className="mb-8 lg:mb-0">
          <h3 className="text-[28px] font-semibold mb-4 text-green-500">Contact Us</h3>
          <div className='text-[24px]'>
            <p>Bengaluru, India</p>
            <p>80030 10108</p>
            <p>hr@curlistic.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-[28px] font-semibold mb-4">Subscribe <span className="text-green-500">Newsletter</span></h3>
          <form className="flex flex-col lg:flex-row">
            <input type="email" placeholder="Enter your email" className="bg-white text-black px-4 py-2 rounded-t lg:rounded-l lg:rounded-t-none mb-2 lg:mb-0" />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-b lg:rounded-r lg:rounded-b-none">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-[20px] mt-8 flex items-center justify-center">
        <p>Copyright 2022 Curlistic. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;