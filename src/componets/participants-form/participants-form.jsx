import AvailableParticipants from "../available-participants/available-participants";

function ParticipantsForm () {
    return (
        <div className="participants-form">
            <form className="participants-form__form" action="#">
                <div className="participants-form__available-participants">
                    <h3 className="participants-form__title">Доступные участники</h3>
                    <ul className="filter-form__list participants-form__list">
                        <li className="participants-form__item filter-form__item filter-form__item--search">
                            <label className="filter-form__label filter-form__label--search visually-hidden" htmlFor="search">Поиск</label>
                            <input className="filter-form__input filter-form__input--search" type="text" id="search" name="search" placeholder="Поиск"/>
                        </li>
                        <li className="participants-form__item participants-form__item--admin filter-form__item">
                            <label className="filter-form__label" htmlFor="group">Группа</label>
                            <select className="filter-form__input" name="group" id="group">
                                <option className="filter-form__program-option" value="Администрирование">Администрирование</option>
                                <option className="filter-form__program-option" value="Администрирование">Администрирование</option>
                                <option className="filter-form__program-option" value="Администрирование">Администрирование</option>
                            </select>
                        </li>
                        <li className="participants-form__item filter-form__item">
                            <label className="filter-form__label" htmlFor="position">Должность</label>
                            <select className="filter-form__input" name="position" id="position">
                                <option className="filter-form__program-option" value="manger">Менеджер по персон...</option>
                                <option className="filter-form__program-option" value="manger">Менеджер по персон...</option>
                                <option className="filter-form__program-option" value="manger">Менеджер по персон...</option>
                            </select>
                        </li>
                        <li className="participants-form__item participants-form__item--exp filter-form__item">
                            <label className="filter-form__label" htmlFor="status">Стаж</label>
                            <select className="filter-form__input" name="exp" id="exp">
                                <option className="filter-form__program-option" value="not">3 – 10 лет</option>
                                <option className="filter-form__program-option" value="med">3 – 10 лет</option>
                                <option className="filter-form__program-option" value="pro">3 – 10 лет</option>
                            </select>
                        </li>
                    </ul>
                    <div className="filter-form__info-container filter-form__info-container--modal">
                        <p className="filter-form__filter-result">42 пользователя</p>
                        <button className="filter-form__set-btn">Настроить</button>
                        <button className="filter-form__reset-btn" type="reset">Сбросить</button>
                    </div>
                    <AvailableParticipants/>
                </div>
                <div className="participants-form__event-participants">
                    <h3 className="participants-form__title">Участники мероприятия</h3>
                    <div className="event-participants event-participants--empty">
                        <p className="event-participants__empty-text">Наполните группу, перетаскивая участников из списка доступных в левой колонке</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ParticipantsForm;
