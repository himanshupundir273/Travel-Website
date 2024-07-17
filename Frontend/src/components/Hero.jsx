import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-[54px] font-bold mb-4 leading-tight">
              <span className="text-green-500 font-['Playfair_Display']">SAVING</span> 
              <span className="font-['Playfair_Display']">YOUR MONEY</span>
              <br />
              <span className="font-['Nunito_Sans']">FOR TRAVEL THROUGH</span>
              <br />
              <span className="font-['Nunito_Sans']">TRAVEL FUND</span>
            </h1>
            <p className="text-[24px] font-['Nunito_Sans'] font-[700] leading-[22px] max-w-[540px] mt-4">
              Save your money for travel securely and explore the whole world with trasave, we provide you the best travel services.
            </p>

            <div className="mt-8 space-x-0 md:space-x-4 flex flex-col md:flex-row">
              <button className="bg-gradient-to-b from-[#07E807] to-[#0C310C] text-white px-10 py-[15px] rounded-[10px] border border-[#FFFFFF] mb-2 md:mb-0">
                Save now
              </button>
              <button className="bg-gradient-to-b from-[#07E807] to-[#0C310C] text-white px-10 py-[15px] rounded-[10px] border border-[#FFFFFF]">
                UI/UX Case Study
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img src="/Group 10.png" alt="Happy Traveler" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
