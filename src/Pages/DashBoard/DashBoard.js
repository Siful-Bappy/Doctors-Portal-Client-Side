import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <h2 className='text-2xl font-bold text-violet-500 text-center mt-12'>Welcome to my Dashboard</h2>
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60 bg-base-100 text-base-content">
      <li><Link to="/dashboard">My Dashboard</Link></li>
      <li><Link to="/dashboard/review">My Review</Link></li>
      {/* {
        admin && <>
        <li><Link to="/dashboard/user">All Users</Link></li>
        <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
        <li><Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>
        </>
      } */}
      <li><Link to="/dashboard/user">All Users</Link></li>
      <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
      <li><Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>
    </ul>
  
  </div>
  {/* <Outlet></Outlet> */}
</div>
    );
};

export default DashBoard;