import Link from 'next/link'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function FourOhFour() {
    return (
        <div className={`w-screen h-[95vh] text-stone-800 justify-center flex items-center flex-col gap-16 ${styles.fadeinAnime}`} >
            <Head>
                <title>Morpi | 404</title>
                <meta name="description" content="Get yourself a better experience with Turpio" />
                <link rel="icon" href="/images/favicon.png" />
            </Head>
            <div className='flex items-center' >

                <h1 className='text-[26px] md:text-[46px] font-bold px-[15px] mr-[15px] md:px-[25px] md:mr-[25px] border-r-2 border-stone-300' >404</h1>
                <p className='text-[13px] md:text-[16px] font-medium' >This page could not be found.</p>
            </div>
            <Link href="/">
                <p>
                    <Tooltip title="Navigate back to home" arrow>
                        <IconButton >
                            <p style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} className={`text-white text-[14px] md:text-[16px] font-semibold px-[13px] md:px-[30px] py-[6px] md:py-[8px] cursor-pointer transition-all bg-gradient-to-r from-sky-500 to-violet-700 hover:opacity-80 duration-300 rounded-md`}>Go back home</p>
                        </IconButton>
                    </Tooltip>
                </p>
            </Link>
        </div>
    )
}