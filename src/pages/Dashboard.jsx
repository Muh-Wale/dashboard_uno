import { DashboardTransaction, MyCard, QuickTransfer } from '../data/dummy';
import { FaGreaterThan } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';
import { useStateContext } from '../contexts/ContextProvider';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import AreaChart from '../components/AreaChart';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';

const Dashboard = () => {
    const { activeMenu, isMenu, setIsMenu, Scroll_To_Top } = useStateContext();

    useEffect(() => {
        Scroll_To_Top();
    }, []);

    useEffect(() => {
        const checkMenuStatus = () => {
            if (window.innerWidth >= 768 && window.innerWidth < 1200 && activeMenu) {
                setIsMenu(true);
            } else {
                setIsMenu(false);
            }
        };
    
        checkMenuStatus();
        
        // Optional: You can add a resize event listener to update the state if the window is resized
        const handleResize = () => {
            checkMenuStatus();
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [activeMenu, setIsMenu]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <section className={`p-5 flex justify-between flex-wrap ${ activeMenu ? 'mt-[130px] md:mt-5' : 'mt-[130px] md:mt-20' } bg-white md:bg-[#E5E5E5]`}>
                <div className='w-full xl:w-5/6 2xl:w-4/6'>
                    <div className='flex justify-between items-center '>
                        <h1 className=' font-semibold text-2xl'>My Cards</h1>
                        <p className={`font-semibold text-lg hover:underline cursor-pointer ${isMenu ? 'hidden' : 'block'}`}>See All</p>
                    </div>

                    <div className={`flex flex-col md:flex-row justify-between my-3 gap-2 md:gap-10 rounded-2xl md:rounded-none ${activeMenu ? '' : ''} card-swiper`}>
                        {window.innerWidth < 768 ? (
                            <Slider {...settings}>
                                {MyCard.slice(0, 2).map((item) => (
                                    <div key={item.id} className=' max-w-[330px] xs:max-w-[370px] sm:max-w-[345px] xl:max-w-none w-full my-2 mx-1'>
                                        <div style={{ backgroundColor: item.BgA, color: item.TextColor }} className='rounded-2xl'>
                                            <div className='flex justify-between items-center px-5 pt-5'>
                                                <div>
                                                    <p className='text-xs'>{item.ColAa}</p>
                                                    <p className=' text-xl font-medium'>${item.ColAb}</p>
                                                </div>

                                                <div className=' text-5xl'>
                                                    {item.IconA}
                                                </div>
                                            </div>

                                            <div className='flex gap-16 items-center leading-3 my-7 px-5'>
                                                <div className=''>
                                                    <p className=' font-light text-sm uppercase'>{item.ColBa}</p>
                                                    <p className='font-medium'>{item.ColBb}</p>
                                                </div>

                                                <div className=''>
                                                    <p className=' font-light text-sm uppercase'>{item.ColCa}</p>
                                                    <p className='font-medium'>{item.ColCb}</p>
                                                </div>
                                            </div>

                                            <div className='flex justify-between items-center w-full px-5 pb-5 rounded-b-2xl' style={{ backgroundColor: item.BgB }}>
                                                <p className=' text-xl font-medium'>{item.ColDa}</p>
                                                <p className=' text-5xl'>{item.IconB}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            MyCard.slice(0, isMenu ? 1 : 2).map((item) => (
                                <div key={item.id} style={{ backgroundColor: item.BgA, color: item.TextColor }} className=' max-w-[450px] xl:max-w-none rounded-2xl w-full shadow-2xl'>
                                    <div className='flex justify-between items-center px-5 pt-5'>
                                        <div>
                                            <p className='text-xs lg:text-base'>{item.ColAa}</p>
                                            <p className=' text-2xl lg:text-3xl font-medium'>${item.ColAb}</p>
                                        </div>

                                        <div className=' text-5xl lg:text-6xl xl:text-5xl'>
                                            {item.IconA}
                                        </div>
                                    </div>

                                    <div className='flex gap-16 lg:gap-0 xl:gap-16 justify-normal md:justify-between xl:justify-normal items-center leading-3 my-7 px-5'>
                                        <div className=''>
                                            <p className=' font-light text-sm md:text-base uppercase'>{item.ColBa}</p>
                                            <p className='font-medium text-base md:text-lg xl:text-base'>{item.ColBb}</p>
                                        </div>

                                        <div className='mr-0 lg:mr-28 xl:mr-0'>
                                            <p className=' font-light text-sm md:text-base uppercase'>{item.ColCa}</p>
                                            <p className='font-medium text-base md:text-lg xl:text-base'>{item.ColCb}</p>
                                        </div>
                                    </div>

                                    <div className='flex justify-between items-center w-full px-5 pb-5 rounded-b-2xl' style={{ backgroundColor: item.BgB }}>
                                        <p className=' text-xl lg:text-2xl xl:text-xl font-medium'>{item.ColDa}</p>
                                        <p className=' text-5xl lg:text-6xl xl:text-5xl'>{item.IconB}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className='w-fit'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Recent Transaction</h1>
                    </div>

                    <div className='bg-white rounded-2xl my-3'>
                        {DashboardTransaction.map((item) =>(
                            <div key={item.TextD} className='px-8 flex gap-5 w-full items-center'>
                                <div className='my-4 text-2xl p-3 rounded-full' style={{ backgroundColor: item.IconBg, color: item.Iconcolor }}>
                                    {item.Icon}
                                </div>

                                <div className='my-4'>
                                    <h1 className=' font-medium'>{item.ColAa}</h1>
                                    <p className=' text-gray-300 font-light'>{item.ColAb}</p>
                                </div>

                                <div className='my-4 font-medium' style={{ color: item.Textcolor }}>
                                    {item.TextD}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className='p-5 flex justify-between flex-wrap bg-white md:bg-[#E5E5E5]'>
                <div className='w-full xl:w-4/6 2xl:w-4/6'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Weekly Activity</h1>
                    </div>

                    <div className=' w-full md:w-fit xl:w-fit bg-white p-2 xl:p-5 rounded-2xl my-4'>
                        <BarChart/>
                    </div>
                </div>

                <div className='w-full md:w-fit'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Expense Statistics</h1>
                    </div>

                    <div className=' w-full flex justify-center md:justify-normal bg-white p-5 rounded-2xl my-4'>
                        <PieChart/>
                    </div>
                </div>
            </section>

            <section className='p-5 flex justify-between flex-wrap bg-white md:bg-[#E5E5E5]'>
                <div className=' w-full md:w-fit '>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Quick Transfer</h1>
                    </div>

                    <div className=' w-full  bg-white p-1 md:p-7 lg:p-3 2xl:p-7 rounded-2xl my-4'>
                        <div className='flex items-center gap-6 md:gap-10 lg:gap-5 2xl:gap-14 mt-4'>
                            <div className='flex gap-2 md:gap-8 lg:gap-5 2xl:gap-10'>
                                {QuickTransfer.map((item) => (
                                    <div key={item.Name} className='cursor-pointer text-center'>
                                        <div>
                                            <img src={item.image} alt=""  className=' rounded-full'/>
                                        </div>
                                        <div className=' font-medium hover:font-[650] w-fit'>
                                            {item.Name}
                                        </div>
                                        <div className='text-[#718EBF] '>
                                            {item.Position}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='text-[#718EBF] bg-white p-4 rounded-full shadow-lg cursor-pointer'>
                                <FaGreaterThan size={20}/>
                            </div>
                        </div>

                        <div className='mt-12 flex items-center gap-16 lg:gap-7 2xl:gap-16'>
                            <div>
                                <h1 className='text-lg text-[#718EBF]'>Write Amount</h1>
                            </div>

                            <div className='relative'>
                                <div>
                                    <input type="number" className='w-full p-3 placeholder:text-[#718EBF] rounded-full bg-[#EDF1F7] focus:outline-none' placeholder='525.50'/>
                                </div>
                                <div className='absolute right-0 -top-0 flex gap-2 items-center text-white rounded-full bg-[blue] py-3 px-6 z-50 cursor-pointer'>
                                    <span className='font-medium'>Send</span>
                                    <GrSend size={23}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${activeMenu ? 'w-full lg:w-full 2xl:w-fit block md:hidden lg:block' : 'w-fit lg:w-7/12 2xl:w-fit'}  `}>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Balance History</h1>
                    </div>

                    <div className={`${activeMenu ? 'w-fit' : 'w-full'}  bg-white p-1 rounded-2xl my-4`}>
                        <AreaChart/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard
