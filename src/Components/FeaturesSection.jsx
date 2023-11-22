import React from 'react';

const FeatureSection = ({ imgSrc, title, description, number }) => {
  const isSecondSection = number === 2;

  return (
    <section>
      

      <div
        style={{ backgroundColor: '#f6fbff' }}
        className={`py-20 px-8 max-w-screen-2xl   flex  ${isSecondSection ? 'lg:flex-row-reverse ' : 'lg:flex-row '}  flex-col gap-16 mx-auto md:place-items-center`}
      >
        <div className="text-center md:text-left">
          <h3 className="text-2xl text-slate-900 mb-8 md:text-3xl lg:text-4xl">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-loose mb-8 lg:text-base lg:leading-relaxed">
            {description}
          </p>
        </div>

        <div>
          <img src={`${imgSrc}`} alt="" />
        </div>
      </div>

      
    </section>
  );
};

export default FeatureSection;
