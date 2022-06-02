import axios from 'axios';
import React, { createElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Basket.css";
function Basket({User}) {

    const [buys, setBuys] = useState([])
    const [products, setProducts] = useState([])
    let finalprice = 0
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://localhost:7082/api/Buys`)
            .then(res => {
                const buy = res.data;
                setBuys(buy)
            })
        axios.get(`https://localhost:7082/api/Products`)
            .then(res => {
                const product = res.data;
                setProducts(product)
            })
    }, [])

    let view = []
    let userBasket = []

    function deleteBuy(id) {
        alert(id)
        let path = "https://localhost:7082/api/Buys/" + id
        axios.delete(path)
        navigate("/")
        navigate("/Basket")
    }

    async function getBuys() {
        if (buys != undefined && products != undefined) {
            view = []
            finalprice = 0
            for (let i = 0; i < buys.length; i++) {
                let buy = buys[i]
                if (!buy.isFinished && buy.idUser == User.id) {
                    let product = products[buy.idProduct - 1]
                    userBasket.push(buy)
                    finalprice += buy.amount
                    view.push(
                        <div className='container'>
                            <div className="basketItem">
                                <div className="leftBlock">
                                    <img src={product.urlImage} />
                                </div>
                                <div className="centerBlock">
                                    <p className="itemName">Название товара: {product.name}</p>
                                    <p className="itemDesc">Описание: {product.description}</p>
                                </div>
                                <div className="rightBlock">
                                    <p className="itemCount">Количество: {buy.count} шт.</p>
                                    <p className="itemPrice">Цена: {buy.price} руб.</p>
                                    <p className="itemAmount">Итог: {buy.amount} руб.</p>
                                    <button onClick={() => { deleteBuy(i) }} className="button">Удалить товар</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            }

        }
    }
    getBuys()
    async function createFinalBuy() {
        if (User) {
            const finalBuy = {
                id: 0,
                idUser: User.id,
                amount: finalprice,
                userPhone: "string",
                address: "string",
                user: null,
                userBasket: userBasket
            };
            axios.post(`https://localhost:7082/api/FinalBuys`, finalBuy)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    navigate("/")
                }).catch(function (error) {
                    alert("Произосла ошибка >_<")
                    return null
                })

        }
        else {
            alert("You not input count")
        }
    }

    
    if (!buys && !products) return null;
    return (
        <div className="container">
            <h2>Корзина</h2>
            <div className="selector">
                <p>Ваш заказ</p>
                {view}
                <p>Итоговая цена: {finalprice} руб.</p>
            </div>
            <div>
                <button className="button" onClick={createFinalBuy}>Оформить заказ</button>
                <button className="button" >Очистить корзину</button>
            </div>
        </div>
    )
}
export default Basket