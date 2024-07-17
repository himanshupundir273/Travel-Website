import React from 'react'

const TravelFeature = ({ iconSrc, iconSize, title, description }) => {
  return (
    <div className="w-full sm:w-[271px] text-center">
      <div className="">
        <img src={iconSrc} alt={title} className={`${iconSize} mx-auto`} />
      </div>
      <h3 className="font-['Nunito_Sans'] text-xl sm:text-2xl font-semibold leading-tight mb-2">
        {title}
      </h3>
      <p className="font-['Nunito_Sans'] text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default TravelFeature;