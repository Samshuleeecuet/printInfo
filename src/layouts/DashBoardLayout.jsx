import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
            {/* Page content here */}
            <Outlet/>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side z-20">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><NavLink to='/dashboard/profile' className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>🧖Profile</NavLink></li>
            <li ><NavLink to='/'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>Home</NavLink></li>
            <li ><NavLink to='/dashboard/allprintinginfo'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>All Printing Info</NavLink></li>
            <li ><NavLink to='/dashboard/allpaymentinfo'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>All Payment Info</NavLink></li>
            <li ><NavLink to='/dashboard/userpaymentinfo'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>User Payment Info</NavLink></li>
            <li ><NavLink to='/dashboard/userprintinfo'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>User Print Info</NavLink></li>
            </ul>
        
        </div>
        </div>
    );
};

export default DashBoardLayout;