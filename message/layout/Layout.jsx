import React from 'react'
import Link from "next/link"
import useStateContext from "../context/ContextProvider";
import CookieConsent from "react-cookie-consent";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import style from "../styles/Home.module.css"
import Campaign_modal from '../utils/Campaign_modal';
import Logout_modal from '../utils/Logout_modal';



const Layout = ({ children }) => {
    const { modals, closeModal, APIloading, subStatus, deleteUserOneEvent, deleteEventID, restrictedEvent, cookieUser } = useStateContext();
    return (
        <div className='relative' >
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={APIloading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Campaign_modal open={modals} close={closeModal} />
            <Logout_modal open={modals} close={() => closeModal("logout_modal")} />
            {children}
            <CookieConsent
                declineButtonText="Cancel"
                enableDeclineButton={true}
                flipButtons
                // disableStyles={true}
                declineButtonClasses="text-stone-500 font-semibold hover:underline text-[14px] pr-4 py-2 rounded-full"
                buttonClasses="text-white bg-blue-600 w-[150px] py-2 rounded-full text-[13px] font-bold hover:bg-blue-500"
                // containerClasses={`${style.cookieBannerAnime} flex flex-col md:flex-row gap-8 items-end p-6 shadow-md border-t border-gray-300 bg-white fixed w-screen items-center md:justify-center justify-between`}
                // buttonWrapperClasses="flex items-center gap-4"
                contentClasses="text-gray-600 text-[14px]"
                expires={365}
                location="bottom"
            >
                We respect your personal privacy. <Link href="/terms-conditions" className='text-blue-600 font-bold underline' >Learn more.</Link>
            </CookieConsent>
        </div>
    )
}

export default Layout