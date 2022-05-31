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

function App() {
    const [isLogin, setIsLogin] = useState(false)
    
    function changeIsLogin(res) {
        setIsLogin(res)
        alert("Login changed")
    }

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Reg" element={<Registration />} />
                <Route path="/Auth" element={<Authorization />} />s
                <Route path="/product/:id" element={<InfoProduct />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </div>

    )

}

export default App;