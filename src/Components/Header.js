import React from 'react';
import logo from "../Asstes/Images/mirost-logo1 1.png"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" href="!#">
                        <img src={logo} alt="Logo" height="50" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{color:"black"}}></span>
                    </button>
                    <div className="collapse navbar-collapse fw-semibold fs-6" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link ms-0 ms-md-5" href="!#" style={{ color: 'black' }}>Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle ms-0 ms-md-3" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                                    Our Products
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="!#" style={{ color: 'black' }}>Product 1</a></li>
                                    <li><a className="dropdown-item" href="!#" style={{ color: 'black' }}>Product 2</a></li>
                                    <li><a className="dropdown-item" href="!#" style={{ color: 'black' }}>Product 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-0 ms-md-3" href="!#" style={{ color: 'black' }}>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-0 ms-md-3" href="!#" style={{ color: 'black' }}>Contacts</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-md-4">
                                <a className="nav-link text-danger" href="!#" style={{ color: 'black' }}>Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white bg-danger rounded px-3 py-2" href="!#">Log In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
