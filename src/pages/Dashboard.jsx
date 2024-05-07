import React from 'react'
import { DashboardTransaction, MyCard } from '../data/dummy';

const Dashboard = () => {
    return (
        <>
            <section className=' p-5 flex justify-between flex-wrap mt-14 md:mt-0'>
                <div className='w-full xl:w-5/6 2xl:w-4/6'>
                    <div className='flex justify-between'>
                        <h1 className=' font-semibold text-2xl'>My Cards</h1>
                        <p className=' font-semibold text-lg hover:underline cursor-pointer'>See All</p>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between my-3 gap-10'>
                        {MyCard.slice(0, 2).map((item) => (
                            <div key={item.id} style={{ backgroundColor: item.BgA, color: item.TextColor }} className=' rounded-2xl w-full'>
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
                </div>

                <div className='w-fit'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Recent Transaction</h1>
                    </div>

                    <div className='bg-white rounded-2xl my-3'>
                        {DashboardTransaction.map((item) =>(
                            <div key={item.Text} className='px-8 flex gap-5 w-full items-center'>
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
            
        </>
    )
}

export default Dashboard
