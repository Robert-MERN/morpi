import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import useStateContext from '../../context/ContextProvider';
import MenuItem from '@mui/material/MenuItem';
import { FormHelperText } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

const Edit_contacts = () => {
    const {
        handleUpdateContact,
        setSearchedContact,
        handleGetOneContact,
        searchedContact
    } = useStateContext();


    const [id, setId] = useState({
        contactId: "",
        errors: {
            contactId: ""
        }
    });
    // searching user by user id
    const searchUserButton = (e) => {
        e.preventDefault();
        const error = validateForm("contactId", id["contactId"]);
        if (error) {
            return setId(prev => ({ ...prev, errors: { contactId: error } }));
        }
        handleGetOneContact(id.contactId);
    }
    const handleSearchUser = (e) => {
        const { name, value } = e.target
        setId(prev => ({ ...prev, [name]: value }));
    }

    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        gender: "",
    });




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
            case "phone":
                if (!value) {
                    error = "Please enter the phone no."
                }
                break;
            case "gender":
                if (!value) {
                    error = "Please select the gender."
                }
                break;
            case "contactId":
                if (!value) {
                    error = "Please enter the contact Id."
                } else if (value.length !== 24) {
                    error = "Invalid user Id."
                }
                break;
            default:
                break;
        }
        return error;
    }

    const [updatedValues, setUpdatedValues] = useState({
        errors: {
            name: "",
            email: "",
            phone: "",
            gebder: "",
        }
    })
    useEffect(() => {
        if (searchedContact) {
            setValues({
                name: searchedContact.name,
                email: searchedContact.email,
                phone: searchedContact.phone,
                age: searchedContact.age,
                address: searchedContact.address,
                gender: searchedContact.gender,

            })
        }
    }, [searchedContact])
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
        if (searchedContact[name] === value) {
            const copyUpdateValues = { ...updatedValues }
            delete copyUpdateValues[name];
            setUpdatedValues(copyUpdateValues);
        } else {
            setUpdatedValues(prev => ({ ...prev, [name]: value }));
        }
        setValues(prev => ({ ...prev, [name]: value }));
    }

    // canceling update
    const cancelUpdate = () => {
        setUpdatingStatus(false);
        setValues({
            name: searchedContact.name,
            email: searchedContact.email,
            phone: searchedContact.phone,
            age: searchedContact.age,
            address: searchedContact.address,
            gender: searchedContact.gender,
        });
        setUpdatedValues({
            errors: {
                name: "",
                email: "",
                phone: "",
                gender: "",
            }
        });
    }

    // submitting updated form of user
    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {}

        Object.keys(updatedValues).forEach(each => {
            let error = validateForm(each, values[each]);
            if (error) {
                errors[each] = error;
            }
        });

        setUpdatedValues(prev => ({
            ...prev,
            errors: { ...prev.errors, ...errors }
        }));

        if (Object.values(errors).every(e => !e)) {
            const { errors, ...restUpdatedValues } = updatedValues;
            handleUpdateContact(restUpdatedValues, searchedContact._id);
            handleGetOneContact(searchedContact._id);
        }

    }
    useEffect(() => {
        if (searchedContact) {
            const { errors, ...rest } = updatedValues;
            if (Object.keys(rest).every(each => searchedContact[each] === updatedValues[each])) {
                setUpdatingStatus(false);
            }
        }
    }, [updatedValues]);

    return (
        <>
            {searchedContact ?
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 lg:gap-8 mt-6 w-screen lg:w-[600px] p-3' >

                    {/* contact name input */}
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
                                className='w-full mt-1 md:mt-2'
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

                    {/* contact email input */}
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
                                size='small'
                                id="outlined-multiline-static"
                                className='w-full mt-1 md:mt-2'
                                name="email"
                                value={values.email}
                                onChange={handleChange()}
                                onBlur={handleBlur()}
                                error={Boolean(updatedValues.errors.email)}
                                helperText={updatedValues.errors.email}

                            />
                        </FormControl>
                    </div>


                    {/* contact phone input */}
                    <div className='w-full' >
                        <label
                            htmlFor=""
                            className={`text-stone-800 font-bold text-[14px]`}
                        >
                            Phone
                        </label>
                        <FormControl
                            className='w-full'
                        >
                            <TextField
                                size='small'
                                id="outlined-multiline-static"
                                className='w-full mt-1 md:mt-2'
                                name="phone"
                                type='phone'
                                value={values.phone}
                                onChange={handleChange()}
                                onBlur={handleBlur()}
                                error={Boolean(updatedValues.errors.phone)}
                                helperText={updatedValues.errors.phone}

                            />
                        </FormControl>
                    </div>

                    <div className="w-full">
                        <label
                            htmlFor=""
                            className={`text-stone-800 font-bold text-[14px]`}
                        >
                            Gender
                        </label>
                        <FormControl
                            className='w-full'
                            size='small'
                        >
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                className='w-full mt-1 md:mt-2'
                                name="gender"
                                value={values.gender}
                                onBlur={handleBlur()}
                                size='small'
                                onChange={handleChange()}
                            >
                                <MenuItem value={"male"}>Male</MenuItem>
                                <MenuItem value={"female"}>Female</MenuItem>

                            </Select>
                            {updatedValues.errors.gender && <FormHelperText error>{updatedValues.errors.gender}</FormHelperText>}
                        </FormControl>
                    </div>


                    {/* contact age input */}
                    <div className='w-full' >
                        <label
                            htmlFor=""
                            className={`text-stone-800 font-bold text-[14px]`}
                        >
                            Age
                        </label>
                        <FormControl
                            className='w-full'
                        >
                            <TextField
                                size='small'
                                id="outlined-multiline-static"
                                className='w-full mt-1 md:mt-2'
                                name="age"
                                value={values.age}
                                onChange={handleChange()}
                                onBlur={handleBlur()}
                                error={Boolean(updatedValues.errors.age)}
                                helperText={updatedValues.errors.age}

                            />
                        </FormControl>
                    </div>


                    {/* contact address input */}
                    <div className='w-full' >
                        <label
                            htmlFor=""
                            className={`text-stone-800 font-bold text-[14px]`}
                        >
                            Address
                        </label>
                        <FormControl
                            className='w-full'
                        >
                            <TextField
                                size='small'
                                id="outlined-multiline-static"
                                className='w-full mt-1 md:mt-2'
                                name="address"
                                value={values.address}
                                onChange={handleChange()}
                                onBlur={handleBlur()}
                                error={Boolean(updatedValues.errors.address)}
                                helperText={updatedValues.errors.address}

                            />
                        </FormControl>
                    </div>


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
                                border rounded-md px-[12px] md:px-[18px] py-[5px] md:py-[7px] text-white text-[13px] md:text-[15px] transition-all`} >
                                Save changes
                            </button>
                            <button
                                type='button'
                                disabled={!updatingStatus}
                                onClick={cancelUpdate}
                                className={`border  rounded-md px-[12px] md:px-[18px] py-[5px] md:py-[7px] text-[13px] md:text-[15px]  transition-all ${updatingStatus ? "text-zinc-700 border-stone-400 hover:bg-stone-200" : "text-stone-400 border-stone-300"}`} >
                                Cancel
                            </button>
                        </div>
                        <button type='button' onClick={() => setSearchedContact(null)} className='border border-red-500 bg-red-500 rounded-md px-[12px] md:px-[18px] py-[5px] md:py-[7px] text-white text-[13px] md:text-[15px] hover:opacity-80 transition-all' >
                            Back
                        </button>
                    </div>

                </form>


                :



                <form onSubmit={searchUserButton} className='flex flex-col gap-4 lg:gap-8 mt-6 w-screen lg:w-[600px] p-3' >

                    <div className='w-full' >
                        <label
                            htmlFor=""
                            className={`text-stone-800 font-bold text-[14px] md:text-[16px]`}
                        >
                            Search user by ID
                        </label>
                        <FormControl
                            className='w-full'
                        >
                            <TextField
                                size='small'
                                className='w-full mt-2'
                                name="contactId"
                                value={id.contactId}
                                onChange={handleSearchUser}
                                error={Boolean(id.errors.contactId)}
                                helperText={id.errors.contactId}
                                placeholder="User ID"
                            />
                        </FormControl>
                    </div>

                    <button type='submit' className='border font-semibold border-violet-700 bg-violet-700 rounded-md px-[14px] md:px-[18px] py-[6px] md:py-[8px] text-white text-[13px] md:text-[15px] hover:opacity-80 transition-all w-full mt-6' >
                        Search user
                    </button>
                </form>
            }
        </>
    )
}

export default Edit_contacts