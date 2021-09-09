import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Landing */}
            <main className='h-screen bg-home-landing bg-no-repeat bg-cover sm:bg-center text-white flex justify-center items-center flex-col pt-32'>
                {/* <div className='h-screen bg-gray-900 opacity-70 '>
                
                </div> */}
                <h1 className="font-Rancho text-8xl text-center md:text-9xl">The Byte Knights</h1>
                <h2 className="font-Rancho text-5xl text-center md:text-7xl mb-10">To Live to Learn</h2>
            </main>
        </div>
    )
}

export default Home;
