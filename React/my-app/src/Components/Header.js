import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
    const navigate = useNavigate()
    function onClickAuth() {
        navigate('/Auth')
    }

    function onClickReg() {
        navigate('/Reg')
    }
    return (
        <div>
            <div id="up" class="promo">
                <div class="container">
                    <header class="header">
                        <a href="/" class="header__logo">
                            <img src="/img/bg/header/logo.png" alt="logo" />
                        </a>
                        <div class="header__official">
                            Интернет-магазин
                            <span>"ГАВС"</span>
                        </div>
                        <div class="header__contacts">
                            {/*<a href="tel:74999228974" class="header__phone">*/}
                            {/*    7 (499) 922-89-74*/}
                            {/*</a>*/}
                            {/*<button data-modal="consultation" class="button">Заказать звонок</button>*/}
                            <button class="button" data-modal="log" onClick={onClickAuth}>Войти</button>
                            <button data-modal="reg" class="button" onClick={onClickReg}>Зарегистрироваться</button>
                        </div>
                    </header>

                </div>
            </div>
        </div>
    )
}
export default Header