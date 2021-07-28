import Card from "../card/card";
import "../../style/programs.sass"

function Programs() {
    return (
        <section className="programs">
            <div className="programs__titles-container">
                <ul className="programs__titles-list">
                    <li className="programs__titles-item">
                        <p className="programs__title">Дата начала</p>
                    </li>
                    <li className="programs__titles-item programs__titles-item--name">
                        <p className="programs__title">Название</p>
                    </li>
                    <li className="programs__titles-item programs__titles-item--right">
                        <p className="programs__title">Уч.</p>
                    </li>
                    <li className="programs__titles-item programs__titles-item--train">
                        <p className="programs__title">Тренер</p>
                    </li>
                    <li className="programs__titles-item programs__titles-item--right">
                        <p className="programs__title">Прогресс</p>
                    </li>
                </ul>
            </div>
            <ul className="programs__list">
                {new Array(4).fill('').map((_, id) => <Card key={id} id={id}/>)}
            </ul>
        </section>
    );
}

export default Programs;
