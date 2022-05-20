import Products from './Components/Products';
import Users from './Components/Users';
import CreateProduct from './Components/CreateProduct';
import { Routes, Route, Link } from 'react-router-dom';
import Registration from './Pages/Registration';
import Authorization from "./Pages/Authorization";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Catalog from './Components/Catalog';
import Home from './Pages/Home';

function App() {
    const [isLogin, setIsLogin] = useState(false)
    const [isReg, setIsReg] = useState(false)
    const navigate = useNavigate()

    function onClickAuth() {
        navigate('/Auth')
    }

    function onClickReg() {
        navigate('/Reg')
    }

    function changeIsLogin(res) {
        setIsLogin(res)
        alert("Login changed")
    }

    let view = []

    function viewFunc() {
        if (isLogin == true) {
            view.push(<div id="func" >
                <Products />
                <Users />
                <CreateProduct />
            </div>)
        }
    }

    return (
        <div className="App">
            <section id="up" class="promo">
                <div class="container">
                    <header class="header">
                        <a href="/" class="header__logo">
                            <img src="/img/bg/header/logo.png" alt="logo"/>
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
            </section>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Reg" element={<Registration />} />
                <Route path="/Auth" element={<Authorization />} />
            </Routes>
        </div>

    )

}

export default App;