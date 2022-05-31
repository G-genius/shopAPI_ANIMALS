import { useParams } from 'react-router-dom'
import axios from 'axios';
import React, { createElement, useEffect, useState } from "react";
import "./productInfo.css"
import Slider from "../Components/Slider";

function InfoProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        const url = "https://localhost:7082/api/Products/" + id
        axios.get(url)
            .then(res => {
                const product2 = res.data;
                setProduct(product2)
            })
    }, [])
    if (!product) return null;
    return (
        <div>
            <div className="productInfo">
                <div>
                    <h2 className="productName">{product.name}</h2>
                    <p><img src={product.urlImage} className="productImg" /></p>
                </div>
                <div className="productText">
                    <p className="prodcutName">О товаре</p>
                    <p className="productDesc">Описание: {product.description}</p>
                    <p className="productCount">В наличии: {product.count} шт</p>
                    <p className="productPrice">Цена: {product.price} руб</p>
                    <button class="button button__submit">Добавить в корзину</button>
                </div>

            </div>
            <h2 className="productOther">Похожие товары</h2>
            <Slider />
        </div>
        
    )
}
export default InfoProduct