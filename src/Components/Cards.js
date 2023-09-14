import React from 'react';
import img from "../Asstes/Images/222.png"
import img1 from "../Asstes/Images/SVG.png"
import img2 from "../Asstes/Images/SVG.png"

const cardData = [
    {
        title: '$49.99',
        text: 'Inspiron 14 2-in-1 Laptop',
        text1: ' Year BIL With 10GB Cloud Back Up PC/Mac',
        image: img
    },
    {
        title: '$49.99',
        text: 'Inspiron 14 2-in-1 Laptop',
        text1: ' Year BIL With 10GB Cloud Back Up PC/Mac',
        image: img
    },
    {
        title: '$49.99',
        text: 'Inspiron 14 2-in-1 Laptop',
        text1: ' Year BIL With 10GB Cloud Back Up PC/Mac',
        image: img
    },
    {
        title: '$49.99',
        text: 'Inspiron 14 2-in-1 Laptop',
        text1: ' Year BIL With 10GB Cloud Back Up PC/Mac',
        image: img
    },
    {
        title: '$49.99',
        text: 'Inspiron 14 2-in-1 Laptop',
        text1: ' Year BIL With 10GB Cloud Back Up PC/Mac',
        image: img
    },
    {
        title: '$49.99',
        text: 'Inspiron 14 2-in-1 Laptop',
        text1: ' Year BIL With 10GB Cloud Back Up PC/Mac',
        image: img
    },
    {
        title: '$49.99',
        text: 'Inspiron 14 2-in-1 Laptop',
        text1: ' Year BIL With 10GB Cloud Back Up PC/Mac',
        image: img
    },
    {
        title: '$49.99',
        text: 'Inspiron 14 2-in-1 Laptop',
        text1: ' Year BIL With 10GB Cloud Back Up PC/Mac',
        image: img
    },
    {
        title: '$49.99',
        text: 'Inspiron 14 2-in-1 Laptop',
        text1: ' Year BIL With 10GB Cloud Back Up PC/Mac',
        image: img
    },
    {
        title: '$49.99',
        text: 'Inspiron 14 2-in-1 Laptop',
        text1: ' Year BIL With 10GB Cloud Back Up PC/Mac',
        image: img
    },
    {
        title: '$49.99',
        text: 'Inspiron 14 2-in-1 Laptop',
        text1: ' Year BIL With 10GB Cloud Back Up PC/Mac',
        image: img
    },
    {
        title: '$49.99',
        text: 'Inspiron 14 2-in-1 Laptop',
        text1: ' Year BIL With 10GB Cloud Back Up PC/Mac',
        image: img
    },
];

const Cards = () => {
    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <h2 className='fw-bolder'>All Laptops</h2>
                <p className='another-class mt-3'>Laptops have become increasingly popular due to their portability and versatility, offering users the ability to work, study, or entertain themselves from virtually anywhere.</p>
            </div>
            <div className="d-flex justify-content-lg-end justify-content-center mb-4">

                <div className="btn-group me-4">
                    <button type="button" className="btn btn-outline-secondary border-1 rounded-0"><span className='me-1 me-md-4'>Companies</span>  <img src={img1} alt='' style={{ width: '18px', height: "20px" }}></img></button>
                    {/* <button type="button" className="btn btn-outline-secondary border-1 rounded-0 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button> */}

                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="!#">Company 1</a>
                        <a className="dropdown-item" href="#!">Company 2</a>
                        <a className="dropdown-item" href="#!">Company 3</a>
                    </div>
                </div>

                <div className="btn-group ml-2">
                    <button type="button" className="btn btn-outline-secondary border-1 rounded-0"><span className='me-2 me-md-5'>Sort by</span> <img src={img2} alt='' style={{ width: "18px", height: "20px" }}></img></button>

                    {/* <button type="button" className="btn btn-outline-secondary border-1 rounded-0 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button> */}
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="!#">Option 1</a>
                        <a className="dropdown-item" href="!#">Option 2</a>
                        <a className="dropdown-item" href="#!">Option 3</a>
                    </div>
                </div>
            </div>
            <div className="row">
                {cardData.map((card, index) => (
                    <div className="col-lg-3 col-md-6 mb-4 pe-4 ps-4" key={index}>
                        <div className="card border-0">
                            <div className='pt-5 pb-5' style={{ backgroundColor: "#F6F6F67D" }}>
                                <img src={card.image} className="card-img-top" alt={`Card ${index + 1}`} />
                            </div>
                            <div className="card-body mt-3">

                                <p className="card-text fw-medium">{card.text}</p>
                                <p className="card-text fw-medium">{card.text1}</p>
                                <p className="card-title">{card.title}</p>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-3'>
                <button type="button" className="btn btn-danger">View All Products</button>
            </div>
        </div>
    );
}

export default Cards;
