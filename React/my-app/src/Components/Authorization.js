import axios from 'axios';
import React, { useEffect, useState } from "react";
import "./style_reg.css"

function Login(isLogin) {
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
                let test = false;
                for(let i = 0; i < res.data.length;i++){
                    if (res.data[i].userName == userName && res.data[i].password == password){

                        test = true;
                        break;
                    }
                    
                }
                if (test) {
                    alert("Вход выполнен!")
                    isLogin = true;
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
}
export default Login