import React from 'react'
import  ProfilePic  from '../data/ProfilePic.png';
import { useStateContext } from '../contexts/ContextProvider';
import { FaPencil } from 'react-icons/fa6';

const Profile = () => {
    const { activeMenu } = useStateContext();

    return (
        <div className={` ${activeMenu ? 'grid grid-cols-1 xl:grid-cols-7 gap-4' : 'grid grid-cols-1 md:grid-cols-7 gap-4'}`}>
            <div className={`${activeMenu ? 'col-span-1 flex justify-center xl:block mx-auto xl:mx-0 ' : 'col-span-1 flex justify-center md:block mx-auto md:mx-0 '} w-fit relative`}>
                <img 
                    src={ProfilePic} 
                    className={`${activeMenu ? 'rounded-full max-w-[170px] xl:max-w-[130px]' : 'rounded-full max-w-[170px] md:max-w-[110px] lg:max-w-[130px]'}`} 
                />
                <div className={`p-2 rounded-full bg-[blue] absolute  ${ activeMenu ? 'top-[115px] xl:top-[88px] -right-0 xl:right-0' : 'top-[115px] md:top-[70px] lg:top-[88px] -right-0 md:right-0' }`}>
                    <FaPencil color='white'/>
                </div>
            </div>
            
            <div className={`${activeMenu ? 'col-span-1 xl:col-span-6' : 'col-span-1 md:col-span-6'}`}>
                <div className='flex flex-col md:flex-row flex-wrap justify-between'>
                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2 xl:px-5' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>Your Name</h1>
                        <input type="text" placeholder='Charlene Reed ' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full'/>
                    </div>

                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2 xl:px-5' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>User Name</h1>
                        <input type="text" placeholder='Charlene Reed ' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full'/>
                    </div>

                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2 xl:px-5' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>Email</h1>
                        <input type="email" placeholder='charlenereed@gmail.com ' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full'/>
                    </div>

                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2 xl:px-5' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>Password</h1>
                        <input type="password" placeholder='*********' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full'/>
                    </div>

                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2 xl:px-5' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>Date Of Birth</h1>
                        <input type='text' placeholder='25 January, 1990' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full'/>
                    </div>

                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2 xl:px-5' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>Present Adress</h1>
                        <input type='text' placeholder='San Jose, California, USA' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full'/>
                    </div>

                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2 xl:px-5' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>Permanent Adress</h1>
                        <input type="text" placeholder='San Jose, California, USA' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full'/>
                    </div>

                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2 xl:px-5' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>City</h1>
                        <input type='text' placeholder='San Jose' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full'/>
                    </div>

                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2 xl:px-5' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>Postal Code</h1>
                        <input type='text' placeholder='45962' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full'/>
                    </div>

                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2 xl:px-5' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>Country</h1>
                        <input type='text' placeholder='USA' className=' placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-2xl w-full'/>
                    </div>
                </div>

                <div className='my-3 px-0 md:px-5 w-full flex justify-end'>
                    <button className='px-8 py-3 rounded-2xl text-white font-medium bg-[#1814F3] w-full md:w-1/3 lg:w-1/5'>
                    Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile
