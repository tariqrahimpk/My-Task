import React from 'react';
import img from "../Asstes/Images/123.png"

const MainSection = () => {
    return (
        <div className="container-fluid bg-primary text-white p-5">
            <div className="row">
                <div className="col-lg-6 text-center">
                    <img src={img} alt="Laptop" className="img-fluid" />
                </div>
                <div className="col-lg-6 d-flex align-items-center text-center text-md-start">
                    <div>
                        <h1>Laptops</h1>
                        <h3>Choose Categories to explore more Products</h3>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default MainSection;
