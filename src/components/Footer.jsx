import React from 'react';

// Images
import logo from '../assets/logo.png';

// Svgs
import { ReactComponent as FbIcon } from '../assets/social-media-icons/fb.svg';
import { ReactComponent as InstaIcon } from '../assets/social-media-icons/insta.svg';
import { ReactComponent as YtIcon } from '../assets/social-media-icons/yt.svg';
import { ReactComponent as GihtubIcon } from '../assets/social-media-icons/github.svg';

const Footer = () => {
    return (
        <footer className="absolute w-full bottom-0 bg-gray-900">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <img src={logo} alt="" className='h-10 object-cover' />
                    <span className="ml-3 text-2xl font-Rancho">The Byte Knights</span>
                </div>
                <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 The Byte Knights
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    {/* facebook */}
                    <a className="text-gray-500" href="https://www.facebook.com/profile.php?id=100069116769192" target="_blank" rel="noreferrer">
                        <FbIcon/>
                    </a>
                    {/* insta */}
                    <a className="ml-3 text-gray-500" href="https://www.instagram.com/thebyteknightsmms/" target="_blank" rel="noreferrer">
                        <InstaIcon/>
                    </a>
                    {/* youtube */}
                    <a className="ml-3 text-gray-500" href="https://www.youtube.com/channel/UCqDxCutv0nzcx0uZrFM76lA" target="_blank" rel="noreferrer">
                        <YtIcon/>
                    </a>
                    {/* github */}
                    <a className="ml-3 text-gray-500" href="https://github.com/thebyteKnights2021/" target="_blank" rel="noreferrer">
                        <GihtubIcon/>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;
