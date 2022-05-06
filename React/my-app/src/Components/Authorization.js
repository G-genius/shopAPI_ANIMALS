import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import "./style_reg.css"


function Login({ funcIslog, funcIsReg }) {
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')


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
                    funcIslog(true)
                    
                }
                else {
                    alert("Неправильный логин или пароль")
                }
            })
    }

    

    return (
        <div className="Authorization">
            <h3 id="Title" align="center">Вход в систему</h3>

            <p>Ваше имя: <input onChange={userNameOnChange} placeholder="Input username" /></p>

            <p>Пароль: <input onChange={passwordOnChange} placeholder="Input password" type="password" /></p>

            <p> <input type="checkbox"  name="remember" /> Запомнить меня </p>
            
            <button onClick={Authorization}>Войти</button>
        </div>
    )
    render()
}
export default Login