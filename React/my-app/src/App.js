import CreateProduct from './Components/CreateProduct';
import { Routes, Route } from 'react-router-dom';
import Registration from './Pages/Registration';
import Authorization from "./Pages/Authorization";
import InfoProduct from "./Pages/InfoProduct"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { useEffect, useState } from 'react';
import Home from './Pages/Home';
import "./css/style.min.css"
import NotFoundPage from './Pages/NotFoundPage';
import Basket from './Pages/Basket';

function App() {
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState([])

    function changeIsLogin(res, user) {
        setIsLogin(res)
        setUser(user)
    }
    useEffect(() => {
        console.log(user.userName)
    }, [isLogin])
    if (!user) return null;
    return (
        <div className="App">
            <Header isLogin={isLogin} userName={user.userName}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Reg" element={<Registration />} />
                <Route path="/Basket" element={<Basket User={user} />} />
                <Route path="/Basket/:id" element={<Basket />} />
                <Route path="/Auth" element={<Authorization funcIslog={changeIsLogin} />} />
                <Route path="/product/:id" element={<InfoProduct User={user}/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </div>

    )

}

export default App;