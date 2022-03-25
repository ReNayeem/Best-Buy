import React from "react";
import { useEffect, useState } from 'react';
import Card from "../Card/Card";
import './Product.css'

const Product = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setPhones(data));
    }, [])
    return (
        <div className="container card-design row">
            <div className="col-9 col-md-10">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        phones.map(phone => <Card key={phone.id} phone={phone}></Card>)
                    }
                </div>
            </div>
            <div className="col-3 col-md-2">
                <div className="sticky">
                    <h2 className="text-design">Selected Products</h2>
                    <button className="button1 mx-2 my-2">CHOOSE 1 FOR ME</button>
                    <button className="button2">CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
}

export default Product;