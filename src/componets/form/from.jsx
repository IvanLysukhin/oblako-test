import "../../style/from.sass"

function Form() {
    return (
        <form className="filter-form" action="#">
            <ul className="filter-form__list">
                <li className="filter-form__item filter-form__item--search">
                    <label className="filter-form__label visually-hidden" htmlFor="search">Поиск</label>
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
                    <input className="filter-form__input" type="text" id="program" name="program"/>
                </li>
                <li className="filter-form__item">
                    <label className="filter-form__label" htmlFor="period">Период</label>
                    <input className="filter-form__input" type="text" id="period" name="period"/>
                </li>
                <li className="filter-form__item">
                    <label className="filter-form__label" htmlFor="status">Статус</label>
                    <input className="filter-form__input" type="text" id="status" name="status"/>
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
