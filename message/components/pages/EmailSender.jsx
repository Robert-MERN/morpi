import React, { useState, useEffect, } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MailIcon from '@mui/icons-material/Mail';
import Fade from "react-reveal/Fade";
import Checkbox from '@mui/material/Checkbox';
import Autocomplete_Contacts from '../../utils/Autocomplete_Contacts';
import Autocomplete_Campaigns from '../../utils/Autocomplete_Campaigns';
import { FormHelperText } from '@mui/material';
import styles from "../../styles/Home.module.css"
import useStateContext from '../../context/ContextProvider';

const EmailSender = () => {
  const {
    handleSendingMail,
    handleGetContactsEmails,
    contactsEmails,
    setContactsEmails,
    handleGetCampaignsEmails,
    campaignsEmails,
    cookieUser
  } = useStateContext();



  const initialCheckState = {
    campaigns: false,
    contacts: true
  }
  const [check, setCheck] = useState(initialCheckState);


  const [loadingContacts, setLoadingContacts] = useState(false);
  const [loadingCampaigns, setLoadingCampaigns] = useState(false);
  useEffect(() => {
    if (cookieUser) {
      if (Object.values(check).every(e => e === true)) {
        handleGetCampaignsEmails(cookieUser.id, setLoadingCampaigns)
        handleGetContactsEmails(cookieUser.id, setLoadingContacts);
      } else if (check.campaigns && !check.contacts) {
        handleGetCampaignsEmails(cookieUser.id, setLoadingCampaigns)
      } else if (check.contacts && !check.campaigns) {
        handleGetContactsEmails(cookieUser.id, setLoadingContacts);
      }
    }
  }, [check.campaigns, check.contacts, cookieUser])


  const handleCheck = (name) => (e) => {
    const { checked } = e.target
    if (!checked && Object.keys(check).filter(e => e !== name).some(e => !check[e])) {
      return;
    } else {
      setCheck(prev => ({ ...prev, [name]: checked }));
    }
  }

  // emails states
  const [enteredEmails, setEnteredEmails] = useState([]);
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email format


  // campaigns state
  const [selectedCampaigns, setSelectedCampaigns] = useState([]);
  const [selectedCampaignsOBJ, setselectedCampaignsOBJ] = useState([]);

  const initialFormData = {
    senderEmail: "",
    senderName: "",
    subject: "",
    message: "",
    recepientEmails: "",
    recepientCampaigns: "",
    errors: {
      senderEmail: "",
      senderName: "",
      subject: "",
      message: "",
      recepientEmails: "",
      recepientCampaigns: "",
    }
  }
  const [formData, setformData] = useState(initialFormData);

  const validate_form = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "senderEmail":
        if (!value) {
          error = "Please enter an email";
        } else if (value) {
          if (!EMAIL_REGEX.test(value)) {
            error = "Invalid email address";
          }
        }
        break;
      case "senderName":
        if (!value) {
          error = "Please enter your name";
        }
        break;
      case "subject":
        if (!value) {
          error = "Please enter the subject";
        }
        break;
      case "message":
        if (!value) {
          error = "Please write the message";
        }
        break;
      case "recepientEmails":
        if (!value && check.contacts && !enteredEmails.length) {
          error = "Please select the email";
        }
        break;
      case "recepientCampaigns":
        if (!value && check.campaigns && !selectedCampaigns.length) {
          error = "Please select the campaign";
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
    setCheck(initialCheckState);
    setformData(initialFormData);
    setEnteredEmails([]);
    setSelectedCampaigns([]);
    setselectedCampaignsOBJ([]);
  }

  const extractEmails = (array) => {
    const emails = [];

    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (item.hasOwnProperty('email')) {
        emails.push(item.email);
      }
    }

    return emails;
  }

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
      const { errors, recepientCampaigns, recepientEmails, ...others } = formData;
      // calling function
      handleSendingMail({
        ...others,
        recepientCampaigns: selectedCampaigns,
        recepientEmails: extractEmails(enteredEmails)
      }, default_all_states);
    };
  }
  return (
    <Fade duration={500}>
      <div className={`lg:px-[50px] pt-[80px] lg:pt-[50px] pb-[5px] overflow-y-auto h-screen  lg:h-[calc(100vh-60px)] ${styles.scrollBar}`} >
        <div className='px-[15px] lg:px-[0px]' >
          <h1 className='text-[18px] lg:text-[24px] text-slate-600 font-semibold' >Mail Sender</h1>
          <p className='text-[12px] lg:text-[15px] text-slate-400 my-2' >Send message via Email.</p>
        </div>
        <form onSubmit={handleSubmit} className='w-screen lg:w-[1400px] bg-white rounded-md lg:shadow-default px-[20px] pt-[30px] pb-[10px] mt-2 lg:mt-12' >
          {/* icon */}
          <div className='w-full justify-center flex' >
            <div className='w-fit mb-6 p-[24px] md:p-[32px] bg-blue-500 text-white rounded-full hover:scale-110 hover:rotate-[360deg] transition-all duration-700' >
              <MailIcon className='scale-[1.5] md:scale-[2.5]' />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-8' >
            <div className='flex-1 flex flex-col gap-5 md:gap-8 p-[0px] lg:p-[15px]' >

              <h1 className='text-[16px] lg:text-[19px] text-slate-600 font-semibold' >Message Pattern</h1>
              <div className='w-full' >
                <FormControl
                  className='w-full'
                  variant="outlined"
                  size='small'
                >
                  <InputLabel
                    error={Boolean(formData.errors.senderEmail)}
                    htmlFor="outlined-adornment-password"
                  >
                    Your email address
                  </InputLabel>
                  <OutlinedInput
                    name="senderEmail"
                    label="Your email address"
                    error={Boolean(formData.errors.senderEmail)}
                    onChange={handle_form_data_change("senderEmail")}
                    value={formData.senderEmail}
                    onBlur={handleBlur("senderEmail")}
                    endAdornment={
                      <InputAdornment position="end">
                        <QuestionMarkIcon className={`scale-[.9] ${formData.errors.senderEmail ? "text-red-500" : "text-stone-600"}`} />
                      </InputAdornment>
                    }
                  />
                  {formData.errors.senderEmail && <FormHelperText error>{formData.errors.senderEmail}</FormHelperText>}
                </FormControl>
              </div>


              <div className='w-full' >
                <FormControl
                  className='w-full'
                  variant="outlined"
                  size='small'
                >
                  <InputLabel
                    error={Boolean(formData.errors.senderName)}
                    htmlFor="outlined-adornment-password"
                  >
                    Sender name
                  </InputLabel>
                  <OutlinedInput
                    name="senderName"
                    label="Sender name"
                    error={Boolean(formData.errors.senderName)}
                    onChange={handle_form_data_change("senderName")}
                    value={formData.senderName}
                    onBlur={handleBlur("senderName")}
                    endAdornment={
                      <InputAdornment position="end">

                        <QuestionMarkIcon className={`scale-[.9] ${formData.errors.senderName ? "text-red-500" : "text-stone-600"}`} />

                      </InputAdornment>
                    }
                  />
                  {formData.errors.senderName && <FormHelperText error>{formData.errors.senderName}</FormHelperText>}
                </FormControl>
              </div>


              <div className='w-full flex items-start gap-4' >
                <FormControl
                  className='w-full'
                >
                  <Autocomplete_Contacts
                    emails={contactsEmails}
                    setEmails={setContactsEmails}
                    enteredEmails={enteredEmails}
                    setEnteredEmails={setEnteredEmails}
                    check={check}
                    value={formData.recepientEmails}
                    inputChange={handle_form_data_change("recepientEmails")}
                    onBlur={handleBlur("recepientEmails")}
                    error={Boolean(formData.errors.recepientEmails)}
                    loading={loadingContacts}
                  />
                  {formData.errors.recepientEmails && <FormHelperText error>{formData.errors.recepientEmails}</FormHelperText>}
                </FormControl>
                <Checkbox
                  checked={check.contacts}
                  onChange={handleCheck("contacts")}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </div>

              <div className='w-full flex items-start gap-4' >
                <FormControl
                  className='w-full'
                >
                  <Autocomplete_Campaigns
                    campaigns={campaignsEmails}
                    selectedCampaigns={selectedCampaigns}
                    setSelectedCampaigns={setSelectedCampaigns}
                    selectedCampaignsOBJ={selectedCampaignsOBJ}
                    setselectedCampaignsOBJ={setselectedCampaignsOBJ}
                    check={check}
                    inputChange={handle_form_data_change("recepientCampaigns")}
                    onBlur={handleBlur("recepientCampaigns")}
                    error={Boolean(formData.errors.recepientCampaigns)}
                    loading={loadingCampaigns}
                  />
                  {formData.errors.recepientCampaigns && <FormHelperText error>{formData.errors.recepientCampaigns}</FormHelperText>}
                </FormControl>
                <Checkbox
                  checked={check.campaigns}
                  onChange={handleCheck("campaigns")}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </div>


              <div className='w-full' >
                <FormControl
                  className='w-full'
                  variant="outlined"
                  size='small'
                >
                  <InputLabel
                    error={Boolean(formData.errors.subject)}
                    htmlFor="outlined-adornment-password"
                  >
                    Subject
                  </InputLabel>
                  <OutlinedInput
                    name="subject"
                    label="Subject"
                    error={Boolean(formData.errors.subject)}
                    onChange={handle_form_data_change("subject")}
                    value={formData.subject}
                    onBlur={handleBlur("subject")}
                    endAdornment={
                      <InputAdornment position="end">
                        <QuestionMarkIcon className={`scale-[.9] ${formData.errors.subject ? "text-red-500" : "text-stone-600"}`} />
                      </InputAdornment>
                    }
                  />
                  {formData.errors.subject && <FormHelperText error>{formData.errors.subject}</FormHelperText>}
                </FormControl>
              </div>


            </div>
            <div className='flex-1 flex flex-col gap-5 md:gap-8 p-[0] lg:p-[15px]' >
              <h1 className='text-[16px] lg:text-[19px] text-slate-600 font-semibold' >Message Content</h1>
              <div className='w-full' >
                <FormControl
                  className='w-full'
                >
                  <TextField
                    size='small'
                    label="Your message here"
                    error={Boolean(formData.errors.message)}
                    helperText={formData.errors.message}
                    name="message"
                    multiline
                    rows={10}
                    onBlur={handleBlur("message")}
                    onChange={handle_form_data_change("message")}
                    value={formData.message}
                  />
                </FormControl>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center mb-8' >
            <button type="submit" className='bg-blue-500 text-slate-100 text-[14px] lg:text-[17px] w-full lg:w-[500px] py-[8px] rounded-md mt-6 hover:opacity-80 active:opacity-70 transition-all' >Send to email</button>
          </div>
        </form>
      </div>
    </Fade>
  )
}

export default EmailSender;
