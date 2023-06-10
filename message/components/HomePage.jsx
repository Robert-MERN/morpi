import React from 'react'
import useStateContext from '../context/ContextProvider';
import AppNavbar from './AppNavbar'
import EmailSender from './pages/EmailSender';
import WhatsAppSender from "./pages/WhatsAppSender";
import Fade from "react-reveal/Fade";
import Contacts from "./pages/Contacts";
import CreateCampaign from "./pages/CreateCampaign";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";


const HomePage = () => {
    const { sidebarTabs, } = useStateContext();
    return (
        <div className='flex-[7] bg-white relative transition-all' >
            <AppNavbar />
            {sidebarTabs === "Mail Sender" ?

                <EmailSender />

                : sidebarTabs === "WhatsApp Sender" ?

                    <WhatsAppSender />
                    : sidebarTabs === "Add to Contacts" ?
                        <Contacts />
                        : sidebarTabs === "Create Campaign" ?
                            <CreateCampaign />
                            : sidebarTabs === "Edit Profile" ?
                                <EditProfile />
                                : <Settings />
            }
        </div>
    )
}

export default HomePage