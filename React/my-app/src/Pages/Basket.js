function Basket() {
    return (
        <div>
            <h2>Корзина</h2>
            <div className="selector">
                <p>Ваш заказ</p>
                <div className="basketItem">
                    <div className="leftBlock">
                        <img src="" />
                    </div>
                    <div className="centerBlock">
                        <p className="itemName">Название товара</p>
                        <p className="itemDesc">Описание</p>
                    </div>
                    <div className="rightBlock">
                        <p className="itemCount">100 шт.</p>
                        <p className="itemPrice">Цена</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Basket