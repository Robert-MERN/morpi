import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from "../styles/Home.module.css"
import useStateContext from '../context/ContextProvider';
import Fade from "react-reveal/Fade";
import Image from "next/image";
import app_logo from "../public/images/app_logo.png"

const Sidebar = () => {
    const { openSidebar, switchSidebarTabs, sidebarTabs, openModal } = useStateContext();

    const options = [
        {
            title: "Dashboard",
            navLinks: [
                {
                    link: "Mail Sender",
                    icon: <ForwardToInboxIcon className='scale-[.8]' />
                },
                {
                    link: "WhatsApp Sender",
                    icon: <WhatsAppIcon className='scale-[.8]' />
                },
            ]

        },
        {
            title: "Features",
            navLinks: [
                {
                    link: "Add to Contacts",
                    icon: <PermContactCalendarIcon className='scale-[.8]' />
                },
                {
                    link: "Create Campaign",
                    icon: <Diversity2Icon className='scale-[.8]' />
                },
            ]

        },
        {
            title: "Profile",
            navLinks: [
                {
                    link: "Edit Profile",
                    icon: <ManageAccountsIcon className='scale-[.8]' />
                },
                // {
                //     link: "Settings",
                //     icon: <SettingsIcon className='scale-[.8]' />
                // },
            ]

        },
    ]

    return (
        <Fade left duration={300} >
            <div className={`xl:flex-[1.5] 2xl:flex-[1] bg-white h-screen top-0 bottom-0 p-[20px] shadow-2xl transition-all duration-300 delay-400 lg:block hidden ${openSidebar ? "translate-x-0 " : "-translate-x-full "}`} >
                <div className={`mb-12 flex items-center gap-4`}>
                    <div className='w-[65px] h-[65px] rounded-2xl relative bg-gradient-to-br from-indigo-400 to-violet-600' >
                        <Image className='object-contain w-full h-full' alt="logo_image" src={app_logo} />
                    </div>
                    <p className={`${styles.logoText} text-indigo-400 text-[32px] font-black`}>MORPI</p>
                </div>
                {options.map((each, index) => (
                    <React.Fragment key={index}>
                        <p className='text-[17px] text-slate-400 my-4 uppercase' >{each.title}</p>
                        {each.navLinks.map((i, index) => (
                            <button onClick={() => switchSidebarTabs(i.link)} key={index} className={`whitespace-nowrap py-[10px] text-[14px] hover:bg-indigo-500 hover:text-white w-full rounded-md select-none my-3 flex gap-3 px-4 items-center transition-all ${sidebarTabs === i.link ? "text-white bg-cyan-500" : "text-slate-500"}`} >
                                {i.icon}
                                {i.link}
                            </button>
                        ))
                        }
                    </React.Fragment>
                ))
                }
                <button onClick={() => openModal("logout_modal")} className={`py-[10px] text-[14px] hover:bg-indigo-500 hover:text-white w-full rounded-md select-none my-3 flex gap-3 px-4 items-center transition-all text-slate-500`} >
                    <LogoutIcon className='scale-[.8]' />
                    Logout
                </button>
            </div>
        </Fade>
    )
}

export default Sidebar