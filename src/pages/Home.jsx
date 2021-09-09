import React from 'react';

import { features, testimonials } from '../data/home';

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
            {/* Testimonials */}
            <section className='flex justify-center items-center flex-col py-20 md:px-36 bg-white'>
                <h2 className='text-4xl Pink-border mb-8'>Testimonials</h2>
                <div className='flex flex-wrap justify-center items-center'>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className='bg-gray-100 p-8 rounded m-5 hover:shadow-md transition-all duration-300 cursor-default'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block object-cover h-10 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className='my-4 w-64 md:w-96'>{testimonial.text}</p>
                            <h3 className='mb-2 font-semibold'>{testimonial.name}</h3>
                            <h4 className='text-gray-600'>{testimonial.standard}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home;
