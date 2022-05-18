import axios from 'axios';
import React, { useEffect, useState } from "react";
import corm from "./1.webp";

function CatalogItem({ idCategory }) {
    const [products, setProducts] = useState()

    useEffect(() => {
        axios.get(`https://localhost:7082/api/Products`)
            .then(res => {
                const products2 = res.data;
                setProducts(products2)
            })
    }, [])

    if (!products) return null;

    let view = []

    async function test() {
        if (products != undefined) {
            view = []
            for (let i = 0; i < products.length; i++) {
                let product = products[i]
                if (idCategory == product.idCategory) {
                    view.push(<div className="catalog-item">
                        <div className="catalog-item__wrapper">
                            <div className="catalog-item__content catalog-item__content_active">
                                <img src={product.urlImage} alt="" className="catalog-item__img" />
                                <div className="catalog-item__subtitle">{product.name}</div>
                                <div className="catalog-item__descr">{product.description}</div>
                                <a href="" className="catalog-item__link">Подробнее</a>
                            </div>
                            <ul className="catalog-item__list">
                                <li>Райское наслаждение питомца</li>
                                <li>Сытость в течении 6 часов</li>
                                <li>Натуральный состав</li>
                                <li>Срок годности до 3 недель</li>
                                <a href="#" className="catalog-item__back">назад</a>
                            </ul>
                        </div>
                        <hr />
                        <div className="catalog-item__footer">
                            <div className="catalog-item__prices">
                                {/*<div className="catalog-item__old-price">4 750руб.</div>*/}
                                <div className="catalog-item__price">{product.price} руб.</div>
                            </div>
                            <button className="button button_mini">Купить</button>
                        </div>
                    </div>)
                }
            }
            
        }
    }
    test()

    return (
        <div>{view}</div>
        
    )
}
export default CatalogItem