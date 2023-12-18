import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import ThemeContext from '../../context/theme.context';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { logoutRequest } from '../../redux/action/auth.action';
function Header({ countCart, fav }) {
    let auth = useSelector(state => state.auth);
    const theme = useContext(ThemeContext);
    const cart = useSelector(state => state.cart);
    const cartData = cart.cart.reduce((acc, v) => acc + v.qty, 0);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(logoutRequest())
    }

    return (
        <div className={`main-header ${theme.theme}`}>
            <div id="topbar" className={`d-flex align-items-center fixed-top ${theme.theme}`}>
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <ToggleOffIcon onClick={() => theme.toogleTheme(theme.theme)}>ChangeTheme</ToggleOffIcon>
                    <select>
                        <option>--Select--</option>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Gujarati</option>

                    </select>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <Link to={'/cart'}>
                            {/* <Link to={'/shoppingcart'}> */}
                            <IconButton aria-label="cart" >
                                <StyledBadge badgeContent={cartData} color="secondary" >
                                    {/* <StyledBadge badgeContent={shopping} color="secondary" > */}

                                    <ShoppingCartIcon sx={{ color: theme.theme === 'light' ? 'gray' : 'white' }} />
                                </StyledBadge>
                            </IconButton>
                        </Link>

                        <Link to={'/wishlist'}>

                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={fav.length} color="secondary">
                                    <FavoriteBorderIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>

                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><NavLink className="nav-link scrollto" to="/" style={({ isActive }) => ({
                                color: isActive ? 'red' : 'black'
                            })}>
                                Home
                            </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" to="/example" style={({ isActive }) => ({
                                    color: isActive ? 'red' : 'black'
                                })}>
                                    Example
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="nav-link scrollto" to="/department" style={({ isActive }) => ({
                                    color: isActive ? 'red' : 'black'
                                })}>
                                    Department
                                </NavLink>
                            </li>

                            <li><NavLink className="nav-link scrollto" to="/doctors" style={({ isActive }) => ({
                                color: isActive ? 'red' : 'black'
                            })}>
                                Doctors
                            </NavLink></li>

                            <li><NavLink className="nav-link scrollto" to="/about" style={({ isActive }) => ({
                                color: isActive ? 'red' : 'black'
                            })}>
                                About
                            </NavLink></li>

                            <li><NavLink className="nav-link scrollto" to="/contact" style={({ isActive }) => ({
                                color: isActive ? 'red' : 'black'
                            })}>
                                Contact
                            </NavLink></li>

                            <li>
                                <NavLink className="nav-link scrollto" to="/products" style={({ isActive }) => ({
                                    color: isActive ? 'red' : 'black'
                                })}>
                                    Product
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="nav-link scrollto" to="/medicines" style={({ isActive }) => ({
                                    color: isActive ? 'red' : 'black'
                                })}>
                                    Medicines
                                </NavLink>
                            </li>

                            <li><NavLink className="nav-link scrollto" to="/productform" style={({ isActive }) => ({
                                color: isActive ? 'red' : 'black'
                            })}>
                                ProductForm
                            </NavLink></li>

                            <li><NavLink className="nav-link scrollto" to="/counter" style={({ isActive }) => ({
                                color: isActive ? 'red' : 'black'
                            })}>
                                Counter
                            </NavLink></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <NavLink to={"/appointment"} className="appointment-btn scrollto" ><span className="d-none d-md-inline">Make an</span>
                        Appointment</NavLink>

                    {
                        auth.user ?
                            <NavLink to={"/"} className="appointment-btn scrollto" onClick={handleLogout}> 
                                <span className="d-none d-md-inline">Logout</span>
                            </NavLink> :
                            <NavLink to={"/auth"} className="appointment-btn scrollto">
                                <span className="d-none d-md-inline">Login/ Signup</span>
                            </NavLink>
                    }

                </div>
            </header>

        </div>


    );
}

export default Header;