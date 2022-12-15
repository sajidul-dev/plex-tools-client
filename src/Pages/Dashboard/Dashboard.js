import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile bg-[url(https://i.ibb.co/v119z4J/scattered-forcefields-1.png)]">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl font-bold text-primary text-center my-5'>Welcome to your Dashboard</h2>
                <Outlet />


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && <>
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        <li><Link to='/dashboard/review'>Add A Review</Link></li>
                    </>}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/manageorder'>Manage All Order</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                        <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
                    </>}
                    {/* {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                        <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                    </>} */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;