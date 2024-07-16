import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/react-logo.png';

const Navbar = () => {
    const navLinkClass = ( { isActive } ) => isActive ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
    return (
        <div>
            <nav className="bg-indigo-700 border-b border-indigo-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div
                            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                        >
                            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img
                                className="h-10 w-auto"
                                src={ logo }
                                alt="React Jobs"
                            />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2"
                                >React Jobs</span
                            >
                            </Link>
                            <div className="md:ml-auto">
                                <div className="flex space-x-2">
                                    <NavLink
                                    to="/"
                                    className={navLinkClass}
                                    >Home
                                    </NavLink>
                                    <NavLink
                                    to="/jobs"
                                    className={navLinkClass}
                                    >Jobs
                                    </NavLink>
                                    <NavLink
                                    to="/jobs/add"
                                    className={navLinkClass}
                                    >Post a Job
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
