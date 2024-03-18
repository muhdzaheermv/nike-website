import React from 'react'
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../Constants';



const Nav = () => {
  return (
      <header className='padding py-8 absolute z-10 w-full'>
          <nav className='flex justify-between items-center max-container'>
              <a href="/">
                  <img src={headerLogo} alt="logo" width={130} height={29} />
              </a>
              <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                  {navLinks.map((item) => (
                      <li key={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                          {item.label}
                      </li>
                  ))}
              </ul>
              <div className="hidden max-lg:block">
                  <img width={25} height={25} src={hamburger} alt="humburger" />
              </div>
          </nav>
    </header>
  )
}

export default Nav