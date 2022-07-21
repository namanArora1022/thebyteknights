import React from "react";

// Components
import Event from "../components/Events/Event";

// Data
import { activeEvents } from "../data/events";

// Animations
import { Bounce } from "react-awesome-reveal";

const Events = () => {
    return (
        <div className="pt-20 px-4 md:px-10">
            <main className="py-8 flex flex-col justify-center items-center">
                <Bounce direction="down" triggerOnce>
                    <h1 className="text-4xl Pink-border">&lt;Events/&gt;</h1>
                </Bounce>
                {/* Events */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full py-6">
                    {activeEvents.length !== 0 &&
                        activeEvents.map((event) => (
                            <Event event={event} key={event.id} />
                        ))}
                    {activeEvents.length === 0 && (
                        <h4 className="h-28">
                            No upcomming events , right now 😔
                        </h4>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Events;
