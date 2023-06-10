import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import useStateContext from '../context/ContextProvider';
import styles from "../styles/Home.module.css"


const Navbar = () => {
  const { language, setLanguage, } = useStateContext();
  const [showNavBG, setShowNavBG] = useState(false);
  const controlNavbar = () => {
    console.log(window.scrollY)
    if (window.scrollY < 100) {
      setShowNavBG(true);
    } else {
      setShowNavBG(false);

    }
  }

  return (
    <div
      id="landing_page"
      className={`w-full h-[60px] px-[20px] fixed hidden md:flex items-center z-[15] transition-all duration-300 bg-violet-500 drop-shadow-md`}
    >
      <div className='flex items-center justify-between w-full' >
        <div className='w-full' >
          <p className={`${styles.logoText} text-[28px] text-white font-semibold`} >Morpi</p>
        </div>
        <div className='w-full justify-end gap-6 items-center hidden lg:flex' >
          <Link href="/home" >
            <button className='text-[15px] text-white font-semibold' >Create Campaign</button>
          </Link>
          <Link href="/home" >
            <button className='text-[15px] text-white font-semibold' >Settings</button>
          </Link>
          <Link href="/home" >
            <button className='text-[15px] text-white font-semibold' >Features</button>
          </Link>
          <Link href="/home" >
            <button className='text-[15px] font-semibold px-[10px] py-[6px] bg-white text-indigo-900 rounded-md' >Apps</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar