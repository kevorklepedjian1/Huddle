import React from 'react'
import bg from '../images/bg-footer-top-desktop.svg'

const CtaSection = () => {
    return (
      <section className="px-8 py-20 lg:py-40 flex flex-col items-center justify-center gap-8 relative">
      <h2 className="text-3xl lg:text-5xl text-center text-gray-900">
        Ready To Build Your Community?
      </h2>
      <button className="bg-pink-400 py-2 px-4 rounded-full text-white shadow text-sm lg:text-base">
        Get Started For Free
      </button>
     
      <img
        srcSet={bg}
       
        className="absolute bottom-0 left-0"
      />
  
    </section>
    );
  };
  
  export default CtaSection;
  