import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MailIcon from '@mui/icons-material/Mail';
import Fade from "react-reveal/Fade";

const EmailSender = () => {
    return (
        <Fade duration={500}>
            <div className='pt-[80px] lg:p-[50px]' >
                <div className='px-[10px] lg:p-[0]' >
                    <h1 className='text-[18px] lg:text-[24px] text-slate-600 font-semibold' >Settings</h1>
                    <p className='text-[13px] lg:text-[15px] text-slate-400 my-2' >Customize the app settings to suit your preferences</p>
                </div>
                <div className='w-screen lg:w-[1400px] bg-white rounded-md lg:shadow-default px-[20px] py-[30px] mt-6 lg:mt-12 ' >
                    {/* icon */}

                    <div className='flex gap-8' >


                    </div>
                    <div className='w-full flex justify-center mb-8' >
                        <button className='bg-blue-500 text-slate-100 text-[14px] md:text-[17px] w-full lg:w-[500px] py-[8px] rounded-md mt-6 hover:opacity-80 active:opacity-70 transition-all' >This feature is Coming soon</button>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default EmailSender