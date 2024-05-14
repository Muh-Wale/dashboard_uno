import { investmentData, InvestmentsMain, MyInvestment } from "../data/dummy"
import  FlowGraphDos  from '../data/FlowGraphDos.png';
import  FlowGraphTres  from '../data/FlowGraphTres.png';
import { useStateContext } from '../contexts/ContextProvider';

const Investment = () => {
    const { activeMenu } = useStateContext();

    return (
        <>
            <section className={`${ activeMenu ? 'mt-20 md:mt-5' : 'mt-20' } p-5`}>
                <div className="flex justify-between flex-wrap gap-5">
                    {InvestmentsMain.map((item) => (
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

            <section className='p-5 flex justify-between gap-5 flex-wrap bg-[#E5E5E5]'>

                <div className='w-fit md:w-[100%] lg:w-[48%]'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Yearly Total Investment</h1>
                    </div>

                    <div className=' w-full  bg-white p-5 rounded-2xl my-4'>
                        <img src={FlowGraphDos} alt="" />
                    </div>
                </div>

                <div className='w-fit md:w-[100%] lg:w-[48%]'>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Monthly Revenue</h1>
                    </div>

                    <div className=' w-full  bg-white p-5 rounded-2xl my-4'>
                        <img src={FlowGraphTres} alt="" />
                    </div>
                </div>
                
            </section>

            <section className=' p-5 flex justify-between gap-2 flex-wrap mt-14 md:mt-0 bg-[#E5E5E5]'>

                <div className={` ${activeMenu ? 'w-full lg:w-7/12 xl:w-3/6 2xl:w-3/5' : 'w-full md:w-[45%] lg:w-7/12 xl:w-3/6 2xl:w-3/5'}`}>
                    <div>
                        <h1 className=' font-semibold text-2xl'>Recent Transaction</h1>
                    </div>

                    <div className=''>
                        {MyInvestment.map((item) =>(
                            <div key={item.ColAa} className={`px-5 py-4 grid grid-cols-5 md:grid-cols-6 gap-3 md:gap-1 lg:gap-7 items-center bg-white rounded-2xl my-3 ${activeMenu ? ' w-full md:w-[80%] lg:w-fit ' : ' w-full md:w-fit '}`}>
                                <div className='text-2xl p-3 rounded-2xl w-fit col-span-1' style={{ backgroundColor: item.IconBg, color: item.IconColor }}>
                                    {item.Icon}
                                </div>
                            
                                <div className={`${activeMenu ? 'col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-2' : 'col-span-2 md:col-span-3 lg:col-spn-2'}`}>
                                    <h1 className='font-medium'>{item.ColAa}</h1>
                                    <p className='' style={{ color: item.ColBColor }}>{item.ColAb}</p>
                                </div>
                            
                                <div className={` ${activeMenu ? 'xl:flex flex-col col-span-2 hidden' : 'xl:flex flex-col col-span-2 hidden'}`}>
                                    <h1 className='font-medium'>{item.ColBa}</h1>
                                    <p className='' style={{ color: item.ColBColor }}>{item.ColBb}</p>
                                </div>
                            
                                <div className={`${activeMenu ? 'font-medium col-span-2 md:col-span-2 xl:col-span-1 flex flex-col justify-end' : 'font-medium col-span-1 md:col-span-2 flex flex-col justify-end'}`}>
                                    <h1 className='font-medium' style={{ color: item.ColCaColor }}>{item.ColCa}</h1>
                                    <p className='' style={{ color: item.ColBColor }}>{item.ColCb}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=' w-fit xl:w-2/6 2xl:2/5 max-w-[500px] lg:max-w-[450px]'>
                    <div className='flex justify-between items-center'>
                        <h1 className=' font-semibold text-2xl'>Trending Stocks</h1>
                    </div>

                    <div className=' my-3 gap-10 bg-white p-5 rounded-2xl'>

                        <ul className="grid grid-cols-4 gap-5 md:gap-3 lg:gap-2 font-semibold">
                            <h1>S/N</h1>
                            <h1>Name</h1>
                            <h1>Price</h1>
                            <h1>Return</h1>
                        </ul>

                        <div className="my-4">
                            {investmentData.map((item) => (
                                <div key={item.Serial} className="my-3">
                                    <ul className="grid grid-cols-4 gap-5 md:gap-3 lg:gap-2">
                                        <li className=" list-none font-semibold">{item.Serial}</li>
                                        <li className="font-medium">{item.Name}</li>
                                        <li className="font-medium">{item.Price}</li>
                                        <li style={{ color: item.Textcolor }} className="font-medium flex justify-end w-fit">{item.Return}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Investment
