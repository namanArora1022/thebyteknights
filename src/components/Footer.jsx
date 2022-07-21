import React from "react";
import { Link } from "react-router-dom";

// Svgs
import EmailSvg from "../assets/footer/email.svg";
import LocationSvg from "../assets/footer/location.svg";

// Icons
import { AiOutlineCopyrightCircle, AiFillHeart } from "react-icons/all";

// Data
import { links } from "../data/footer";

const Footer = () => {
    return (
        <footer
            className="w-full bg-gray-900 text-white py-9 md:px-9 px-3"
            id="footer"
        >
            {/* upper */}
            <div className="flex md:justify-between flex-col md:flex-row">
                {/* about */}
                <div className="mb-6 md:w-2/5">
                    <h3 className="text-xl Pink-border inline-block">
                        About us
                    </h3>
                    <p className="text-xs mt-3">
                        The byte knight club which is known for their wonderful
                        and attractive event which attracts students to
                        participate in different cocerculum activities which
                        provides fun, creation,of new ideas and thought.
                    </p>
                    <ul className="flex items-center mt-3">
                        {links.map((link) => (
                            <a
                                href={link.link}
                                target="_blank"
                                rel="noreferrer"
                                key={link.id}
                            >
                                <li className="m-2 p-2 rounded-lg transform hover:bg-Pink hover:-translate-y-3 transition-all duration-300">
                                    <link.icon className="h-6 w-6" />
                                </li>
                            </a>
                        ))}
                    </ul>
                </div>
                {/* quick links */}
                <div className="md:mb-0 mb-8">
                    <h3 className="text-xl Pink-border inline-block mb-3">
                        Quick Links
                    </h3>
                    <ul>
                        <li className="text-sm my-1">
                            <a
                                href="https://www.facebook.com/profile.php?id=100069116769192"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Facebook
                            </a>
                        </li>
                        <li className="text-sm my-1">
                            <a
                                href="https://www.instagram.com/thebyteknightsmms/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>
                        </li>
                        <li className="text-sm my-1">
                            <a
                                href="https://www.youtube.com/channel/UCqDxCutv0nzcx0uZrFM76lA"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Youtube
                            </a>
                        </li>
                        <li className="text-sm my-1">
                            <a
                                href="https://github.com/TheByteKnights2021/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </li>
                        <li className="text-sm my-1">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* Contact Info */}
                <div className="md:w-1/5 md:mb-0 mb-5" id="contactInfo">
                    <h3 className="text-xl Pink-border inline-block mb-3">
                        Contact Info
                    </h3>
                    <div>
                        <div className="flex items-center">
                            <img
                                src={LocationSvg}
                                alt="location"
                                className="h-4 w-4"
                            />
                            <a
                                className="text-sm ml-2 my-1"
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.google.com/maps/place/Mira+Model+School/@28.6312261,77.0916841,17z/data=!3m1!4b1!4m5!3m4!1s0x390d04bc15555555:0xc67001beb4b7d7fa!8m2!3d28.6312214!4d77.0938728"
                            >
                                Shaheed Captain Anuj Nayyar Marg, Block B, BB
                                Block, Janakpuri, New Delhi, Delhi 110058
                            </a>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={EmailSvg}
                                alt="email"
                                className="h-4 w-4"
                            />
                            <a
                                className="text-sm ml-2 my-1"
                                target="_blank"
                                rel="noreferrer"
                                href="mailto:byteknights.mms@gmail.com"
                            >
                                byteknights.mms@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* lower */}
            <div className="flex justify-between items-center pt-4 flex-col md:flex-row">
                <h4 className="flex items-center text-sm mb-3 md:mb-0 text-center md:text-left">
                    <AiOutlineCopyrightCircle /> &nbsp;
                    {new Date().getFullYear() + " "}
                    The Byte Knights Club of Mira Model School
                </h4>
                <h4 className="flex items-center text-sm">
                    Made with &nbsp; <AiFillHeart fill="#ff0054" /> &nbsp; by
                    The Byte Knights
                </h4>
            </div>
        </footer>
    );
};

export default Footer;
