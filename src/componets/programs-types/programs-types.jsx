import "../../style/programs-types.sass"

function ProgramsTypes() {
    return (
        <section className="programs-types">
            <ul className="programs-types__list">
                <li className="programs-types__item">
                    <a className="programs-types__link programs-types__link--current" href="#">Групповое</a>
                </li>
                <li className="programs-types__item">
                    <a className="programs-types__link" href="#">Индивидуальное</a>
                </li>
            </ul>
        </section>
    );
}

export default ProgramsTypes;
