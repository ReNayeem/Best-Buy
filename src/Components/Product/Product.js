import React from "react";
import { useEffect, useState } from 'react';
import Card from "../Card/Card";
import './Product.css'

const Product = () => {
    const [phones, setPhones] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([])
    const handleAddToSelectedProducts = (phone) => {
        if (selectedProduct.length < 4) {
            const newSelectedProduct = [...selectedProduct, phone]
            setSelectedProduct(newSelectedProduct)
        }
    }
    const [randomProduct, setRandomProduct] = useState([]);

    const randomProductGenerator = () => {
        let addSelectedProduct = Object.assign({}, selectedProduct[Math.floor(Math.random() * selectedProduct.length)])
        setRandomProduct(addSelectedProduct)

    }

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
                        phones.map(phone => <Card key={phone.id} phone={phone} handleAddToSelectedProducts={handleAddToSelectedProducts}></Card>)
                    }
                </div>
            </div>
            <div className="col-3 col-md-2">
                <div className="sticky">
                    <h2 className="text-design">Selected Products</h2>
                    <hr />
                    {selectedProduct.map((phone) => (
                        <h1 className="selected-product">{phone.name}</h1>
                    ))}
                    <button onClick={randomProductGenerator} className="button1 mx-2 my-2">CHOOSE 1 FOR ME</button>
                    <button className="button2">CHOOSE AGAIN</button>
                    <h2>{randomProduct.name}</h2>
                </div>
            </div>
        </div>
    );
}

export default Product;