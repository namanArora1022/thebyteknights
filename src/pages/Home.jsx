import React, { useEffect, useState } from "react";
import client from "../lib/client";

// Data
import { features, testimonials } from "../data/home";

// Components
import Feature from "../components/Home/Feature";
import Testimonial from "../components/Home/Testimonial";
import Particles from "../components/Home/Particles";

// Animations
import { Bounce } from "react-awesome-reveal";

const Home = () => {
    const [lines, setLines] = useState({ firstLine: "", secondLine: "" });

    useEffect(() => {
        const query = '*[_type == "home"]';
        client.fetch(query).then((data) => {
            setLines({
                firstLine: data[0].firstLine,
                secondLine: data[0].secondLine
            });
        });
    }, []);

    return (
        <div>
            {/* Landing */}
            <main className="h-screen bg-home-landing bg-no-repeat bg-cover sm:bg-center text-white flex justify-center items-center flex-col pt-32">
                <Particles />
                <h1 className="font-Rancho text-8xl text-center md:text-9xl">
                    {lines.firstLine}
                </h1>
                <h2 className="font-Rancho text-5xl text-center md:text-7xl mb-10">
                    {lines.secondLine}
                </h2>
            </main>
            {/* What we do */}
            <section className="flex justify-center items-center flex-col py-20 bg-gray-100">
                <Bounce direction="down" triggerOnce>
                    <h2 className="text-4xl Pink-border mb-8">
                        &lt;What we do/&gt;
                    </h2>
                </Bounce>
                <div className="flex flex-wrap justify-center items-center">
                    {features.map((feature) => (
                        <Feature feature={feature} key={feature.id} />
                    ))}
                </div>
            </section>
            {/* Testimonials */}
            <section className="flex justify-center items-center flex-col py-20">
                <Bounce direction="down" triggerOnce>
                    <h2 className="text-4xl Pink-border mb-8">
                        &lt;Testimonials/&gt;
                    </h2>
                </Bounce>
                <div className="flex flex-wrap justify-center items-center">
                    {testimonials.map((testimonial) => (
                        <Testimonial
                            testimonial={testimonial}
                            key={testimonial.id}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
