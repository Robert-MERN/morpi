import Image from 'next/image'
import React, { useState } from 'react'
import backgroundImage from "../public/images/background2.png"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Fade from "react-reveal/Fade";
import Login from './Login';
import SignupPart1 from './SignupPart1';
import useStateContext from '../context/ContextProvider';
import { getCookie } from 'cookies-next';
import SignupPart2 from './SignupPart2';
import style from "../styles/Home.module.css";
import app_logo from "../public/images/app_logo.png"





const LangingPage = ({ CJS_KEY }) => {

    const { signupUser } = useStateContext();
    const signupUserInfo = getCookie("signupUser") ? JSON.parse(getCookie("signupUser")) : signupUser


    const [page, setPage] = useState("signin");



    const handlePage = (target) => {
        setPage(target);
    };
    return (
        <div className='w-screen h-screen' >

            <Fade duration={500} >
                <div className={`w-screen h-screen  overflow-auto ${style.scrollBar}`} >

                    {page === "signin" ?
                        <Fade duration={500} >

                            <div className='flex h-full' >
                                <div className='flex-1 grid place-items-center'>
                                    <Login handlePage={handlePage} />
                                </div>
                                <div className='flex-1 place-items-center bg-slate-100 lg:grid hidden' >
                                    <div className='w-[180px] h-[180px] rounded-full relative bg-gradient-to-br from-indigo-400 to-violet-600 p-2' >
                                        <Image className='object-contain w-full h-full' alt="logo_image" src={app_logo} />
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        :

                        <div className='flex h-full md:pt-[65px]' >
                            <Fade duration={500} >
                                <div className='flex-1 grid place-items-center'>
                                    {signupUserInfo ?
                                        <SignupPart2 CJS_KEY={CJS_KEY} />
                                        :
                                        <SignupPart1 handlePage={handlePage} CJS_KEY={CJS_KEY} />
                                    }

                                </div>
                                <div className='flex-1 place-items-center bg-slate-100 lg:grid hidden' >
                                    <div className='w-[180px] h-[180px] rounded-full relative bg-gradient-to-br from-indigo-400 to-violet-600 p-2' >
                                        <Image className='object-contain w-full h-full' alt="logo_image" src={app_logo} />
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    }

                </div >
            </Fade>
        </div >
    )
}

export default LangingPage