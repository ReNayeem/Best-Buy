import React from 'react';
import "./Card.css"
import { BsFillCartFill } from "react-icons/bs";

const Card = (props) => {
    const { name, id, img, price } = props.phone;
    return (
        <div className='col'>
            <div className='card align-items-center'>
                <img className='phone-image' src={img} alt="" />
                <div className='card-body'>
                    <h4>{name}</h4>
                    <h5>${price}</h5>
                    <button className="cta">
                        <span className="hover-underline-animation"> Add to cart</span>
                        <BsFillCartFill />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Card;