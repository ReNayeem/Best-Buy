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

    const chooseAgain = () => {
        setSelectedProduct([])
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
                    <button onClick={randomProductGenerator} type="button" className="button1 mx-2 my-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">CHOOSE 1 FOR ME</button>
                    <button onClick={chooseAgain} className="button2">CHOOSE AGAIN</button>
                </div>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">CHOSEN FOR YOU</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h2 className="selected-product">{randomProduct.name}</h2>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Product;