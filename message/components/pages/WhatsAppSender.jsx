import React, { useState, useEffect, forwardRef } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fade from "react-reveal/Fade";
import useStateContext from "../../context/ContextProvider";
import { FormHelperText } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const WhatsAppSender = () => {


  const { fetchQRCodeWhatsapp } = useStateContext();

  const initialFormData = {
    senderPhone: "",
    recipientPhone: "",
    message: "",
    errors: {
      senderPhone: "",
      recipientPhone: "",
      message: "",
    }
  }
  const [formData, setformData] = useState(initialFormData);

  const validate_form = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "senderPhone":
        if (!value) {
          error = "Please enter a sender phone";
        }
        break;
      case "recipientPhone":
        if (!value) {
          error = "Please enter recipient phone";
        }
        break;
      case "message":
        if (!value) {
          error = "Please write the message";
        }
        break;
      default:
        break;
    }
    return error;
  }

  const handle_form_data_change = (name) => (e, value2) => {
    const { value } = e.target;
    setformData(prev => ({ ...prev, [name]: value }));
  }

  const handleBlur = (name) => (e) => {
    const { value } = e.target;
    const error = validate_form(name, value);
    setformData(prev => ({
      ...prev,
      errors: {
        ...prev.errors,
        [name]: error,
      }
    }))
  }

  const default_all_states = () => {
    setformData(initialFormData);
  }

  // Alert
  const [alertOpen, setAlertOpen] = useState(false);
  const handleAlertOpen = () => {
    setAlertOpen(true);
  };
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    Object.keys(formData).forEach(fieldName => {
      const error = validate_form(fieldName, formData[fieldName]);
      if (error) {
        errors[fieldName] = error;
      }
    });
    setformData(prev => ({
      ...prev,
      errors,
    }));
    if (Object.values(errors).every(e => !e)) {
      const { errors, ...others } = formData;
      // calling function
      handleAlertOpen();
      // handleSendingMail(others, default_all_states);
    };
  }

  const anchorOrigin = {
    vertical: "top",
    horizontal: "right",
  }

  return (
    <>
      <Snackbar anchorOrigin={anchorOrigin} open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="warning" sx={{ width: '100%' }}>
          WhatsApp is under verification process for 10 - 15 days more.
        </Alert>
      </Snackbar>

      <Fade duration={500}>
        <div className='pt-[80px] lg:p-[50px] h-[calc(100vh-60px)] overflow-y-auto' >
          <div className='px-[10px] lg:p-0' >
            <h1 className='text-[18px] lg:text-[24px] text-slate-600 font-semibold' >WhatsApp Sender</h1>
            <p className='text-[13px] lg:text-[15px] text-slate-400 my-2' >Send message via WhatsApp</p>
          </div>
          <form onSubmit={handleSubmit} className='w-screen lg:w-[1400px] bg-white rounded-md lg:shadow-default px-[20px] py-[30px] lg:mt-12 ' >
            {/* icon */}
            <div className='w-full justify-center flex' >
              <div className='w-fit mb-6 p-[24px] md:p-[32px] bg-green-500 text-white rounded-full hover:scale-110 hover:rotate-[360deg] transition-all duration-700' >
                <WhatsAppIcon className='scale-[1.5] md:scale-[2.5]' />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-8' >
              <div className='flex-1 flex flex-col gap-5 lg:gap-8 lg:p-[15px]' >

                <h1 className='text-[16px] lg:text-[19px] text-slate-600 font-semibold' >Message Pattern</h1>
                <div className='w-full' >
                  <FormControl
                    className='w-full'
                    variant="outlined"
                    size='small'
                  >
                    <InputLabel error={Boolean(formData.errors.senderPhone)} htmlFor="outlined-adornment-password">Your Phone No</InputLabel>
                    <OutlinedInput
                      name="senderPhone"
                      label="Your email address"
                      error={Boolean(formData.errors.senderPhone)}
                      onChange={handle_form_data_change("senderPhone")}
                      value={formData.senderPhone}
                      onBlur={handleBlur("senderPhone")}
                      endAdornment={
                        <InputAdornment position="end">
                          <QuestionMarkIcon className='scale-[.9]' />
                        </InputAdornment>
                      }
                    />
                    {formData.errors.senderPhone && <FormHelperText error>{formData.errors.senderPhone}</FormHelperText>}
                  </FormControl>
                </div>


                <div className='w-full' >
                  <FormControl
                    className='w-full'
                    variant="outlined"
                    size='small'
                  >
                    <InputLabel error={Boolean(formData.errors.recipientPhone)} htmlFor="outlined-adornment-password">Recipient(s) Phone No</InputLabel>
                    <OutlinedInput
                      name="recipientPhone"
                      label="Recipient(s) Phone Noe"
                      error={Boolean(formData.errors.recipientPhone)}
                      onChange={handle_form_data_change("recipientPhone")}
                      value={formData.recipientPhone}
                      onBlur={handleBlur("recipientPhone")}
                      endAdornment={
                        <InputAdornment position="end">
                          <QuestionMarkIcon className='scale-[.9]' />
                        </InputAdornment>
                      }
                    />
                    {formData.errors.recipientPhone && <FormHelperText error>{formData.errors.recipientPhone}</FormHelperText>}
                  </FormControl>
                </div>




              </div>
              <div className='flex-1 flex flex-col gap-5 lg:gap-8 lg:p-[15px]' >
                <h1 className='text-[16px] lg:text-[19px] text-slate-600 font-semibold' >Message Content</h1>
                <div className='w-full' >
                  <FormControl
                    className='w-full'
                  >
                    <TextField
                      size='small'
                      label="Your message here"
                      multiline
                      rows={10}
                      name="message"
                      error={Boolean(formData.errors.message)}
                      onChange={handle_form_data_change("message")}
                      value={formData.message}
                      onBlur={handleBlur("message")}
                      helperText={formData.errors.message}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className='w-full flex justify-center mb-8' >
              <button className='bg-green-500 text-slate-100 text-[14px] lg:text-[17px] w-full lg:w-[500px] py-[8px] rounded-md mt-6 hover:opacity-80 active:opacity-75 transition-all' >Send to WhtasApp</button>
            </div>
          </form>
        </div>
      </Fade>
    </>

  )
}

export default WhatsAppSender