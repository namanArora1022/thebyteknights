import React from 'react';
import { Link } from "react-scroll";

// Images
import ChattingSvg from '../assets/chatting.svg';

// Data
import { activeEvents } from '../data/events';

const EventDetails = ({ match }) => {
    const id = match.params.id;
    const event = activeEvents[id - 1];

    return (
        <div className='pt-20 pb-36'>
            {/* Landing */}
            <main className='py-10 flex flex-col md:flex-row justify-center items-center px-4 md:px-20'>
                <img src={event.img} alt={event.title} className='h-80 object-cover md:mr-36' />
                <div className='mt-5'>
                    <h1 className='inline-block Pink-border text-2xl font-semibold'>{event.title}</h1>
                    <p className='my-5 md:my-7'>{event.description}</p>
                    <div className=''>
                        <a className='px-6 py-3 my-2 bg-Pink text-white cursor-pointer text-center mr-2' href={event.formLink} target="_blank" rel="noreferrer">Paricipate</a>
                        <Link className='px-6 py-3 my-2 bg-Pink text-white cursor-pointer text-center' to="contact">Contact for any qureies</Link>
                    </div>
                </div>
            </main>
            {/* Competition Guidelines */}
            <section className='bg-gray-100 py-20 px-4 md:px-20'>
                <h2 className='text-xl mb-4'>Competition Guidelines</h2>
                {event.guidelines.map((guideline , index) => (
                    <p className='my-2 md:my-1' key={index}>
                        {index+1}
                        <span className='mr-2'>.)</span>
                        {guideline}
                    </p>
                ))}
            </section>
            <section className='py-20 px-4 md:px-20 flex flex-col md:flex-row justify-center items-center' id="contact">
                <div>
                    <h2 className='text-xl text-center md:text-left md:text-3xl'>
                        Join us on Discord
                    </h2>
                    <p className='bg-red-100 text-center my-3 text-sm md:text-left w-2/5 md:text-md md:my-5'>
                        <span className='mb-4 inline-block'>
                            Common join us on discord , we will clear all of your queries regarding the events you are participating in.
                        </span>
                        All the best 👍🏻
                    </p>
                    <button className='mt-3 bg-Pink text-white py-2 px-7 cursor-pointer'>Join Us</button>
                </div>
                <img src={ChattingSvg} className='object-cover h-48 inline mt-7 md:h-64' alt='Join Us' />
            </section>
        </div>
    )
}

export default EventDetails;
