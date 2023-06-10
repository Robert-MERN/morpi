import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import useStateContext from '../context/ContextProvider';
import styles from "../styles/Home.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Fade from "react-reveal/Fade";
import Nav_options_popover from '../utils/Nav_options_popover';


const Navbar = () => {
    const { handleSidebar, openModal, switchSidebarTabs, } = useStateContext();
    const [showNavBG, setShowNavBG] = useState(false);
    const controlNavbar = () => {
        if (window.scrollY < 100) {
            setShowNavBG(true);
        } else {
            setShowNavBG(false);

        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, []);



    const [anchorEl, setAnchorEl] = useState(null);
    const handle_nav_options_pop = (e) => {
        setAnchorEl(e.currentTarget);
    }

    return (
        <Fade duration={300} >
            <div
                className={`w-screen lg:w-full h-[60px] px-[10px] lg:px-[20px] top-0 inset-x-0 fixed lg:static bg-white flex items-center z-[15] transition-all duration-300 border-b`}
            >
                <div className='flex items-center justify-between w-full' >
                    <div className='' >
                        <button className='hover:opacity-90 hover:scale-110 bg-pink-600 active:opacity-75 text-white px-[14px] py-[4px] rounded-lg transition-all lg:block hidden' onClick={handleSidebar} >
                            <MenuIcon />
                        </button>
                        <p className={`${styles.logoText} text-[28px] text-zinc-800 font-semibold  block lg:hidden`} >MessageAPP</p>
                    </div>
                    <div className='justify-end flex gap-6 items-center' >

                        <button onClick={() => switchSidebarTabs("Create Campaigns")} className='text-[15px] text-slate-500  font-semibold whitespace-nowrap hidden lg:block' >Create Campaign</button>

                        <button onClick={() => switchSidebarTabs("Add to Contacts")} className='text-[15px] text-slate-500 font-semibold whitespace-nowrap hidden lg:block' >Contacts</button>

                        <button onClick={() => openModal("logout_modal")} className='text-[15px] hover:opacity-[.85] gap-1 font-semibold px-[12px] py-[6px] bg-indigo-500 text-white rounded-lg transition-all hidden lg:flex' >
                            <LogoutIcon className='scale-[.6]' />
                            Logout
                        </button>

                        <IconButton aria-describedby='nav_options_popover' onClick={handle_nav_options_pop} className='hover:bg-stone-200 transition-all' >
                            <MoreVertIcon className='' />
                        </IconButton>
                        <Nav_options_popover
                            anchorEl={anchorEl}
                            close={() => setAnchorEl(null)}
                        />

                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Navbar