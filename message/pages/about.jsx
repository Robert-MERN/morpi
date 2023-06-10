import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'

const about = () => {
    return (
        <div>
            <div className='w-screen min-h-screen flex justify-center relative' >
                <Navbar />
                <Head>
                    <title>About - Turpio</title>
                    <meta name="description" content="About - Turpio" />
                    <link rel="icon" href="/images/favicon.png" />
                </Head>
                <div className='w-[1200px] mt-40 mb-12' >
                    <h1 className='text-[28px] md:text-[36px] font-bold text-center text-zinc-800 mb-[50px] md:mb-[40px]' >About</h1>
                    <h1 className='text-[20px] font-bold text-zinc-900 mb-4' >Welcome to Turpio!</h1>

                    {/* Article 1 */}
                    {/* <h2 className='font-semibold text-zinc-800 mb-3' >
                    These are the terms and conditions for:
                    <a className='text-blue-500' href="https://turpio.com" > https://turpio.com</a>
                </h2> */}
                    <p className='text-[16px] text-zinc-700 mb-3' >
                        By using the platform, you agree to be bound by these terms and conditions and our privacy policy. In these terms and conditions, the words "platform" refer to the website and the Turpio platform as a whole, "we", "our" and "Turpio" refer to Turpio and "you" and "user" refer to you , the Turpium user
                    </p>
                    <p className='text-[16px] text-zinc-700 mb-3' >
                        The following terms and conditions apply to your use of the Platform. This includes mobile and tablet versions, as well as any other version of Turpio accessible via desktop, mobile, tablet, social media, or other devices.
                    </p>
                    <h2 className='font-semibold text-zinc-800 my-4' >
                        PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING, POSTING INFORMATION ON, OR OBTAINING ANY SERVICE FROM THE PLATFORM.
                    </h2>

                    {/* Article 1 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 1. | ACCEPTANCE OF THE TERMS</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            This agreement sets forth the legally binding terms for your use of Turpio. By registering and using the Platform, you agree to be bound by this Agreement. If you do not accept the terms of this Agreement, you must not use the Platform
                        </li>

                    </ol>



                </div>
            </div>
            <Footer />
        </div>
    )
}

export default about