import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const Security = () => {
    const { activeMenu, isOn, setIsOn } = useStateContext();

    return (
        <div>
            <div className={`${activeMenu ? 'col-span-1 xl:col-span-6' : 'col-span-1 md:col-span-6'}`}>

                <div>
                    <div className='my-2'>
                        <span className='text-[#333B69] font-medium'>Two Factor Authenticator</span>
                    </div>

                    <div>
                        <label className="flex items-center cursor-pointer mt-3">
                            <div className="relative" onChange={() => setIsOn(!isOn)}>
                                <input
                                type="checkbox"
                                className="sr-only"
                                checked="true"
                                />
                                <div className={`block ${isOn ? 'bg-gray-300' : 'bg-[#16DBCC]'} w-14 h-8 rounded-full`}></div>
                                <div className={`dot absolute ${isOn ? 'left-1 top-1' : 'right-1 top-1'} w-6 h-6 bg-white rounded-full transition`}></div>
                            </div>
                            <span className="ml-3">Enable or disable two factor authentication</span>
                        </label>
                    </div>
                </div>


                <div className=' my-5'>
                    <div>
                        <h1 className='font-semibold text-lg'>Change Password</h1>
                    </div>

                    <div className='flex flex-col flex-wrap'>
                        <div className={`${activeMenu ? 'w-full md:w-1/2' : 'w-full md:w-1/2'}`}>
                            <h1 className='font-medium my-2'>Current Password</h1>
                            <input type="text" placeholder='********' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-3xl w-full'/>
                        </div>

                        <div className={`${activeMenu ? 'w-full md:w-1/2' : 'w-full md:w-1/2'}`}>
                            <h1 className='font-medium my-2'>New Password</h1>
                            <input type="text" placeholder='********' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-3xl w-full'/>
                        </div>

                        
                    </div>
                </div>

                <div className='my-3 px-0 md:px-5 w-full flex justify-end'>
                    <button className='px-8 py-3 rounded-2xl text-white font-medium bg-[#1814F3] w-full md:w-1/3 lg:w-1/6'>
                    Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Security
