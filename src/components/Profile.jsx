import React from 'react'

const Profile = () => {
    return (
        <div>
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
    )
}

export default Profile
