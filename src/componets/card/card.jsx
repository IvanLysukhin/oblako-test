import "../../style/card.sass"
import {useState} from "react";

function Card() {
    const [modalStatus, setStatus] = useState(false);

    const openModal = () => {
        if (modalStatus) {
            setStatus(false)
            return;
        }
        setStatus(true)
    }

    return (
        <li className={`programs__item ${modalStatus && 'programs__item--active'}`}>
            <article className="programs__card card">
                <p className="card__text card__text--time">23 дек, 9:00</p>
                <p className="card__text card__text--name">Страхование с заботой о клиенте</p>
                <p className="card__text card__text--number">12</p>
                <p className="card__text card__text--coach"></p>
                <p className="card__text card__text--percent">95 %</p>
            </article>
            <button className={`card__edit-btn ${modalStatus && 'card__edit-btn--active'}`} onClick={openModal} type="button">
                <img className={`card__edit-pic ${modalStatus && 'card__edit-pic--active'}`} src="./img/icon-edit.svg" alt="Edit" width="3" height="11"/>
            </button>
            {modalStatus &&
            <div className="card__modal">
                <button className="card__modal-btn card__modal-btn--edit">Редактировать</button>
                <button className="card__modal-btn card__modal-btn--delete">Удалить слот</button>
            </div>
            }

        </li>
    );
}

export default Card;
