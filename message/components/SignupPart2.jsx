import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Link from "next/link";
import { Checkbox } from '@mui/material';
import useStateContext from '../context/ContextProvider';
import { deleteCookie, getCookie } from 'cookies-next';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';

const SignupPart2 = ({ CJS_KEY }) => {
    const { handleSignupAPI, signupUser, setSignupUser, verificationCode, setVerificationCode, sendVerifyCodeToMail } = useStateContext();

    const signupUserInfo = getCookie("signupUser") ? JSON.parse(getCookie("signupUser")) : signupUser
    const [values, setValues] = React.useState({
        code: "",
        termsAgreed: false,
        errors: {
            code: "",
            termsAgreed: "",
        }
    });

    const validateForm = (fieldName, value) => {
        let error = "";
        switch (fieldName) {
            case "code":
                if (!value) {
                    error = "Please enter the code."
                } else if (verificationCode !== value) {
                    error = "Please enter the right code."
                }
                if (!time) {
                    error = "The time is over."
                }
                break;
            case "termsAgreed":
                if (!value) {
                    error = "Please accept our terms and conditions."
                }
                break;
        }
        return error;
    }

    const handleChange = (prop) => (event) => {
        if (prop === "termsAgreed") {
            setValues({ ...values, [prop]: event.target.checked });
        } else {
            setValues({ ...values, [prop]: event.target.value });
        }
    };

    const handleBlur = (prop) => (event) => {
        const { checked, value } = event.target;
        let error = "";
        if (prop === "code") {
            error = validateForm(prop, value);
            setValues(prev => ({ ...prev, errors: { ...prev.errors, [prop]: error } }));
        } else {
            error = validateForm(prop, checked);
            setValues(prev => ({ ...prev, errors: { ...prev.errors, [prop]: error } }));
        }
    }

    const [time, setTime] = useState(1500); // Initialize time to 1500 seconds (25 minutes)
    const [minutes, setMinutes] = useState(25); // Initialize minutes to 25
    const [seconds, setSeconds] = useState(0); // Initialize seconds to 0

    useEffect(() => {
        const interval = setInterval(() => {
            if (time) {

                setTime(time - 1); // Decrement time by 1 second

                // Calculate the minutes and seconds remaining
                setMinutes(Math.floor(time / 60));
                setSeconds(time % 60);
            }
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);

    }, [time]);

    const resendCode = () => {
        setTime(1500); // Initialize time to 1500 seconds (25 minutes)
        setMinutes(25); // Initialize minutes to 25
        setSeconds(0); // Initialize seconds to 0
        sendVerifyCodeToMail(CJS_KEY, signupUserInfo.email);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        Object.keys(values).forEach(fieldName => {
            const error = validateForm(fieldName, values[fieldName]);
            if (error) {
                errors[fieldName] = error;
            }
        });
        setValues(prev => ({ ...prev, errors }))
        if (Object.values(errors).every(e => !e))
            handleSignupAPI(signupUserInfo);
    }

    const discardSignup = () => {
        deleteCookie("signupUser");
        setSignupUser(null);
        setVerificationCode("");
        setTime(1500);
        setMinutes(25);
        setSeconds(0);
        setValues({
            code: "",
            termsAgreed: false,
            errors: {
                code: "",
                termsAgreed: "",
            }
        })
    }

    return (
        <div className='flex flex-col gap-6 md:p-[10px]'>
            <div className='flex flex-col w-full gap-4 justify-center items-center' >
                <p className='text-[17px] font-semibold text-slate-500' >Authentication</p>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
                <div className='w-full' >
                    <p className='text-stone-500 text-[13px] mb-1' >
                        Please check your inbox. A unique code has been sent to the email address you provided.
                    </p>
                    <TextField
                        className='w-full mt-3'
                        id="code"
                        size='small'
                        label="Enter your Code"
                        onBlur={handleBlur("code")}
                        onChange={handleChange("code")}
                        error={Boolean(values.errors.code)}
                        helperText={values.errors.code}
                    />
                </div>

                <div className='w-full' >
                    {time ?
                        <p className='text-stone-500 text-[14px]'>
                            Code expires in {minutes}:{seconds.toString().padStart(2, '0')}
                        </p>
                        :
                        <p className='text-red-500 text-[14px]'>
                            Your code has been expired please click on resend code.
                        </p>

                    }
                </div>





                <button type="submit" className='bg-indigo-600 text-slate-100 text-[17px] w-full py-[8px] rounded-md hover:opacity-80 transition-all' >Verify</button>

                <div className='w-full my-2' >
                    <p className='text-stone-500 text-[13px] text-left w-full' >Please agree to our <Link target="__blank" href="/terms-conditions" className='underline text-blue-600'>  Terms & Conditions</Link> .</p>
                    <FormControl>
                        <div className='flex items-center' >
                            <Checkbox
                                onChange={handleChange("termsAgreed")}
                            />
                            <p className='text-stone-500 text-[13px]' >
                                I agree to the terms and conditions
                            </p>
                        </div>
                        {values.errors.termsAgreed && <FormHelperText error>{values.errors.termsAgreed}</FormHelperText>}
                    </FormControl>
                </div>


                <div className='w-full flex items-center gap-2 ' >
                    <p className='text-stone-500 text-[10px] md:text-[13px] cursor-pointer' >Didn't receive the code? </p>
                    <button type="button" onClick={resendCode} className='hover:underline text-blue-600 text-[11px] md:text-[13px]' >Resend the code</button>
                    <p className='text-stone-500 text-[12px] md:text-[13px] cursor-pointer' >or</p>
                    <button type="button" onClick={discardSignup} className='hover:underline text-blue-600 text-[11px] md:text-[13px]' >Discard Signup</button>
                </div>



            </form>
        </div>
    )
}

export default SignupPart2