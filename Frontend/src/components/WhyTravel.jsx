import React from 'react'
import TravelFeature from './TravelFeature';

const WhyTravel = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="w-full lg:w-[1128px] h-auto mt-8 lg:mt-[100px] mx-auto lg:mx-auto mb-8 lg:mb-[129px] flex flex-col items-center justify-center text-center space-y-8">
          <h2 className="font-extrabold text-4xl lg:text-[50px] leading-tight lg:leading-[73.66px] font-[Nunito Sans]">
            Why to <span className="text-green-500 font-[Playfair Display] italic font-extrabold text-4xl lg:text-[54px] leading-tight lg:leading-[71.98px]">travel</span> with us?
          </h2>
          <p className="text-base lg:text-lg mb-8 lg:mb-12">
            Ambitious about your next adventure but sick of saving money? End up sneaking into those savings because well. You're bored? Lost motivation? You don't feel the funds are growing fast enough? Saving just sucks? Trasave has introduced an epic new way to reward you for your savings for travel.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto w-full lg:w-[1025px] lg:h-[353px] gap-8 lg:gap-[93px]">
          <TravelFeature iconSrc="/Save.png" iconSize="w-16 h-16" title="Save money" description="Invest in trasave securely for future" />
          <TravelFeature iconSrc="/Wedding.png" iconSize="w-16 h-16" title="Earn rewards" description="Earn rewards and track your money" />
          <TravelFeature iconSrc="/Travel.png" iconSize="w-16 h-16" title="Travel Global" description="Use this money for your travelling" />
        </div>
      </div>
    </section>
  );
};

export default WhyTravel;