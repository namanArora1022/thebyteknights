import React from "react";
import { Bounce, AttentionSeeker } from "react-awesome-reveal";

// Images
import ContactSvg from "../assets/contact/contact.svg";

// Svgs
import { ReactComponent as FbIcon } from "../assets/contact/FbIcon.svg";
import { ReactComponent as InstaIcon } from "../assets/contact/InstaIcon.svg";
import { ReactComponent as YtIcon } from "../assets/contact/YtIcon.svg";

const Contact = () => {
    return (
        <div className="pt-20 grid md:grid-cols-2 grid-cols-1">
            {/* left */}
            <div className="bg-gray-100 pt-28 md:pl-10 px-4 flex flex-col">
                <Bounce direction="left" triggerOnce cascade>
                    <h1 className="text-6xl md:text-7xl mb-2">
                        Want to talk to us?
                    </h1>
                    <span className="font-semibold text-2xl">
                        <span className="text-Pink">thebyteknights</span>
                        @gmail.com
                    </span>
                    <img src={ContactSvg} alt="contact" />
                </Bounce>
            </div>
            {/* right */}
            <div className="flex md:flex-col justify-evenly md:justify-start items-center py-4 pb-28 md:pb-0">
                <AttentionSeeker triggerOnce effect="jello">
                    <a
                        href="https://www.facebook.com/profile.php?id=100069116769192"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="md:h-28 md:w-28 h-20 w-20 my-7 bg-Black p-4 rounded-2xl transform hover:-translate-y-4 transition-all duration-500">
                            <FbIcon />
                        </div>
                    </a>
                    <a
                        href="https://www.instagram.com/thebyteknightsmms/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="md:h-28 md:w-28 h-20 w-20 my-7 bg-Black p-4 rounded-2xl transform hover:-translate-y-4 transition-all duration-500">
                            <InstaIcon />
                        </div>
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCqDxCutv0nzcx0uZrFM76lA"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="md:h-28 md:w-28 h-20 w-20 my-7 bg-Black p-4 rounded-2xl transform hover:-translate-y-4 transition-all duration-500">
                            <YtIcon />
                        </div>
                    </a>
                </AttentionSeeker>
            </div>
        </div>
    );
};

export default Contact;
