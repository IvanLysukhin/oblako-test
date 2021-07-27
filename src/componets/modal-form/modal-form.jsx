import "../../style/modal-form.sass"
import "../../style/event-input.sass"

function ModalForm() {
    return (
        <section className="modal-form">
            <div className="modal-form__container">
                <div className="modal-form__header">
                    <h2 className="modal-form__title">Планирование</h2>
                    <div className="modal-form__btn-box">
                        <button className="modal-form__btn modal-form__btn--ok">
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.99991 9.17L1.82991 5L0.409912 6.41L5.99991 12L15.9999 2L14.5899 0.589996L5.99991 9.17Z" fill="#1071FF"/>
                            </svg>
                        </button>
                        <button className="modal-form__btn modal-form__btn--close">
                            <svg width="14" height="14" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 1.5575L8.4425 0.5L5 3.9425L1.5575 0.5L0.5 1.5575L3.9425 5L0.5 8.4425L1.5575 9.5L5 6.0575L8.4425 9.5L9.5 8.4425L6.0575 5L9.5 1.5575Z"
                                      fill="black"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <nav className="modal-form__nav">
                    <ul className="modal-form__nav-list">
                        <li className="modal-form__nav-item">
                            <a className="modal-form__nav-link modal-form__nav-link--current" href="#">Основное</a>
                        </li>
                        <li className="modal-form__nav-item">
                            <a className="modal-form__nav-link" href="#">Участники</a>
                        </li>
                    </ul>
                </nav>
                <div className="modal-form__main">
                    <form className="main-from" action="#">
                        <div className="main-from__program">
                            <label className="main-from__program-label" htmlFor="program-modal">Программа</label>
                            <select className="main-from__program-input"  name="program-modal" id="program-modal">
                                <option value="insurance">Страхование с заботой о клиенте</option>
                                <option value="insurance">Страхование с заботой о клиенте</option>
                                <option value="insurance">Страхование с заботой о клиенте</option>
                            </select>
                        </div>
                        <div className="main-from__info-box">
                            <h3 className="main-from__info-title">Мероприятие, дата и время проведения</h3>
                            <ul className="main-from__info-list">
                                <li className="main-from__info-item">
                                    <div className="main-from__input-box event-input">
                                        <div className="event-input__name">
                                            <label className="event-input__name-label" htmlFor="event-name">Мероприятие</label>
                                            <input className="event-input__name-input event-input__name-input--train" type="text" id="event-name" name="event-name" defaultValue="Главные правила продаж"/>
                                        </div>
                                        <ul className="event-input__info-inputs">
                                            <li className="event-input__info-item event-input__info-item--date">
                                                <label className="event-input__name-label" htmlFor="event-date">Дата</label>
                                                <input className="event-input__info-input event-input__info-input--active" type="text" id="event-date" name="event-date" defaultValue="28 Ноября" placeholder="Дата"/>
                                            </li>
                                            <li className="event-input__info-item event-input__info-item--time">
                                                <label className="event-input__name-label" htmlFor="event-time">Время</label>
                                                <input className="event-input__info-input event-input__info-input--active" type="text" id="event-time" name="event-time" defaultValue="9:00" placeholder="Время"/>
                                            </li>
                                            <li className="event-input__info-item event-input__info-item--coach">
                                                <label className="event-input__name-label" htmlFor="event-coach">Тренер</label>
                                                <input className="event-input__info-input event-input__info-input--active" type="text" id="event-coach" name="event-coach" defaultValue="Сергей Ефремов" placeholder="Тренер"/>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="main-from__info-item">
                                    <div className="main-from__input-box event-input">
                                        <div className="event-input__name">
                                            <label className="event-input__name-label" htmlFor="event-name">Мероприятие</label>
                                            <input className="event-input__name-input" type="text" id="event-name" name="event-name" defaultValue="Страхование без потерь"/>
                                        </div>
                                        <ul className="event-input__info-inputs">
                                            <li className="event-input__info-item event-input__info-item--empty event-input__info-item--date">
                                                <label className="event-input__name-label event-input__name-label--empty" htmlFor="event-date">Дата</label>
                                                <input className="event-input__info-input event-input__info-input--empty" type="text" id="event-date" name="event-date" placeholder="Дата"/>
                                            </li>
                                            <li className="event-input__info-item event-input__info-item--empty event-input__info-item--time">
                                                <label className="event-input__name-label event-input__name-label--empty" htmlFor="event-time">Время</label>
                                                <input className="event-input__info-input event-input__info-input--empty" type="text" id="event-time" name="event-time" placeholder="Время"/>
                                            </li>
                                            <li className="event-input__info-item event-input__info-item--empty event-input__info-item--coach">
                                                <label className="event-input__name-label event-input__name-label--empty" htmlFor="event-coach">Тренер</label>
                                                <input className="event-input__info-input event-input__info-input--empty" type="text" id="event-coach" name="event-coach" placeholder="Тренер"/>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="main-from__info-item">
                                    <div className="main-from__input-box event-input">
                                        <div className="event-input__name">
                                            <label className="event-input__name-label" htmlFor="event-name">Мероприятие</label>
                                            <input className="event-input__name-input" type="text" id="event-name" name="event-name" defaultValue="Страховой случай или как помочь клиенту"/>
                                        </div>
                                        <ul className="event-input__info-inputs">
                                            <li className="event-input__info-item event-input__info-item--empty event-input__info-item--date">
                                                <label className="event-input__name-label event-input__name-label--empty" htmlFor="event-date">Дата</label>
                                                <input className="event-input__name-input event-input__name-input--empty" type="text" id="event-date" name="event-date" placeholder="Дата"/>
                                            </li>
                                            <li className="event-input__info-item event-input__info-item--empty event-input__info-item--time">
                                                <label className="event-input__name-label event-input__name-label--empty" htmlFor="event-time">Время</label>
                                                <input className="event-input__name-input event-input__name-input--empty" type="text" id="event-time" name="event-time" placeholder="Время"/>
                                            </li>
                                            <li className="event-input__info-item event-input__info-item--empty event-input__info-item--coach">
                                                <label className="event-input__name-label event-input__name-label--empty" htmlFor="event-coach">Тренер</label>
                                                <input className="event-input__name-input event-input__name-input--empty" type="text" id="event-coach" name="event-coach" placeholder="Тренер"/>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="main-from__code">
                            <h3 className="main-from__code-title">Условия записи по коду</h3>
                            <ul className="main-from__code-list">
                                <li className="main-from__code-item">
                                    <input className="main-from__code-input" name="code" id="no-code" value="no-code" type="radio" defaultChecked/>
                                    <label className="main-from__code-label" htmlFor="no-code">Не использовать код доступа</label>
                                </li>
                                <li className="main-from__code-item">
                                    <input className="main-from__code-input" name="code" id="reg" value="reg" type="radio"/>
                                    <label className="main-from__code-label" htmlFor="reg">Требовать регистрацию</label>
                                </li>
                                <li className="main-from__code-item">
                                    <input className="main-from__code-input" name="code" id="get-name" value="get-name" type="radio"/>
                                    <label className="main-from__code-label" htmlFor="get-name">Запросить только имя и фамилию</label>
                                </li>
                                <li className="main-from__code-item">
                                    <input className="main-from__code-input" name="code" id="no-reg" value="no-reg" type="radio"/>
                                    <label className="main-from__code-label" htmlFor="no-reg">Не требовать регистрацию, имя и фамилию</label>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ModalForm;
