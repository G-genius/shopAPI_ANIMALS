import axios from 'axios';
import React, { useEffect, useState } from "react";
import corm from "../img/asortiment_cats/korm/1.webp";

function CatalogItem() {
    return (
        <div class="catalog-item">
            <div class="catalog-item__wrapper">
                <div class="catalog-item__content catalog-item__content_active">
                    <img src={corm} alt="" class="catalog-item__img" />
                    <div class="catalog-item__subtitle">Сухой корм для кошек ALL CATS</div>
                    <div class="catalog-item__descr">Для кострированных кошек</div>
                    <a href="" class="catalog-item__link">Подробнее</a>
                </div>
                <ul class="catalog-item__list">
                    <li>Райское наслаждение питомца</li>
                    <li>Сытость в течении 6 часов</li>
                    <li>Натуральный состав</li>
                    <li>Срок годности до 3 недель</li>
                    <a href="#" class="catalog-item__back">назад</a>
                </ul>
            </div>
            <hr />
            <div class="catalog-item__footer">
                <div class="catalog-item__prices">
                    <div class="catalog-item__old-price">4 750руб.</div>
                    <div class="catalog-item__price">4500 руб.</div>
                </div>
                <button class="button button_mini">Купить</button>
            </div>
        </div>
    )
}
export default CatalogItem