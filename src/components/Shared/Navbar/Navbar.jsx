import React from 'react';
import Logo from './Logo';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navlist = <>
    <li className='bg-rose-200 rounded'><Link to='/login'>Login</Link></li>
             <li className='bg-rose-200 rounded'><Link to='/dashboard'>DashBoard</Link></li>
             <li className='bg-red-200 pt-2 pb-2 pl-4 pr-4 rounded'>Logout</li>
    </>
    return (
        <>
            <div className="navbar bg-rose-500 pr-10 pl-10">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 gap-4 z-[1] p-2 shadow bg-green-600 rounded-box w-52 font-mono font-semibold">
                {navlist}
            </ul>
            </div>
            <Logo/>
        </div>
        <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal items-center px-1 gap-4 font-mono font-semibold">
             {navlist}
    </ul>
            <div className='ml-2'><Avatar/></div>
        </div>
        </div>
        </>
)};

export default Navbar;