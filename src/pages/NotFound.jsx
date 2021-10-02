import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='py-20'>
            <main className='flex items-center flex-col pt-24 px-4 md:px-0'>
                <h2 className='text-7xl text-gray-300 font-bold'>404</h2>
                <h1 className='text-6xl font-bold mt-2 mb-5 text-center'>Opps! We couldn't find that page.</h1>
                <h4 className='text-2xl mt-6 mb-4 text-center'>Maybe you can find what you need here ?</h4>
                <div className='mt-4 flex flex-wrap justify-center items-center'>
                    <Link className='font-semibold px-8 py-2 rounded-full bg-green-200 m-3' to="/about">About</Link>
                    <Link className='font-semibold px-8 py-2 rounded-full bg-blue-200 m-3' to="/events">Events</Link>
                    <Link className='font-semibold px-8 py-2 rounded-full bg-purple-300 m-3' to="/contact">Contact</Link>
                </div>
            </main>
        </div>
    )
}

export default NotFound;
