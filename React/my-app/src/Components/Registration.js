import axios from 'axios';
import React, { useEffect, useState } from "react";

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
        }
        else {
            alert("Пожлуйста, заполните все поля!")
        }
    }

    return (
        <div>
            <p align="center">Registration</p>
            <input onChange={userNameOnChange} placeholder="Input username" />
            <input onChange={fioOnChange} placeholder="Input FIO" />
            <input onChange={emailOnChange} placeholder="Input email" />
            <input onChange={passwordOnChange} placeholder="Input password" type="password" />
            <button onClick={Registration}>Complete</button>
        </div>
    )
}
export default CreateProduct