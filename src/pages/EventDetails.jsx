import React from 'react';
import { Link } from "react-scroll";

// Images
import ChattingSvg from '../assets/chatting.svg';

// Data
import { activeEvents } from '../data/events';

// Animations
import { Bounce } from 'react-awesome-reveal';

const EventDetails = ({ match }) => {

    const id = match.params.id;
    const event = activeEvents[id - 1];

    return (
        <div className='pt-20'>
            <div className='py-10 flex flex-col justify-center items-center'>
                {/* Landing */}
                <main className='flex flex-col md:flex-row w-full px-6'>
                    <img src={event.img} alt={event.title} className='object-cover md:w-2/5 md:mr-16 mb-5 md:mb-0' />
                    <div>
                        <Bounce direction='right' triggerOnce cascade>
                            <h1 className='text-4xl Pink-border inline-block'>{event.title}</h1>
                            <p className='my-5 md:my-7'>{event.description}</p>
                            <div className='flex flex-col xs:flex-row text-center'>
                                <a
                                    className='py-2 px-4 bg-Pink text-white xs:mr-3 mb-3 xs:mb-0 xs:flex xs:justify-center xs:items-center'
                                    href={event.formLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >Paricipate</a>
                                <Link
                                    to="contact"
                                    className='py-2 px-4 bg-Pink text-white xs:flex xs:justify-center xs:items-center'
                                >Contact for any qureies</Link>
                            </div>
                        </Bounce>
                    </div>
                </main>
                {/* Competition Guidelines */}
                <section className='bg-gray-100 w-full px-4 py-4 mt-8 md:px-6'>
                    <Bounce direction='left' triggerOnce>
                        <h2 className='text-xl mb-4 Pink-border border-b-2 inline-block'>Competition Guidelines</h2>
                        {event.guidelines.map((guideline, index) => (
                            <p className='my-2 md:my-1 md:text-sm' key={index}>
                                {index + 1}
                                <span className='mr-2'>.)</span>
                                {guideline}
                            </p>
                        ))}
                    </Bounce>
                </section>
                {/* Contact for any qureies */}
                <section className='py-4 pt-10 px-4 flex flex-col md:flex-row justify-center items-center w-full md:px-6' id="contact">
                    {/* left */}
                    <Bounce direction='left' triggerOnce>
                        <div className='flex flex-col justify-evenly md:justify-start md:items-start items-center md:mr-52'>
                            <h2 className='text-xl mb-4 Pink-border border-b-2'>Join us on Discord</h2>
                            <p className='flex flex-col justify-center items-center text-center md:text-left md:justify-start md:items-start md:w-72'>
                                <span className='mb-4 inline-block'>
                                    Common join us on discord , we will clear all of your queries regarding the events you are participating in.
                                </span>
                                All the best 👍🏻
                            </p>
                            <a
                                className='mt-3 bg-Pink text-white py-2 px-7 cursor-pointer'
                                href={event.discordLink}
                                target="_blank"
                                rel="noreferrer"
                            >Join Us</a>
                        </div>
                    </Bounce>
                    {/* right */}
                    <Bounce direction='right' triggerOnce>
                        <img src={ChattingSvg} className='object-cover h-48 inline mt-7 md:h-64' alt='Join Us' />
                    </Bounce>
                </section>
            </div>
        </div>
    )
}

export default EventDetails;
