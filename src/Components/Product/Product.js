import React from "react";
import { useEffect, useState } from 'react';
import Card from "../Card/Card";

const Product = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setPhones(data));
    }, [])
    return (
        <div className="products">
            {
                phones.map(phone => <Card key={phone.id} phone={phone}></Card>)
            }
        </div>
    );
}

export default Product;