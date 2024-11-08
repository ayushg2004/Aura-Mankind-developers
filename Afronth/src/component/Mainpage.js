import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import { jwttoken } from '../App';

const MainPage = () => {
    const { islogin, logout } = useContext(jwttoken); // Access the context
    const navigate = useNavigate();
    const [navbarColor, setNavbarColor] = useState(false);
    const [loggedIn, setLoggedIn] = useState(islogin); // Use initial context state

    useEffect(() => {
        // Update local login state when context value changes
        setLoggedIn(islogin);
    }, [islogin]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarColor(true);
            } else {
                setNavbarColor(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = () => {
        logout(); // Call the logout function from the context
        setLoggedIn(false); // Update local state after logging out
        navigate('/login'); // Redirect to login page
    };

    const handleCitySelect = (e) => {
        // Redirect to "/evcycle" when a city is selected
        navigate('/evcycle');
    };

    return (
        <>
            <div className="outerdiv">
                <div className='innerdiv'>
                    <ToastContainer style={{ marginTop: "40px" }} />
                    <nav className={`navbar ${navbarColor ? 'navbar-white' : ''}`}>
                        <ul className="navbar">
                            <div className='logo1'>
                                <li>
                                    <img className="logo" src="Pimages/logo.png" alt="Logo" />
                                </li>
                            </div>
                            <li><NavLink to="/knowledge">Aura-Knowledge</NavLink></li>
                            <li><NavLink to="/evcycle">Aura-Bikes</NavLink></li>
                            <li><NavLink to="/askpitchorinvest">Pitch/Invest</NavLink></li>
                            <li><NavLink to="/Footer">Contact Us</NavLink></li>

                            {/* Conditionally render user-specific elements */}
                            {loggedIn ? (
                                <>
                                    <NavLink to="/profile">
                                        <img className="loginimg" src="Pimages/user.png" alt="User" />
                                    </NavLink>
                                    <li>
                                        <button onClick={handleLogout} className="logoutbtn">Logout</button>
                                    </li>
                                </>
                            ) : (
                                <li><NavLink to="/Login">Login/Signup</NavLink></li>
                            )}

                            <li><NavLink to="/help">Help</NavLink></li>
                        </ul>
                    </nav>

                    <div className='slides'>
                        <div className="main-header">
                            <h1>Embark Us, to a sustainable journey</h1>
                            <p>Zero-Carbon Footprints, Smart City Initiative</p>
                            <div className="selection-form">
                                <select onChange={handleCitySelect}>
                                    <option>Select City</option>
                                    <option value="city1">City 1</option>
                                    <option value="city2">City 2</option>
                                    <option value="city3">City 3</option>
                                </select>
                                <input type="date" placeholder="Start Date" />
                                <input type="date" placeholder="End Date" />
                                <button>Ride Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <section className='footerSection'>
                    <Footer />
                </section>

                <div className='fixed-div'>
                    <p>Do you like cookies? 🍪 We use cookies to ensure you get the best experience on our website.</p>
                    <button>I agree</button>
                </div>
            </div>
        </>
    );
};

export default MainPage;
