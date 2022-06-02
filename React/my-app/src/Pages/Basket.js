import axios from 'axios';
import React, { createElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Basket.css";
import InputMask from 'react-input-mask';
function Basket({ User }) {

    const [buys, setBuys] = useState([])
    const [products, setProducts] = useState([])
    let finalprice = 0
    const navigate = useNavigate()
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

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
    let viewInfo = []
    let userBasket = []

    function deleteBuy(id) {
        let path = "https://localhost:7082/api/Buys/" + id
        axios.delete(path)
        navigate("/")
    }

    function clearBasket() {
        for (let i = 0; i < userBasket.length; i++) {
            deleteBuy(userBasket[i].id)
        }
        navigate("/")
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
                                    <button onClick={() => { deleteBuy(buy.id) }} className="button">Удалить товар</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
            console.log(userBasket)
            viewInfo = []
            if (userBasket.length == 0) {
                view.push(<p>Корзина пуста</p>)
            } else {
                viewInfo.push(
                    <div className="itogInfo">
                        <p>Адрес: <input onChange={addressOnChange} /></p>
                        <p>Телефон: <InputMask mask="+7 \999 999-99-99" maskChar=" " onChange={phoneOnChange} /></p>
                        <p>Итоговая цена: {finalprice} руб.</p>
                        <div className="basketButtons">
                            <button className="button" onClick={createFinalBuy}>Оформить заказ</button>
                            <button className="button" onClick={clearBasket}>Очистить корзину</button>
                        </div>
                    </div>)
            }
        }
    }
    getBuys()
    async function createFinalBuy() {
        if (User && address && phone && userBasket.length != 0) {
            const finalBuy = {
                id: 0,
                idUser: User.id,
                amount: finalprice,
                userPhone: phone,
                address: address,
                user: null,
                userBasket: userBasket
            };
            axios.post(`https://localhost:7082/api/FinalBuys`, finalBuy)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    navigate("/FinalText")
                }).catch(function (error) {
                    alert("Произосла ошибка >_<")
                    return null
                })
        }
        else {
            alert("Не все поля заполнены!")
        }
    }

    function phoneOnChange(event) {
        setPhone(event.target.value)
    }

    function addressOnChange(event) {
        setAddress(event.target.value)
    }

    if (!buys && !products) return null;
    return (
        <div className="container">
            <div className="productItemInfo">
                <div className="selector">
                    <h2>Корзина</h2>
                    {view}
                </div>
                {viewInfo}
            </div>
        </div>
    )
}
export default Basket