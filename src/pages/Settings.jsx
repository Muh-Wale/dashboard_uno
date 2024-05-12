import React from 'react'
import Profile from '../components/Profile'
import Preferences from '../components/Preferences'
import Security from '../components/Security'
import { useStateContext } from '../contexts/ContextProvider';

const Settings = () => {
    const { activeMenu } = useStateContext();

    const activeLink = 'flex items-center pl-4 rounded-lg  text-[#718EBF]  text-xl font-medium cursor-pointer';
    const normalLink = 'flex items-center pl-4 rounded-lg text-xl font-medium text-[#718EBF] dark:text-gray-200 dark:hover:text-[#2d61ff9c] hover:bg-light-gray cursor-pointer';

    return (
        <>
            <section className={`${ activeMenu ? 'mt-20 md:mt-5' : 'mt-20' } p-5`}>
                <div className='w-full'>

                    <div className='my-3 bg-white rounded-2xl'>
                        <div className='p-5'>
                            <div className=' flex gap-5 py-2 border-b-2 border-[#F4F5F7]'>
                                <div className='w-fit'>
                                    <a className={normalLink}>Edit Profile</a>
                                </div>

                                <div className='w-fit'>
                                    <a className={normalLink}>Preferences</a>
                                </div>

                                <div className='w-fit'>
                                    <a className={normalLink}>Security</a>
                                </div>
                            </div>

                            {/* <div className=' flex gap-5 py-2 border-b-2 border-[#F4F5F7]'>
                                <div>
                                    <a className={({ isActive }) => (isActive ? `${activeLink} navlink` : `${normalLink}`)}>Edit Profile</a>
                                </div>

                                <div>
                                    <a className={({ isActive }) => (isActive ? `${activeLink} navlink` : `${normalLink}`)}>Preferences</a>
                                </div>

                                <div>
                                    <a className={({ isActive }) => (isActive ? `${activeLink} navlink` : `${normalLink}`)}>Security</a>
                                </div>
                            </div> */}

                            <div className='flex flex-wrap justify-between my-8'>
                                <div className='w-full md:w-fit'>
                                    <h1 className='font-medium my-2'>Card Type</h1>
                                    <input type="text" placeholder='Classic' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full md:w-[300px]'/>
                                </div>

                                <div className='w-full md:w-fit'>
                                    <h1 className='font-medium my-2'>Name On Cards</h1>
                                    <input type="text" placeholder='My Cards' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full md:w-[300px]'/>
                                </div>

                                <div className='w-full md:w-fit'>
                                    <h1 className='font-medium my-2'>Card Number</h1>
                                    <input type='number' placeholder='**** **** **** ****' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full md:w-[300px]'/>
                                </div>

                                <div className='w-full md:w-fit'>
                                    <h1 className='font-medium my-2'>Expiration Date</h1>
                                    <input type="text" placeholder='25 January 2025' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full md:w-[300px]'/>
                                </div>
                            </div>

                            <div className='my-3'>
                                <button className='px-8 py-3 rounded-2xl text-white font-medium bg-[#1814F3]'>
                                Add Card
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Settings
