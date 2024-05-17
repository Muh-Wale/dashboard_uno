import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { ServicesList, ServicesMain } from '../data/dummy';

const Services = () => {
    const { activeMenu } = useStateContext();

    return (
        <>
            <section className={`${ activeMenu ? 'mt-[130px] md:mt-5' : 'mt-[130px] md:mt-20' } p-5`}>
                <div className="flex justify-between flex-wrap gap-5">
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
            </section>

            <section className=' p-5 flex justify-between gap-2 flex-wrap mt-14 md:mt-0 bg-[#E5E5E5]'>

                <div className='w-full'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Bank Services List</h1>
                    </div>

                    <div className=''>
                        {ServicesList.map((item) =>(
                            <div key={item.ColAa} className=' p-2 md:px-5 md:py-4 flex justify-between gap-3 md:gap-2 items-center bg-white rounded-2xl my-3 w-full md:w-full'>
                                
                                <div className='flex gap-4'>
                                    <div className='text-2xl p-3 rounded-2xl w-fit' style={{ backgroundColor: item.IconBg, color: item.IconColor }}>
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
