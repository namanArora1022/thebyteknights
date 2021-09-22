import React from 'react';

// Svgs
import { ReactComponent as ContactSvg } from '../assets/contact/contact.svg'
import { ReactComponent as FbIcon } from '../assets/contact/FbIcon.svg';
import { ReactComponent as InstaIcon } from '../assets/contact/InstaIcon.svg';
import { ReactComponent as YtIcon } from '../assets/contact/YtIcon.svg';

const Contact = () => {
    return (
        <div className='pt-20 pb-52 md:pb-0 grid grid-cols-2'>
            {/* left */}
            <div className='bg-gray-100 pt-28 pl-10 flex flex-col'>
                <h1 className='text-7xl'>Want to talk to us ?</h1>
                <span className='font-semibold text-3xl'>
                    <span className='text-Pink'>thebyteknights</span>
                    @gmail.com
                </span>
                <ContactSvg className='w-96 object-cover' />
            </div>
            {/* right */}
            <div className='flex flex-col items-center py-4'>
                <a href="https://www.facebook.com/profile.php?id=100069116769192" target="_blank" rel="noreferrer">
                    <div className='h-28 w-28 my-7 bg-Black p-4 rounded-2xl transform hover:-translate-y-4 transition-all duration-500'>
                        <FbIcon />
                    </div>
                </a>
                <a href="https://www.instagram.com/thebyteknightsmms/" target="_blank" rel="noreferrer">
                    <div className='h-28 w-28 my-7 bg-Black p-4 rounded-2xl transform hover:-translate-y-4 transition-all duration-500'>
                        <InstaIcon />
                    </div>
                </a>
                <a href="https://www.youtube.com/channel/UCqDxCutv0nzcx0uZrFM76lA" target="_blank" rel="noreferrer">
                    <div className='h-28 w-28 my-7 bg-Black p-4 rounded-2xl transform hover:-translate-y-4 transition-all duration-500'>
                        <YtIcon />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Contact;