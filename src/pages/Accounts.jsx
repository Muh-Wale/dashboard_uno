import { AccountsInvoice, AccountsMain, LastAcct, MyCard } from "../data/dummy"
import  BarStatTres  from '../data/BarStatTres.png';


const Accounts = () => {
    return (
        <>
            <section className="mt-20 md:mt-5">
                <div className="flex justify-between items-center flex-wrap gap-x-0 gap-y-3 md:gap-5 p-2 md:p-5">
                    {AccountsMain.map((item) => (
                        <div key={item.TextB} className="flex justify-center gap-3 md:gap-5 2xl:gap-12 p-5 rounded-2xl bg-white items-center max-w-[200px] 2xl:max-w-[230px] w-full">
                            <div className='text-3xl p-3 rounded-full' style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                                {item.icon}
                            </div>

                            <div>
                                <p className="text-[#718EBF]">{item.TextA}</p>
                                <h1 className="text-xl font-semibold">{item.TextB}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className=' p-5 flex justify-between flex-wrap mt-14 md:mt-0 bg-[#E5E5E5]'>

                <div className='w-full xl:w-2/3'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Recent Transaction</h1>
                    </div>

                    <div className='bg-white rounded-2xl my-3 w-fit'>
                        {LastAcct.map((item) =>(
                            <div key={item.TextD} className='px-5 py-4 grid grid-cols-4 md:grid-cols-7  gap-7 items-center'>
                                <div className='text-2xl p-3 rounded-2xl w-fit col-span-1' style={{ backgroundColor: item.IconBg, color: item.IconColor }}>
                                    {item.Icon}
                                </div>
                            
                                <div className='col-span-2'>
                                    <h1 className='font-medium'>{item.ColAa}</h1>
                                    <p className='text-gray-300 font-light'>{item.ColAb}</p>
                                </div>
                            
                                <div className="md:flex flex-row gap-7 col-span-3 hidden">
                                    <div>
                                        <h1 className="text-gray-300 font-light">{item.TextA}</h1>
                                    </div>
                            
                                    <div>
                                        <h1 className="text-gray-300 font-light">{item.TextB}</h1>
                                    </div>
                            
                                    <div>
                                        <h1 className="text-gray-300 font-light">{item.TextC}</h1>
                                    </div>
                                </div>
                            
                                <div className='font-medium col-span-1' style={{ color: item.Textcolor }}>
                                    {item.TextD}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=' w-full lg:w-1/3 max-w-[450px]'>
                    <div className='flex justify-between items-center'>
                        <h1 className=' font-semibold text-2xl'>My Cards</h1>
                        <p className=' font-semibold text-lg hover:underline cursor-pointer'>See All</p>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between my-3 gap-10'>
                        {MyCard.slice(0, 1).map((item) => (
                            <div key={item.id} style={{ backgroundColor: item.BgA, color: item.TextColor }} className=' rounded-2xl w-full shadow-2xl'>
                                <div className='flex justify-between items-center px-5 pt-5'>
                                    <div>
                                        <p className='text-xs'>{item.ColAa}</p>
                                        <p className=' text-xl font-medium'>${item.ColAb}</p>
                                    </div>

                                    <div className=' text-5xl'>
                                        {item.IconA}
                                    </div>
                                </div>

                                <div className='flex gap-16 items-center leading-3 my-8 px-5'>
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
            </section>

            <section className=' p-5 flex justify-between flex-wrap mt-14 md:mt-0 bg-white md:bg-[#E5E5E5]'>
                <div className='w-full xl:w-5/6 2xl:w-4/6'>
                    <div className='flex justify-between items-center'>
                        <h1 className=' font-semibold text-2xl'>My Cards</h1>
                    </div>

                    <div className='my-3'>
                        <img src={BarStatTres} alt="" />
                    </div>
                </div>

                <div className='w-fit'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Invoices Sent</h1>
                    </div>

                    <div className='bg-white rounded-2xl my-3'>
                        {AccountsInvoice.map((item) =>(
                            <div key={item.TextA} className='px-8 flex gap-5 w-full items-center'>
                                <div className='my-4 text-2xl p-3 rounded-full' style={{ backgroundColor: item.IconBg, color: item.Iconcolor }}>
                                    {item.icon}
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

export default Accounts
