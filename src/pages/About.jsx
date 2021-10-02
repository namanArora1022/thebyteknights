import React from 'react';

// Components
import Member from '../components/About/Member';
import PastLeader from '../components/About/PastLeader';

// Data
import { members, years } from '../data/about';

// Animations
import { Bounce } from "react-awesome-reveal";

const About = () => {
    return (
        <div className='pt-20'>
            {/* Landing */}
            <main className='p-10'>
                <Bounce direction='left' triggerOnce cascade>
                    <h1 className='text-4xl mb-6 Pink-border inline-block'>&lt;About us/&gt;</h1>
                    <p>The club’s motto is “To Live To Learn”. Learning is not limited to school’s textbooks. It aims to provide a platform to the students to learn about all the spheres of life be it related to computers and technology or leadership and speaking skills. The vision is to contribute to the intellectual enrichment, enhance experiences, develop new skills and to promote excellence and interest in information technology in all the miraites to make them extra ordinary. We look forward to create a pool of intelligent tech wizards who can perform wonders using computers and influence others.</p>
                    <h3 className='py-3'>The club’s objectives are:</h3>
                    <p>To participate and succeed in intra and inter school events Extend full support in all projects Impart training to others Share to learn Raise the bars in IT skills. Organise competitions on National and Global Levels. Trips to offices of Multinational Companies like Google and Microsoft. Regular workshops are also conducted by expertise resource person on various emerging IT skills like animation, digital photography, video editing, movie making, programming, web design and developing, network security and much more. The Club also has a youtube channel by its name where the members showcase their talents.</p>
                </Bounce>
            </main>
            {/* Our Team */}
            <section className='pt-10 flex flex-col justify-center items-center'>
                <Bounce direction='right' triggerOnce cascade delay={1300}>
                    <h2 className="text-3xl Pink-border mb-6 inline-block">&lt;Our Team /&gt;</h2>
                    <p className='text-sm text-center my-2 px-2 md:w-96'>A team of designers, developers, gamers, quizzers, photographers, filmmakers. This is "The Byte Knights". We Make things.</p>
                </Bounce>
                <div className='flex flex-wrap justify-center items-center py-5'>
                    {members.map(member => (
                        <Member member={member} key={member.id} />
                    ))}
                </div>
            </section>
            {/* Past Leaders */}
            <section className='py-10 flex flex-col justify-center items-center'>
                <Bounce direction='right' triggerOnce>
                    <h2 className="text-3xl Pink-border mb-6 inline-block">&lt;Past Leaders /&gt;</h2>
                </Bounce>
                <div className='flex flex-wrap justify-center items-center py-5'>
                    {years.map(year => (
                        <PastLeader year={year} key={year.id} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default About;
