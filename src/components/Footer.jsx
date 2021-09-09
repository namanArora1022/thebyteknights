import React from 'react';

import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font absolute w-full bottom-0 bg-gray-900">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <img src={logo} alt="" className='h-10 object-cover' />
                    <span className="ml-3 text-xl">The Byte Knights</span>
                </div>
                <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 The Byte Knights
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    {/* facebook */}
                    <a className="text-gray-500" href="https://www.facebook.com/profile.php?id=100069116769192" target="_blank" rel="noreferrer">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    {/* insta */}
                    <a className="ml-3 text-gray-500" href="https://www.instagram.com/thebyteknightsmms/" target="_blank" rel="noreferrer">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    {/* youtube */}
                    <a className="ml-3 text-gray-500" href="https://www.youtube.com/channel/UCqDxCutv0nzcx0uZrFM76lA" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" fill="none">
                            <path d="M22.062,6.927A2.631,2.631,0,0,0,20.234,5.1c-1.637-.439-8.224-.439-8.224-.439S5.439,4.652,3.785,5.1A2.631,2.631,0,0,0,1.957,6.927,27.322,27.322,0,0,0,1.5,12.009a27.287,27.287,0,0,0,.456,5.062A2.631,2.631,0,0,0,3.785,18.9c1.635.44,8.225.44,8.225.44s6.57,0,8.224-.44a2.631,2.631,0,0,0,1.828-1.827,27.364,27.364,0,0,0,.438-5.062A27.406,27.406,0,0,0,22.062,6.927ZM9.907,15.152v-6.3l5.483,3.153Z"></path>
                        </svg>
                    </a>
                    {/* github */}
                    <a className="ml-3 text-gray-500" href="https://github.com/thebyteKnights2021/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" fill="none">
                            <path fill="none" d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;
