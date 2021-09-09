import React from 'react';

// Data
import { features, testimonials } from '../data/home';

// Components
import Feature from '../components/Home/Feature';
import Testimonial from '../components/Home/Testimonial';

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
                        <Feature key={feature.id} feature={feature}/>
                    ))}
                </div>
            </section>
            {/* Testimonials */}
            <section className='flex justify-center items-center flex-col py-20 md:px-36 bg-white'>
                <h2 className='text-4xl Pink-border mb-8'>Testimonials</h2>
                <div className='flex flex-wrap justify-center items-center'>
                    {testimonials.map(testimonial => (
                        <Testimonial key={testimonial.id} testimonial={testimonial}/>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home;
