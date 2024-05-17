import { useStateContext } from '../contexts/ContextProvider';

const Preferences = () => {
    const { activeMenu, isDigitalCurrencyChecked, setIsDigitalCurrencyChecked, isMerchantOrderChecked, setIsMerchantOrderChecked, isRecommendationChecked, setIsRecommendationChecked } = useStateContext();

    return (
        <div>
            <div className={`${activeMenu ? 'col-span-1 xl:col-span-6' : 'col-span-1 md:col-span-6'}`}>
                <div className='flex flex-col md:flex-row flex-wrap justify-between mb-5'>
                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>Currency</h1>
                        <input type="text" placeholder='USD' className='placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-3xl w-full'/>
                    </div>

                    <div className={`${activeMenu ? 'w-full md:w-1/2 px-0 md:px-2' : 'w-full md:w-1/2 px-0 md:px-5'}`}>
                        <h1 className='font-medium my-2'>Time Zone</h1>
                        <input type="text" placeholder='C(GMT-12:00) International Date Line West' className='placeholder:text-[#718EBF] border-[#718EBF] border-2 px-3 py-4 focus:outline-[#718EBF] rounded-3xl w-full'/>
                    </div>
                </div>

                <div>
                    <div className='my-2'>
                        <span className='text-[#333B69] font-medium'>Notification</span>
                    </div>

                    <div>
                        <label className="flex items-center cursor-pointer mt-3">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={isDigitalCurrencyChecked}
                                    onChange={() => setIsDigitalCurrencyChecked(!isDigitalCurrencyChecked)}
                                />
                                <div className={`block ${isDigitalCurrencyChecked ? 'bg-[#16DBCC]' : 'bg-gray-300'} w-14 h-8 rounded-full`}></div>
                                <div className={`dot absolute ${isDigitalCurrencyChecked ? 'right-1 top-1' : 'left-1 top-1'} w-6 h-6 bg-white rounded-full transition`}></div>
                            </div>
                            <span className="ml-3">I send or receive digital currency</span>
                        </label>

                        <label className="flex items-center cursor-pointer mt-3">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={isMerchantOrderChecked}
                                    onChange={() => setIsMerchantOrderChecked(!isMerchantOrderChecked)}
                                />
                                <div className={`block ${isMerchantOrderChecked ? 'bg-[#16DBCC]' : 'bg-gray-300'} w-14 h-8 rounded-full`}></div>
                                <div className={`dot absolute ${isMerchantOrderChecked ? 'right-1 top-1' : 'left-1 top-1'} w-6 h-6 bg-white rounded-full transition`}></div>
                            </div>
                            <span className="ml-3">I receive merchant orders</span>
                        </label>

                        <label className="flex items-center cursor-pointer mt-3">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={isRecommendationChecked}
                                    onChange={() => setIsRecommendationChecked(!isRecommendationChecked)}
                                />
                                <div className={`block ${isRecommendationChecked ? 'bg-[#16DBCC]' : 'bg-gray-300'} w-14 h-8 rounded-full`}></div>
                                <div className={`dot absolute ${isRecommendationChecked ? 'right-1 top-1' : 'left-1 top-1'} w-6 h-6 bg-white rounded-full transition`}></div>
                            </div>
                            <span className="ml-3">There are recommendations for my account</span>
                        </label>
                    </div>
                </div>

                <div className='my-3 px-0 md:px-5 w-full flex justify-end'>
                    <button className='px-8 py-3 rounded-2xl text-white font-medium bg-[#1814F3] w-full md:w-1/3 lg:w-1/6'>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Preferences;
