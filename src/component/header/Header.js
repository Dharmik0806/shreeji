import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <a href="index.html" className="logo">
                                    <img src="assets/images/logo.png" />
                                </a>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li className="scroll-to-section"><NavLink exact to="/test" >FORM</NavLink></li>
                                    <li className="scroll-to-section"><NavLink exact to="/" >Home</NavLink></li>
                                    <li className="scroll-to-section"><NavLink exact to="/man">Men's</NavLink></li>
                                    <li className="scroll-to-section"><NavLink exact to="/women">Women's</NavLink></li>
                                    <li className="scroll-to-section"><NavLink exact to="/kid">Kid's</NavLink></li>
                                    <li className="submenu">
                                        <a href="javascript:;">Pages</a>
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="products.html">Products</a></li>
                                            <li><a href="single-product.html">Single Product</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:;">Features</a>
                                        <ul>
                                            <li><a href="#">Features Page 1</a></li>
                                            <li><a href="#">Features Page 2</a></li>
                                            <li><a href="#">Features Page 3</a></li>
                                            <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                        </ul>
                                    </li>
                                    <li className="scroll-to-section"><a href="#explore">Explore</a></li>
                                    <li className="scroll-to-section"><NavLink exact to={'/auth'}>Login / signyp</NavLink></li>
                                    <li className="scroll-to-section"><NavLink exact to={'/contect1'}>contect</NavLink></li>
                                    <li className="scroll-to-section"><NavLink exact to={'/form22'}>FORM2</NavLink></li>
                                    <li className="scroll-to-section"><NavLink exact to={'/first'}>First</NavLink></li>
                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

     
    );
}

export default Header;