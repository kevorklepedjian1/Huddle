import React from 'react';
import logo from '../images/logo.svg'



function Header() {
  return (
  
    <header className="flex items-center justify-between p-8 max-w-7xl mx-auto">
      <div>
        <img src={logo} alt="" className="w-40 lg:w-auto" />
      </div>

      <button className="text-pink-400 border border-pink-400 py-2 px-4 rounded-full">
        Try it free
      </button>
    </header>
  )
}

export default Header