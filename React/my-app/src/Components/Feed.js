function Feedback() {
    return (
        <div>
            <section className="feed">
                <div className="container">
                    <h2 className="title">отзывы клиентов</h2>
                    <div className="feed__item">
                        <img src="/img/user/1.jpg" alt="Виталя Лобанов" className="feed__img" />
                        <div className="feed__text">
                            <div className="feed__subtitle">Виталя Лобанов</div>
                            <div className="feed__count">2 заказа</div>
                            <div className="feed__descr">
                                Обратился к ребятам из ГАВС - подобрали товар, который подошёл именно под моего питомца и финансовые возможности.
                                Через некоторое время решил купить ошейник - не раздумывая обратился туда же.
                                <br /><br />
                                Новые товары - новое впечатление!
                                <br /><br />
                                Спасибо, ГАВС!
                            </div>
                        </div>
                    </div>
                    <div className="feed__item">
                        <img src="/img/user/2.jpg" alt="Андрей Шершнев" className="feed__img" />
                        <div className="feed__text">
                            <div className="feed__subtitle">Андрей Шершнев</div>
                            <div className="feed__count">3 заказа</div>
                            <div className="feed__descr">
                                Хороший магазин с добрым и отзывчивым персоналом каких мало. Позвонил проконсультироваться и узнать насчет цены. Ребята помогли и подобрали товар под нужды моего животного.
                                Лучший магазин товаров для животных!
                                <br /><br />
                                Персонал оставил после себя хорошее первое впечатление! Спасибо!!!
                            </div>
                        </div>
                    </div>
                    <div className="feed__item">
                        <img src="/img/user/3.jpg" alt="Егор Капустин" className="feed__img" />
                        <div className="feed__text">
                            <div className="feed__subtitle">Егор Капустин</div>
                            <div className="feed__count">5 заказов</div>
                            <div className="feed__descr">
                                Долго искал 1 товар по разным магазинам и только тут мне смогли помочь. Хороший персонал, с которым всегда можно договариться и низкие цены!
                                <br /><br />
                                Позвонил, ребята поинтересовались моими целями и подобрали очень интересный вариант со скидкой! Теперь покупаю все самое необходимое для животного только там!
                                <br /><br />
                                Спасибо!!!
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Feedback