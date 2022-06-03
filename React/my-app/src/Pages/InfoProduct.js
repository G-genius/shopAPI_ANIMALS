import { useParams } from 'react-router-dom'
import axios from 'axios';
import React, { createElement, useEffect, useState } from "react";
import "./productInfo.css"
import Slider from "../Components/Slider";
import { useNavigate } from "react-router-dom";

function InfoProduct({ User }) {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const navigate = useNavigate()
    const [count, setCount] = useState(0)

    async function createBuy() {
        if (count && User && count < product.count && count > 0) {
            const buy = {
                id: 0,
                idProduct: product.id,
                idUser: User.id,
                price: 0,
                count: parseInt(count),
                amount: 0,
                isFinished: false,
                product: null,
                user: null
            };
            axios.post(`https://localhost:7082/api/Buys`, buy)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    navigate("/Basket")
                }).catch(function (error) {
                    alert("Произошла ошибка >_<")
                    alert(error.description)
                    console.log(buy)
                    return null
                })
            
        }
        else {
            alert("You not input count")
        }
    }
    function countOnChange(event) {
        setCount(event.target.value)
    }

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
                    <p className="productDesc">Описание: {product.description}</p>
                    <p className="productCount">В наличии: {product.count} шт</p>
                    <p className="productPrice">Цена: {product.price} руб</p>
                    <p>Количество: <input className="productAmount" onChange={countOnChange} type="number"></input></p>
                    <button class="button button__submit" onClick={createBuy}>Добавить в корзину</button>
                </div>

            </div>
            <h2 className="productOther">Похожие товары</h2>
            <Slider id={id}/>
        </div>
        
    )
}
export default InfoProduct