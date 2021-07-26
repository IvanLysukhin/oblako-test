import "../../style/nav.sass"

function Nav() {
    return (
        <nav className="main-nav">
            <button className="main-nav__button main-nav__button--menu">Burger menu</button>
            <p className="main-nav__text">Обучение</p>
            <button className="main-nav__button main-nav__button--add">Запланировать</button>
        </nav>
    );
}

export default Nav;
