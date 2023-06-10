import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import LangingPage from '../components/LangingPage'
import { getCookie } from "cookies-next"






export default function Home({ CJS_KEY }) {
  return (
    <div className={`w-screen h-fit relative ${styles.container}`} >
      <Head>
        <title>Message Sender App - Emilio</title>
        <meta name="description" content="Message Sender App - Emilio" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Navbar />
      <LangingPage CJS_KEY={CJS_KEY} />
    </div>
  )
}


export const getServerSideProps = async function ({ req, res }) {
  const userToken = getCookie("userAccountToken", { req, res });
  if (userToken) {
    return {
      redirect: {
        destination: '/home',
        permanent: true,
      },
    }
  }
  return { props: { message: "not signed up", CJS_KEY: process.env.CJS_KEY } }

}