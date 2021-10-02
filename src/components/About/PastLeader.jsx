import React from 'react';
import { Bounce } from 'react-awesome-reveal';

const PastLeader = ({ year }) => {
    return (
        <Bounce direction='left' triggerOnce>
            <div className='bg-gray-100 py-8 px-20 m-5 flex flex-col justify-center items-center rounded-lg hover:shadow-lg transition-all duration-500 cursor-default'>
                <h3 className='text-Pink text-xl font-bold'>{year.year}</h3>
                <div className="flex flex-col justify-center items-center my-2">
                    <h3 className='text-lg'>{year.President}</h3>
                    <h4 className='text-sm'>President</h4>
                </div>
                <div className="flex flex-col justify-center items-center my-2">
                    <h3 className='text-lg'>{year.Vice_President}</h3>
                    <h4 className='text-sm'>Vice President</h4>
                </div>
            </div>
        </Bounce>
    )
}

export default PastLeader;
