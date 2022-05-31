import axios from 'axios';
import React, { useEffect, useState } from "react";



function CatalogItem({ idCategory, objectProduct }) {
    const name = "/product/" + objectProduct.id;
    return (
        <div className="catalog-item">
            <div className="catalog-item__wrapper">
                <div className="catalog-item__content catalog-item__content_active">
                    <img src={objectProduct.urlImage} alt="" className="catalog-item__img" />
                    <div className="catalog-item__subtitle">{objectProduct.name}</div>
                    <div className="catalog-item__descr">{objectProduct.description}</div>
                </div>
                {/*<ul className="catalog-item__list">*/}
                {/*    <li>Райское наслаждение питомца</li>*/}
                {/*    <li>Сытость в течении 6 часов</li>*/}
                {/*    <li>Натуральный состав</li>*/}
                {/*    <li>Срок годности до 3 недель</li>*/}
                {/*    <a href="#" className="catalog-item__back">назад</a>*/}
                {/*</ul>*/}
            </div>
            <div className="catalog-item__footer">
                <div className="catalog-item__prices">
                    {/*<div className="catalog-item__old-price">4 750руб.</div>*/}
                    <div className="catalog-item__price">{objectProduct.price} руб.</div>
                </div>
                <a href={ name} className="catalog-item__link">Подробнее</a>
            </div>
        </div>
        
    )
}
export default CatalogItem