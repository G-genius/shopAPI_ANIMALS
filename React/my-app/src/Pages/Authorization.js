import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style_reg.css"

function Login({ funcIslog, funcIsReg }) {
    const [users, setUsers] = useState([])
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

    useEffect(() => {
        axios.get(`https://localhost:7082/api/Users`)
            .then(res => {
                console.log((res.data));
                setUsers(res.data)
            })
    }, [])

    function passwordOnChange(event) {
        setPassword(event.target.value)
    }

    function userNameOnChange(event) {
        setUserName(event.target.value)
    }
    async function Authorization() {
        
        let test = false
        for (let i = 0; i < users.length; i++) {
            if (users[i].userName == userName && users[i].password == password) {
                test = true;
                break;
            }

        }
        if (test) {
            navigate("/")
        }
        else {
            alert("Неправильный логин или пароль")
        }
    }

    return (
        <div className="modal" id="log">
            <div className="modal__close">&times;</div>
            <form className="modal feed-form feed-form_mt25" action="#">
                <h2 className="modal__subtitle">Войти</h2>
                <p>Введите логин</p>
                <input onChange={userNameOnChange} name="login" required type="text" placeholder="Ваш Логин" />
                <p>Введите пароль</p>
                <input onChange={passwordOnChange} name="password" required type="password" placeholder="Ваш пароль" />
                <button onClick={Authorization} className="button button__submit">Войти</button>
            </form>
        </div>
    )
}
export default Login