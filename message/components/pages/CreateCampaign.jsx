import React, { useState, useEffect } from 'react'
import Fade from "react-reveal/Fade";
import Campaign from '../Campaign';
import SearchIcon from '@mui/icons-material/Search';
import useStateContext from '../../context/ContextProvider';
import AddIcon from '@mui/icons-material/Add';
import Pagination from '@mui/material/Pagination';
import styles from "../../styles/Home.module.css"
import { CircularProgress } from '@mui/material';

const EmailSender = () => {
    const { openModal, handleGetAllCampaigns, campaigns, cookieUser } = useStateContext();
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(25)
    const [count, setCount] = useState(0);
    const [searchKeys, setSearchKeys] = useState(""); // if searchkeys are true (when irt has value) then filetered Array will be populated.
    useEffect(() => {
        if (!searchKeys) {
            handleGetAllCampaigns(cookieUser.id, setLoading, limit, setCount);
        }
    }, [limit, searchKeys])
    const handleSearch = (e) => {
        setSearchKeys(e.target.value);
    }

    const search_campaigns = (e) => {
        if (e.code === "Enter" && searchKeys || e === "search" && searchKeys) {
            handleGetAllCampaigns(cookieUser.id, setLoading, undefined, undefined, searchKeys);
        }
    }

    const load_more_campaigns = () => {
        setLimit(prev => (prev + 10));
    }

    return (
        <Fade duration={500}>
            <div className={`p-[10px] pt-[80px] lg:pt-[50px] w-screen lg:w-full lg:px-[50px] h-[calc(100vh-60px)] overflow-y-auto ${styles.scrollBar}`} >
                <h1 className='text-[18px] lg:text-[24px] text-slate-600 font-semibold' >Create Campaign</h1>
                <p className='text-[12px] lg:text-[15px] text-slate-400 my-2' >To send messages simultaneously to multiple contacts, you can create a campaign.</p>
                <div className=' mt-6 ' >

                    <div className='w-full mb-12 flex flex-col-reverse md:flex-row justify-between md:items-center gap-4' >
                        <div className='flex w-full md:w-[250px] md:hover:w-[300px] md:hover:focus-within:w-[350px] md:focus-within:w-[350px] hover:border-indigo-400 focus-within:border-indigo-600 hover:focus-within:border-indigo-600  py-2 px-2 items-center border-stone-300 rounded-md border gap-2 transition-all duration-300' >
                            <SearchIcon onClick={() => search_campaigns("search")} className='text-zinc-400 scale-90' />
                            <input
                                placeholder='Search campaign'
                                type="text"
                                value={searchKeys}
                                onChange={handleSearch}
                                onKeyDown={search_campaigns}
                                className='w-full border-none outline-none text-[14px] caret-gray-400'
                            />
                        </div>
                        <button onClick={() => openModal("campaign_modal")} className='bg-blue-500 text-slate-100 text-[12px] md:text-[15px] px-[20px] md:px-[30px] py-[4px] md:py-[6px] rounded-md hover:opacity-80 active:opacity-70 transition-all w-fit flex gap-2 items-center' >
                            <AddIcon className='scale-[.8]' />
                            Add Campaign
                        </button>
                    </div>

                    <div className={`grid mb-8 gap-8 px-4 lg:px-0 ${(campaigns.length && !loading) ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lg:place-content-start place-items-center" : "place-items-center"}`} >
                        {loading ?
                            <div className='h-[50vh] flex items-center justify-center w-full' >
                                <div>
                                    <CircularProgress size={50} />
                                    <p className='text-[14px] text-stone-400 font-medium' >Loading...</p>
                                </div>
                            </div>
                            :
                            <>
                                {Boolean(searchKeys) ?
                                    <>
                                        {Boolean(campaigns.length) ?
                                            // it checks if campaigns were found with such keys
                                            <>
                                                {campaigns.map((each, index) => (
                                                    <Campaign
                                                        key={index}
                                                        data={each}
                                                        title={each.title}
                                                        members={each.contacts.length}
                                                        createdAt={new Date(each.createdAt).toLocaleString("en-US")}
                                                        borderColor={each.borderColor}
                                                        iconColor={each.textColor}
                                                    />
                                                ))
                                                }
                                            </>
                                            :
                                            <p className='text-[16px] lg:text-[18px]  font-semibold text-stone-500 text-left mt-4' >
                                                No campaigns were found with such keys...
                                            </p>
                                        }
                                    </>
                                    :
                                    <>
                                        {Boolean(campaigns.length) ?
                                            <>
                                                {campaigns.map((each, index) => (
                                                    <Campaign
                                                        key={index}
                                                        data={each}
                                                        title={each.title}
                                                        members={each.contacts.length}
                                                        createdAt={new Date(each.createdAt).toLocaleString("en-US")}
                                                        borderColor={each.borderColor}
                                                        iconColor={each.textColor}
                                                    />
                                                ))
                                                }
                                            </>
                                            :
                                            <p className='text-[18px] lg:text-[21px] font-bold text-stone-500 text-left mt-4' >
                                                You don't have any Campaign. Add Campaign.
                                            </p>
                                        }
                                    </>
                                }
                            </>


                        }



                    </div>
                    {limit < count &&
                        <div className='w-full flex justify-center mt-8 lg:mt-0 lg:mb-0' >
                            <button onClick={load_more_campaigns} type='submit' className='bg-blue-500 text-slate-100 text-[15px] px-[18px] py-[8px] rounded-md mt-2 mb-6 lg:mt-6 hover:opacity-80 active:opacity-70 transition-all w-fit' >Load more</button>
                        </div>
                    }
                </div>
            </div>
        </Fade >
    )
}

export default EmailSender