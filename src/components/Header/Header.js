import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Header({countCart,fav}) {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={countCart} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={fav.length} color="secondary">
                                <FavoriteBorderIcon />
                            </StyledBadge>
                        </IconButton>

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
                    <NavLink to={"/auth"} className="appointment-btn scrollto">
                        <span className="d-none d-md-inline">Login/ Signup</span>
                    </NavLink>
                </div>
            </header>
        </div>


    );
}

export default Header;