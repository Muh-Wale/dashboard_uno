import { MyCard} from '../data/dummy';
import  BarStatDos  from '../data/BarStatDos.png';
import { useStateContext } from '../contexts/ContextProvider';
import BarChartDos from '../components/BarChartDos';

const Transactions = () => {
    const { activeMenu } = useStateContext();

    return (
        <>
            <section className={`p-5 flex justify-between flex-wrap ${ activeMenu ? 'mt-[130px] md:mt-5' : 'mt-[130px] md:mt-20' } bg-[#E5E5E5]`}>
                <div className='w-full xl:w-5/6 2xl:w-7/12'>
                    <div className='flex justify-between items-center'>
                        <h1 className=' font-semibold text-2xl'>My Cards</h1>
                        <p className=' font-semibold text-lg hover:underline cursor-pointer'>+ Add Card</p>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between my-3 gap-10'>
                        {MyCard.slice(0, 2).map((item) => (
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
        </>
    )
}

export default Transactions
