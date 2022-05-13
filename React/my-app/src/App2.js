import logo from './img/bg/header/logo.png';
import './App.css';
import './css/bootstrap-reboot.min.css';
import './css/bootstrap-grid.min.css';
import './css/slick.css';
import './css/style.min.css';
import Products from './Components/Products';
import Users from './Components/Users';
import CreateProduct from './Components/CreateProduct';
import Registration from './Components/Registration';
import Authorization from "./Components/Authorization";
import CatalogItem from './Components/CatalogItem';

let isLogin = false

function App() {
    console.log(isLogin)
    return (
        <div>
            <script type="text/javascript" charset="utf-8" src="http://domain.ru/js/script.js"></script>
<h1>Привет!</h1>
            {/*<header className="App-header">*/}
            {/*        <img src={logo} className="App-logo" alt="logo" />*/}
            {/*        <Authorization isLogin={isLogin} />*/}
            {/*        <Registration />*/}
            {/*        <Products />*/}
            {/*        <Users/>*/}
            {/*    <CreateProduct/>*/}
            {/*    </header>*/}
            {/*<section class="catalog">*/}
            {/*    <div class="container">*/}
            {/*        <h2 class="title" id="title">Каталог Товаров для животных</h2>*/}
            {/*        <h2 class="title title_2">Товары для кошек:</h2>*/}
            {/*        <ul class="catalog__tabs">*/}
            {/*            <li class="catalog__tab catalog__tab_active"><div>Корм</div></li>*/}
            {/*            <li class="catalog__tab"><div>Защита</div></li>*/}
            {/*            <li class="catalog__tab"><div>Лакомства</div></li>*/}
            {/*        </ul>*/}
            {/*        <div class="catalog__content catalog__content_active">*/}
            {/*            <CatalogItem />*/}
            {/*            <CatalogItem />*/}
            {/*            <CatalogItem />*/}
            {/*            <CatalogItem />*/}
            {/*            <CatalogItem />*/}
            {/*            <CatalogItem />*/}
            {/*        </div>*/}


            {/*        <div class="catalog__content">*/}
            {/*            <CatalogItem />*/}
            {/*            <CatalogItem />*/}
            {/*        </div>*/}


            {/*        <div class="catalog__content">*/}
            
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
        </div>
  );
}

export default App;
