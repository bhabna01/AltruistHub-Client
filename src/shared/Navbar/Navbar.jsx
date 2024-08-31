import { useState } from "react";
import 'react-tooltip/dist/react-tooltip.css'
import logo from "../../assets/Logo.png"
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button } from "flowbite-react";
import { Tooltip } from "react-tooltip";
import { useTheme } from "../../providers/ThemeProvider";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const { user, logOut } = useAuth()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))

    }




    const navitems = (
        <>
            <li>
                <Link
                    to='/'
                    className="dark:text-white"
                >
                    Home
                </Link>
            </li>
            <li >
                <button
                    onClick={toggleProfileMenu}
                    className="block  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                    My Profile
                </button>
                {isProfileMenuOpen && (
                    <ul className="absolute  mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-10">
                        <li>
                            <Link
                                to="/add-volunteer"
                                className="block py-2 px-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                Add Volunteer Post
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/manage-my-post"
                                className="block py-2 px-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                Manage My Post
                            </Link>
                        </li>

                    </ul>
                )}
            </li>
            <li>
                <button
                    onClick={toggleTheme}
                    className="  dark:bg-gray-800 rounded dark:text-white"
                >

                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}

                </button>
            </li>



        </>
    );
    return (
        <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className=" h-20" alt="AltruistHub" />
                    <span className="self-center text-red-500 text-2xl font-semibold whitespace-nowrap dark:text-white">AltruisHub</span>
                </div>


                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {user ? (
                        <div className="flex justify-end">

                            <img
                                src={user?.photoURL}
                                alt="Profile"
                                className="w-10 h-10 rounded-full cursor-pointer"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user?.displayName}
                            />

                            <Tooltip id="my-tooltip" />


                            <Button onClick={handleLogOut} color="blue" pill>
                                Logout
                            </Button>


                        </div>
                    ) : (

                        <Link
                            to='/login'
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                            Login
                        </Link>

                    )}

                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"

                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={` justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"
                        }`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navitems}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;