import Donut from '../components/Donut';
import { useStateContext } from '../contexts/ContextProvider';
import { CardList, CardSettings, MyCard } from '../data/dummy';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';

const CreditCards = () => {
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
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ],
    };
    
    

    return (
        <>
            <section className={`p-5 flex justify-between flex-wrap ${ activeMenu ? 'mt-[130px] md:mt-5' : 'mt-[130px] md:mt-20' } bg-[#E5E5E5]`}>
                <div className='w-full md:1/3'>
                    <div className='flex items-center'>
                        <h1 className=' font-semibold text-2xl'>My Cards</h1>
                    </div>

                    <div>
                        {(window.innerWidth < 540 || (window.innerWidth >= 768 && window.innerWidth < 1280 && !activeMenu)) ? (
                            <div  className={` ${activeMenu ? '' : ''} card-swiper`}>
                                <Slider {...settings}>
                                    {MyCard.map((item) => (
                                        <div key={item.id} className=' max-w-[330px] xs:max-w-[370px] sm:max-w-[345px] lg:max-w-[420px] xl:max-w-none w-full my-2 mx-1'>
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
                            </div>
                        ) : (
                            <div className='flex flex-col flex-wrap md:flex-row justify-normal xl:justify-between  my-3 gap-10'>
                                {MyCard.slice(0, window.innerWidth >= 768 && window.innerWidth < 1280 && activeMenu ? 1 : 3).map((item) => (
                                    <div key={item.id} style={{ backgroundColor: item.BgA, color: item.TextColor }} className={` rounded-2xl w-full shadow-2xl max-w-[380px] ${activeMenu ? 'lg:max-w-[50%] xl:max-w-[30%]' : ' md:max-w-[340px] lg:max-w-[450px] xl:max-w-[400px]'} `}>
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
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className=' p-5 flex justify-between gap-2 flex-wrap mt-14 md:mt-0 bg-[#E5E5E5]'>

                <div className={`${activeMenu ? 'w-fit xl:w-2/6 2xl:2/5 max-w-[500px] lg:max-w-[450px]' : 'w-fit md:w-2/5 xl:w-2/6 2xl:2/5 max-w-[500px] lg:max-w-[450px]'}`}>
                    <div className='flex justify-between items-center'>
                        <h1 className=' font-semibold text-2xl'>Trending Stocks</h1>
                    </div>

                    <div className=' my-3 gap-10 bg-white p-5 rounded-2xl'>
                        <Donut/>
                    </div>
                </div>

                <div className={`w-full md:w-fit lg:w-fit 2xl:w-3/5 max-w-full  xl:max-w-full ${activeMenu ? 'md:max-w-[100%]' : 'md:max-w-[70%]'}`}>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Recent Transaction</h1>
                    </div>

                    <div className=''>
                        {CardList.map((item) =>(
                            <div key={item.ColAa} className={`p-2 md:px-5 md:py-4 flex justify-between gap-3 md:gap-7 items-center bg-white rounded-2xl my-3 w-full md:w-full ${activeMenu ? '' : ''}`}>
                                
                                <div className='flex gap-4'>
                                    <div className='text-2xl p-3 rounded-2xl w-fit' style={{ backgroundColor: item.IconBg, color: item.IconColor }}>
                                        {item.Icon}
                                    </div>
                                
                                    <div className=''>
                                        <h1 className='font-medium'>{item.ColAa}</h1>
                                        <p className=' font-light text-[#718EBF]' >{item.ColAb}</p>
                                    </div>
                                </div>
                            
                                <div className="md:flex flex-col">
                                    <h1 className='font-medium'>{item.ColBa}</h1>
                                    <p className='font-light text-[#718EBF]' >{item.ColBb}</p>
                                </div>
                            
                                <div className={`${activeMenu ? '2xl:flex flex-col hidden' : 'xl:flex flex-col hidden'}`}>
                                    <h1 className='font-medium'>{item.ColCa}</h1>
                                    <p className='font-light text-[#718EBF]'>{item.ColCb}</p>
                                </div>

                                <div className={`${activeMenu ? 'lg:flex flex-col hidden' : 'lg:flex flex-col hidden'}`}>
                                    <h1 className='font-medium'>{item.ColDa}</h1>
                                    <p className='font-light text-[#718EBF]'>{item.ColDb}</p>
                                </div>

                                <div className=''>
                                    <h1 className='font-medium text-[#1814F3]'>{item.Details}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className=' p-5 flex justify-between flex-wrap mt-14 md:mt-0 '>
                <div className={`${ activeMenu ? 'w-full md:w-[70%] lg:w-[60%] 2xl:w-4/6' : 'w-full md:w-[55%] lg:w-4/6 2xl:w-4/6' }`}>
                    <div className='flex justify-between items-center'>
                        <h1 className=' font-semibold text-2xl'>Add New Card</h1>
                    </div>

                    <div className='my-3 bg-white rounded-2xl'>
                        <div className='p-5'>
                            <div className='my-2'>
                                <p className='text-[#718EBF] font-medium text-lg'>Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.</p>
                            </div>

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
                    </div>
                </div>

                <div className='w-full md:w-fit max-w-[450px]'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Card Settings</h1>
                    </div>

                    <div className='bg-white rounded-2xl my-3 py-2'>
                        {CardSettings.map((item) =>(
                            <div key={item.TextA} className='px-8 flex gap-5 w-full items-center'>
                                <div className='my-5 w-fit text-2xl p-3 rounded-2xl' style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                                    {item.Icon}
                                </div>

                                <div className='my-5'>
                                    <h1 className=' font-medium'>{item.TextA}</h1>
                                    <p className=' text-[#718EBF] font-light'>{item.TextB}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreditCards
