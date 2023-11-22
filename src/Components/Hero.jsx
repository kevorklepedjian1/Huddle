import React from 'react'
import i from '../images/screen-mockups.svg'


const Hero = () => {
    return (
      <section className="p-8 md:py-20">
      <article className="text-center">
        <h1 className="text-3xl mb-8 text-gray-900 lg:text-5xl">
          Build The Community Your Fans Will Love
        </h1>

        <p className="text-gray-600 text-sm leading-loose mb-8 lg:text-base lg:leading-relaxed lg:w-1/3 lg:mx-auto">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>

        <button className="bg-pink-400 py-2 px-4 rounded-full text-white shadow text-sm lg:text-base">
          Get Started For Free
        </button>
      </article>

      <article className="my-8">
        <img src={i} alt="" className="block mx-auto" />
      </article>
    </section>
    );
  };
  
  export default Hero;