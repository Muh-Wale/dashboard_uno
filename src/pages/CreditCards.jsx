import { useStateContext } from '../contexts/ContextProvider';
import { CardList, MyCard } from '../data/dummy';
import PieDos from '../data/PieDos.png'

const CreditCards = () => {
    const { activeMenu } = useStateContext();

    return (
        <>
            <section className={`p-5 flex justify-between flex-wrap ${ activeMenu ? 'mt-20 md:mt-5' : 'mt-20' } bg-white md:bg-[#E5E5E5]`}>
                <div className='w-full md:1/3'>
                    <div className='flex items-center'>
                        <h1 className=' font-semibold text-2xl'>My Cards</h1>
                    </div>

                    <div className='flex flex-col flex-wrap md:flex-row  my-3 gap-10'>
                        {MyCard.map((item) => (
                            <div key={item.id} style={{ backgroundColor: item.BgA, color: item.TextColor }} className=' rounded-2xl w-full shadow-2xl max-w-[380px] md:max-w-[350px] lg:max-w-[380px]'>
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
            </section>

            <section className=' p-5 flex justify-between gap-2 flex-wrap mt-14 md:mt-0 bg-[#E5E5E5]'>

                <div className=' w-fit xl:w-2/6 2xl:2/5 max-w-[500px] lg:max-w-[450px]'>
                    <div className='flex justify-between items-center'>
                        <h1 className=' font-semibold text-2xl'>Trending Stocks</h1>
                    </div>

                    <div className=' my-3 gap-10 bg-white p-5 rounded-2xl'>
                        <img src={PieDos} alt="" />
                    </div>
                </div>

                <div className='w-full lg:w-7/12 xl:w-3/6 2xl:w-3/5'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Recent Transaction</h1>
                    </div>

                    <div className=''>
                        {CardList.map((item) =>(
                            <div key={item.ColAa} className='px-5 py-4 grid grid-cols-5 md:grid-cols-6 gap-3 md:gap-7 items-center bg-white rounded-2xl my-3 w-full md:w-fit'>
                                <div className='text-2xl p-3 rounded-2xl w-fit col-span-1' style={{ backgroundColor: item.IconBg, color: item.IconColor }}>
                                    {item.Icon}
                                </div>
                            
                                <div className='col-span-2'>
                                    <h1 className='font-medium'>{item.ColAa}</h1>
                                    <p className='' style={{ color: item.ColBColor }}>{item.ColAb}</p>
                                </div>
                            
                                <div className="md:flex flex-col col-span-2 hidden">
                                    <h1 className='font-medium'>{item.ColBa}</h1>
                                    <p className='' style={{ color: item.ColBColor }}>{item.ColBb}</p>
                                </div>
                            
                                <div className='font-medium col-span-2 md:col-span-1 flex flex-col justify-end'>
                                    <h1 className='font-medium' style={{ color: item.ColCaColor }}>{item.ColCa}</h1>
                                    <p className='' style={{ color: item.ColBColor }}>{item.ColCb}</p>
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
