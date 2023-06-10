import React, { useState } from 'react'
import { toast } from 'react-toastify';
import GroupsIcon from '@mui/icons-material/Groups';
import EditIcon from '@mui/icons-material/Edit';
import useStateContext from '../context/ContextProvider';
import { IconButton } from '@mui/material';


const Campaign = ({ data, title, id, members, borderColor, iconColor, createdAt }) => {
    const { openModal, setTargetEditContact } = useStateContext();


    return (
        <div onClick={() => { setTargetEditContact(data); openModal("edit_campaign_modal") }} id="parent-container-event-card" className={`w-full md:w-[320px] lg:w-[250px] h-fit overflow-hidden rounded-md shadow-default border-y-[6px]  bg-white select-none py-4 hover:-translate-y-3 transition-all duration-200 ease-in-out hover:opacity-50 ${borderColor}`}>
            <div className='flex justify-between items-center px-5' >
                {/* <p className={`w-[20px] h-[20px] rounded-full ${bgColor}`} ></p> */}
                <GroupsIcon className={`${iconColor}`} />
                <IconButton>
                    <EditIcon className={`scale-[.80] ${iconColor}`} />
                </IconButton>
            </div>
            <div className='flex flex-col gap-8' >
                <div>

                    <div className='px-5 cursor-pointer' >
                        <p className='text-[15px] lg:text-[17px] text-stone-800 w-[170px] overflow-hidden text-ellipsis whitespace-nowrap' >{title}</p>
                        <p className='text-[12px] lg:text-[14px] text-stone-500' >{members} Members</p>
                        <p className='text-[10px] lg:text-[11px] text-stone-400 mt-2' >{createdAt}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Campaign