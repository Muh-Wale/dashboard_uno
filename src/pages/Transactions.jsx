import { MyCard} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import BarChartDos from '../components/BarChartDos';
import TransactionData from './TransactionData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';

const Transactions = () => {
    const { activeMenu, isMenu, setIsMenu } = useStateContext();

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
            <section className={`p-5 flex justify-between flex-wrap ${ activeMenu ? 'mt-[130px] md:mt-5' : 'mt-[130px] md:mt-20' } bg-[#E5E5E5]`}>
                <div className='w-full xl:w-5/6 2xl:w-7/12'>
                    <div className='flex justify-between items-center'>
                        <h1 className=' font-semibold text-2xl'>My Cards</h1>
                        <p className={`font-semibold text-lg hover:underline cursor-pointer ${isMenu ? 'hidden' : 'block'}`}>+ Add Card</p>
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
                                            <p className='text-xs lg:text-base xl:text-xs'>{item.ColAa}</p>
                                            <p className=' text-2xl lg:text-3xl xl:text-2xl font-medium'>${item.ColAb}</p>
                                        </div>

                                        <div className=' text-5xl lg:text-6xl xl:text-5xl'>
                                            {item.IconA}
                                        </div>
                                    </div>

                                    <div className='flex gap-16 lg:gap-0 xl:gap-16 justify-normal md:justify-between xl:justify-normal items-center leading-3 my-7 px-5'>
                                        <div className=''>
                                            <p className=' font-light text-sm md:text-base xl:text-sm uppercase'>{item.ColBa}</p>
                                            <p className='font-medium text-base md:text-lg xl:text-base'>{item.ColBb}</p>
                                        </div>

                                        <div className='mr-0 lg:mr-28 xl:mr-0'>
                                            <p className=' font-light text-sm md:text-base xl:text-sm uppercase'>{item.ColCa}</p>
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

                <div className='w-full md:w-fit'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>My Expense</h1>
                    </div>

                    <div className='bg-white rounded-2xl my-3'>
                            <div className='px-2 flex w-fit items-center'>
                                <BarChartDos/>
                            </div>
                        
                    </div>
                </div>
            </section>

            <section>
                <TransactionData/>
            </section>
        </>
    )
}

export default Transactions
