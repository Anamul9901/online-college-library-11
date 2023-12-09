/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Navber.css'
import { MdDarkMode } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';


const Navber = ({ loginUsers }) => {
    const { user, signOutAll } = useAuth();
    // console.log(loginUsers)
    // console.log(user)
    const filterUser = loginUsers.filter(loginUser => user?.email === loginUser.email)
    // console.log(filterUser);

    function toggleMode() {
        const body = document.body;

        if (body.classList.contains('dark-mode')) {
            // Switch to Light Mode
            body.classList.remove('dark-mode');
        } else {
            // Switch to Dark Mode
            body.classList.add('dark-mode');
        }
    }

    // Apply Light Mode by default
    document.body.classList.add('light-mode');





    // console.log(user)


    const handleSignOut = () => {
        signOutAll()
            .then()
            .catch()
    }

    const navItem = <>
        <ul className="md:flex">
            <li>
                <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? 'text-[#050506] underline font-black md:text-xl ' : "text-pink-500 font-bold md:text-xl"
                    }>Home</NavLink>
            </li>
            <li>
                <NavLink
                    to='/add-book'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? 'text-[#050506] underline font-black md:text-xl ' : "text-pink-500 font-bold md:text-xl"
                    }>Add Book</NavLink>
            </li>
            <li>
                <NavLink
                    to='/all-books'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? 'text-[#050506] underline font-black md:text-xl ' : "text-pink-500 font-bold md:text-xl"
                    }>All Books</NavLink>
            </li>
            <li>
                <NavLink
                    to='/borrowed-book'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? 'text-[#050506] underline font-black md:text-xl ' : "text-pink-500 font-bold md:text-xl"
                    }>Borrowed Books</NavLink>
            </li>
        </ul>
    </>


    return (
        <div className=" bg-[#eaa1e28b] ">
            <nav className=" navbar max-w-[1300px] mx-auto px-2 md:px-4 ">
                <div className="navbar-start text-black">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                       <Link to='/'>
                       <img className="lg:w-[60%]" src={'https://i.ibb.co/WsbGXS3/20231108-122230.png'} alt="" /></Link>

                    </div>
                </div>
                <div className="navbar-center hidden md:flex ">
                    <ul className="menu  menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">




                    {
                        user ?
                            <div className="flex text-center">

                                <div className="flex flex-row-reverse items-center">

                                    <div>
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={filterUser[0]?.image || user?.photoURL} />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="">
                                        <span className="text-xs text-black md:text-lg font-bold">
                                            {
                                                filterUser[0]?.name || user?.displayName
                                            }
                                        </span>
                                    </div>
                                </div>

                                <div className=" items-center">
                                    <div className="flex justify-center  mb-2">
                                        <button className="text-2xl bg-pink-300 shadow-black shadow-sm" onClick={toggleMode}><MdDarkMode /></button>
                                    </div>

                                    <button onClick={handleSignOut} className="btn btn-sm bg-pink-500 hover:text-[#ffaa90] text-white font-bold"><FiLogOut/></button>

                                </div>
                            </div>
                            :
                            <div className="lg:flex items-center">
                                <div className="flex justify-center  mb-2">
                                        <button className="text-2xl bg-pink-300 shadow-black shadow-sm" onClick={toggleMode}><MdDarkMode /></button>
                                    </div>
                                <Link to='/login'>
                                    <button className="btn btn-sm bg-pink-500 hover:text-[#080403] text-white font-bold">Sign in</button>
                                </Link>
                                
                            </div>
                    }








                </div>


            </nav>
        </div>
    );
};

export default Navber;