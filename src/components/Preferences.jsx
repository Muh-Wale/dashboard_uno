import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const Preferences = () => {
    const { activeMenu } = useStateContext();

    return (
        <div>
            <div className={`${activeMenu ? 'col-span-1 xl:col-span-6' : 'col-span-1 md:col-span-6'}`}>
                <div className='flex flex-col md:flex-row flex-wrap justify-between'>
                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>Currency</h1>
                        <input type="text" placeholder='USD' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-3xl w-full'/>
                    </div>

                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>Time Zone</h1>
                        <input type="text" placeholder='C(GMT-12:00) International Date Line West' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-3xl w-full'/>
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

export default Preferences
