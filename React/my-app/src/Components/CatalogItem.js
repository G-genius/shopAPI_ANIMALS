import axios from 'axios';
import React, { useEffect, useState } from "react";
import corm from "../img/asortiment_cats/korm/1.webp";

function CatalogItem() {
    return (
        <div class="catalog-item">
            <div class="catalog-item__wrapper">
                <div class="catalog-item__content catalog-item__content_active">
                    <img src={corm} alt="" class="catalog-item__img" />
                    <div class="catalog-item__subtitle">����� ���� ��� ����� ALL CATS</div>
                    <div class="catalog-item__descr">��� �������������� �����</div>
                    <a href="" class="catalog-item__link">���������</a>
                </div>
                <ul class="catalog-item__list">
                    <li>������� ����������� �������</li>
                    <li>������� � ������� 6 �����</li>
                    <li>����������� ������</li>
                    <li>���� �������� �� 3 ������</li>
                    <a href="#" class="catalog-item__back">�����</a>
                </ul>
            </div>
            <hr />
            <div class="catalog-item__footer">
                <div class="catalog-item__prices">
                    <div class="catalog-item__old-price">4 750���.</div>
                    <div class="catalog-item__price">4500 ���.</div>
                </div>
                <button class="button button_mini">������</button>
            </div>
        </div>
    )
}
export default CatalogItem