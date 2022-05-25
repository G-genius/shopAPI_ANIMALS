import Products from './Components/Products';
import Users from './Components/Users';
import CreateProduct from './Components/CreateProduct';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Registration from './Pages/Registration';
import Authorization from "./Pages/Authorization";
import InfoProduct from "./Pages/InfoProduct"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { useEffect, useState } from 'react';
import Home from './Pages/Home';

function App() {
    const [isLogin, setIsLogin] = useState(false)
    

  

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
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Reg" element={<Registration />} />
                <Route path="/Auth" element={<Authorization />} />
                <Route path="/product" element={<InfoProduct />} />
            </Routes>

            <Footer />
        </div>

    )

}

export default App;