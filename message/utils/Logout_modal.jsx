import React from 'react'
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { deleteCookie } from "cookies-next"
import { useRouter } from 'next/router';


const Logout_modal = ({ open, close }) => {
    const router = useRouter();
    const handleLogout = () => {
        close();
        deleteCookie("userAccountToken");
        router.push('/')
    }

    return (
        <Dialog
            open={open.logout_modal}
            onClose={close}
        >
            <div className=' md:w-[500px] p-6 md:p-7 relative flex flex-col gap-8 md:gap-10' >
                <div onClick={close} className='absolute hidden md:block right-0 md:right-3 top-2 md:top-2 cursor-pointer select-none' >
                    <IconButton >
                        <CloseIcon className='scale-[.9] md:scale-[1.1] text-stone-500' />
                    </IconButton>
                </div>
                <p className='text-[13px] md:text-[16px] text-stone-600 font-medium' >Are you sure, do you want to Logout?</p>
                <div className='w-full flex justify-end gap-4' >
                    <button onClick={close} className='text-[12px] md:text-[15px] text-stone-600 px-4 py-[6px] rounded-md hover:bg-stone-300 transition-all' >Cancel</button>
                    <button onClick={handleLogout} className='bg-stone-600 hover:bg-stone-500 px-4 py-[6px] rounded-md text-white text-[12px] md:text-[15px] transition-all' >Logout</button>
                </div>
            </div>
        </Dialog>
    )
}

export default Logout_modal