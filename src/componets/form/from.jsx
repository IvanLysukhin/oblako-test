import "../../style/from.sass"

function Form() {
    return (
        <form className="filter-form" action="#">
            <ul className="filter-form__list">
                <li className="filter-form__item filter-form__item--search">
                    <label className="filter-form__label filter-form__label--search visually-hidden" htmlFor="search">Поиск</label>
                    <input className="filter-form__input filter-form__input--search" type="text" id="search" name="search" placeholder="Поиск"/>
                </li>
                <li className="filter-form__item filter-form__item--sort">
                    <label className="filter-form__label filter-form__label--sort" htmlFor="sort">Сортировка</label>
                    <select className="filter-form__input filter-form__input--sort" name="sort" id="sort">
                        <option value="По прогрессу обучения">По прогрессу обучения</option>
                        <option value="По прогрессу обучения">По прогрессу обучения</option>
                        <option value="По прогрессу обучения">По прогрессу обучения</option>
                    </select>
                </li>
                <li className="filter-form__item">
                    <label className="filter-form__label" htmlFor="program">Программа</label>
                    <select className="filter-form__input" name="program" id="program">
                        <option className="filter-form__program-option" value="All">Все</option>
                        <option className="filter-form__program-option" value="Not">Все</option>
                        <option className="filter-form__program-option" value="Random">Все</option>
                    </select>
                </li>
                <li className="filter-form__item">
                    <label className="filter-form__label" htmlFor="date">Период</label>
                    <select className="filter-form__input" name="date" id="date">
                        <option className="filter-form__program-option" value="June">Июнь 2019</option>
                        <option className="filter-form__program-option" value="June">Июнь 2019</option>
                        <option className="filter-form__program-option" value="June">Июнь 2019</option>
                    </select>
                </li>
                <li className="filter-form__item">
                    <label className="filter-form__label" htmlFor="status">Статус</label>
                    <select className="filter-form__input" name="status" id="status">
                        <option className="filter-form__program-option" value="June">Все</option>
                        <option className="filter-form__program-option" value="June">Все</option>
                        <option className="filter-form__program-option" value="June">Все</option>
                    </select>
                </li>
            </ul>
            <div className="filter-form__info-container">
                <p className="filter-form__filter-result">34 сессии</p>
                <button className="filter-form__set-btn">Настроить фильтр</button>
                <button className="filter-form__reset-btn" type="reset">Сбросить</button>
            </div>
        </form>
    );
}

export default Form;
