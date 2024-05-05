import { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../data/avatar.png'
import { RiNotification3Line } from 'react-icons/ri';
import { IoSearch, IoSettingsOutline } from 'react-icons/io5';

const Navbar = () => {
    const { activeMenu, setActiveMenu, setScreenSize, screenSize } = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
    }, [setScreenSize]);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize, setActiveMenu]);

    const handleActiveMenu = () => setActiveMenu(!activeMenu);
    
    return (
        <div className={`flex items-center p-2 relative bg-white w-full ${activeMenu ? 'justify-end' : 'justify-between'} `}>
            <div 
                onClick={() => handleActiveMenu()}
                className={ activeMenu ? 'cursor-pointer hidden' : 'block cursor-pointer' }
            >
                <AiOutlineMenu 
                    color='blue'
                    size={30}
                />
            </div>

            <div className=" flex items-center gap-4 ">
                <div className='relative'>
                    <input type="search" className=' rounded-3xl py-2 px-11 bg-[#E5E5E5] placeholder:text-gray-400' placeholder='Search for something'/>
                    <div className=' absolute bottom-2 left-4 text-gray-400'>
                        <IoSearch size={23}/>
                    </div>
                </div>
                <div className=' bg-[#E5E5E5] p-2 rounded-2xl text-[#718EBF]'>
                    <IoSettingsOutline size={23}/>
                </div>
                <div className=' bg-[#E5E5E5] p-2 rounded-2xl text-[#FE5C73]'>
                    <RiNotification3Line size={23}/>
                </div>

                <div content="Profile">
                    <div
                        className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                    >
                        <img
                            className="rounded-full w-12"
                            src={avatar}
                            alt="user-profile"
                        />
                        <p>
                            <span className="text-gray-400 text-14">Hi,</span>{' '}
                            <span className="text-gray-400 font-bold ml-1 text-14">
                                Michelle
                            </span>
                        </p>
                        <MdKeyboardArrowDown className="text-gray-400 text-14" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
