import logo from './img/bg/header/logo.png';
import timer from './icons/header/stopwatch.png'
import cart from './icons/header/hand-cart.png'
import messages from './icons/header/messages.png'
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
import acceptLanguage from 'accept-language'
import CatalogItem from './Components/CatalogItem';
import map from "./icons/advantages/2.webp"
import woman from "./icons/advantages/3.webp"
import shoe from "./icons/advantages/4.webp"
import car from "./icons/advantages/5.webp"
import cart2 from "./icons/advantages/6.webp"
import phone from "./icons/advantages/7.webp"
import vk from "./icons/footer/1.svg"
import facebook from "./icons/footer/2.svg"
import instagram from "./icons/footer/3.svg"
import scrollup from "./icons/scrollup.svg"


import "./js/script.js"


acceptLanguage.languages(['en','ru'])

let isLogin = false

function App() {
    console.log(isLogin)
    return (
        <div>
            <section id="up" class="promo">
                {/*<header className="App-header">*/}
                {/*        <img src={logo} className="App-logo" alt="logo" />*/}
                {/*        <Authorization isLogin={isLogin} />*/}
                {/*        <Registration />*/}
                {/*        <Products />*/}
                {/*        <Users/>*/}
                {/*    <CreateProduct/>*/}
                {/*    </header>*/}

                <div className="container">
                    <header className="header">
                        <a href="" class="header__logo">
                            <img src={logo} alt="logo" />
                        </a>
                        <div className="header__official">
                            Интернет-магазин
                            <p><span>"ГАВС"</span></p>

                        </div>
                        <div className="header__contacts">
                            <a href="tel:74999228974" className="header__phone">
                                7 (499) 922-89-74
                            </a>
                            <button data-modal="consultation" class="button">Заказать звонок</button>
                            <button data-modal="log" class="button">Войти</button>
                            <button data-modal="reg" class="button">Зарегистрироваться</button>
                        </div>
                    </header>
                    <div class="promo__wrapper">
                        <h1 class="promo__header">Интернет магазин ГАВС</h1>
                        <h2 class="promo__subheader">Для ваших домашних животных</h2>

                        <div class="promo__icons">
                            <div class="promo__icon">
                                <img src={timer} alt="timer" />
                                Время подбора: 10 минут
                            </div>
                            <div class="promo__icon">
                                <img src={cart} alt="cart" />
                                Бесплатная доставка
                            </div>
                            <div class="promo__icon">
                                <img src={messages} alt="messages" />
                                Ответим на все вопросы
                            </div>
                        </div>
                        <button data-modal="consultation" class="button button_main">Заказать консультацию</button>
                        <div class="promo__link">
                            или
                            <a href="#title">Перейти в каталог</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="consultation">
                <div class="container">
                    <h2 class="title title_left">
                        Получите бесплатную консультацию<br /> по подбору товара для определенного животного
                    </h2>
                    <div class="consultation__descr">
                        Просто заполните форму заявки<br /> и мы перезвоним вам в течении 10 минут
                    </div>
                    <form id="consultation-form" class="feed-form" action="#">
                        <input name="name" required type="text" placeholder="Ваше имя" />
                        <input name="phone" required placeholder="Ваш телефон" />
                        <input name="email" required type="email" placeholder="Ваш email" />
                        <button class="button button__submit">Заказать консультацию</button>
                    </form>
                </div>
            </section>

            <section class="carousel">
                <div class="container">
                    <div class="carousel__inner">
                        <div>
                            <img src="/img/asortiment_cats/defence/3.webp" alt="" />
                        </div>
                        <div>
                            <img src="/img/asortiment_cats/defence/3.webp" alt="" />
                        </div>
                        <div>
                            <img src="/img/asortiment_cats/cat litter/1.webp" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="catalog">
                <div class="container">
                    <h2 class="title" id="title">Каталог Товаров для животных</h2>
                    <h2 class="title title_2">Товары для кошек:</h2>
                    <ul class="catalog__tabs">
                        <li class="catalog__tab catalog__tab_active"><div>Корм</div></li>
                        <li class="catalog__tab"><div>Защита</div></li>
                        <li class="catalog__tab"><div>Лакомства</div></li>
                    </ul>
                    <div class="catalog__content catalog__content_active">
                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
                    </div>


                    <div class="catalog__content">
                        <CatalogItem />
                        <CatalogItem />
                    </div>


                    <div class="catalog__content">
                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
                    </div>
                </div>
            </section>

            <section class="advantages">
                <div class="container">
                    <h2 class="title">НАШИ ПРЕИМУЩЕСТВА</h2>
                    <div class="advantages__wrapper">
                        <div class="advantages__item">
                            <img src={map} alt="map" class="advantages__icon" />
                            <div class="advantages__subtitle">
                                МАГАЗИНЫ В ГОРОДЕ
                            </div>
                            <div class="advantages__descr">
                                Удобная карта покажет адреса и режим работы всех магазинов в вашем городе. Специальные значки помогут выбрать магазины с необходимыми товарами и услугами.
                            </div>
                        </div>
                        <div class="advantages__item">
                            <img src={woman} alt="woman" class="advantages__icon" />
                            <div class="advantages__subtitle">
                                ПОМОЩЬ СПЕЦИАЛИСТА
                            </div>
                            <div class="advantages__descr">
                                Ищите ответы на самые популярные вопросы в нашей энциклопедии статей. Задавайте вопросы профессионалам, получайте консультации по кормлению и содержанию питомца.
                            </div>
                        </div>
                        <div class="advantages__item">
                            <img src={shoe} alt="shoe" class="advantages__icon" />
                            <div class="advantages__subtitle">
                                БЫСТРЫЙ ЗАКАЗ
                            </div>
                            <div class="advantages__descr">
                                Оформляйте заказ где и когда вам удобно. Больше не нужно тратить время на прохождение всех этапов в корзине. Повторить заказ стало еще проще с сервисом Подписка на доставку!
                            </div>
                        </div>
                        <div class="advantages__item">
                            <img src={phone} alt="phone" class="advantages__icon" />
                            <div class="advantages__subtitle">
                                УДОБНОЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
                            </div>
                            <div class="advantages__descr">
                                Зоомагазин в вашем кармане! Теперь пользователи iOS и Android могут делать заказы для питомцев в любом месте не отрываясь от повседневных дел. Как скачать приложение?
                            </div>
                        </div>
                        <div class="advantages__item">
                            <img src={car} alt="car" class="advantages__icon" />
                            <div class="advantages__subtitle">
                                САМОВЫВОЗ
                            </div>
                            <div class="advantages__descr">
                                Выбирайте товары на сайте или в приложении и забирайте в удобное для вас время в любом из магазинов «ГАВС».Уже через 30 минут собранный и упакованный заказ будет ждать вас в магазине.
                            </div>
                        </div>
                        <div class="advantages__item">
                            <img src={cart2} alt="cart2" class="advantages__icon" />
                            <div class="advantages__subtitle">
                                Мы гордимся тем, что делаем!
                            </div>
                            <div class="advantages__descr">
                                Наша работа помогает сделать этот мир лучше, потому что домашние питомцы приносят радостные эмоции и ощущение полноты жизни. Выберите свой зоомагазин ГАВС и получайте удовольствие от покупок и общения с питомцем. Мы всегда рады видеть Вас!
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <footer class="footer">
                {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.8848574382096!2d36.28692241744385!3d54.517892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4134b962a5e0927b%3A0x77fa38e436e96e3d!2z0JPQkdCf0J7QoyDQmtCeICLQmtCw0LvRg9C20YHQutC40Lkg0YLQtdGF0L3QuNC60YPQvCDRjdC70LXQutGC0YDQvtC90L3Ri9GFINC_0YDQuNCx0L7RgNC-0LIi!5e0!3m2!1sru!2sru!4v1652178606367!5m2!1sru!2sru" width="100%" height="630" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>*/}
                <div class="footer__info">
                    <address class="footer_addr">Калуга, Калужский техникум электронных приборов</address>
                    <a class="footer__phone" href="tel: 84842737101">8(484) 273-71-01</a>
                    <div class="footer__social">
                        <a href="" class="footer__social-item"><img src={facebook} alt="facebook" /></a>
                        <a href="" class="footer__social-item"><img src={instagram} alt="instagram" /></a>
                        <a href="" class="footer__social-item"><img src={vk} alt="vk" /></a>
                    </div>
                </div>
            </footer>

            <a href="#up" class="pageup">
                <img src={scrollup} alt="" />
            </a>
        </div>
  );
}

export default App;
