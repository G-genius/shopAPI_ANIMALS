import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header({ isLogin, userName }) {
    
    const navigate = useNavigate()
    function onClickAuth() {
        navigate('/Auth')
    }

    function onClickReg() {
        navigate('/Reg')
    }
    function onClickExit() {
        window.location.reload();
    }
    function Basket() {
        navigate("/Basket")
    }

    

    let view = []
    function buildView() {
        view = []
        if (isLogin) {
            view.push(<button class="button" data-modal="log" onClick={onClickExit}>Выйти</button>)
            view.push(<button class="button" onClick={Basket}>Корзина</button>)
            view.push(<p>Здравствуйте, {userName}</p>)
            console.log(userName)
        }
        else {
            view.push(<button class="button" data-modal="log" onClick={onClickAuth}>Войти</button>)
            view.push(<button data-modal="reg" class="button" onClick={onClickReg}>Зарегистрироваться</button>)
        }
    }
    buildView()

    return (
        <div>
            <div id="up" class="promo">
                <div class="container">
                    <header class="header">
                        <Link to="/" class="header__logo">
                            <img src="/img/bg/header/logo.png" alt="logo" />
                        </Link>
                        <div class="header__official">
                            Интернет-магазин
                            <span>"ГАВС"</span>
                        </div>
                        <div class="header__contacts">
                            {view}
                        </div>
                    </header>
                </div>
            </div>
        </div>
    )
}
export default Header