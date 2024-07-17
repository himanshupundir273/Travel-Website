import React from 'react'

const SaveMoney = () => {
    return (
      <section className="relative bg-black text-white w-full h-[859px] flex items-center">
        <div 
          className="absolute inset-0 bg-[url('/money.jpg')] bg-cover bg-center bg-no-repeat opacity-50"
        ></div>
        <div className="container mx-auto flex justify-between items-center relative z-10 px-12">
          <div className="w-1/2">
            <div className="w-16 h-1 bg-green-500 mb-6"></div>
            <h2 className="text-[54px] w-[582px] h-[296px] font-bold font-sans mb-8 leading-tight">
              Save your travel<br />
              money in Trasave and<br />
              get top grade security<br />
              with us
            </h2>
          </div>
          <div className="w-[477px] h-[528px] pl-12 font-sans text-2xl font-semibold leading-[32.74px] text-left">
            <p className="mb-14">
              There are so many benefits of travelling with Trasave. Not only do we provide you 
              with an awesome digital travel solution, an awesome travel app, but we also make it 
              super easy and fun for you to store, save and move your travel money.
            </p>
            <p className="">
              As well as saving money, the TRASAVE travel fund is a good way to track your 
              travel money. Tracking Expenses is important when travelling as you don't 
              want to be stuck in the middle of your journey budgeting your travel. We created 
              the travel fund so you can store all your travel money and then track your money 
              from your travel fund expense tracker.
            </p>
          </div>
        </div>
      </section>
    );
};

export default SaveMoney;