import React, { useState } from 'react'
import Popover from '@mui/material/Popover';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import useStateContext from '../context/ContextProvider';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import SettingsIcon from '@mui/icons-material/Settings';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LogoutIcon from '@mui/icons-material/Logout';


const Nav_options_popover = ({ anchorEl, close }) => {
    const { cookieUser, switchSidebarTabs, openModal, } = useStateContext()

    const open = Boolean(anchorEl);
    const id = open ? "nav_options_popover" : undefined;

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={close}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <div className='w-[230px]' >


                <p onClick={() => { close(); switchSidebarTabs("Edit Profile") }} className='text-stone-700 text-[14px] flex items-center gap-2 cursor-pointer select-none p-[10px] hover:bg-stone-200 transition-all'>
                    <ManageAccountsIcon className='scale-[.8]' />
                    Account Settings
                </p>

                <p onClick={() => { close(); switchSidebarTabs("Mail Sender") }} className='text-stone-700 text-[14px] flex items-center gap-2 cursor-pointer select-none p-[8px] hover:bg-stone-200 transition-all'>
                    <ForwardToInboxIcon className='scale-[.8]' />
                    Mail sender
                </p>
                <p onClick={() => { close(); switchSidebarTabs("WhatsApp Sender") }} className='text-stone-700 text-[14px] flex items-center gap-2 cursor-pointer select-none p-[8px] hover:bg-stone-200 transition-all'>
                    <WhatsAppIcon className='scale-[.8]' />
                    WhatsApp sender
                </p>
                <p onClick={() => { close(); switchSidebarTabs("Add to Contacts") }} className='text-stone-700 text-[14px] flex items-center gap-2 cursor-pointer select-none p-[8px] hover:bg-stone-200 transition-all lg:hidden'>
                    <PermContactCalendarIcon className='scale-[.8]' />
                    Add contacts
                </p>
                <p onClick={() => { close(); switchSidebarTabs("Create Campaign") }} className='text-stone-700 text-[14px] flex items-center gap-2 cursor-pointer select-none p-[8px] hover:bg-stone-200 transition-all lg:hidden'>
                    <Diversity2Icon className='scale-[.8]' />
                    Create campaign
                </p>
                <p onClick={() => { close(); switchSidebarTabs("Settings") }} className='text-stone-700 text-[14px] flex items-center gap-2 cursor-pointer select-none p-[8px] hover:bg-stone-200 transition-all'>
                    <SettingsIcon className='scale-[.8]' />
                    App settings
                </p>

                <div onClick={() => { openModal("logout_modal"); close() }} className='px-[10px] py-[12px] border-t border-stone-300 hover:bg-stone-200 transition-all lg:hidden' >
                    <p className='flex items-center gap-2 text-stone-700 text-[14px] cursor-pointer select-none' >
                        <LogoutIcon className='scale-[.8]' />
                        Logout
                    </p>
                </div>

            </div>

        </Popover>
    )
}

export default Nav_options_popover



