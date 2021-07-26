import "../../style/card.sass"

function Card() {
    return (
        <li className="programs__item">
            <article className="programs__card card">
                <p className="card__text card__text--time">23 дек, 9:00</p>
                <p className="card__text card__text--name">Страхование с заботой о клиенте</p>
                <p className="card__text card__text--number">12</p>
                <p className="card__text card__text--coach"></p>
                <p className="card__text card__text--percent">95 %</p>
            </article>
            <button className="card__edit-btn" type="button">
                <img className="card__edit-pic" src="./img/icon-edit.svg" alt="Edit" width="3" height="11"/>
            </button>
        </li>
    );
}

export default Card;
