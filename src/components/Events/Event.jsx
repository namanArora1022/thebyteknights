import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({event}) => {
    return (
        <div className='m-6'>
            <h3 className='text-Pink text-xl font-semibold'>{event.title}</h3>
            <p className='text-sm my-4 mb-5'>{event.description}</p>
            <Link to={`/events/${event.id}`} className='py-2 px-4 text-sm border border-1 border-Pink text-Pink hover:bg-Pink hover:text-white transition-all duration-500'>Learn More</Link>
        </div>
    )
}

export default Event;
