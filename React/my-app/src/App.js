import logo from './logo.svg';
import Products from './Components/Products';
import Users from './Components/Users';
import CreateProduct from './Components/CreateProduct';
import Registration from './Components/Registration';
import Authorization from "./Components/Authorization";
import CatalogItem from './Components/CatalogItem';

import { useState } from 'react';

let signin = document.getElementById('signIn')
let signup = document.getElementById('signUp')
let func = document.getElementById("func")

async function Hide() {
    signin.style.display = "none"
    signup.style.display = "none"
}

function App() {
    const [isLogin, setIsLogin] = useState(false)
    const [isReg, setIsReg] = useState(false)

    function changeIsLogin(res) {
        setIsLogin(res)
        alert("Login changed")
    }

    /*isLogin = Authorization()*/
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
    viewFunc()
    function signInHide() {

        if (signin.style.display == "none") {
            signin.style.display = "block"
        }
        else if (signin.style.display == "block") {
            signin.style.display = "none"
        }
    }
    function signUpHide() {

        if (signup.style.display == "none") {
            signup.style.display = "block"
        }
        else if (signup.style.display == "block") {
            signup.style.display = "none"
        }
    }
    console.log(isLogin)

    return (
        <div className="App">
            {/*<Products />*/}
        </div>
    )

}

export default App;