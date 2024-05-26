import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { LoansMain } from '../data/dummy';
import LoanTable from '../components/LoanTable';

const Loans = () => {
    const { activeMenu } = useStateContext();

    return (
        <>
            <section className={`${ activeMenu ? 'mt-[130px] md:mt-5' : 'mt-[130px] md:mt-20' } p-5`}>
                <div className="flex justify-between items-center flex-wrap gap-x-0 gap-y-3 md:gap-5 p-2 md:p-5">
                    {LoansMain.map((item) => (
                        <div key={item.TextB} className="flex justify-center gap-3 md:gap-5 p-5 rounded-2xl bg-white items-center max-w-[200px] 2xl:max-w-[250px] w-full">
                            <div className='text-3xl p-3 rounded-full' style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                                {item.icon}
                            </div>

                            <div>
                                <p className="text-[#718EBF]">{item.TextA}</p>
                                <h1 className="text-xl font-medium">{item.TextB}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <LoanTable/>
            </section>
        </>
    )
}

export default Loans
