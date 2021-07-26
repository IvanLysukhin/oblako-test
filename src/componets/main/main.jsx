import Nav from "../nav/nav";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import ProgramsTypes from "../programs-types/programs-types";
import Form from "../form/from";
import Programs from "../programs/programs";
import "../../style/title.sass"



function App() {
    return (
        <div className="app-container">
            <header className="header-container">
                <Nav/>
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
        </div>
    );
}

export default App;
