import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';
import { useRouter } from 'next/router';
import useStateContext from '../context/ContextProvider';
import { setCookie } from 'cookies-next';
import InputLabel from '@mui/material/InputLabel';


const SignupPart1 = ({ CJS_KEY, handlePage }) => {
    const { setSignupUser, sendVerifyCodeToMail } = useStateContext()

    const [formState, setFormState] = useState({
        email: '',
        name: '',
        password: '',
        password2: '',
        showPassword: false,
        showPassword2: false,
        errors: {
            email: '',
            name: '',
            password: '',
            password2: '',
        },
    });

    // password patterns
    const lowercasePattern = /[a-z]/;
    const uppercasePattern = /[A-Z]/;
    const lengthPattern = /^.{8,55}$/;

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
            case 'name':
                if (!value) {
                    error = 'Please enter your name';
                } else if (value.length > 55) {
                    error = 'Is too long (maximum is 55 characters).'
                }
                break;
            case 'password':
                if (!value) {
                    error = 'Please enter a password';
                } else {

                    if (!lowercasePattern.test(value)) {
                        error = 'Password must contain at least 1 lowercase letter';
                    }
                    if (!uppercasePattern.test(value)) {
                        error = 'Password must contain at least 1 uppercase letter';
                    }
                    if (!lengthPattern.test(value)) {
                        error = 'Password must be between 8 and 55 characters long';
                    }
                }
                break;
            case 'password2':
                if (!value) {
                    error = 'Please enter a confirm password';
                } else if (value && value !== formState.password) {
                    error = 'Confirmed password is wrong'
                }
                break;
            case 'age':
                if (!value) {
                    error = 'Please enter your age';
                } else if (isNaN(value)) {
                    error = 'Age must be a number';
                } else if (value < 5) {
                    error = 'Age should be bigger than 5'
                }
                break;
            case 'gender':
                if (!value) {
                    error = 'Please select your gender';
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
            const { password2, showPassword, showPassword2, errors, ...other } = formState;
            setSignupUser(other);
            // cookie Expires after 5 hours 
            const expireTime = new Date(new Date().setHours(new Date().getHours() + 5))
            setCookie("signupUser", other, { expires: expireTime });
            sendVerifyCodeToMail(CJS_KEY, other.email);
        }
    }

    const handleClickShowPassword = (prop) => {
        setFormState({
            ...formState,
            [prop]: !formState[prop],
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };








    return (
        <div className='flex flex-col gap-8 md:p-[10px] bg-transparent'>
            <div className='flex flex-col w-full gap-1 justify-center' >
                <p className='text-[22px] md:text-[30px] font-semibold text-slate-700' >
                    Welcome back
                </p>
                <p className='text-[14px] md:text-[15px] font-semibold text-slate-500' >Welcome back! please enter your details.</p>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3' >

                <div className='w-full' >
                    <label
                        htmlFor=""
                        className={`text-stone-800 font-semibold text-[15px]`}
                    >
                        Name
                    </label>
                    <FormControl
                        className='w-full mt-2'
                    >
                        <TextField
                            size='small'
                            error={Boolean(formState.errors.name)}
                            helperText={formState.errors.name}
                            name="name"
                            placeholder="Enter your Name to get started"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={formState.name}
                        />

                    </FormControl>
                </div>

                <div className='w-full' >
                    <label
                        htmlFor=""
                        className={`text-stone-800 font-semibold text-[15px]`}
                    >
                        Email
                    </label>
                    <FormControl
                        className='w-full mt-2'
                    >
                        <TextField
                            size='small'
                            placeholder="Enter your Email to get started"
                            error={Boolean(formState.errors.email)}
                            helperText={formState.errors.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={formState.email}
                        />
                    </FormControl>
                </div>

                <div className='w-full' >
                    <label
                        htmlFor=""
                        className={`text-stone-800 font-semibold text-[15px]`}
                    >
                        Password
                    </label>
                    <FormControl
                        className='w-full mt-2'
                        variant="outlined"
                        size='small'
                    >
                        <OutlinedInput
                            name="password"
                            error={Boolean(formState.errors.password)}
                            onChange={handleChange}
                            value={formState.password}
                            onBlur={handleBlur}
                            placeholder="Enter your Password to get started"
                            type={formState.showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => handleClickShowPassword('showPassword')}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {formState.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {formState.errors.password && <FormHelperText error>{formState.errors.password}</FormHelperText>}
                    </FormControl>
                </div>

                <div className='w-full' >
                    <label
                        htmlFor=""
                        className={`text-stone-800 font-semibold text-[15px]`}
                    >
                        Confirm Password
                    </label>
                    <FormControl
                        className='w-full mt-2'
                        variant="outlined"
                        size='small'
                    >
                        <OutlinedInput
                            name="password2"
                            error={Boolean(formState.errors.password2)}
                            onChange={handleChange}
                            value={formState.password2}
                            onBlur={handleBlur}
                            type={formState.showPassword2 ? 'text' : 'password'}
                            placeholder="Enter your Password again"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => handleClickShowPassword('showPassword2')}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {formState.showPassword2 ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {formState.errors.password2 && <FormHelperText error>{formState.errors.password2}</FormHelperText>}
                    </FormControl>
                </div>

                <button type="submit" className='bg-violet-600 text-slate-100 text-[15px] md:text-[17px] w-full py-[8px] rounded-md mt-6 hover:opacity-80 transition-all' >Sign up</button>

                <div>
                    <p className='text-[13px] text-stone-500 text-center' >Already have an account?<span onClick={() => handlePage("signin")} className='font-bold cursor-pointer hover:underline ' > Sign in</span> </p>
                </div>

            </form>
        </div>
    )
}

export default SignupPart1