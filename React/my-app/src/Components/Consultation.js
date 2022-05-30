function Consultation() {
    return (
        <div>
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
        </div>
    )
}
export default Consultation