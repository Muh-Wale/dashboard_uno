import { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import Preferences from '../components/Preferences';
import Security from '../components/Security';
import { useStateContext } from '../contexts/ContextProvider';

const Settings = () => {
    const { activeMenu, activeContent, setActiveContent } = useStateContext();
    
    // Set default active content to 'profile' when component mounts
    useEffect(() => {
        setActiveContent('profile');
    }, []);

    const handleDivClick = (content) => {
        setActiveContent(content);
    };

    const renderPage = () => {
        switch (activeContent) {
            case 'profile':
                return <Profile />;
            case 'preferences':
                return <Preferences />;
            case 'security':
                return <Security />;
            default:
                return null;
        }
    };

    const activeLink = 'flex items-center pl-0 md:pl-4 rounded-lg xs:text-lg  text-[#718EBF]  sm:text-xl font-medium cursor-pointer text-center settings-active';
    const normalLink = 'flex items-center pl-0 md:pl-4 rounded-lg xs:text-lg sm:text-xl font-medium text-[#718EBF] dark:text-gray-200 dark:hover:text-[#2d61ff9c] hover:bg-light-gray cursor-pointer';

    return (
        <>
            <section className={`${ activeMenu ? 'mt-20 md:mt-5' : 'mt-20' } p-5`}>
                <div className='w-full bg-white rounded-2xl'>

                    <div className='my-3 px-3 pt-3 md:px-7 md:pt-7'>
                        <div className=''>
                            <div className=' flex gap-1 justify-between md:justify-normal md:gap-5 py-2 border-b md:border-b-2 border-[#F4F5F7]'>
                                <div className='w-fit' onClick={() => handleDivClick('profile')}>
                                    <a className={activeContent === 'profile' ? activeLink : normalLink}>Edit Profile</a>
                                </div>

                                <div className='w-fit' onClick={() => handleDivClick('preferences')}>
                                    <a className={activeContent === 'preferences' ? activeLink : normalLink}>Preferences</a>
                                </div>

                                <div className='w-fit' onClick={() => handleDivClick('security')}>
                                    <a className={activeContent === 'security' ? `${activeLink}` : `${normalLink}`}>Security</a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='p-3 md:p-7'>
                        {renderPage()}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Settings;
