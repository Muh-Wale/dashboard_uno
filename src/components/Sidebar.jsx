import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import Logo from '../data/Logo.png'

import { useStateContext } from '../contexts/ContextProvider';
import { links } from '../data/dummy';

const Sidebar = () => {
    const {  activeMenu, setActiveMenu, screenSize } = useStateContext();

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
        setActiveMenu(false);
        }
    };

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeMenu && (
            <>
            <div className="flex justify-between items-center">
                <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight">
                    <img src={Logo} />
                </Link>
                
                <button
                    type="button"
                    onClick={() => setActiveMenu(!activeMenu)}
                    className="text-xl rounded-full p-3 mt-4"
                >
                    <MdOutlineCancel 
                        color='blue'
                    />
                </button>
                
            </div>
            
            <div className="mt-10 "> 
                {links.map((item) => ( 
                    <div key={item.name}> 
                        <NavLink 
                            to={`/${item.path}`} 
                            onClick={handleCloseSideBar} 
                            className={({ isActive }) => (isActive ? activeLink : normalLink)} 
                            exact={true}
                        > 
                            {item.icon} 
                            <span className="capitalize ">
                                {item.name}
                            </span> 
                        </NavLink> 
                    </div> 
                ))} 
            </div>
            
            </>
        )}
        </div>
    );
};

export default Sidebar;
