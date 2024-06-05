import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { LoansMain } from '../data/dummy';
import LoanData from './LoanData';

const Loans = () => {
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
            <section className={`${ activeMenu ? 'mt-[130px] md:mt-5' : 'mt-[130px] md:mt-20' } px-0 pt-5 md:p-5`}>
                <div className="flex justify-between items-center flex-wrap gap-x-0 gap-y-3 md:gap-5 p-1 xlxs:p-2 md:p-0">
                    {LoansMain.map((item) => (
                        <div key={item.TextB} className="flex justify-center gap-3 md:gap-5 2xl:gap-12 p-2 md:p-5 rounded-2xl bg-white items-center min-w-[150px] max-w-[150px] xlxs:max-w-[160px] xss:max-w-[190px] md:max-w-[200px] 2xl:max-w-[230px] w-full">
                            <div className=' text-xl md:text-3xl p-2 md:p-3 rounded-full' style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                                {item.icon}
                            </div>

                            <div>
                                <p className="text-[#718EBF]">{item.TextA}</p>
                                <h1 className=" text-base md:text-xl font-semibold">{item.TextB}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <LoanData/>
            </section>
        </>
    )
}

export default Loans
