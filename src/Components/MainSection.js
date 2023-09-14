import React from 'react';
import img from "../Asstes/Images/123.png"

const MainSection = () => {
    return (
        <div className="container-fluid  text-white p-5" style={{backgroundColor:'#2B63D9'}}>
            <div className="row pt-4 pb-4">
                <div className="col-lg-6 text-center">
                    <img src={img} alt="Laptop" className="img-fluid" />
                </div>
                <div className="col-lg-6 d-flex align-items-center text-center text-lg-start mt-3 mt-lg-0">
                    <div>
                        <h1 className='custom-class'>Laptops</h1>
                        <h3 className='mt-3'>Choose categories to explore more products</h3>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default MainSection;
