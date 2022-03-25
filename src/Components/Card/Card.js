import React from 'react';

const Card = (props) => {
    const { name, id, img, price } = props.phone;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Card;