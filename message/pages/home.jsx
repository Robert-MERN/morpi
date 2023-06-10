import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from '../components/HomePage'
import Sidebar from '../components/Sidebar'
import useStateContext from '../context/ContextProvider'
import { getCookie, deleteCookie } from "cookies-next"
import jwt from "jsonwebtoken";
import { useEffect } from 'react'






export default function Home({ user }) {
    const { openSidebar, setSignupUser, setCookieUser, setAllSchedule } = useStateContext();
    useEffect(() => {
        // removing deatils retrieved in signupUser state after signing up
        setSignupUser(null);
        // deleting deatils retrieved in signupUser cookie after signing up
        deleteCookie("signupUser")

        // setting logged-in user from cookie in contextAPI 
        setCookieUser(user);
    }, []);

    return (
        <div className={`flex w-screen h-screen bg-slate-100 gap-3 ${styles.container}`} >
            <Head>
                <title>Message Sender App - Emilio</title>
                <meta name="description" content="Message Sender App - Emilio" />
                <link rel="icon" href="/images/favicon.png" />
            </Head>
            {openSidebar &&

                <Sidebar />

            }
            <HomePage />
        </div>
    )
}

export const getServerSideProps = async function ({ req, res }) {
    const userToken = getCookie("userAccountToken", { req, res });
    if (!userToken) {
        return {
            redirect: {
                destination: '/?redirect_url=' + req.url,
                permanent: true,
            },
        }
    } else {
        const user = jwt.verify(userToken, process.env.JWT_KEY)
        return {
            props: { user },
        }
    }
}