import React, { useState, useEffect, } from 'react'
import Fade from "react-reveal/Fade";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import useStateContext from '../../context/ContextProvider';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText } from '@mui/material';

const EmailSender = () => {
    const {
        handleUpdateUserAPI,
        openModal,
        cookieUser,
    } = useStateContext();

    const [values, setValues] = useState({
        name: "",
        email: "",
    });

    const defaultPasswordState = {
        changePassword: false,
        oldPassword: "",
        password: "",
        confirmPassword: "",
        showOldPassword: false,
        showPassword: false,
        showConfirmPassword: false,
        errors: {
            password: "",
            confirmPassword: "",
            oldPassword: "",
        }
    }
    const [passwordState, setPasswordState] = useState(defaultPasswordState);
    // change Password Switch
    const changePasswordSwitch = () => {
        setPasswordState(prev => ({
            ...defaultPasswordState,
            changePassword: !prev.changePassword,
        }));
    }
    const passwordStateRevert = () => {
        setPasswordState(defaultPasswordState);
    }
    // password patterns
    const lowercasePattern = /[a-z]/;
    const uppercasePattern = /[A-Z]/;
    const lengthPattern = /^.{8,55}$/;

    // passowrds visibility turn On/Off function
    const handleClickShowPassword = (prop) => {
        setPasswordState(prev => ({
            ...prev,
            [prop]: !prev[prop],
        }));
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // form validation
    const validateForm = (fieldName, value) => {
        let error = "";
        switch (fieldName) {
            case "name":
                if (!value) {
                    error = "Please complete your full name."
                }
                break;
            case "email":
                if (!value) {
                    error = 'Please enter an email';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                    error = 'Invalid email address';
                }
                break;
            case "password":
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
            case "confirmPassword":
                if (!value) {
                    error = 'Please enter a confirm password';
                } else if (value && value !== passwordState.password) {
                    error = 'Confirmed password is wrong'
                }
                break;
            case "oldPassword":
                if (!value) {
                    error = 'Please enter your old password';
                }
                break;
        }
        return error;
    }

    const [updatedValues, setUpdatedValues] = useState({
        errors: {
            name: "",
            email: "",
        }
    })
    useEffect(() => {
        if (cookieUser) {
            setValues({
                name: cookieUser.name,
                email: cookieUser.email,
            })
        }
    }, [cookieUser])
    const [updatingStatus, setUpdatingStatus] = useState(false) // it's gonna show if user has updated smth.

    // handling input blur
    const handleBlur = (target) => (event) => {
        const { name, value } = event.target;
        const error = validateForm(name, value);
        if (target === "password") {
            setPasswordState((prevState) => ({
                ...prevState,
                errors: {
                    ...prevState.errors,
                    [name]: error,
                },
            }));
        } else {
            setUpdatedValues((prevState) => ({
                ...prevState,
                errors: {
                    ...prevState.errors,
                    [name]: error,
                },
            }));
        }
    }

    // handling states
    const handleChange = (target) => (e) => {
        const { value, name } = e.target;
        setUpdatingStatus(true);
        if (target === "password") {
            setPasswordState(prev => ({ ...prev, [name]: value }));
        } else {
            if (cookieUser[name] === value) {
                const copyUpdateValues = { ...updatedValues }
                delete copyUpdateValues[name];
                setUpdatedValues(copyUpdateValues);
            } else {
                setUpdatedValues(prev => ({ ...prev, [name]: value }));
            }
            setValues(prev => ({ ...prev, [name]: value }));
        }
    }

    // canceling update
    const cancelUpdate = () => {
        setUpdatingStatus(false);
        setValues({
            name: cookieUser.name,
            email: cookieUser.email,
        });
        setPasswordState({
            changePassword: "",
            oldPassword: "",
            password: "",
            confirmPassword: "",
            showOldPassword: false,
            showPassword: false,
            showConfirmPassword: false,
            errors: {
                password: "",
                confirmPassword: "",
                oldPassword: "",
            }
        });
        setUpdatedValues({
            errors: {
                name: "",
                email: "",
            }
        });
    }

    // submitting updated form of user
    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {}
        let errors2 = {}

        Object.keys(updatedValues).forEach(each => {
            let error = validateForm(each, values[each]);
            if (error) {
                errors[each] = error;
            }
        });
        Object.keys(passwordState).forEach(each => {
            let error = validateForm(each, passwordState[each]);
            if (error && passwordState.changePassword) {
                errors2[each] = error;
            }
        });

        setUpdatedValues(prev => ({
            ...prev,
            errors: { ...prev.errors, ...errors }
        }));

        if (passwordState.changePassword) {
            setPasswordState(prev => ({
                ...prev,
                errors: { ...prev.errors, ...errors2 }
            }));
        };
        if (Object.values({ ...errors, ...errors2 }).every(e => !e)) {
            const { errors, ...restUpdatedValues } = updatedValues;
            let updateObj = restUpdatedValues
            if (passwordState.changePassword) {
                const { password, oldPassword } = passwordState
                updateObj = { ...updateObj, password, oldPassword }
            }
            handleUpdateUserAPI(updateObj, setUpdatingStatus, passwordStateRevert);
        }

    }
    useEffect(() => {
        if (cookieUser) {
            const { errors, ...rest } = updatedValues;
            if (Object.keys(rest).every(each => cookieUser[each] === updatedValues[each]) && !passwordState.changePassword) {
                setUpdatingStatus(false);
            }
        }
    }, [updatedValues, passwordState.changePassword]);
    return (
        <Fade duration={500}>
            <div className='pt-[80px] lg:p-[50px] h-[calc(100vh-60px)] overflow-y-auto' >
                <div className='p-[10px] lg:p-0' >
                    <h1 className='text-[18px] lg:text-[24px] text-slate-600 font-semibold' >Edit Profile</h1>
                    <p className='text-[13px] lg:text-[15px] text-slate-400 my-2' >Personalize your account by editing your profile</p>
                </div>
                <form onSubmit={handleSubmit} className='w-screen lg:w-[1400px] mt-2 lg:mt-12' >
                    {/* icon */}

                    <div className='flex flex-col gap-4 lg:gap-8 w-screen lg:w-[600px] p-3' >


                        {/* user fullname input */}
                        <div className='w-full' >
                            <label
                                htmlFor=""
                                className={`text-stone-800 font-bold text-[14px]`}
                            >
                                Name
                            </label>
                            <FormControl
                                className='w-full'
                            >
                                <TextField
                                    size='small'
                                    className='w-full mt-2'
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange()}
                                    onBlur={handleBlur()}
                                    error={Boolean(updatedValues.errors.name)}
                                    helperText={updatedValues.errors.name}
                                    placeholder="Name"
                                />
                            </FormControl>
                        </div>

                        {/* user email input */}
                        <div className='w-full' >
                            <label
                                htmlFor=""
                                className={`text-stone-800 font-bold text-[14px]`}
                            >
                                Email
                            </label>
                            <FormControl
                                className='w-full'
                            >
                                <TextField
                                    size="small"
                                    id="outlined-multiline-static"
                                    className='w-full mt-2'
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange()}
                                    onBlur={handleBlur()}
                                    error={Boolean(updatedValues.errors.email)}
                                    helperText={updatedValues.errors.email}
                                    placeholder=""
                                />
                            </FormControl>
                        </div>



                        {/* password inputs*/}

                        <div className='w-full'>
                            <button
                                type='button'
                                onClick={changePasswordSwitch}
                                className={`${passwordState.changePassword ? "text-red-500" : "text-blue-600"} 
                                font-semibold underline text-[12px] md:text-[14px] italic`}
                            >
                                {passwordState.changePassword ?
                                    "Don't Change Password."
                                    :
                                    <Fade duration={300} >
                                        {"Change Password."}
                                    </Fade>

                                }
                            </button>
                        </div>

                        {passwordState.changePassword &&
                            <>
                                <Fade duration={300} >

                                    {/* Old password */}
                                    <div className='w-full' >
                                        <label
                                            htmlFor=""
                                            className={`text-stone-800 font-bold text-[14px]`}
                                        >
                                            Old password
                                        </label>
                                        <FormControl
                                            className='w-full mt-3'
                                            variant="outlined"
                                            size='small'
                                        >
                                            <OutlinedInput
                                                name="oldPassword"
                                                error={Boolean(passwordState.errors.oldPassword)}
                                                value={passwordState.oldPassword}
                                                onChange={handleChange("password")}
                                                onBlur={handleBlur("password")}
                                                type={passwordState.showOldPassword ? 'text' : 'password'}
                                                placeholder="Old password"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={() => handleClickShowPassword('showOldPassword')}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {passwordState.showOldPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                            {passwordState.errors.oldPassword && <FormHelperText error>{passwordState.errors.oldPassword}</FormHelperText>}
                                        </FormControl>
                                    </div>
                                    {/* New Password */}
                                    <div className='w-full' >
                                        <label
                                            htmlFor=""
                                            className={`text-stone-800 font-bold text-[14px]`}
                                        >
                                            New Password
                                        </label>
                                        <FormControl
                                            className='w-full mt-3'
                                            variant="outlined"
                                            size='small'
                                        >
                                            <OutlinedInput
                                                name="password"
                                                error={Boolean(passwordState.errors.password)}
                                                value={passwordState.password}
                                                onChange={handleChange("password")}
                                                onBlur={handleBlur("password")}
                                                type={passwordState.showPassword ? 'text' : 'password'}
                                                placeholder="New password"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={() => handleClickShowPassword('showPassword')}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {passwordState.showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                            {passwordState.errors.password && <FormHelperText error>{passwordState.errors.password}</FormHelperText>}
                                        </FormControl>
                                    </div>
                                    {/* confirm Passwords */}
                                    <div className='w-full' >
                                        <label
                                            htmlFor=""
                                            className={`text-stone-800 font-bold text-[14px]`}
                                        >
                                            Confirm Password
                                        </label>
                                        <FormControl
                                            className='w-full mt-3'
                                            variant="outlined"
                                            size='small'
                                        >
                                            <OutlinedInput
                                                name="confirmPassword"
                                                error={Boolean(passwordState.errors.confirmPassword)}
                                                value={passwordState.confirmPassword}
                                                onChange={handleChange("password")}
                                                onBlur={handleBlur("password")}
                                                type={passwordState.showConfirmPassword ? 'text' : 'password'}
                                                placeholder="Confirm Password"


                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={() => handleClickShowPassword('showConfirmPassword')}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {passwordState.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                            {passwordState.errors.confirmPassword && <FormHelperText error>{passwordState.errors.confirmPassword}</FormHelperText>}
                                        </FormControl>
                                    </div>
                                </Fade>
                            </>
                        }

                        {/* Footer buttons */}
                        <div className='flex justify-between w-full' >
                            <div className='flex gap-4' >
                                <button
                                    type='submit'
                                    disabled={!updatingStatus}
                                    className={`${updatingStatus ?
                                        "border-violet-700 bg-violet-700 hover:opacity-80"
                                        :
                                        "border-violet-300 bg-violet-300"
                                        }
                                border rounded-md px-[12px] md:px-[18px] py-[6px] md:py-[8px] text-white text-[13px] md:text-[15px] transition-all`} >
                                    Save changes
                                </button>
                                <button
                                    type='button'
                                    disabled={!updatingStatus}
                                    onClick={cancelUpdate}
                                    className={`border  rounded-md px-[12px] md:px-[18px] py-[6px] md:py-[8px] text-[13px] md:text-[15px]  transition-all ${updatingStatus ? "text-zinc-700 border-stone-400 hover:bg-stone-200" : "text-stone-400 border-stone-300"}`} >
                                    Cancel
                                </button>
                            </div>
                            <button type='button' onClick={() => openModal("logout_modal")} className='border border-red-500 bg-red-500 rounded-md px-[12px] md:px-[18px] py-[6px] md:py-[8px] text-white text-[13px] md:text-[15px] hover:opacity-80 transition-all' >
                                Logout
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </Fade>
    )
}

export default EmailSender