import { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../data/avatar.png'
import { RiNotification3Line } from 'react-icons/ri';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

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
        <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
            <div 
                onClick={() => handleActiveMenu()}
                className=' cursor-pointer'
            >
                <AiOutlineMenu 
                    color='blue'
                    size={30}
                />
            </div>

        <div className="flex">
            <div>
                <FiShoppingCart/>
            </div>
            <div>
                <BsChatLeft />
            </div>
            <div>
                <RiNotification3Line />
            </div>

            <div content="Profile">
                <div
                    className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                >
                <img
                    className="rounded-full w-8 h-8"
                    src={avatar}
                    alt="user-profile"
                />
                <p>
                    <span className="text-gray-400 text-14">Hi,</span>{' '}
                    <span className="text-gray-400 font-bold ml-1 text-14">
                        Michael
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
