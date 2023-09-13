import React from 'react';
import img from "../Asstes/Images/222.png"

const cardData = [
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: img
    },
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: img
    },
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: img
    },
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: img
    },
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: img
    },
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: img
    },
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: img
    },
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: img
    },
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: img
    },
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: img
    },
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: img
    },
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: img
    },

];

const Cards = () => {
    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h2>All Laptops</h2>
                <p className='px-0 px-md-5'>Whether you are looking for Payment Solutions, VAS Content Aggregation, other IT services, or just want to better understand your current environment.</p>
            </div>
            <div className="d-flex justify-content-lg-end justify-content-center mb-4">
                <div className="btn-group">
                    <button type="button" className="btn border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown 1
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="!#">Action</a></li>
                        <li><a className="dropdown-item" href="#!">Another action</a></li>
                        <li><a className="dropdown-item" href="#!">Something else here</a></li>
                    </ul>
                </div>
                <div className="btn-group ms-2">
                    <button type="button" className="btn border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown 2
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#!">Action</a></li>
                        <li><a className="dropdown-item" href="#!">Another action</a></li>
                        <li><a className="dropdown-item" href="#!">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                {cardData.map((card, index) => (
                    <div className="col-lg-3 col-md-6 mb-4" key={index}>
                        <div className="card">
                            <img src={card.image} className="card-img-top" alt={`Card ${index + 1}`} />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-3'>
                <button type="button" className="btn btn-danger">View more Products</button>
            </div>
        </div>
    );
}

export default Cards;
