import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify';
import axios from "axios";
import cryptojs from "crypto-js";
import { useRouter } from 'next/router';
import { deleteCookie } from 'cookies-next';


const StateContext = createContext();



export const ContextProvider = ({ children }) => {
    const router = useRouter();

    const [openSidebar, setOpenSidebar] = useState(true);
    const handleSidebar = () => {
        setOpenSidebar(prev => !prev);
    }
    const [sidebarTabs, setSidebarTabs] = useState("Mail Sender");
    const switchSidebarTabs = (target) => {
        setSidebarTabs(target);
    }

    const defaultModals = {
        campaign_modal: false,
        edit_campaign_modal: false,
        logout_modal: false,
    };
    const [modals, setModals] = useState(defaultModals);
    const openModal = (key) => {
        setModals({ ...defaultModals, [key]: true });
    };
    const closeModal = (key) => {
        setModals({ ...defaultModals, [key]: false });
    };


    // loading state and error toastify for all api calls
    const [APIloading, setAPIloading] = useState(false);

    const toastConfig = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
    }

    // user retreived from cookies
    const [cookieUser, setCookieUser] = useState(null);


    // logging in api
    const handleLoginAPI = async (user, redirect_url) => {
        setAPIloading(true)
        try {
            const res = await axios.post("/api/login", user);
            router.push("/home");
            toast.success(res.data.message, { ...toastConfig, toastId: "loginSuccess" });
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "loginFailure" });
        } finally {
            setAPIloading(false)
        }
    }

    // signing up api
    const [signupUser, setSignupUser] = useState(null);
    const handleSignupAPI = async (user) => {
        setAPIloading(true);
        try {
            const res = await axios.post("/api/signup", user);
            if (!user.adminAddingUser) router.push("/home");
            setSignupUser(null);
            deleteCookie("signupUser");
            toast.success(res.data.message, { ...toastConfig, toastId: "signupSuccess" });
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "signupFailure" });
            setSignupUser(null);
            deleteCookie("signupUser");
        } finally {
            setAPIloading(false)
        }
    }
    const [verificationCode, setVerificationCode] = useState("")

    const generateRandomNumber = () => {
        var minm = 100000;
        var maxm = 999999;
        return Math.floor(Math
            .random() * (maxm - minm + 1)) + minm;
    }

    const sendVerifyCodeToMail = async (KEY, email) => {
        const code6Digit = generateRandomNumber()
        setAPIloading(true)
        try {
            setVerificationCode(code6Digit.toString());
            // encryptingCode
            const encryptedCode = cryptojs.AES.encrypt(code6Digit.toString(), KEY).toString();

            const res = await axios.post("/api/sendAuthCode", { code: encryptedCode, email });
            toast.success(res.data.message, { ...toastConfig, toastId: "sendAuthCodeSuccess" });
        } catch (err) {
            setSignupUser(null);
            toast.error(err.response.data.message, { ...toastConfig, toastId: "sendAuthCodeFailure" });
            deleteCookie("signupUser");
        } finally {
            setAPIloading(false)
        }
    }



    // updating user api
    const handleUpdateUserAPI = async (obj, setUpdatingStatus, passwordStateRevert) => {
        setAPIloading(true);
        try {
            const res = await axios.put(`/api/updateUser/?userId=${cookieUser.id}`, {
                ...obj,
                _id: cookieUser.id,
            });
            passwordStateRevert();
            setUpdatingStatus(false);
            setCookieUser(res.data.updatedUser);
            toast.info(res.data.message, { ...toastConfig, toastId: "userUpdateSuccesfull" });
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "userUpdateFailure" });
        } finally {
            setAPIloading(false);
        }
    };



    // sending Mail API
    const handleSendingMail = async (data, reverse_states) => {
        setAPIloading(true)
        try {
            const res = await axios.post("/api/sendMail", data);
            toast.success(res.data.message, { ...toastConfig, toastId: "sendMailSuccess" });
            reverse_states();
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "sendMailFailure" });
        } finally {
            setAPIloading(false)
        }
    }


    // sending messages on WhatsApp
    const fetchQRCodeWhatsapp = async (setQRCodeData) => {
        try {

            // Fetch the QR code data from the server
            const res = await axios.get('/api/whatsappConnect');
            // Set the QR code data in state
            setQRCodeData(res.data.urlCode);
            // toast.success(, { ...toastConfig, toastId: "fetchQRCodeWhatsappFailure" });
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "fetchQRCodeWhatsappFailure" });
        }
    }

    // sending messages on WhatsApp
    const handleSendingMessageWhatsapp = async (data) => {
        try {
            const res = await axios.post('/api/whatsappConnect', data);
            toast.success(res.data.message, { ...toastConfig, toastId: "SendingMessageWhatsappSuccess" });
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "SendingMessageWhatsappFailure" });
        }
    }

    // Campaigns State
    const [campaigns, setCampaigns] = useState([]);
    const [campaignsEmails, setCampaignsEmails] = useState([]);
    const [targetEditContact, setTargetEditContact] = useState(null);
    // Get All Campaigns API
    const handleGetAllCampaigns = async (userId, setLoading, limit, setCount, keywords) => {
        setLoading(true)
        try {
            const res = await axios.get(`/api/getAllCampaigns?userId=${userId}&limit=${limit}&keywords=${keywords}`);
            if (keywords) {
                setCampaigns(res.data);
            } else {
                setCampaigns(res.data.data);
                if (setCount) setCount(res.data.count);
            }
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "getAllCampaignFailure" });
        } finally {
            setLoading(false)
        }
    }

    // Creating Campaign API
    const handleCreateCampaign = async (data, userId) => {
        setAPIloading(true)
        try {
            const res = await axios.post(`/api/createCampaign?userId=${userId}`, data);
            handleGetAllCampaigns(userId, setAPIloading);
            toast.success(res.data.message, { ...toastConfig, toastId: "createCampaignSuccess" });
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "createCampaignFailure" });
        } finally {
            setAPIloading(false)
        }
    }

    // Updating Campaign API
    const handleUpdateCampaign = async (data, id) => {
        setAPIloading(true)
        try {
            const res = await axios.put(`/api/updateCampaign?id=${id}`, data);
            handleGetAllCampaigns(cookieUser.id, setAPIloading);
            toast.info(res.data.message, { ...toastConfig, toastId: "updateCampaignSuccess" });
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "updateCampaignFailure" });
        } finally {
            setAPIloading(false);
        }
    }

    // Deleting Campaign API
    const handleDeleteCampaign = async (id) => {
        setAPIloading(true)
        try {
            const res = await axios.delete(`/api/deleteCampaign?id=${id}`);
            handleGetAllCampaigns(cookieUser.id, setAPIloading);
            toast.error(res.data.message, { ...toastConfig, toastId: "deleteCampaignSuccess" });
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "deleteCampaignFailure" });
        } finally {
            setAPIloading(false)
        }
    }
    // Get All Contacts Emails API
    const handleGetCampaignsEmails = async (userId, setLoading) => {
        setLoading(true);
        try {
            const res = await axios.get(`/api/getCampaignsEmails?userId=${userId}`);
            setCampaignsEmails(res.data);
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "getAllContactFailure" });
        } finally {
            setLoading(false);
        }
    }





    // Contacts State
    const [contacts, setContacts] = useState([]);
    const [contactsEmails, setContactsEmails] = useState([]);
    // Get All Contacts API
    const handleGetAllContacts = async (userId, setLoading) => {
        setLoading(true)
        try {
            const res = await axios.get(`/api/getAllContacts?userId=${userId}`);
            setContacts(res.data);
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "getAllContactFailure" });
        } finally {
            setLoading(false)
        }
    }

    // Get One Contact API
    const [searchedContact, setSearchedContact] = useState(null);
    const handleGetOneContact = async (id) => {
        setAPIloading(true);
        try {
            const res = await axios.post(`/api/getOneContact/?userId=${cookieUser.id}&contactId=${id}`);
            setSearchedContact(res.data);
            toast.info("User has been found!", { ...toastConfig, toastId: "userFoundSuccess" });
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "userFoundFailure" });
        } finally {
            setAPIloading(false);
        }
    }

    // Creating Contact API
    const handleCreateContact = async (data, userId) => {
        setAPIloading(true)
        try {
            const res = await axios.post(`/api/createContact?userId=${userId}`, data);
            handleGetAllContacts(userId, setAPIloading);
            toast.success(res.data.message, { ...toastConfig, toastId: "createContactSuccess" });
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "createContactFailure" });
        } finally {
            setAPIloading(false)
        }
    }

    // Updating Contact API
    const handleUpdateContact = async (data, id) => {
        setAPIloading(true)
        try {
            const res = await axios.put(`/api/updateContact?id=${id}`, data);
            handleGetAllContacts(cookieUser.id, setAPIloading);
            toast.info(res.data.message, { ...toastConfig, toastId: "updateContactSuccess" });
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "updateContactFailure" });
        } finally {
            setAPIloading(false)
        }
    }

    // Deleting Contact API
    const handleDeleteContact = async (id) => {
        setAPIloading(true)
        try {
            const res = await axios.delete(`/api/deleteContact?id=${id}`);
            handleGetAllContacts(cookieUser.id, setAPIloading);
            toast.error(res.data.message, { ...toastConfig, toastId: "deleteContactSuccess" });
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "deleteContactFailure" });
        } finally {
            setAPIloading(false)
        }
    }
    // Get All Contacts Emails API
    const handleGetContactsEmails = async (userId, setLoading) => {
        setLoading(true);
        try {
            const res = await axios.get(`/api/getContactsEmails?userId=${userId}`);
            setContactsEmails(res.data);
        } catch (err) {
            toast.error(err.response.data.message, { ...toastConfig, toastId: "getAllContactFailure" });
        } finally {
            setLoading(false);
        }
    }


    return (
        <StateContext.Provider
            value={{
                handleSidebar, openSidebar, switchSidebarTabs, sidebarTabs,

                setSignupUser, signupUser, handleSignupAPI, sendVerifyCodeToMail, verificationCode, setVerificationCode,
                handleLoginAPI, handleUpdateUserAPI,

                APIloading, setAPIloading, setCookieUser, cookieUser,

                handleSendingMail, fetchQRCodeWhatsapp, handleSendingMessageWhatsapp,

                modals, openModal, closeModal,

                handleCreateCampaign, handleUpdateCampaign, handleDeleteCampaign, handleGetAllCampaigns, campaigns,
                targetEditContact, setTargetEditContact, campaignsEmails, handleGetCampaignsEmails,

                handleCreateContact, handleUpdateContact, handleDeleteContact, handleGetAllContacts, searchedContact, setSearchedContact, handleGetOneContact, contacts, contactsEmails, setContactsEmails,
                handleGetContactsEmails,

            }}
        >
            {children}
        </StateContext.Provider >
    )
}

const useStateContext = () => useContext(StateContext);
export default useStateContext;