import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style_reg.css"

function Login({ funcIslog, funcIsReg }) {
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const navigate = useNavigate()

    // function fioOnChange(event) {
    //     setFio(event.target.value)
    // }
    //
    // function emailOnChange(event) {
    //     setEmail(event.target.value)
    // }

    function passwordOnChange(event) {
        setPassword(event.target.value)
    }

    function userNameOnChange(event) {
        setUserName(event.target.value)
    }

    async function Authorization() {
        axios.get(`https://localhost:7082/api/Users`)
            .then(res => {
                console.log((res.data))
                console.log(res.data[0].userName);
                console.log(userName)
                let test = false;
                for(let i = 0; i < res.data.length;i++){
                    if (res.data[i].userName == userName && res.data[i].password == password){

                        test = true;
                        break;
                    }
                    
                }
                if (test) {
                    alert("Вход выполнен!")
                    navigate('/')
                }
                else {
                    alert("Неправильный логин или пароль")
                    
                }
            })
    }

    return (
        <div class="modal" id="log">
            <div class="modal__close">&times;</div>
            <form class="modal feed-form feed-form_mt25" action="#">
                <h2 class="modal__subtitle">Войти</h2>
                <p>Введите логин</p>
                <input onChange={userNameOnChange} name="login" required type="text" placeholder="Ваш Логин" />
                <p>Введите пароль</p>
                <input onChange={passwordOnChange} name="password" required type="password" placeholder="Ваш пароль" />
                <button onClick={Authorization} class="button button__submit">Войти</button>
            </form>
        </div>
    )
}
export default Login