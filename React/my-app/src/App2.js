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
<h1>������!</h1>
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
            {/*        <h2 class="title" id="title">������� ������� ��� ��������</h2>*/}
            {/*        <h2 class="title title_2">������ ��� �����:</h2>*/}
            {/*        <ul class="catalog__tabs">*/}
            {/*            <li class="catalog__tab catalog__tab_active"><div>����</div></li>*/}
            {/*            <li class="catalog__tab"><div>������</div></li>*/}
            {/*            <li class="catalog__tab"><div>���������</div></li>*/}
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
