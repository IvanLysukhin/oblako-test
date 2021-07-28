import Nav from "../nav/nav";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import ProgramsTypes from "../programs-types/programs-types";
import Form from "../form/from";
import Programs from "../programs/programs";
import "../../style/title.sass"
import ModalForm from "../modal-form/modal-form";
import {useState} from "react";


function App() {
    const [modalStatus, setModalStatus] = useState(false);

    const clickHandler = () => {
        setModalStatus(true);
    }

    const closeHandler = () => {
        setModalStatus(false);
    };

    return (
        <div className="app-container"
             on
        >
            <header className="header-container">
                <Nav onBtnClickHandler={clickHandler}/>
            </header>
            <main className="main-container">
                <Breadcrumbs/>
                <h1 className="title">Планирование</h1>
                <ProgramsTypes/>
                <section className="form-container">
                    <Form/>
                </section>
                <Programs/>
            </main>
            {modalStatus ? <ModalForm onCloseBtnHandler={closeHandler}/> : ''}
        </div>
    );
}

export default App;
