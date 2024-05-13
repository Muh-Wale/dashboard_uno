import Profile from '../components/Profile'
import Preferences from '../components/Preferences'
import Security from '../components/Security'
import { useStateContext } from '../contexts/ContextProvider';

const Settings = () => {
    const { activeMenu, activeContent, setActiveContent } = useStateContext();
    const handleDivClick = (content) => {
        setActiveContent(content);
    };

    const renderPage = () => {
        switch (activeContent) {
            case 'profile':
                return <Profile />;
            case 'preferences':
                return <Preferences/>;
            case 'security':
                return <Security />;
            default:
                return null;
        }
    };

    const activeLink = 'flex items-center pl-4 rounded-lg  text-[#718EBF]  text-xl font-medium cursor-pointer';
    const normalLink = 'flex items-center pl-4 rounded-lg text-xl font-medium text-[#718EBF] dark:text-gray-200 dark:hover:text-[#2d61ff9c] hover:bg-light-gray cursor-pointer';

    return (
        <>
            <section className={`${ activeMenu ? 'mt-20 md:mt-5' : 'mt-20' } p-5`}>
                <div className='w-full bg-white rounded-2xl'>

                    <div className='my-3 p-5'>
                        <div className=''>
                            <div className=' flex gap-5 py-2 border-b-2 border-[#F4F5F7]'>
                                <div className='w-fit' onClick={() => handleDivClick('profile')}>
                                    <a className={normalLink}>Edit Profile</a>
                                </div>

                                <div className='w-fit' onClick={() => handleDivClick('preferences')}>
                                    <a className={normalLink}>Preferences</a>
                                </div>

                                <div className='w-fit' onClick={() => handleDivClick('security')}>
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



                        </div>
                    </div>


                    <div>
                        {renderPage()}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Settings
