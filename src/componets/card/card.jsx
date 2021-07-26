import "../../style/card.sass"

function Card() {
    return (
        <li className="programs__item">
            <article className="programs__card card">
                <p className="card__text card__text--time">23 дек, 9:00</p>
                <p className="card__text card__text--name">Страхование с заботой о клиенте</p>
                <p className="card__text card__text--number">12</p>
                <p className="card__text card__text--percent">95 %</p>
            </article>
        </li>
    );
}

export default Card;
