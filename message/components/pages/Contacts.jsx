import React, { useState, useEffect, } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Fade from "react-reveal/Fade";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import ContactsIcon from '@mui/icons-material/Contacts';
import PrintIcon from '@mui/icons-material/Print';
import { Tooltip } from '@mui/material';
import { FormHelperText } from '@mui/material';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import useStateContext from '../../context/ContextProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { toast } from 'react-toastify';
import MenuItem from '@mui/material/MenuItem';
import Edit_contacts from './Edit_contacts';
import Select from '@mui/material/Select';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div className='' >
                    {children}
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const EmailSender = () => {
    const { handleCreateContact, handleGetAllContacts, contacts, cookieUser, handleDeleteContact, } = useStateContext();
    const [tabs, setTabs] = useState(0);


    const handleTabs = (event, newValue) => {
        setTabs(newValue);
    };

    const [loading, setLoading] = useState(false);

    const toastConfig = {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
        toastId: "toast-copied"
    }
    const copyText = (id) => {
        navigator.clipboard.writeText(id)
        toast.info("ID is copied, go to edit.", toastConfig);
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        {
            field: 'name',
            headerName: 'Name',
            width: 160,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 220,
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            width: 160,
            editable: true
        },

        {
            field: 'age',
            headerName: 'Age',
            width: 90,
            editable: true,
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 180,
            editable: true,
        },
        {
            field: 'gender',
            headerName: 'Gender',
            width: 120,
            renderCell: params => {
                return (
                    <p key={params.row._id} className={`${params.row.gender === "male" ? "text-blue-600" : "text-pink-600"} capitalize`} >{params.row.gender}</p>
                )
            },
        },
        {
            field: 'edit',
            headerName: 'Edit',
            renderCell: params => {
                return (
                    <div key={params.row._id} className='flex gap-2 items-center' >

                        <button onClick={() => copyText(params.row._id)} className='rounded-md py-1 px-3 text-white  bg-violet-600 hover:bg-violet-400 transition-all' >Edit</button>

                        <IconButton onClick={() => handleDeleteContact(params.row._id)} aria-label="delete">
                            <DeleteIcon className="text-red-600 hover:text-red-300 transition-all cursor-pointer" />
                        </IconButton>
                    </div>
                )
            },
            width: 140,
        },
    ];

    useEffect(() => {
        if (tabs === 1) {
            handleGetAllContacts(cookieUser.id, setLoading)
        }
    }, [tabs]);




    // ----- function for excel import
    const [file, setFile] = useState([]);

    const handle_import_excel = (e) => {
        const File = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const File = new Uint8Array(e.target.result);
            const workbook = XLSX.read(File, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            setFile(jsonData);
        };
        if (File) reader.readAsArrayBuffer(File);
    };
    const handleSave = () => {
        const blob = new Blob([JSON.stringify(file)], { type: 'application/json;charset=utf-8' });
        saveAs(blob, 'file.json');
    };
    const formInitialState = {
        name: "",
        phone: "",
        email: "",
        age: "",
        gender: "",
        address: "",
        errors: {
            name: "",
            email: "",
            gender: "",
        }
    }
    const [formState, setFormState] = useState(formInitialState);

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email format

    const validateForm = (fieldName, value) => {
        let error = "";
        switch (fieldName) {
            case "name":
                if (!value) {
                    error = "Please enter the name";
                }
                break;
            case "email":
                if (!value) {
                    error = "Please enter the email";
                } else if (value) {
                    if (!EMAIL_REGEX.test(value)) {
                        error = "Invalid email address"
                    }
                }
                break;
            case "gender":
                if (!value) {
                    error = "Please select the gender";
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

    const handleBlur = (name) => (e) => {
        const { value } = e.target;
        const error = validateForm(name, value);
        setFormState(prev => (
            {
                ...prev,
                errors: {
                    ...prev.errors,
                    [name]: error,
                }
            }
        ))
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
        setFormState(prev => ({
            ...prev,
            errors,
        }));
        if (Object.values(errors).every(e => !e)) {
            const { errors, ...others } = formState;
            handleCreateContact(others, cookieUser.id);
            setFormState(formInitialState);
        }
    }

    return (
        <Fade duration={500}>
            <div className='pt-[70px] lg:p-[50px] h-[calc(100vh-60px)] overflow-y-auto' >
                <div className='p-[10px] lg:p-[0]' >

                    <h1 className='text-[18px] lg:text-[24px] text-slate-600 font-semibold' >Add To Contacts</h1>
                    <p className='text-[12px] lg:text-[15px] text-slate-400 my-2' >To facilitate easier messaging in the future, you can add the recipient to your contacts.</p>
                </div>
                <div className='w-screen lg:w-[1400px] bg-white rounded-md  mt-2 lg:mt-12 h-[70vh] ' >
                    {/* icon */}

                    <div className='' >
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs
                                value={tabs}
                                onChange={handleTabs}
                                aria-label="basic tabs example"
                                textColor="secondary"
                                indicatorColor="secondary"
                            >
                                <Tab
                                    className='px-[12px] py-[8px] md:px-[16px] md:py-[12px] text-[10px] md:text-[11px]'
                                    label="Add Contacts"
                                    {...a11yProps(0)}
                                />
                                <Tab
                                    className='px-[12px] py-[8px] md:px-[16px] md:py-[12px] text-[10px] md:text-[11px]'
                                    label="Contacts List"
                                    {...a11yProps(1)}
                                />
                                <Tab
                                    className='px-[12px] py-[8px] md:px-[16px] md:py-[12px] text-[10px] md:text-[11px]'
                                    label="Edit Contacts"
                                    {...a11yProps(2)}
                                />
                            </Tabs>
                        </Box>

                        <TabPanel value={tabs} index={0}>
                            <Fade duration={300} >
                                <div className='w-full flex lg:justify-end px-3' >
                                    {/* <h1>Import Excel Example</h1>
                                        <div>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        {file[0] && file[0].map((header, index) => <th key={index}>{header}</th>)}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {file.slice(1).map((row, index) => (
                                                        <tr key={index}>
                                                            {row.map((cell, index) => (
                                                                <td key={index}>{cell}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <button onClick={handleSave}>Save Data</button>
                                        </div> */
                                    }
                                    <Tooltip
                                        title="Import contacts from Excel"
                                        placement='top'
                                        arrow
                                    >
                                        <label className='mt-4 text-[14px] rounded-md bg-emerald-500 hover:opacity-80 active:opacity-70 text-white flex gap-2 items-center px-[24px] py-[6px] transition-all cursor-pointer select-none' htmlFor='import_excel_sheet' >
                                            <PrintIcon className='scale-[.8]' />
                                            Import from Excel
                                        </label>
                                    </Tooltip>
                                    <input
                                        accept=".xlsx, .xls, .csv"
                                        className='hidden'
                                        id='import_excel_sheet'
                                        type="file"
                                        onChange={handle_import_excel}
                                    />
                                </div>
                                <form onSubmit={handle_submit} className="flex flex-col gap-6 lg:gap-8 mt-6 w-screen lg:w-[600px] p-3">

                                    <div className='w-full' >
                                        <FormControl
                                            className='w-full'
                                            variant="outlined"
                                            size='small'
                                        >
                                            <InputLabel
                                                error={Boolean(formState.errors.name)}
                                                htmlFor="outlined-adornment-password"
                                            >
                                                Name
                                            </InputLabel>
                                            <OutlinedInput
                                                name="name"
                                                label="Name"
                                                error={Boolean(formState.errors.name)}
                                                onChange={handle_form_state_change("name")}
                                                value={formState.name}
                                                onBlur={handleBlur("name")}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <ContactsIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                            {formState.errors.name && <FormHelperText error>{formState.errors.name}</FormHelperText>}
                                        </FormControl>
                                    </div>

                                    <div className='w-full' >
                                        <FormControl
                                            className='w-full'
                                            variant="outlined"
                                            size='small'
                                        >
                                            <InputLabel
                                                error={Boolean(formState.errors.email)}
                                                htmlFor="outlined-adornment-password"
                                            >
                                                Email
                                            </InputLabel>
                                            <OutlinedInput
                                                name="email"
                                                label="Email (optional)"
                                                error={Boolean(formState.errors.email)}
                                                onChange={handle_form_state_change("email")}
                                                value={formState.email}
                                                onBlur={handleBlur("email")}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <ContactsIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                            {formState.errors.email && <FormHelperText error>{formState.errors.email}</FormHelperText>}
                                        </FormControl>
                                    </div>

                                    <div className='w-full' >
                                        <FormControl
                                            className='w-full'
                                            variant="outlined"
                                            size='small'
                                        >
                                            <InputLabel
                                                // error={Boolean(formState.errors.phone)}
                                                htmlFor="outlined-adornment-password"
                                            >
                                                Phone Number
                                            </InputLabel>
                                            <OutlinedInput
                                                name="phone"
                                                label="Phone Number"
                                                // error={Boolean(formState.errors.phone)}
                                                onChange={handle_form_state_change("phone")}
                                                value={formState.phone}
                                                // onBlur={handleBlur("phone")}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <ContactsIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                            {/* {formState.errors.phone && <FormHelperText error>{formState.errors.phone}</FormHelperText>} */}
                                        </FormControl>
                                    </div>

                                    <div className="w-full">
                                        <FormControl
                                            className='w-full'
                                            size='small'
                                        >
                                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="gender"
                                                label="Genders"
                                                value={formState.gender}
                                                onBlur={handleBlur("gender")}
                                                size='small'
                                                onChange={handle_form_state_change("gender")}
                                            >
                                                <MenuItem value={"male"}>Male</MenuItem>
                                                <MenuItem value={"female"}>Female</MenuItem>

                                            </Select>
                                            {formState.errors.gender && <FormHelperText error>{formState.errors.gender}</FormHelperText>}
                                        </FormControl>
                                    </div>

                                    <div className='w-full' >
                                        <FormControl
                                            className='w-full'
                                            variant="outlined"
                                            size='small'
                                        >
                                            <InputLabel
                                                // error={Boolean(formState.errors.age)}
                                                htmlFor="outlined-adornment-password"
                                            >
                                                Age
                                            </InputLabel>
                                            <OutlinedInput
                                                name="age"
                                                label="Age"
                                                // error={Boolean(formState.errors.age)}
                                                onChange={handle_form_state_change("age")}
                                                value={formState.age}
                                                // onBlur={handleBlur("age")}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <ContactsIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                            {/* {formState.errors.age && <FormHelperText error>{formState.errors.age}</FormHelperText>} */}
                                        </FormControl>
                                    </div>

                                    <div className='w-full' >
                                        <FormControl
                                            className='w-full'
                                            variant="outlined"
                                            size='small'
                                        >
                                            <InputLabel htmlFor="outlined-adornment-password">Address</InputLabel>
                                            <OutlinedInput
                                                name="address"
                                                label="Address"
                                                // error={Boolean(formState.errors.address)}
                                                onChange={handle_form_state_change("address")}
                                                value={formState.address}
                                                // onBlur={handleBlur("address")}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <ContactsIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                            {/* {formState.errors.address && <FormHelperText error>{formState.errors.address}</FormHelperText>} */}
                                        </FormControl>
                                    </div>


                                    <button type='submit' className='bg-blue-500 text-slate-100 text-[14px] px-[18px] py-[6px] rounded-md mt-2 mb-6 lg:mt-6 hover:opacity-80 active:opacity-70 transition-all w-full lg:w-fit' >Add</button>


                                </form>
                            </Fade>
                        </TabPanel>
                        <TabPanel value={tabs} index={1}>
                            <Fade duration={300} >
                                <div className='h-[500px] my-4 pb-12 p-3 lg:p-0' >
                                    <Box sx={{
                                        width: "100%",
                                        height: "100%",
                                        "& .MuiDataGrid-columnHeaderTitle": {
                                            fontWeight: "700"
                                        },
                                    }} >
                                        <DataGrid
                                            rows={contacts}
                                            columns={columns}
                                            pageSize={5}
                                            getRowId={(row) => row._id}
                                            rowsPerPageOptions={[5]}
                                            checkboxSelection
                                            disableSelectionOnClick
                                            experimentalFeatures={{ newEditingApi: true }}
                                            components={{ Toolbar: GridToolbar }}
                                        />
                                    </Box>
                                </div>
                            </Fade>
                        </TabPanel>
                        <TabPanel value={tabs} index={2}>
                            <Fade duration={300} >
                                <div className='overflow-x-hidden' >
                                    <Edit_contacts />
                                </div>
                            </Fade>
                        </TabPanel>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default EmailSender