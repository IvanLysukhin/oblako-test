import "../../style/breadcrumbs.sass"

function Breadcrumbs() {
    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="#">
                        Главная
                    </a>
                </li>
                <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="#">Планирование</a>
                </li>
            </ul>
        </div>
    );
}

export default Breadcrumbs;
