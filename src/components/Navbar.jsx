import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png';

const Navbar = () => {

    const location = useLocation();

    const [open, setOpen] = useState(false);

    const routes = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Events',
            path: '/events'
        },
        {
            name: 'Results',
            path: '/results'
        },
        {
            name: 'Contact Us',
            path: '/contact'
        },
    ]

    return (
        <header className={`absolute t-0 left-0 p-4 flex items-center justify-between h-20 w-full z-50 ${location.pathname !== '/' ? 'bg-gray-900' : 'bg-transparent'}`}>
            {/* logo */}
            <Link to='/'>
                <img src={Logo} alt="The Byte Knights" className='w-16 object-cover' />
            </Link>
            {/* nav */}
            <nav className='pr-5 text-white hidden md:block'>
                {routes.map(route => (
                    <Link
                        className='text-sm mx-2'
                        to={route.path}
                        key={route.path}
                    >{route.name}</Link>
                ))}
            </nav>
            {/* hambuger */}
            <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer transition-all duration-700'>
                {!open &&
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                }
                {open &&
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                }
            </div>
            {/* mobile nav */}
            <nav
                className={`text-white bg-gray-800 absolute h-96 w-full top-20 left-0 flex flex-col justify-center items-center md:hidden ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-500 ${location.pathname === '/' ? 'bg-gray-100 bg-opacity-75 rounded-2xl border-t-1 border-white' : ' bg-gray-800'}`} >
                {routes.map(route => (
                    <Link
                        className='text-xl my-3 hover:text-Pink transition-all duration-200' to={route.path}
                        key={route.path}
                        onClick={() => setOpen(!open)}
                    >{route.name}</Link>
                ))}
            </nav>
        </header>
    )
}

export default Navbar;
