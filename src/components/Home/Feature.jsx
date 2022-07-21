import React from "react";
import { Bounce } from "react-awesome-reveal";

const Feature = ({ feature }) => {
    return (
        <Bounce direction="left" triggerOnce>
            <div className="flex flex-col justify-center items-center my-6 mx-10 md:px-10">
                <img
                    className="object-cover h-16 p-2 rounded-lg bg-Pink"
                    src={feature.img}
                    alt={feature.name}
                />
                <h3 className="my-3 font-semibold">{feature.name}</h3>
                <p className="w-52 text-center">{feature.description}</p>
            </div>
        </Bounce>
    );
};

export default Feature;
