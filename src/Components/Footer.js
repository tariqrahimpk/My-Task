import React from 'react'
import logo from "../Asstes/Images/mirost-logo1 1.png"
import facebook from "../Asstes/Images/no1.png"
import google from "../Asstes/Images/no2.png"
import inter from "../Asstes/Images/no3.png"
import apple from "../Asstes/Images/no4.png"
import icon from "../Asstes/Images/icons.png"




const Footer = () => {
    return (
        <>
            <div className="container-fluid my-5">

                <footer className=" text-center text-lg-start text-dark">

                    <div className="container p-4">

                        <div className="row my-4">

                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">

                                <div className="rounded-circle bg-white shadow-1-strong  mb-4 mx-auto" >
                                    <img src={logo} alt=""
                                        loading="lazy" className='img-fluid w-50 h-50' />
                                </div>

                                <p className="pe-0 pe-md-5 mb-4">Generate outside the box <br></br> thinking with the possibility to <br></br> targtet the low.</p>

                                <ul className="list-unstyled d-flex flex-row justify-content-lg-start justify-content-center">
                                    <li>
                                        <a className=" px-2" href="#!">
                                            <img src={facebook} alt='' />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="px-2" href="#!">
                                            <img src={google} alt='' />
                                        </a>
                                    </li>
                                    <li>
                                        <a className=" px-2" href="#!">
                                            <img src={inter} alt='' />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="px-2" href="#!">
                                            <img src={apple} alt='' />
                                        </a>
                                    </li>
                                </ul>

                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h5 className=" mb-4 fw-semibold mt-3">Products</h5>

                                <ul className="list-unstyled fw-medium">
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Features</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Solutions</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Integrations</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Enterprise</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Solutions</a>
                                    </li>


                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h5 className=" mb-4 mt-3">Resources</h5>

                                <ul className="list-unstyled fw-medium">
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Partners</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Community </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Developers</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">App</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Blog</a>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h5 className="mb-4 mt-3">Why Choose Us?</h5>

                                <ul className="list-unstyled fw-medium">
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Channel</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Scale</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Watch the Demo</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Our Competition</a>
                                    </li>


                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6  mb-md-0 ps-0 ps-md-5 ">
                                <h5 className=" mb-4 mt-3">Company</h5>

                                <ul className="list-unstyled fw-medium">
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">About Us</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">News</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Leadership</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Media Kit</a>
                                    </li>


                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="text-center">
                        <div className="d-inline-block">
                            <img src={icon} alt='' className='mb-3' />
                            <br />
                            © 2023 Lookscout. All Rights Reserved.
                        </div>
                    </div>

                </footer>

            </div>

        </>
    )
}

export default Footer
