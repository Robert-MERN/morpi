import React, { useState } from 'react'
import Link from "next/link"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import styles from '../styles/Home.module.css'
import Logo from '../utils/Logo';



const Footer = () => {
  const icons = [
    {
      icon: <TwitterIcon />,
      name: "icon-2",
      link: "https://twitter.com/turpio",
    },
    {
      icon: <InstagramIcon />,
      name: "icon-3",
      link: "https://www.instagram.com/turpio/",
    },
    {
      icon: <MailIcon />,
      name: "icon-4",
      link: "mailto:info@turpio.com",
    }
  ]
  const [hover, sethover] = useState({
    'icon-1': false,
    'icon-2': false,
    'icon-3': false,
  });
  // hover function
  const hoverIcon = (bool, key) => {
    sethover((prev) => ({ ...prev, [key]: bool }))
  }
  return (
    <div className='pt-12 pb-8  w-screen border-t border-stone-300 flex flex-col items-center gap-16 bg-white px-[20px]' >
      <div className='lg:w-[1200px] w-full flex flex-col md:flex-row justify-between' >
        <div className='flex-1 flex flex-col gap-6 pr-8' >
          <Logo />
          <p className='text-[20px] text-stone-700 font-medium'>We take the work out of connecting with others so you can accomplish more.</p>
        </div>
        <div className='flex-1 border-x border-stone-300 flex flex-col gap-6 px-8 ' >
          <Link href="/home" >
            <p className='text-[18px] text-stone-700 font-medium hover:text-black transition-all' >My Page</p>
          </Link>
          <Link href="/event/new" >
            <p className='text-[18px] text-stone-700 font-medium hover:text-black transition-all' >Create</p>
          </Link>
          <Link href="/contact-us" >
            <p className='text-[18px] text-stone-700 font-medium hover:text-black transition-all' >Contact Us</p>
          </Link>
          <Link href="/terms-conditions" >
            <p className='text-[18px] text-stone-700 font-medium hover:text-black transition-all' >Terms & Conditions</p>
          </Link>
        </div>
        <div className='flex-1 flex flex-col gap-6 pl-8' >
          <div className='flex gap-3 items-center' >
            {/* icons */}
            {
              icons.map((i, index) => (
                <a href={i.link} target="__blank" key={index} onMouseOver={() => hoverIcon(true, i.name)} onMouseLeave={() => hoverIcon(false, i.name)} className={`w-[50px] h-[50px] relative rounded-full bg-glare overflow-hidden cursor-pointer border border-stone-400 ${styles.tapHighlight}`} >
                  <div className={`absolute inset-0 w-full h-full grid place-content-center text-stone-800 transition-all rounded-full duration-[400ms] ${hover[i.name] ? "opacity-0" : "opacity-100"}`} >
                    {i.icon}
                  </div>
                  <div className={`absolute inset-0 w-full h-full grid place-content-center bg-gradient-to-bl to-violet-700 from-sky-400 text-gray-300  transition-all duration-[400ms] rounded-full ${hover[i.name] ? "scale-[1]" : "scale-0"}`} >
                    {i.icon}
                  </div>
                </a>
              ))}
          </div>
          {/* <a rel="noreferrer noopener" href="tel:647-660-1776" className=" text-stone-700 font-medium hover:text-black transition-all">
            <CallIcon className='mr-3' ></CallIcon> <span>647-660-1776</span>
          </a> */}
          <a rel="noreferrer noopener" href="mailto:info@turpio.com" className=" text-stone-700 font-medium hover:text-black transition-all">
            <MailIcon className='mr-3' ></MailIcon> <span>info@turpio.com</span>
          </a>
        </div>

      </div>
      <div className='w-full flex justify-center' >
        <p className='text-[15px] text-stone-500 font-medium' > © Copyright 2023. All Rights Reserved by Turpio.</p>
      </div>
    </div>

  )
}

export default Footer