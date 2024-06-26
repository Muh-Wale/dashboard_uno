import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const Privileges = () => {
    const { Scroll_To_Top } = useStateContext();

    useEffect(() => {
        Scroll_To_Top();
    }, []);

    return (
        <div className='h-[100vh] xl:h-[80vh]'>
            <p className='text-center flex items-center justify-center h-full font-mono text-gray-600 font-light'>It Is NULL. Dont Fret Move To the Next Page </p>
        </div>
    )
}

export default Privileges
