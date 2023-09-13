import React from 'react';
import logo from "../Asstes/Images/logo1.png"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" href="!#">
                        <img src={logo} alt="Logo" height="40" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{color:"black"}}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-5">
                            <li className="nav-item">
                                <a className="nav-link" href="!#" style={{ color: 'black' }}>Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                                    Our Products
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="!#" style={{ color: 'black' }}>Product 1</a></li>
                                    <li><a className="dropdown-item" href="!#" style={{ color: 'black' }}>Product 2</a></li>
                                    <li><a className="dropdown-item" href="!#" style={{ color: 'black' }}>Product 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#" style={{ color: 'black' }}>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#" style={{ color: 'black' }}>Categories</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-danger" href="!#" style={{ color: 'black' }}>Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white bg-danger rounded" href="!#">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
