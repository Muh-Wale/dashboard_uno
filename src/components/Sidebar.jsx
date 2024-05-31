import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import Logo from '../data/Logo.png';
import { useStateContext } from '../contexts/ContextProvider';
import { links } from '../data/dummy';

const Sidebar = ({ setSelectedLink }) => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
        setActiveMenu(false);
        }
    };

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-[#2D60FF]  text-xl font-medium m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-xl font-medium text-[#B1B1B1] dark:text-gray-200 dark:hover:text-[#2d61ff9c] hover:bg-light-gray m-2';

    return (
        <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeMenu && (
            <>
            <div className="flex justify-between items-center ml-3">
                <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight">
                    <img src={Logo} alt="Logo" />
                </Link>
                <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl rounded-full p-3 mt-4 block 2xl:hidden"
                >
                    <MdOutlineCancel color='blue' />
                </button>
            </div>
            <div className="mt-10">
                {links.map((item) => (
                <div key={item.name}>
                    <NavLink
                    to={`/${item.path}`}
                    onClick={() => {
                        setSelectedLink(item.name);
                        handleCloseSideBar();
                    }}
                    className={({ isActive }) => (isActive ? `${activeLink} navlink` : `${normalLink}`)}
                    exact
                    >
                        <div className='text-3xl ml-3'>
                            {item.icon}
                        </div>
                        <span className="capitalize">
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
