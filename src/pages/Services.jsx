import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { ServicesList, ServicesMain } from '../data/dummy';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Services = () => {
    const { activeMenu, Scroll_To_Top } = useStateContext();

    useEffect(() => {
        Scroll_To_Top();
    }, []);

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
            <section className={`${ activeMenu ? 'mt-[150px] md:mt-5' : 'mt-[150px] md:mt-20' } px-0 pt-5 md:p-5`}>
                <div>
                    {window.innerWidth < 540 ? (
                        <Slider {...settings} className='mr-5'>
                            {ServicesMain.map((item) => (
                                <div key={item.TextB}>
                                    <div className=" flex gap-3 md:gap-5 2xl:gap-12 p-3 xlxs:p-5 rounded-2xl bg-white items-center w-full max-w-[280px] mx-auto">
                                        <div className='text-3xl p-3 md:p-5 rounded-full overflow-hidden w-fit' style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                                            {item.icon}
                                        </div>

                                        <div className="">
                                            <p className="text-[#718EBF]">{item.TextA}</p>
                                            <h1 className="text-lg font-semibold">{item.TextB}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div className="flex justify-between items-center flex-wrap gap-x-0 gap-y-3 md:gap-5 p-1 xlxs:p-2 md:p-0">
                            {ServicesMain.map((item) => (
                                <div key={item.TextB} className=" grid grid-cols-3 gap-3 md:gap-5 2xl:gap-12 p-5 rounded-2xl bg-white items-center w-full max-w-[320px] col-span-1">
                                    <div className='text-3xl p-3 md:p-5 rounded-full overflow-hidden col-span-1 w-fit' style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                                        {item.icon}
                                    </div>
        
                                    <div className=" col-span-2">
                                        <p className="text-[#718EBF]">{item.TextA}</p>
                                        <h1 className="text-xl font-semibold">{item.TextB}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className=' p-5 flex justify-between gap-2 flex-wrap mt-14 md:mt-0 bg-[#E5E5E5]'>

                <div className='w-full'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Bank Services List</h1>
                    </div>

                    <div className=''>
                        {ServicesList.map((item) =>(
                            <div key={item.ColAa} className=' p-2 md:px-5 md:py-4 flex justify-between gap-3 md:gap-2 items-center bg-white rounded-2xl my-3 w-full md:w-full'>
                                
                                <div className='flex gap-4 items-center'>
                                    <div className='text-2xl p-3 rounded-2xl w-fit flex items-center' style={{ backgroundColor: item.IconBg, color: item.IconColor }}>
                                        {item.Icon}
                                    </div>
                                
                                    <div className=''>
                                        <h1 className='font-medium'>{item.ColAa}</h1>
                                        <p className=' font-light text-sm md:text-base text-[#718EBF]' >{item.ColAb}</p>
                                    </div>
                                </div>
                            
                                <div className={`${ activeMenu ? 'lg:flex flex-col hidden' : 'md:flex flex-col hidden ' }`}>
                                    <h1 className='font-medium'>{item.ColBa}</h1>
                                    <p className='font-light text-[#718EBF]' >{item.ColBb}</p>
                                </div>
                            
                                <div className={`${ activeMenu ? 'lg:flex flex-col hidden' : 'md:flex flex-col hidden ' }`}>
                                    <h1 className='font-medium'>{item.ColCa}</h1>
                                    <p className='font-light text-[#718EBF]'>{item.ColCb}</p>
                                </div>

                                <div className='md:flex flex-col hidden'>
                                    <h1 className='font-medium'>{item.ColDa}</h1>
                                    <p className='font-light text-[#718EBF]'>{item.ColDb}</p>
                                </div>

                                <div className=''>
                                    <button className='font-medium text-sm text-[#718EBF] hover:text-[#1814F3] border-none md:border border-[#718EBF] hover:border-[#1814F3] rounded-full md:py-2 md:px-5'>{item.Details}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
