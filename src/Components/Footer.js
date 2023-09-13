import React from 'react'
import logo from "../Asstes/Images/logo1.png"
// import facebook from "../Asstes/Images/facebook.png"
// import google from "../Asstes/Images/google.png"
// import inter from "../Asstes/Images/internet.png"
// import apple from "../Asstes/Images/apple-logo.png"




const Footer = () => {
    return (
        <>
            <div className="container-fluid my-5">

                <footer className=" text-center text-lg-start text-dark">

                    <div className="container p-4">

                        <div className="row my-4">

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">

                                <div className="rounded-circle bg-white shadow-1-strong  mb-4 mx-auto" >
                                    <img src={logo} alt=""
                                        loading="lazy" className='img-fluid w-50 h-50' />
                                </div>

                                <p className="pe-0 pe-md-5">Homless animal shelter The budgetary unit of the Capital City of Warsaw shelter The budgetary unit of the Capital City of Warsaw</p>

                                <ul className="list-unstyled d-flex flex-row">
                                    {/* <li>
                                        <a className=" px-2" href="#!">
                                            <img src={facebook} alt=''> </img>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="px-2" href="#!">
                                        <img src={google} alt=''> </img>
                                        </a>
                                    </li>
                                    <li>
                                        <a className=" ps-2" href="#!">
                                        <img src={inter} alt=''> </img>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="ps-2" href="#!">
                                        <img src={apple} alt=''> </img>
                                        </a>
                                    </li> */}
                                </ul>

                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">Animals</h5>

                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Solutions</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                   
                                    
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">Animals</h5>

                                <ul className="list-unstyled">
                                <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products Categories </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products solutions</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                  
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">Animals</h5>

                                <ul className="list-unstyled">
                                <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                   
                                  
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6  mb-md-0">
                                <h5 className="text-uppercase mb-4">Animals</h5>

                                <ul className="list-unstyled">
                                <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark text-decoration-none">Products</a>
                                    </li>
                                   
                                  
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="text-center" >
                        © 2020 Copyright:
                        <a className="text-decoration-none ms-1 text-dark" href="https://mdbootstrap.com/">all right reserved here</a>
                    </div>

                </footer>

            </div>

        </>
    )
}

export default Footer
