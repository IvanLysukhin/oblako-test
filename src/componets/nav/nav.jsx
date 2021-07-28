import "../../style/nav.sass"

function Nav({onBtnClickHandler}) {
    return (
        <nav className="main-nav">
            <button className="main-nav__button main-nav__button--menu">Burger menu</button>
            <p className="main-nav__text">Обучение</p>
            <button
                className="main-nav__button main-nav__button--add"
                onClick={onBtnClickHandler}
            >Запланировать</button>
        </nav>
    );
}

export default Nav;
