import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import ActiveLink from '../ActiveLink/ActiveLink';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut();
    }
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                            <li ><Link to='/'>Home</Link></li>
                            <li><Link to='/allrecipies'>Recipies</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            {!user && <li className='bg-success rounded px-4'><Link to='/signup'>Register</Link></li>}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-success text-2xl font-bold">Spicy_Kitchen</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal flex gap-8 px-1">
                        <li ><ActiveLink to='/'>Home</ActiveLink></li>
                        <li><ActiveLink to='/allrecipies'>Recipies</ActiveLink></li>
                        <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !user && <Link to="/signup" className="btn btn-success hidden lg:block lg:pt-4 text-white mr-4">Register</Link>
                    }
                    {
                        user ? <Link onClick={handleLogout} className="btn text-white btn-success mr-3">Logout</Link> : <Link to="/login" className="btn text-white btn-success mr-3">Login</Link>
                    }
                    {user?.photoURL && <img title={user?.displayName} className="w-10 rounded-full" src={user.photoURL} />}
                    {
                        user?.photoURL === null && <FaUserCircle title={user?.displayName} style={{ fontSize: "40px" }}></FaUserCircle>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;