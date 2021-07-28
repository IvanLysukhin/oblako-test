import "../../style/modal-form.sass"
import "../../style/participants-form.sass"
import "../../style/event-input.sass"
import "../../style/event-participants.sass"
import MainForm from "../main-form/main-form";
import {useState} from "react";
import ParticipantsForm from "../participants-form/participants-form";

function ModalForm({onCloseBtnHandler}) {

    const [state, setState] = useState(true);

    const onParticipantsBtnClick = (evt) => {
        evt.preventDefault()
        setState(false);
    }

    const onMainBtnClick = (evt) => {
        evt.preventDefault()
        setState(true);
    }

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
                        <button
                            className="modal-form__btn modal-form__btn--close"
                            onClick={onCloseBtnHandler}
                        >
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
                            <a
                                className={`modal-form__nav-link ${state ? 'modal-form__nav-link--current' : ''}`}
                                href="#"
                                onClick={onMainBtnClick}
                            >Основное
                            </a>
                        </li>
                        <li className="modal-form__nav-item">
                            <a
                                className={`modal-form__nav-link ${!state ? 'modal-form__nav-link--current' : ''}`}
                                href="#"
                                onClick={onParticipantsBtnClick}
                            >
                                Участники
                            </a>
                        </li>
                    </ul>
                </nav>
                {state ? <MainForm/> : <ParticipantsForm/>}
            </div>
        </section>
    );
}

export default ModalForm;
