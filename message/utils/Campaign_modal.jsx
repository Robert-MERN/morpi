import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import ContactsIcon from '@mui/icons-material/Contacts';
import style from "../styles/Home.module.css"
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import CheckIcon from '@mui/icons-material/Check';
import Fade from "react-reveal/Fade";
import useStateContext from '../context/ContextProvider';


const Campaign_modal = ({ open, close }) => {
    const {
        handleCreateCampaign,
        cookieUser,
        targetEditContact,
        setTargetEditContact,
        handleDeleteCampaign,
        handleUpdateCampaign,
        handleGetContactsEmails,
        contactsEmails,
    } = useStateContext()
    const handleClose = () => {
        close("edit_campaign_modal");
        close("campaign_modal");
        setFormState(formInitialState);
        setSelectedColor(colorInitialState);
        setEnteredContacts([]);
        setTargetEditContact(null)
    };

    const [value, setValue] = useState([]);



    useEffect(() => {
        const element = document.getElementById("scroll_to_bottom")
        element && element.scrollIntoView({ behavior: "smooth" })
    }, [value]);



    const colorInitialState = {
        bgColor: "bg-stone-700",
        textColor: "text-stone-700",
        borderColor: "border-stone-700",
    }
    const [selectedColor, setSelectedColor] = useState(colorInitialState);
    const colors = [
        {
            bgColor: "bg-stone-700",
            textColor: "text-stone-700",
            borderColor: "border-stone-700",
        },
        {
            bgColor: "bg-red-600",
            textColor: "text-red-600",
            borderColor: "border-red-600",
        },
        {
            bgColor: "bg-emerald-400",
            textColor: "text-emerald-400",
            borderColor: "border-emerald-400",
        },
        {
            bgColor: "bg-cyan-500",
            textColor: "text-cyan-500",
            borderColor: "border-cyan-500",
        },
        {
            bgColor: "bg-indigo-400",
            textColor: "text-indigo-400",
            borderColor: "border-indigo-400",
        },
        {
            bgColor: "bg-pink-500",
            textColor: "text-pink-500",
            borderColor: "border-pink-500",
        },
        {
            bgColor: "bg-orange-400",
            textColor: "text-orange-400",
            borderColor: "border-orange-400",
        },
    ];

    const handleColor = (color) => {
        setSelectedColor(color);
    }


    const [enteredContacs, setEnteredContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (cookieUser) handleGetContactsEmails(cookieUser.id, setLoading)
    }, [cookieUser])

    const handleSelect = (event, newValue) => {
        setEnteredContacts(newValue);
    };



    const formInitialState = {
        title: "",
        contacts: "",
        errors: {
            title: "",
            contacts: "",
        }
    }
    const [formState, setFormState] = useState(formInitialState);

    useEffect(() => {
        if (open.edit_campaign_modal && targetEditContact) {
            const { contacts, title, ...others } = targetEditContact
            setEnteredContacts(targetEditContact.contacts);
            setSelectedColor(others)
            setFormState(prev => ({ ...prev, title }))
        } else {
            setEnteredContacts([]);
            setSelectedColor(colorInitialState);
            setFormState(formInitialState)
        }
    }, [open.edit_campaign_modal, targetEditContact]);

    const validateForm = (fieldName, value) => {
        let error = "";
        switch (fieldName) {
            case "title":
                if (!value) {
                    error = "Please enter the title";
                }
                break;
            case "contacts":
                if (!enteredContacs.length) {
                    error = "Please select the contact";
                }
                break;
            default:
                break;
        }
        return error;
    };

    const handle_form_state_change = (name) => (e) => {
        const { value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };



    const handle_submit = (e) => {
        e.preventDefault();
        let errors = {}
        Object.keys(formState).forEach(fieldName => {
            const error = validateForm(fieldName, formState[fieldName]);
            if (error) {
                errors[fieldName] = error;
            }
        });
        if (open.campaign_modal || updateStatus) {
            setFormState(prev => ({
                ...prev,
                errors,
            }));
        }
        if (Object.values(errors).every(e => !e)) {
            const { title } = formState;
            const reqBody = { title, contacts: enteredContacs, ...selectedColor }
            if (updateStatus) {
                handleUpdateCampaign(reqBody, targetEditContact._id)
                setupdateStatus(false);
            } else {
                handleCreateCampaign(reqBody, cookieUser.id);
                setupdateStatus(false);
            }
            handleClose();
        }
    }
    const [updateStatus, setupdateStatus] = useState(false);

    useEffect(() => {
        if (open.edit_campaign_modal) {
            if (
                targetEditContact.title !== formState.title
                ||
                !targetEditContact.contacts.every((e) => enteredContacs.some(i => i.email === e.email))
                ||
                targetEditContact.contacts.length !== enteredContacs.length
                ||
                targetEditContact.bgColor.split("-")[1] !== selectedColor.bgColor.split("-")[1]
            ) {
                setupdateStatus(true);
            } else {
                setupdateStatus(false);
            }
        }

    }, [formState.title, enteredContacs, selectedColor, open.edit_campaign_modal,]);

    const handleBlur = (name) => (e) => {
        const { value } = e.target;
        const error = validateForm(name, value);
        if (open.campaign_modal || updateStatus) {
            setFormState(prev => (
                {
                    ...prev,
                    errors: {
                        ...prev.errors,
                        [name]: error,
                    }
                }
            ))
        }
    };

    const handleDelete = () => {
        handleDeleteCampaign(targetEditContact._id);
        handleClose();
    }

    // filtering emails
    const [filteredEmailOptions, setFilteredEmailOptions] = useState(contactsEmails);
    useEffect(() => {
        if (targetEditContact && enteredContacs.length) {
            setFilteredEmailOptions(contactsEmails.filter(e => !enteredContacs.some(i => i.email === e.email)))
        } else if (targetEditContact && !enteredContacs.length) {
            setFilteredEmailOptions(contactsEmails.filter(e => targetEditContact.contacts.some(i => i.email === e.email)))
        } else if (!targetEditContact && !enteredContacs.length) {
            setFilteredEmailOptions(contactsEmails)
        }
    }, [targetEditContact, enteredContacs])


    return (

        <Dialog
            open={open.campaign_modal || open.edit_campaign_modal}
            onClose={handleClose}
        >

            <form onSubmit={handle_submit} className={`md:w-[500px] md:h-[450px] p-5 md:p-7 pt-8 md:pt-12 pb-6 relative flex flex-col gap-4 md:gap-10 justify-between overflow-x-hidden ${style.scrollBar}`} >
                <div
                    onClick={handleClose}
                    className='absolute right-3 top-2 cursor-pointer select-none'
                >
                    <IconButton >
                        <CloseIcon className='scale-[.9] md:scale-[1.1] text-stone-500' />
                    </IconButton>
                </div>
                <div>
                    <p className='text-[15px] text-stone-600 font-bold' >
                        {open.campaign_modal ?
                            "Create Campaign"
                            :
                            "Edit Campaign"}
                    </p>
                    <div className="flex flex-col gap-2 md:gap-5 w-full mt-4 md:mt-6">
                        <div className='w-full' >
                            <label htmlFor="" className='text-[13px] text-stone-500'>Title of Campaign*</label>
                            <TextField
                                size='small'
                                className='w-full mt-1'
                                placeholder='Title'
                                value={formState.title}
                                helperText={formState.errors.title}
                                onChange={handle_form_state_change("title")}
                                onBlur={handleBlur("title")}
                                error={Boolean(formState.errors.title)}
                            />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='text-[13px] text-stone-500'>Select from Contacts*</label>
                            <Autocomplete
                                multiple
                                id="size-small-filled-multi"
                                size="small"
                                options={filteredEmailOptions}

                                getOptionLabel={(option) => `${option.email}, ${option.age} yrs, ${option.name}`}
                                value={enteredContacs}
                                filterSelectedOptions
                                filterOptions={(options, state) => {
                                    const inputValue = state.inputValue.toLowerCase();
                                    return options.filter(
                                        (option) =>
                                            option.email.toLowerCase().includes(inputValue) ||
                                            option.name.toLowerCase().includes(inputValue) ||
                                            option.gender.toLowerCase().includes(inputValue) ||
                                            option.age.toString().includes(inputValue)
                                    );
                                }}
                                onChange={handleSelect}
                                noOptionsText={loading ? "Loading..." : "No contacts..."}
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip
                                            variant="outlined"
                                            label={option.email}
                                            size="small"
                                            {...getTagProps({ index })}
                                        />
                                    ))
                                }
                                renderOption={(props, option) =>
                                (
                                    <div {...props}>
                                        <ContactsIcon className='scale-[.8] mr-2 text-stone-500' />
                                        <div className='w-full flex items-center gap-2' >
                                            <p>{`${option.email},`}</p>
                                            <p className='capitalize'> {` ${option.name},`} </p>
                                            <p className='capitalize' >{` ${option.gender},`}</p>
                                            {` ${option.age} age`}
                                        </div>
                                    </div>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        onBlur={handleBlur("contacts")}
                                        {...params}
                                        error={Boolean(formState.errors.contacts)}
                                        helperText={formState.errors.contacts}
                                        placeholder="Contacts"
                                    />
                                )}

                            />
                        </div>
                        <div className='w-full' >
                            <label htmlFor="" className='text-[13px] text-stone-500 '>Pick Color*</label>
                            <div className='w-full flex gap-2 md:gap-3 mt-2' >
                                {colors.map((each, index) => (
                                    <div onClick={() => handleColor(each)} key={index} className={`w-[30px] h-[30px] rounded-full select-none cursor-pointer transition-all grid place-items-center hover:opacity-80 active:opacity-70 ${each.bgColor}`} >
                                        {selectedColor.bgColor === each.bgColor &&
                                            <Fade duration={400} >
                                                <CheckIcon className='text-white scale-[.8]' />
                                            </Fade>
                                        }
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div id="scroll_to_bottom" className='w-full flex justify-end' >
                    <div className='flex gap-6 items-center' >
                        {open.edit_campaign_modal ?
                            <>
                                <button type="button"
                                    onClick={handleDelete}
                                    className='bg-red-500 hover:bg-red-400 px-4 py-[6px] rounded-md text-white text-[12px] md:text-[15px] transition-all' >
                                    delete
                                </button>
                                <button disabled={!updateStatus} type="submit" className={`bg-cyan-500 px-4 py-[6px] rounded-md text-white text-[12px] md:text-[15px] transition-all ${updateStatus ? "hover:bg-cyan-400" : "opacity-40 cursor-auto"}`} >Update</button>
                            </>
                            :
                            <button type="submit" className={`bg-cyan-500 hover:bg-cyan-400 px-4 py-[6px] rounded-md text-white text-[12px] md:text-[15px] transition-all`} >Add</button>
                        }

                    </div>
                </div>
            </form>
        </Dialog>
    )
}

export default Campaign_modal;
