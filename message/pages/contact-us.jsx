import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import styles from '../styles/Home.module.css'


const contactUs = () => {
    const [formState, setFormState] = useState({
        email: '',
        fullName: '',
        phoneNo: '',
        message: '',
        errors: {
            email: '',
            fullName: '',
            phoneNo: '',
            message: '',
        },
    });


    const icons = [
        {
            icon: <TwitterIcon />,
            name: "icon-2",
            desc: 'twitter.com/turpio',
            link: "https://twitter.com/turpio",
        },
        {
            icon: <InstagramIcon />,
            name: "icon-3",
            desc: 'instagram.com/turpio',
            link: "https://www.instagram.com/turpio/",
        },
        {
            icon: <MailIcon />,
            name: "icon-4",
            desc: 'info@turpio.com',
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

    const validateField = (fieldName, value) => {
        let error = '';
        switch (fieldName) {
            case 'email':
                if (!value) {
                    error = 'Please enter an email';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                    error = 'Invalid email address';
                }
                break;
            case 'fullName':
                if (!value) {
                    error = 'Please enter your name';
                } else if (value.length > 55) {
                    error = 'Is too long (maximum is 55 characters).'
                }
                break;
            case 'phoneNo':
                if (!value) {
                    error = 'Please enter your phone';
                } else if (value.length > 16) {
                    error = 'Is too long (maximum is 16 characters).'
                }
                break;
            case 'message':
                if (!value) {
                    error = "can't be blank";
                }
                break;

            default:
                break;
        }
        return error;
    }

    const handleBlur = (event) => {
        const { name, value } = event.target;
        const error = validateField(name, value);
        setFormState((prevState) => ({
            ...prevState,
            errors: {
                ...prevState.errors,
                [name]: error,
            },
        }));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        Object.keys(formState).forEach((fieldName) => {
            const error = validateField(fieldName, formState[fieldName]);
            if (error) {
                errors[fieldName] = error;
            }
        });
        setFormState((prevState) => ({
            ...prevState,
            errors,
        }));
        if (Object.values(errors).every((error) => !error)) {
            // Form is valid, submit it
            // ...

        }
    }


    return (
        <div>
            <div className='w-screen min-h-screen flex justify-center relative' >
                <Navbar />
                <Head>
                    <title>Contact Us - Turpio</title>
                    <meta name="description" content="Contact Us - Turpio" />
                    <link rel="icon" href="/images/logo.png" />
                </Head>
                <div className='w-[1200px] mt-36 mb-12 flex items-center flex-col' >
                    <h1 className="text-stone-600 text-[42px] font-medium text-center" >Have Some Quetion?</h1>
                    <p className='text-[15px] text-stone-500 w-[650px] text-center' >Thank you for your interest in our services please fill out the form below ore-mail us at <a className="text-blue-500" href="mailto:info@turpio.com"> info@turpio.com </a> and we'll get back to you promptly regarding your request.</p>

                    <div className='flex flex-col-reverse lg:flex-row w-[900px] mt-16' >
                        <div className="flex-1 flex flex-col gap-4 md:pr-8">
                            <p className="text-stone-600 text-[28px] font-medium border-b-2 border-stone-300 pb-3">Get In Touch</p>
                            <div className='flex flex-col gap-3 mt-3' >
                                {/* icons */}
                                {
                                    icons.map((i, index) => (
                                        <a
                                            href={i.link}
                                            target="__blank"
                                            key={index}
                                            onMouseOver={() => hoverIcon(true, i.name)}
                                            onMouseLeave={() => hoverIcon(false, i.name)}
                                            className="flex gap-2 items-center">
                                            <div className={`w-[50px] h-[50px] relative rounded-full bg-glare overflow-hidden cursor-pointer border border-stone-400 ${styles.tapHighlight}`} >
                                                <div className={`absolute inset-0 w-full h-full grid place-content-center text-stone-800 transition-all rounded-full duration-[400ms] ${hover[i.name] ? "opacity-0" : "opacity-100"}`} >
                                                    {i.icon}
                                                </div>
                                                <div className={`absolute inset-0 w-full h-full grid place-content-center bg-gradient-to-bl to-violet-700 from-sky-400 text-gray-300  transition-all duration-[400ms] rounded-full ${hover[i.name] ? "scale-[1]" : "scale-0"}`} >
                                                    {i.icon}
                                                </div>
                                            </div>
                                            <div className='text-stone-500 font-medium hover:text-stone-600 hover:underline' >
                                                {i.desc}
                                            </div>
                                        </a>
                                    ))}
                            </div>
                        </div>
                        <div className="flex-1 md:pl-8">
                            <form onSubmit={handleSubmit} className='w-full h-full border-gray-300 border rounded-xl p-6 flex flex-col gap-4' >
                                <FormControl>
                                    <OutlinedInput
                                        placeholder='Full Name*'
                                        name="fullName"
                                        error={Boolean(formState.errors.fullName)}
                                        value={formState.fullName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <PersonOutlinedIcon className='text-stone-400' />
                                            </InputAdornment>
                                        }
                                    />
                                    {formState.errors.fullName && <FormHelperText error>{formState.errors.fullName}</FormHelperText>}
                                </FormControl>

                                <FormControl>
                                    <OutlinedInput
                                        placeholder='Phone*'
                                        name="phoneNo"
                                        error={Boolean(formState.errors.phoneNo)}
                                        value={formState.phoneNo}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <PhoneIcon className='text-stone-400' />
                                            </InputAdornment>
                                        }
                                    />
                                    {formState.errors.phoneNo && <FormHelperText error>{formState.errors.phoneNo}</FormHelperText>}
                                </FormControl>

                                <FormControl>
                                    <OutlinedInput
                                        placeholder='Email*'
                                        name="email"
                                        error={Boolean(formState.errors.email)}
                                        value={formState.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <MailIcon className='text-stone-400' />
                                            </InputAdornment>
                                        }
                                    />
                                    {formState.errors.email && <FormHelperText error>{formState.errors.email}</FormHelperText>}
                                </FormControl>

                                <FormControl>
                                    <OutlinedInput
                                        placeholder='Message*'
                                        name="message"
                                        error={Boolean(formState.errors.message)}
                                        value={formState.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        multiline
                                        rows={5}

                                    />
                                    {formState.errors.message && <FormHelperText error>{formState.errors.message}</FormHelperText>}
                                </FormControl>

                                <button type='submit' className='w-full py-3 rounded-md bg-violet-600 hover:bg-violet-500 active:bg-violet-400 transition-all text-white font-medium text-[15px]' >
                                    SEND MESSAGE
                                </button>

                                <p className='text-stone-400 text-[14px] leading-tight text-center mt-2 px-4' >
                                    Turpio not sell, share or trade customer information your privacy is very important to us.
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default contactUs