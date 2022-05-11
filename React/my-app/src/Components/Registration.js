import axios from 'axios';
import React, { useEffect, useState } from "react";
import "./style_reg.css"

function CreateProduct() {
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
            };
            axios.post(`https://localhost:7082/api/Users`, users)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            alert(userName + ", вы успешно зарегистрированы")
            window.location.reload();
        }
        else {
            alert("Пожлуйста, заполните все поля!")
        }
    }

    return (
        <div className="Authorization">
            <h3 id="Title" align="center">Registration</h3>
            <p>Логин: <input onChange={userNameOnChange} placeholder="Input username" /></p>
            <p>ФИО: <input onChange={fioOnChange} placeholder="Input FIO" /></p>
            <p>Email: <input onChange={emailOnChange} placeholder="Input email" /></p>
            <p>Пароль: <input onChange={passwordOnChange} placeholder="Input password" type="password" /></p>
            <button onClick={Registration}>Complete</button>
        </div>
    )
}
export default CreateProduct