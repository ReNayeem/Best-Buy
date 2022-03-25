import React from 'react';
import "./Card.css"
import { BsFillCartFill } from "react-icons/bs";

const Card = (props) => {
    const { name, id, img, price } = props.phone;
    return (
        <div className='card'>
            <img className='phone-image' src={img} alt="" />
            <h3>{name}</h3>
            <h4>${price}</h4>
            <button class="cta">
                <span class="hover-underline-animation"> Add to cart </span>
                <BsFillCartFill />
            </button>
        </div>
    );
};

export default Card;