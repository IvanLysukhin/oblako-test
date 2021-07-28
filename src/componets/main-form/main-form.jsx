function MainForm() {
    return (
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
    );
}

export default MainForm;
