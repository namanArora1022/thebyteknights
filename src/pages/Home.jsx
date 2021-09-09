import React from 'react';

import { features } from '../data/home';

const Home = () => {
    return (
        <div>
            {/* Landing */}
            <main className='h-screen bg-home-landing bg-no-repeat bg-cover sm:bg-center text-white flex justify-center items-center flex-col pt-32'>
                <h1 className="font-Rancho text-8xl text-center md:text-9xl">The Byte Knights</h1>
                <h2 className="font-Rancho text-5xl text-center md:text-7xl mb-10">To Live to Learn</h2>
            </main>
            {/* What we do */}
            <section className='flex justify-center items-center flex-col py-20 md:px-36 px-20'>
                <h2 className='text-4xl Pink-border mb-8'>What we do</h2>
                <div className='flex flex-wrap justify-center items-center'>
                    {features.map(feature => (
                        <div key={feature.id} className='flex flex-col justify-center items-center my-6 mx-10'>
                            <img 
                            className='object-cover h-16 p-2 rounded-lg bg-Pink'
                            src={feature.img} 
                            alt={feature.name} 
                            />
                            <h3 className='my-3 font-semibold'>{feature.name}</h3>
                            <p className='w-52 text-center'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home;
