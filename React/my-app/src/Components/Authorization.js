import axios from 'axios';
import React, { useEffect, useState } from "react";

function Login() {
    // const [fio, setFio] = useState('')
    // const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

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

                for(let i = 0; i < res.data.length;i++){
                    if (res.data[i].userName == userName && res.data[i].password == password){

                        alert("Вход выполнен")
                    }
                    else {
                        alert("Неправильный логин или пароль")
                    }
                }
            })
    }

    return (
        <div>
            <p align="center">Authorization</p>
            <input onChange={userNameOnChange} placeholder="Input username" />
            {/*<input onChange={fioOnChange} placeholder="Input FIO" />*/}
            {/*<input onChange={emailOnChange} placeholder="Input email" />*/}
            <input onChange={passwordOnChange} placeholder="Input password" type="password" />
            <button onClick={Authorization}>Complete</button>
        </div>
    )
}
export default Login