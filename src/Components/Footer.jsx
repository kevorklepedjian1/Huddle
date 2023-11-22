import React from 'react'
import f from '../images/logo.svg'
import p from '../images/icon-phone.svg'
import e from '../images/icon-email.svg'


const Footer = () => {
    return (
      <footer style={{ backgroundColor: '#00252e' }} className="py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
        <article>
          <img src={f} alt="" className="w-40 lg:w-auto mb-8" />

          <p className="text-white text-sm leading-loose lg:text-base lg:leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>

          <ul className="flex gap-4 flex-col mb-12">
            <li className="flex text-white gap-2 items-center">
              <img src={p} alt="" />Phone: +1-543-123-4567
            </li>
            <li className="flex text-white gap-2 items-center">
              <img src={e} alt="" />example@huddle.com
            </li>
          </ul>

          <ul className="flex items-center justify-start gap-4">
            <li className="text-white text-3xl"><i className="fab fa-facebook"></i></li>
            <li className="text-white text-3xl">
              <i className="fab fa-instagram"></i><img src="" alt="" />
            </li>
            <li className="text-white text-3xl">
              <i className="fab fa-twitter"></i><img src="" alt="" />
            </li>
          </ul>
        </article>

        <article className="md:w-2/3 md:ml-auto">
          <h4 className="text-white uppercase text-xl mb-8 tracking-widest">
            Newsletter
          </h4>
          <p className="text-white text-sm leading-loose lg:text-base lg:leading-relaxed mb-8">
            To receive tips on how to grow your community, sign up for our weekly newsletter. We’ll never send you spam or pass on your email address.
          </p>

          <form className="flex flex-col items-end lg:flex-row">
            <input
              type="email"
              name="email"
              id="email"
              required
              className="py-2 px-4 text-pink-600 w-full mb-4 rounded-lg lg:mb-0 lg:mr-4"
            />
            <input
              type="submit"
              value="Subscribe"
              className="bg-pink-400 py-2 px-4 rounded text-white shadow text-sm lg:text-base"
            />
          </form>
        </article>
      </div>
    </footer>
    );
  };
  
  export default Footer;
  