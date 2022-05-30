import axios from 'axios';
import React, { useEffect, useState } from "react";
import "./style_reg.css"
import { useNavigate } from "react-router-dom";

function CreateProduct() {
    const navigate = useNavigate()
    const [fio, setFio] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    function fioOnChange(event) {
        setFio(event.target.value)
    }

    function emailOnChange(event) {
        setEmail(event.target.value)
    }

    function passwordOnChange(event) {
        setPassword(event.target.value)
    }

    function userNameOnChange(event) {
        setUserName(event.target.value)
    }

    async function Registration() {
        if (fio && email && password && userName) {
            const users = {
                id: 0,
                fio: fio,
                email: email,
                password: password,
                userName: userName,
                idRole: 1
            };
            axios.post(`https://localhost:7082/api/Users`, users)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            alert(userName + ", вы успешно зарегистрированы")
            navigate("/Auth")

        }
        else {
            alert("Пожлуйста, заполните все поля!")
        }
    }

    return (
        <div class="modal" id="reg">
            <form class="modal feed-form feed-form_mt25" action="#">
                <h2 class="modal__subtitle">Регистрация:</h2>
                <p>Введите логин</p>
                <input onChange={userNameOnChange} name="login" reguired type="text" placeholder="Логин" />
                <p>Введите ФИО</p>
                <input onChange={fioOnChange} name="name" required type="text" placeholder="Ваше ФИО" />
                <p>Введите email</p>
                <input onChange={emailOnChange} name="email" required type="email" placeholder="Ваш email" />
                <p>Введите пароль</p>
                <input onChange={passwordOnChange} name="password" required type="password" placeholder="Ваш пароль" />
                <button onClick={Registration} class="button button__submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}
export default CreateProduct